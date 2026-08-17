import React from 'react';
import { motion } from 'framer-motion';

interface NavItemProps {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const NavItem: React.FC<NavItemProps> = ({
  label,
  href,
  isActive = false,
  onClick,
  icon,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 rounded-lg flex items-center gap-2 select-none ${
        isActive
          ? 'text-cyan-300'
          : 'text-slate-300 hover:text-white hover:bg-white/5'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && <span className="text-xs opacity-75">{icon}</span>}
      <span>{label}</span>
      {isActive && (
        <motion.div
          layoutId="activeNavIndicator"
          className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 shadow-[0_0_8px_rgba(0,240,255,0.8)] rounded-full"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
    </motion.a>
  );
};
