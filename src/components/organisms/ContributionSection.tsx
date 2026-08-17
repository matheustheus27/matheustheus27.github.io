import React, { useState } from 'react';
import { Heart, Shield, Sparkles, Check, QrCode, ExternalLink } from 'lucide-react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';
import { GlassCard } from '../atoms/GlassCard';
import { PixQrModal } from '../molecules/PixQrModal';
import { PayPalDonateButton } from '../molecules/PayPalDonateButton';
import { useLanguage } from '../../context/LanguageContext';

export const ContributionSection: React.FC = () => {
  const { t } = useLanguage();
  const [isPixModalOpen, setIsPixModalOpen] = useState(false);
  const contrib = t.contributions;

  return (
    <section id="contributions" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="cyan" dot size="sm" className="mb-3">
            <Heart className="w-3.5 h-3.5 mr-1 fill-cyan-400/20" /> {contrib.badge}
          </Badge>
          <Heading level="h2" gradient="cosmic">
            {contrib.title}
          </Heading>
          <Text variant="muted" size="lg" className="mt-3">
            {contrib.subtitle}
          </Text>
        </div>

        {/* Purpose Statement Notice */}
        <div className="p-4 sm:p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 backdrop-blur-md max-w-4xl mx-auto mb-12 text-center">
          <Text size="sm" className="text-cyan-200 font-medium">
            💡 {contrib.purposeNotice}
          </Text>
        </div>

        {/* Contribution Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 items-stretch">
          {/* 1. Pix Card */}
          <GlassCard
            variant="highlight"
            className="flex flex-col justify-between h-full p-6 sm:p-8 relative border-cyan-400/50 shadow-glow-cyan overflow-hidden"
          >
            <div>
              {/* Clean Non-Overflowing Header Badge */}
              <div className="flex items-center justify-between gap-2 mb-4 w-full">
                <Badge variant="cyan" dot size="sm" className="font-semibold whitespace-nowrap shadow-sm shadow-cyan-950">
                  <Sparkles className="w-3.5 h-3.5 mr-1 shrink-0" />
                  <span className="truncate">{contrib.pix.badge}</span>
                </Badge>
                <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-500/30 whitespace-nowrap">
                  Sem Taxas
                </span>
              </div>

              <div className="mb-4">
                <Heading level="h3" className="text-white text-xl">
                  {contrib.pix.title}
                </Heading>
                <Text variant="cyan" size="sm" className="mt-1 font-medium">
                  {contrib.pix.subtitle}
                </Text>
              </div>

              <Text variant="muted" size="sm" className="mb-6 leading-relaxed">
                {contrib.pix.description}
              </Text>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-start gap-2.5">
                  <span className="p-0.5 rounded-full bg-cyan-500/20 text-cyan-400 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <Text size="sm" className="text-slate-300">
                    Chave: <span className="font-mono text-cyan-300">matheustheus27@gmail.com</span>
                  </Text>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="p-0.5 rounded-full bg-cyan-500/20 text-cyan-400 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <Text size="sm" className="text-slate-300">
                    QR Code dinâmico com payload BR Code
                  </Text>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="p-0.5 rounded-full bg-cyan-500/20 text-cyan-400 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <Text size="sm" className="text-slate-300">
                    Transferência instantânea em tempo real
                  </Text>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 mt-auto">
              <Button
                variant="glow-primary"
                size="md"
                onClick={() => setIsPixModalOpen(true)}
                leftIcon={<QrCode className="w-4 h-4" />}
                className="w-full justify-center"
              >
                {contrib.pix.btnText}
              </Button>
            </div>
          </GlassCard>

          {/* 2. PayPal Card */}
          <GlassCard
            variant="interactive"
            className="flex flex-col justify-between h-full p-6 sm:p-8 relative border-white/10 hover:border-sky-500/40 overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4 w-full">
                <Badge variant="blue" size="sm" className="whitespace-nowrap">
                  {contrib.paypal.badge}
                </Badge>
                <span className="text-[11px] font-mono text-sky-300 bg-sky-950/60 px-2 py-0.5 rounded-full border border-sky-500/30 whitespace-nowrap">
                  USD • EUR • BRL
                </span>
              </div>

              <div className="mb-4">
                <Heading level="h3" className="text-white text-xl">
                  {contrib.paypal.title}
                </Heading>
                <Text variant="cyan" size="sm" className="mt-1 font-medium">
                  {contrib.paypal.subtitle}
                </Text>
              </div>

              <Text variant="muted" size="sm" className="mb-6 leading-relaxed">
                {contrib.paypal.description}
              </Text>

              <div className="space-y-2.5 mb-8">
                {contrib.paypal.perks.map((perk, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5">
                    <span className="p-0.5 rounded-full bg-sky-500/20 text-sky-400 mt-0.5 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <Text size="sm" className="text-slate-300">
                      {perk}
                    </Text>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 mt-auto">
              <PayPalDonateButton
                hostedButtonId="AD9AKXBJXRMDJ"
                label={contrib.paypal.btnText}
              />
            </div>
          </GlassCard>

          {/* 3. Patreon Card */}
          <GlassCard
            variant="interactive"
            className="flex flex-col justify-between h-full p-6 sm:p-8 relative border-white/10 hover:border-purple-500/40 overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4 w-full">
                <Badge variant="violet" size="sm" className="whitespace-nowrap">
                  {contrib.patreon.badge}
                </Badge>
                <span className="text-[11px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-500/30 whitespace-nowrap">
                  Recorrente
                </span>
              </div>

              <div className="mb-4">
                <Heading level="h3" className="text-white text-xl">
                  {contrib.patreon.title}
                </Heading>
                <Text variant="violet" size="sm" className="mt-1 font-medium">
                  {contrib.patreon.subtitle}
                </Text>
              </div>

              <Text variant="muted" size="sm" className="mb-6 leading-relaxed">
                {contrib.patreon.description}
              </Text>

              <div className="space-y-2.5 mb-8">
                {contrib.patreon.perks.map((perk, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5">
                    <span className="p-0.5 rounded-full bg-purple-500/20 text-purple-400 mt-0.5 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <Text size="sm" className="text-slate-300">
                      {perk}
                    </Text>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 mt-auto">
              <Button
                variant="glass-violet"
                size="md"
                href={contrib.patreon.url}
                target="_blank"
                rightIcon={<ExternalLink className="w-4 h-4" />}
                className="w-full justify-center"
              >
                {contrib.patreon.btnText}
              </Button>
            </div>
          </GlassCard>
        </div>

        {/* Transparency Banner */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-md max-w-4xl mx-auto text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{contrib.transparencyTitle}</div>
              <div className="text-xs text-slate-400">{contrib.transparencyText}</div>
            </div>
          </div>
          <Badge variant="glass" size="md" className="shrink-0 font-mono text-cyan-300">
            {contrib.transparencyBadge}
          </Badge>
        </div>

        {/* Dynamic Pix Modal */}
        <PixQrModal
          isOpen={isPixModalOpen}
          onClose={() => setIsPixModalOpen(false)}
        />
      </div>
    </section>
  );
};
