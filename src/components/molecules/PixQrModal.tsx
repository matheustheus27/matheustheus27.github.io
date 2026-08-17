import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, ShieldCheck, Sparkles, QrCode } from 'lucide-react';
import { GlassModal } from '../atoms/GlassModal';
import { Button } from '../atoms/Button';
import { Badge } from '../atoms/Badge';
import { Text } from '../atoms/Text';
import { PixQrCustom } from './PixQrCustom';
import { useLanguage } from '../../context/LanguageContext';
import { getGlassHubPixPayload, GLASSHUB_PIX_CONFIG } from '../../utils/pix';

interface PixQrModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PixQrModal: React.FC<PixQrModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [copiedPayload, setCopiedPayload] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);
  const pix = t.contributions.pix;

  // Gera o payload oficial do Pix Copia e Cola (padrão EMV / BR Code)
  const emvPayload = useMemo(() => getGlassHubPixPayload(), []);

  const handleCopyPayload = async () => {
    try {
      await navigator.clipboard.writeText(emvPayload);
      setCopiedPayload(true);
      setTimeout(() => setCopiedPayload(false), 3000);
    } catch {
      setCopiedPayload(true);
      setTimeout(() => setCopiedPayload(false), 3000);
    }
  };

  const handleCopyKey = async () => {
    try {
      await navigator.clipboard.writeText(GLASSHUB_PIX_CONFIG.pixKey);
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 3000);
    } catch {
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 3000);
    }
  };

  return (
    <GlassModal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="lg"
      glowColor="cyan"
      badge={
        <Badge variant="cyan" dot size="sm">
          <Sparkles className="w-3.5 h-3.5 mr-1" /> BR Code Oficial • Banco Central
        </Badge>
      }
      title={pix.modalTitle}
      subtitle={pix.modalSubtitle}
    >
      {/* Container do QR Code Estilizado com QRCodeStyling */}
      <div className="flex flex-col items-center justify-center mb-6">
        <PixQrCustom data={emvPayload} />

        <div className="flex items-center gap-1.5 mt-4 text-xs font-mono text-cyan-300 bg-cyan-950/60 px-4 py-1.5 rounded-full border border-cyan-500/40 shadow-glow-cyan">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{pix.securityBadge}</span>
        </div>
      </div>

      {/* Botão de Destaque: Copiar Chave Copia e Cola */}
      <div className="space-y-3 mb-5">
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold text-cyan-200 flex items-center gap-1.5">
            <QrCode className="w-3.5 h-3.5 text-cyan-400" />
            <span>Pix Copia e Cola (Payload EMV Oficial):</span>
          </label>
        </div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="flex items-center gap-2 p-2 rounded-2xl bg-slate-950/80 border border-cyan-400/40 shadow-inner"
        >
          <input
            type="text"
            readOnly
            value={emvPayload}
            className="flex-1 bg-transparent px-3 py-1.5 text-xs font-mono text-cyan-300 outline-none select-all truncate"
          />
          <Button
            variant={copiedPayload ? 'glass-cyan' : 'glow-primary'}
            size="sm"
            onClick={handleCopyPayload}
            leftIcon={
              copiedPayload ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )
            }
            className="shrink-0 font-semibold"
          >
            {copiedPayload ? pix.copiedBtn : pix.copyBtn}
          </Button>
        </motion.div>
      </div>

      {/* Opção de Copiar Apenas a Chave Direta */}
      <div className="space-y-1.5 mb-6">
        <label className="text-[11px] font-medium text-slate-400">{pix.keyLabel}</label>
        <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs">
          <span className="font-mono text-slate-300 pl-1">{GLASSHUB_PIX_CONFIG.pixKey}</span>
          <button
            type="button"
            onClick={handleCopyKey}
            className="text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 px-2.5 py-1 rounded-lg bg-cyan-950/50 border border-cyan-500/30 hover:border-cyan-400/60 transition-colors inline-flex items-center gap-1.5"
          >
            {copiedKey ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedKey ? 'Chave Copiada!' : 'Copiar E-mail'}</span>
          </button>
        </div>
      </div>

      {/* Instruções Passo a Passo */}
      <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-slate-400 space-y-1.5">
        <Text size="xs" variant="highlight" className="font-semibold text-slate-200">
          {pix.howItWorksTitle}
        </Text>
        <ol className="list-decimal list-inside space-y-1 text-slate-300">
          <li>{pix.step1}</li>
          <li>{pix.step2}</li>
          <li>{pix.step3}</li>
        </ol>
      </div>
    </GlassModal>
  );
};
