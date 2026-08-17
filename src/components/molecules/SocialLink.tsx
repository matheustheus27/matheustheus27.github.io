import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, MessageSquare } from 'lucide-react';
import { ISocialLink } from '../../types';
import { GitHubIcon, LinkedInIcon, TwitterIcon, InstagramIcon } from '../atoms/BrandIcons';

interface SocialLinkProps {
  social: ISocialLink;
  className?: string;
  showLabel?: boolean;
}

export const SocialLink: React.FC<SocialLinkProps> = ({
  social,
  className = '',
  showLabel = false,
}) => {
  const getIcon = () => {
    const iconClass = "w-5 h-5 transition-transform duration-300 group-hover:scale-110";
    switch (social.iconName) {
      case 'github':
        return <GitHubIcon className={iconClass} />;
      case 'linkedin':
        return <LinkedInIcon className={iconClass} />;
      case 'twitter':
        return <TwitterIcon className={iconClass} />;
      case 'instagram':
        return <InstagramIcon className={iconClass} />;
      case 'mail':
        return <Mail className={iconClass} />;
      case 'discord':
        return <MessageSquare className={iconClass} />;
      default:
        return <Globe className={iconClass} />;
    }
  };

  return (
    <motion.a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label || social.name}
      title={social.label || social.name}
      className={`group relative inline-flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-white/10 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 backdrop-blur-md shadow-glass-sm hover:shadow-glow-cyan transition-all duration-300 ${className}`}
      whileHover={{ y: -3, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {getIcon()}
      {showLabel && (
        <span className="text-sm font-medium pr-1">{social.name}</span>
      )}
    </motion.a>
  );
};
