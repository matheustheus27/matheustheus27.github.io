import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';

export type ToastType = 'info' | 'success' | 'coming-soon' | 'warning';

export interface IToastOptions {
  title: string;
  message: string;
  type?: ToastType;
  duration?: number;
}

interface ToastContextProps {
  showToast: (options: IToastOptions) => void;
  showComingSoonToast: (projectName?: string) => void;
}

interface IToastState extends IToastOptions {
  id: string;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<IToastState[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    ({ title, message, type = 'info', duration = 4500 }: IToastOptions) => {
      const id = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      const newToast: IToastState = { id, title, message, type, duration };

      setToasts((prev) => [...prev.slice(-2), newToast]); // max 3 active toasts

      setTimeout(() => {
        removeToast(id);
      }, duration);
    },
    [removeToast]
  );

  const showComingSoonToast = useCallback(
    (projectName?: string) => {
      showToast({
        type: 'coming-soon',
        title: '🌌 Módulo em Testes de Engenharia',
        message: projectName
          ? `O módulo ${projectName} está passando por validação rigorosa de carga e testes de engenharia. Em breve a órbita pública será liberada!`
          : 'Este módulo está passando por testes de engenharia e validação arquitetural. Em breve a órbita pública será liberada!',
        duration: 5500,
      });
    },
    [showToast]
  );

  const renderToastIcon = (type: ToastType) => {
    switch (type) {
      case 'coming-soon':
        return <Sparkles className="w-5 h-5 text-cyan-300 animate-pulse shrink-0" />;
      case 'success':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />;
      case 'info':
      default:
        return <Info className="w-5 h-5 text-indigo-400 shrink-0" />;
    }
  };

  const renderBorderGlow = (type: ToastType) => {
    switch (type) {
      case 'coming-soon':
        return 'border-cyan-500/50 shadow-[0_0_25px_rgba(0,240,255,0.3)] bg-slate-950/90';
      case 'success':
        return 'border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.25)] bg-slate-950/90';
      case 'warning':
        return 'border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.25)] bg-slate-950/90';
      case 'info':
      default:
        return 'border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.25)] bg-slate-950/90';
    }
  };

  return (
    <ToastContext.Provider value={{ showToast, showComingSoonToast }}>
      {children}

      {/* Floating Cosmic Toast Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full px-4 sm:px-0 pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 25, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`p-4 rounded-2xl border backdrop-blur-2xl pointer-events-auto relative overflow-hidden ${renderBorderGlow(
                toast.type || 'info'
              )}`}
            >
              {/* Depleting progress line at top of toast */}
              <motion.div
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: (toast.duration || 4500) / 1000, ease: 'linear' }}
                className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 shadow-[0_0_8px_#00f0ff]"
              />

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-slate-900/80 border border-white/10 shrink-0">
                  {renderToastIcon(toast.type || 'info')}
                </div>

                <div className="flex-1 min-w-0 pr-2">
                  <h4 className="text-xs font-mono font-bold text-white tracking-wide mb-1">
                    {toast.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {toast.message}
                  </p>
                </div>

                <button
                  onClick={() => removeToast(toast.id)}
                  className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-slate-800/50 cursor-pointer shrink-0"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
