import React from 'react';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingGradient = 'none' | 'cosmic' | 'cyan' | 'violet' | 'white';

interface HeadingProps {
  level?: HeadingLevel;
  gradient?: HeadingGradient;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const levelStyles: Record<HeadingLevel, string> = {
  h1: 'text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display',
  h2: 'text-2xl sm:text-4xl font-bold tracking-tight font-display',
  h3: 'text-xl sm:text-2xl font-bold tracking-normal font-display',
  h4: 'text-lg sm:text-xl font-semibold',
  h5: 'text-base sm:text-lg font-semibold',
  h6: 'text-sm sm:text-base font-semibold uppercase tracking-wider',
};

const gradientStyles: Record<HeadingGradient, string> = {
  none: 'text-slate-100',
  white: 'text-white',
  cosmic:
    'bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent drop-shadow-sm',
  cyan:
    'bg-gradient-to-r from-sky-100 via-cyan-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm',
  violet:
    'bg-gradient-to-r from-fuchsia-100 via-purple-300 to-purple-400 bg-clip-text text-transparent drop-shadow-sm',
};

export const Heading: React.FC<HeadingProps> = ({
  level = 'h2',
  gradient = 'none',
  children,
  className = '',
  id,
}) => {
  const Tag = level;
  return (
    <Tag
      id={id}
      className={`${levelStyles[level]} ${gradientStyles[gradient]} ${className}`}
    >
      {children}
    </Tag>
  );
};
