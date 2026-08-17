import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { IGlassCardProps, GlassCardVariant } from '../../types';

interface ExtendedGlassCardProps extends IGlassCardProps {
  motionProps?: MotionProps;
  glowColor?: 'cyan' | 'violet' | 'dual' | 'none';
}

const blurStyles: Record<NonNullable<IGlassCardProps['blur']>, string> = {
  none: '',
  sm: 'backdrop-blur-sm',
  md: 'backdrop-blur-md',
  lg: 'backdrop-blur-xl',
  heavy: 'backdrop-blur-2xl',
};

const variantStyles: Record<GlassCardVariant, string> = {
  default:
    'bg-slate-950/40 border border-white/10 shadow-glass-sm text-slate-100',
  glow:
    'bg-slate-900/50 border border-cyan-500/30 shadow-glow-cyan text-slate-100',
  interactive:
    'bg-slate-950/40 hover:bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 shadow-glass-sm hover:shadow-glow-cyan transition-all duration-300',
  highlight:
    'bg-gradient-to-b from-slate-900/70 to-slate-950/90 border border-cyan-400/40 shadow-glow-dual',
  bordered:
    'bg-slate-950/30 border-2 border-white/15 hover:border-purple-400/40 transition-colors duration-300',
  cosmic:
    'bg-gradient-to-br from-slate-900/60 via-purple-950/20 to-slate-950/80 border border-purple-500/30 shadow-glow-violet',
};

const glowColorStyles: Record<NonNullable<ExtendedGlassCardProps['glowColor']>, string> = {
  none: '',
  cyan: 'hover:shadow-glow-cyan hover:border-cyan-400/50',
  violet: 'hover:shadow-glow-violet hover:border-purple-400/50',
  dual: 'hover:shadow-glow-dual hover:border-cyan-300/50',
};

export const GlassCard: React.FC<ExtendedGlassCardProps> = ({
  children,
  className = '',
  variant = 'default',
  blur = 'lg',
  onClick,
  hoverEffect = false,
  as = 'div',
  href,
  target,
  rel,
  glowColor = 'none',
  motionProps,
}) => {
  const combinedClasses = `
    relative rounded-2xl overflow-hidden
    ${variantStyles[variant]}
    ${blurStyles[blur]}
    ${glowColorStyles[glowColor]}
    ${hoverEffect ? 'transition-transform duration-300 hover:-translate-y-1' : ''}
    ${className}
  `.trim();

  // Se for um link
  if (as === 'a' && href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        onClick={onClick}
        className={`block ${combinedClasses}`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
        {children}
      </a>
    );
  }

  if (motionProps) {
    return (
      <motion.div
        className={combinedClasses}
        onClick={onClick}
        {...motionProps}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
        {children}
      </motion.div>
    );
  }

  const Tag = as as React.ElementType;

  return (
    <Tag className={combinedClasses} onClick={onClick}>
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
      {children}
    </Tag>
  );
};
