import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { ButtonVariant, ButtonSize } from '../../types';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  'glow-primary':
    'bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-110 border border-white/20',
  'cosmic-glass':
    'bg-slate-900/60 hover:bg-slate-800/80 text-cyan-300 font-medium backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400/60 shadow-lg shadow-cyan-950/40 hover:shadow-cyan-500/20',
  'outline-subtle':
    'bg-white/5 hover:bg-white/10 text-slate-200 font-medium backdrop-blur-md border border-white/15 hover:border-white/30 hover:text-white',
  'ghost':
    'bg-transparent hover:bg-white/5 text-slate-300 hover:text-white border border-transparent',
  'glass-cyan':
    'bg-cyan-950/40 hover:bg-cyan-900/50 text-cyan-300 font-medium backdrop-blur-lg border border-cyan-500/40 hover:border-cyan-400/80 shadow-md shadow-cyan-950/60',
  'glass-violet':
    'bg-purple-950/40 hover:bg-purple-900/50 text-purple-300 font-medium backdrop-blur-lg border border-purple-500/40 hover:border-purple-400/80 shadow-md shadow-purple-950/60',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs sm:text-sm rounded-lg gap-1.5',
  md: 'px-5 py-2.5 text-sm sm:text-base rounded-xl gap-2',
  lg: 'px-7 py-3.5 text-base sm:text-lg rounded-2xl gap-2.5 font-semibold',
  icon: 'p-2.5 rounded-xl justify-center',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'glow-primary',
  size = 'md',
  leftIcon,
  rightIcon,
  isLoading = false,
  href,
  target,
  rel,
  className = '',
  disabled,
  ...props
}) => {
  const commonClasses = `inline-flex items-center justify-center transition-all duration-300 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none relative overflow-hidden ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        leftIcon && <span className="shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </>
  );

  if (href) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
      if (props.onClick) {
        props.onClick(e as any);
      }
    };

    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        className={commonClasses}
        onClick={handleClick}
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.975 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={commonClasses}
      disabled={disabled || isLoading}
      whileHover={!disabled && !isLoading ? { scale: 1.025 } : undefined}
      whileTap={!disabled && !isLoading ? { scale: 0.975 } : undefined}
      {...props}
    >
      {content}
    </motion.button>
  );
};
