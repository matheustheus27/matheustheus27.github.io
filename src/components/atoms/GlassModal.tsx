import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Heading } from './Heading';
import { Text } from './Text';

interface GlassModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  glowColor?: 'cyan' | 'violet' | 'dual';
  className?: string;
}

const maxWidthStyles = {
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
};

export const GlassModal: React.FC<GlassModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  badge,
  children,
  footer,
  maxWidth = '2xl',
  glowColor = 'cyan',
  className = '',
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fecha no Esc e bloqueia scroll do body
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  const borderGlow =
    glowColor === 'violet'
      ? 'border-purple-500/40 shadow-glow-violet'
      : glowColor === 'dual'
      ? 'border-cyan-400/40 shadow-glow-dual'
      : 'border-cyan-500/40 shadow-glow-cyan';

  const modalRoot = document.getElementById('modal-root') || document.body;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur com z-[9999] */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9999]"
            onClick={onClose}
          />

          {/* Modal Card com z-[10000] */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 25 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 25 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className={`relative w-full ${maxWidthStyles[maxWidth]} rounded-3xl bg-slate-900/95 border ${borderGlow} p-6 sm:p-9 shadow-2xl backdrop-blur-2xl z-[10000] max-h-[90vh] flex flex-col overflow-hidden ${className}`}
          >
            {/* Ambient Nebula Light */}
            <div
              className={`absolute -top-24 -right-24 w-52 h-52 rounded-full blur-3xl pointer-events-none ${
                glowColor === 'violet' ? 'bg-purple-500/20' : 'bg-cyan-500/20'
              }`}
            />
            <div className="absolute -bottom-24 -left-24 w-52 h-52 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Fechar Modal"
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            {(badge || title || subtitle) && (
              <div className="mb-6 relative z-10 shrink-0 pr-10">
                {badge && <div className="mb-2">{badge}</div>}
                {title && (
                  <Heading
                    level="h3"
                    gradient={glowColor === 'violet' ? 'violet' : 'cosmic'}
                    className="text-2xl sm:text-3xl font-bold tracking-tight"
                  >
                    {title}
                  </Heading>
                )}
                {subtitle && (
                  <Text variant="muted" size="sm" className="mt-1">
                    {subtitle}
                  </Text>
                )}
              </div>
            )}

            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto pr-1 space-y-4 relative z-10 custom-scrollbar">
              {children}
            </div>

            {/* Optional Footer */}
            {footer && (
              <div className="pt-4 border-t border-white/10 mt-4 relative z-10 shrink-0">
                {footer}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    modalRoot
  );
};
