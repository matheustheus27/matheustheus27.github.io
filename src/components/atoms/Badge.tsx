import React from 'react';
import { BadgeVariant } from '../../types';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  dot?: boolean;
  size?: 'sm' | 'md';
}

const variantStyles: Record<BadgeVariant, string> = {
  cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:border-cyan-400/50 shadow-sm shadow-cyan-950/50',
  violet: 'bg-purple-500/10 text-purple-300 border-purple-500/30 hover:border-purple-400/50 shadow-sm shadow-purple-950/50',
  blue: 'bg-sky-500/10 text-sky-300 border-sky-500/30 hover:border-sky-400/50 shadow-sm shadow-sky-950/50',
  emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:border-emerald-400/50 shadow-sm shadow-emerald-950/50',
  glass: 'bg-white/5 text-slate-200 border-white/10 hover:border-white/20 backdrop-blur-md',
  outline: 'bg-transparent text-slate-300 border-slate-700 hover:border-slate-500',
  warning: 'bg-amber-500/10 text-amber-300 border-amber-500/30 hover:border-amber-400/50',
};

const dotColors: Record<BadgeVariant, string> = {
  cyan: 'bg-cyan-400',
  violet: 'bg-purple-400',
  blue: 'bg-sky-400',
  emerald: 'bg-emerald-400',
  glass: 'bg-slate-300',
  outline: 'bg-slate-400',
  warning: 'bg-amber-400',
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'glass',
  className = '',
  dot = false,
  size = 'md',
}) => {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-xs sm:text-sm';

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full border transition-colors duration-200 ${variantStyles[variant]} ${sizeClasses} ${className}`}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColors[variant]}`}
          />
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColors[variant]}`} />
        </span>
      )}
      {children}
    </span>
  );
};
