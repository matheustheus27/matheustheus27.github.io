import React, { useEffect, useRef } from 'react';
import { Heart, ExternalLink } from 'lucide-react';

interface PayPalDonateButtonProps {
  hostedButtonId: string;
  label?: string;
  className?: string;
}

declare global {
  interface Window {
    PayPal?: {
      Donation?: {
        Button: (config: {
          env: string;
          hosted_button_id: string;
          image?: { src?: string; alt?: string; title?: string };
          onComplete?: (params: unknown) => void;
        }) => {
          render: (selector: string | HTMLElement) => void;
        };
      };
    };
  }
}

export const PayPalDonateButton: React.FC<PayPalDonateButtonProps> = ({
  hostedButtonId,
  label = 'Apoiar via PayPal',
  className = '',
}) => {
  const hiddenContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = 'paypal-donate-sdk-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    const initPayPal = () => {
      if (window.PayPal?.Donation?.Button && hiddenContainerRef.current) {
        hiddenContainerRef.current.innerHTML = '';
        window.PayPal.Donation.Button({
          env: 'production',
          hosted_button_id: hostedButtonId,
          image: {
            src: 'https://www.paypalobjects.com/pt_BR/i/btn/btn_donate_LG.gif',
            alt: 'Doe com PayPal',
            title: 'PayPal - Doação Online Segura',
          },
        }).render(hiddenContainerRef.current);
      }
    };

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js';
      script.async = true;
      script.onload = initPayPal;
      document.body.appendChild(script);
    } else {
      initPayPal();
    }
  }, [hostedButtonId]);

  const handleDonateClick = () => {
    const nativeButton = hiddenContainerRef.current?.querySelector(
      'button, a, input[type="image"], [role="button"]'
    ) as HTMLElement | null;

    if (nativeButton) {
      nativeButton.click();
    } else {
      window.open(
        `https://www.paypal.com/donate/?hosted_button_id=${hostedButtonId}`,
        '_blank',
        'noopener,noreferrer'
      );
    }
  };

  return (
    <>
      {/* Container invisível para montar o SDK oficial do PayPal */}
      <div ref={hiddenContainerRef} className="hidden" aria-hidden="true" />

      <button
        type="button"
        onClick={handleDonateClick}
        className={`group relative w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600/30 via-indigo-600/30 to-sky-600/30 hover:from-blue-600/50 hover:via-indigo-600/50 hover:to-sky-600/50 border border-blue-400/30 hover:border-blue-400/60 backdrop-blur-xl text-white font-semibold text-sm shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer select-none ${className}`}
      >
        <span className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-blue-400 fill-blue-400/30 group-hover:scale-110 transition-transform duration-300" />
          <span>{label}</span>
        </span>
        <ExternalLink className="w-3.5 h-3.5 text-white/70 group-hover:text-white transition-colors" />
      </button>
    </>
  );
};
