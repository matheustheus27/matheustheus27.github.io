import React, { useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';

interface PixQrCustomProps {
  data: string;
}

// Logo SVG sutil do Pix/GlassHub embutido como Data URL
const PIX_ICON_DATA_URL = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <rect width="100" height="100" rx="22" fill="#030712"/>
  <path d="M50 22 L76 48 L50 74 L24 48 Z" fill="none" stroke="#00f0ff" stroke-width="7" stroke-linejoin="round"/>
  <path d="M50 35 L63 48 L50 61 L37 48 Z" fill="#a855f7"/>
  <circle cx="50" cy="48" r="4" fill="#ffffff"/>
</svg>
`)}`;

export const PixQrCustom: React.FC<PixQrCustomProps> = ({ data }) => {
  const qrRef = useRef<HTMLDivElement | null>(null);
  const qrCodeInstance = useRef<QRCodeStyling | null>(null);

  useEffect(() => {
    if (!qrCodeInstance.current) {
      qrCodeInstance.current = new QRCodeStyling({
        width: 280,
        height: 280,
        type: 'svg',
        data: data,
        image: PIX_ICON_DATA_URL,
        margin: 6,
        qrOptions: {
          typeNumber: 0,
          mode: 'Byte',
          errorCorrectionLevel: 'H',
        },
        imageOptions: {
          hideBackgroundDots: true,
          imageSize: 0.25,
          margin: 6,
          crossOrigin: 'anonymous',
        },
        dotsOptions: {
          type: 'rounded',
          color: '#0f172a',
          gradient: {
            type: 'linear',
            rotation: 45,
            colorStops: [
              { offset: 0, color: '#0369a1' },
              { offset: 1, color: '#312e81' },
            ],
          },
        },
        backgroundOptions: {
          color: '#ffffff',
        },
        cornersSquareOptions: {
          type: 'extra-rounded',
          color: '#0284c7',
        },
        cornersDotOptions: {
          type: 'dot',
          color: '#6366f1',
        },
      });
    } else {
      qrCodeInstance.current.update({
        data: data,
      });
    }

    if (qrRef.current) {
      qrRef.current.innerHTML = '';
      qrCodeInstance.current.append(qrRef.current);
    }
  }, [data]);

  return (
    <div className="relative p-5 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_40px_rgba(56,189,248,0.2)] flex flex-col items-center justify-center">
      {/* Glow cósmico de fundo */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-purple-600/30 rounded-3xl blur-lg -z-10 opacity-70 pointer-events-none" />

      {/* Moldura interna onde o QR Code é renderizado */}
      <div
        className="p-3 bg-white rounded-2xl shadow-inner overflow-hidden flex items-center justify-center"
        ref={qrRef}
      />
    </div>
  );
};
