import svgPaths from '@/imports/svg-qvrf26u9v2';
import { useEffect, useState } from 'react';

interface ToastNotificationProps {
  message: string;
  onClose: () => void;
  duration?: number;
  type?: 'success' | 'error' | 'warning';
}

export function ToastNotification({ message, onClose, duration = 5000, type = 'success' }: ToastNotificationProps) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // Tempo da animação de saída
  };

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return '#efffeb';
      case 'error':
        return '#ffe5e5';
      case 'warning':
        return '#fff8e5';
      default:
        return '#efffeb';
    }
  };

  const getIconColor = () => {
    switch (type) {
      case 'success':
        return '#0C8A00';
      case 'error':
        return '#E3111F';
      case 'warning':
        return '#FFB31A';
      default:
        return '#0C8A00';
    }
  };

  return (
    <div className="fixed bottom-[24px] right-[24px] z-[9999] max-w-[600px]">
      <div 
        className={`content-stretch flex gap-[8px] items-start p-[8px] relative rounded-[4px] shadow-[0px_10px_16px_0px_rgba(24,24,27,0.06),0px_3px_6px_0px_rgba(24,24,27,0.06),0px_0px_1px_0px_rgba(24,24,27,0.04)] ${isClosing ? 'animate-slideOut' : 'animate-slideIn'}`}
        style={{ backgroundColor: getBackgroundColor() }}
      >
        {/* Icon */}
        <div className="relative shrink-0 size-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p259c6a40} fill={getIconColor()} />
          </svg>
        </div>

        {/* Content */}
        <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
            <div className="flex flex-[1_0_0] flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#111214] text-[14px]">
              <p className="leading-[1.125]">{message}</p>
            </div>
          </div>
          
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0 hover:opacity-70 transition-opacity cursor-pointer"
          >
            <div className="relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p23737a00} fill="#313338" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}