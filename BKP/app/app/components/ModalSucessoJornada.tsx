import { useEffect, useState } from 'react';

interface FormData {
  tipoInclusao: 'novo' | 'alteracao' | 'alteracao-trn';
  [key: string]: any;
}

interface ModalSucessoJornadaProps {
  onClose: () => void;
  dadosEnviados: FormData;
}

// Link do Power BI do catálogo
const LINK_POWERBI = 'https://app.powerbi.com/view?r=eyJrIjoiMGVhNmU5YzktYWQ0MS00YmJkLTg4NDgtMWE4YzY4YzY4YzY4IiwidCI6IjY4YzY4YzY4LWM2OC02OC02OC02OC02OC02OC02OC02OCJ9';

export function ModalSucessoJornada({ 
  onClose, 
  dadosEnviados 
}: ModalSucessoJornadaProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleAbrirPowerBI = () => {
    window.open(LINK_POWERBI, '_blank');
    handleClose();
  };

  if (!dadosEnviados) return null;

  const getTitulo = () => {
    if (dadosEnviados.tipoInclusao === 'novo') {
      return 'Jornada incluída com sucesso';
    }
    return 'Alteração enviada com sucesso';
  };

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center transition-all duration-300`}
      style={{ 
        zIndex: 9999,
        backgroundColor: isVisible ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)',
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      onClick={handleBackdropClick}
    >
      <div 
        className={`bg-white content-stretch flex flex-col items-center overflow-clip relative rounded-[20px] shadow-[0px_10px_25px_0px_rgba(0,0,0,0.2)] w-[600px] transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="absolute top-[32px] right-[32px]">
          <button 
            onClick={handleClose}
            className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-70 transition-opacity"
          >
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
              <div className="h-[24px] overflow-clip relative shrink-0 w-full">
                <div className="absolute inset-1/4">
                  <div className="absolute inset-[-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                      <path d="M13 1L1 13" stroke="var(--stroke-0, #686C73)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-1/4">
                  <div className="absolute inset-[-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                      <path d="M1 1L13 13" stroke="var(--stroke-0, #686C73)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Content */}
        <div className="content-stretch flex flex-col items-center gap-[24px] px-[64px] py-[64px] relative w-full">
          {/* Success Icon */}
          <div className="bg-[#e8f5e9] rounded-full size-[80px] flex items-center justify-center">
            <svg className="size-[40px]" fill="none" viewBox="0 0 24 24">
              <path
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke="#0c8a00"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Title */}
          <h3 className="font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-[#2c3fbf] text-[24px] leading-[32px] text-center">
            {getTitulo()}
          </h3>

          {/* Description */}
          <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px] text-center">
            Você pode conferir sua jornada dentro do catálogo de jornadas
          </p>

          {/* Button */}
          <button
            onClick={handleAbrirPowerBI}
            className="bg-[#fcfc30] hover:bg-[#f0f020] px-[32px] h-[45px] rounded-[8px] font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-[#465eff] text-[14px] leading-[21px] uppercase transition-all cursor-pointer"
          >
            Abrir Catálogo de Jornadas
          </button>
        </div>
      </div>
    </div>
  );
}