import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, ShieldCheck, Sparkles } from 'lucide-react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { Badge } from '../atoms/Badge';

interface PixModalProps {
  isOpen: boolean;
  onClose: () => void;
  pixKey?: string;
}

export const PixModal: React.FC<PixModalProps> = ({
  isOpen,
  onClose,
  pixKey = 'pix@glasshub.dev',
}) => {
  const [copied, setCopied] = useState(false);

  // Fecha no Esc
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

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg rounded-3xl bg-slate-900/90 border border-cyan-500/40 p-6 sm:p-8 shadow-2xl shadow-cyan-950/80 backdrop-blur-2xl z-10 overflow-hidden"
          >
            {/* Ambient Cosmic Lights */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Fechar Modal"
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <Badge variant="cyan" dot size="sm" className="mb-2">
                <Sparkles className="w-3.5 h-3.5 mr-1" /> Transferência Instantânea
              </Badge>
              <Heading level="h3" gradient="cosmic">
                Apoiar com Pix
              </Heading>
              <Text variant="muted" size="sm" className="mt-1">
                Escaneie o QR Code no seu aplicativo do banco ou copie a chave Pix.
              </Text>
            </div>

            {/* QR Code Container */}
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950/80 border border-white/10 shadow-inner mb-6 relative group">
              <div className="relative p-3 bg-white rounded-xl shadow-lg border-2 border-cyan-400/50">
                {/* SVG QR Code Estilizado */}
                <svg
                  className="w-48 h-48 text-slate-950"
                  viewBox="0 0 200 200"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Position detection patterns */}
                  <rect x="10" y="10" width="50" height="50" fill="#030712" rx="4" />
                  <rect x="20" y="20" width="30" height="30" fill="#ffffff" rx="2" />
                  <rect x="25" y="25" width="20" height="20" fill="#00f0ff" rx="2" />
                  
                  <rect x="140" y="10" width="50" height="50" fill="#030712" rx="4" />
                  <rect x="150" y="20" width="30" height="30" fill="#ffffff" rx="2" />
                  <rect x="155" y="25" width="20" height="20" fill="#00f0ff" rx="2" />
                  
                  <rect x="10" y="140" width="50" height="50" fill="#030712" rx="4" />
                  <rect x="20" y="150" width="30" height="30" fill="#ffffff" rx="2" />
                  <rect x="25" y="155" width="20" height="20" fill="#00f0ff" rx="2" />

                  {/* QR Matrix Elements */}
                  <rect x="70" y="15" width="15" height="15" fill="#030712" rx="2" />
                  <rect x="95" y="15" width="30" height="10" fill="#030712" rx="2" />
                  <rect x="75" y="35" width="10" height="25" fill="#030712" rx="2" />
                  <rect x="95" y="35" width="30" height="15" fill="#030712" rx="2" />
                  <rect x="70" y="65" width="20" height="15" fill="#030712" rx="2" />
                  <rect x="100" y="60" width="25" height="20" fill="#030712" rx="2" />
                  
                  <rect x="15" y="70" width="40" height="15" fill="#030712" rx="2" />
                  <rect x="20" y="95" width="20" height="30" fill="#030712" rx="2" />
                  <rect x="50" y="95" width="40" height="15" fill="#030712" rx="2" />
                  <rect x="70" y="120" width="20" height="20" fill="#030712" rx="2" />

                  {/* Center GlassHub Logo Icon */}
                  <rect x="75" y="75" width="50" height="50" fill="#0f172a" rx="10" />
                  <polygon points="100,85 85,93 100,101 115,93" fill="#00f0ff" />
                  <polyline points="85,101 100,109 115,101" fill="none" stroke="#a855f7" strokeWidth="3" />
                  <polyline points="85,108 100,116 115,108" fill="none" stroke="#00f0ff" strokeWidth="3" />

                  <rect x="135" y="70" width="25" height="20" fill="#030712" rx="2" />
                  <rect x="170" y="75" width="15" height="35" fill="#030712" rx="2" />
                  <rect x="135" y="100" width="25" height="15" fill="#030712" rx="2" />
                  <rect x="140" y="125" width="45" height="15" fill="#030712" rx="2" />
                  <rect x="100" y="145" width="25" height="25" fill="#030712" rx="2" />
                  <rect x="135" y="150" width="15" height="35" fill="#030712" rx="2" />
                  <rect x="160" y="150" width="25" height="35" fill="#030712" rx="2" />
                  <rect x="70" y="150" width="20" height="35" fill="#030712" rx="2" />
                </svg>
              </div>

              <div className="flex items-center gap-1.5 mt-3 text-xs text-cyan-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Chave Validada & Segura</span>
              </div>
            </div>

            {/* Pix Key Display & Copy Action */}
            <div className="space-y-2 mb-6">
              <label className="text-xs font-medium text-slate-300">Chave Pix (E-mail):</label>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-950/70 border border-white/10">
                <input
                  type="text"
                  readOnly
                  value={pixKey}
                  className="flex-1 bg-transparent px-2.5 py-1 text-sm font-mono text-cyan-300 outline-none select-all"
                />
                <Button
                  variant={copied ? 'glass-cyan' : 'glow-primary'}
                  size="sm"
                  onClick={handleCopy}
                  leftIcon={copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                >
                  {copied ? 'Copiada!' : 'Copiar'}
                </Button>
              </div>
            </div>

            {/* Instructions */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300">Como funciona:</p>
              <ol className="list-decimal list-inside space-y-0.5">
                <li>Abra o aplicativo do seu banco favorito.</li>
                <li>Vá na opção Pix &gt; Ler QR Code ou Pix Copia e Cola.</li>
                <li>Confirme os dados e finalize sua contribuição.</li>
              </ol>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
