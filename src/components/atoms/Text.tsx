import React from 'react';

type TextVariant = 'default' | 'muted' | 'subtle' | 'highlight' | 'cyan' | 'violet';
type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';

interface TextProps {
  as?: 'p' | 'span' | 'div' | 'label' | 'strong' | 'em';
  variant?: TextVariant;
  size?: TextSize;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<TextVariant, string> = {
  default: 'text-slate-200',
  muted: 'text-slate-400',
  subtle: 'text-slate-500',
  highlight: 'text-white font-medium',
  cyan: 'text-cyan-300 font-medium',
  violet: 'text-purple-300 font-medium',
};

const sizeStyles: Record<TextSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base leading-relaxed',
  lg: 'text-lg leading-relaxed',
  xl: 'text-xl leading-relaxed',
};

export const Text: React.FC<TextProps> = ({
  as = 'p',
  variant = 'default',
  size = 'base',
  children,
  className = '',
}) => {
  const Tag = as;
  return (
    <Tag className={`${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      {children}
    </Tag>
  );
};
