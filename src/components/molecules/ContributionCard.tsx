import React from 'react';
import { Check, QrCode, ExternalLink, Sparkles } from 'lucide-react';
import { IContributionOption } from '../../types';
import { GlassCard } from '../atoms/GlassCard';
import { Badge } from '../atoms/Badge';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

interface ContributionCardProps {
  option: IContributionOption;
  onOpenPixModal: () => void;
}

export const ContributionCard: React.FC<ContributionCardProps> = ({
  option,
  onOpenPixModal,
}) => {
  const isPix = option.type === 'pix';
  const isRecommended = option.recommended;

  return (
    <GlassCard
      variant={isRecommended ? 'highlight' : 'interactive'}
      className={`flex flex-col h-full p-6 sm:p-8 relative ${
        isRecommended
          ? 'border-cyan-400/50 shadow-glow-cyan'
          : 'border-white/10 hover:border-purple-500/40'
      }`}
    >
      {/* Recommended Ribbon */}
      {isRecommended && (
        <div className="absolute -top-3.5 right-6">
          <Badge variant="cyan" dot size="md" className="shadow-lg shadow-cyan-950 font-semibold">
            <Sparkles className="w-3.5 h-3.5 mr-1" /> Mais Popular
          </Badge>
        </div>
      )}

      {/* Card Header */}
      <div className="mb-4">
        {option.badgeText && (
          <Badge
            variant={isPix ? 'cyan' : option.type === 'patreon' ? 'violet' : 'blue'}
            size="sm"
            className="mb-3"
          >
            {option.badgeText}
          </Badge>
        )}
        <Heading level="h3" className="text-white">
          {option.title}
        </Heading>
        <Text variant="cyan" size="sm" className="mt-1 font-medium">
          {option.subtitle}
        </Text>
      </div>

      {/* Description */}
      <Text variant="muted" size="sm" className="mb-6">
        {option.description}
      </Text>

      {/* Perks List */}
      <div className="space-y-2.5 mb-8 flex-1">
        {option.perks.map((perk, index) => (
          <div key={index} className="flex items-start gap-2.5">
            <span className="p-0.5 rounded-full bg-cyan-500/20 text-cyan-400 mt-0.5 shrink-0">
              <Check className="w-3.5 h-3.5" />
            </span>
            <Text size="sm" variant="default" className="text-slate-300">
              {perk}
            </Text>
          </div>
        ))}
      </div>

      {/* Action CTA */}
      <div className="pt-4 border-t border-white/10 mt-auto">
        {isPix ? (
          <Button
            variant="glow-primary"
            size="md"
            onClick={onOpenPixModal}
            leftIcon={<QrCode className="w-4 h-4" />}
            className="w-full justify-center"
          >
            Pagar com Pix (QR Code)
          </Button>
        ) : (
          <Button
            variant={option.type === 'patreon' ? 'glass-violet' : 'cosmic-glass'}
            size="md"
            href={option.targetUrl}
            target="_blank"
            rightIcon={<ExternalLink className="w-4 h-4" />}
            className="w-full justify-center"
          >
            Apoiar via {option.title}
          </Button>
        )}
      </div>
    </GlassCard>
  );
};
