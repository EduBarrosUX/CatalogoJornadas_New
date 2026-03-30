import { useState, useEffect } from 'react';
import svgPaths from '@/imports/svg-1gqwodlm8h';

interface ModalPersonalizarFiltrosProps {
  isOpen: boolean;
  onClose: () => void;
  onAplicar: (colunasVisiveis: string[]) => void;
  colunasIniciais?: string[];
}

type ColunaOpcao = 'TIPO' | 'TEMA' | 'STATUS' | 'DIRETORIA' | 'CANAL';

const colunasDisponiveis: ColunaOpcao[] = ['TIPO', 'TEMA', 'STATUS', 'DIRETORIA', 'CANAL'];

export function ModalPersonalizarFiltros({ isOpen, onClose, onAplicar, colunasIniciais = ['TIPO', 'TEMA', 'STATUS'] }: ModalPersonalizarFiltrosProps) {
  const [colunasSelecionadas, setColunasSelecionadas] = useState<string[]>(colunasIniciais);

  useEffect(() => {
    if (isOpen) {
      setColunasSelecionadas(colunasIniciais);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleColuna = (coluna: string) => {
    if (colunasSelecionadas.includes(coluna)) {
      // Desmarcar coluna
      setColunasSelecionadas(colunasSelecionadas.filter(c => c !== coluna));
    } else {
      // Marcar coluna (se não atingiu o limite de 3)
      if (colunasSelecionadas.length < 3) {
        setColunasSelecionadas([...colunasSelecionadas, coluna]);
      }
    }
  };

  const handleAplicar = () => {
    onAplicar(colunasSelecionadas);
    onClose();
  };

  const isColunaSelecionada = (coluna: string) => colunasSelecionadas.includes(coluna);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div 
        className="bg-[#fefefe] content-stretch flex flex-col items-start p-[16px] relative rounded-[4px] shadow-[0px_14px_32px_0px_rgba(24,24,27,0.04),0px_16px_24px_0px_rgba(24,24,27,0.04),0px_4px_8px_0px_rgba(24,24,27,0.06),0px_0px_1px_0px_rgba(24,24,27,0.04)] w-[650px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Space Horizontal */}
        <div className="bg-[#0759ab] h-[16px] opacity-0 shrink-0 w-full" />

        {/* Header */}
        <div className="content-stretch flex gap-[16px] items-start mb-[16px] w-full">
          <p className="flex-[1_0_0] font-['BancoDoBrasil_Titulos:Bold',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#111214] text-[22px]">
            Personalizar Filtros
          </p>
          <button 
            onClick={onClose}
            className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
          >
            <div className="relative shrink-0 size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.pee71800} fill="#888D95" />
              </svg>
            </div>
          </button>
        </div>

        {/* Checkbox Group */}
        <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[16px] relative shrink-0 w-full mb-[16px]">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            {colunasDisponiveis.map((coluna) => {
              const isSelecionada = isColunaSelecionada(coluna);
              const isDisabled = !isSelecionada && colunasSelecionadas.length >= 3;
              
              return (
                <button
                  key={coluna}
                  onClick={() => !isDisabled && toggleColuna(coluna)}
                  disabled={isDisabled}
                  className={`relative rounded-[4px] shrink-0 w-full transition-all ${
                    isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-[#f9fafb]'
                  }`}
                >
                  <div 
                    className={`absolute border border-solid inset-0 pointer-events-none rounded-[4px] ${
                      isSelecionada ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'
                    }`}
                  />
                  <div className="content-stretch flex gap-[8px] items-start px-[16px] py-[12px] relative w-full">
                    <div className="relative shrink-0 size-[24px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <path 
                          d={isSelecionada ? svgPaths.p73e7900 : svgPaths.p12c0c180} 
                          fill={isSelecionada ? '#2D37F5' : '#313338'} 
                        />
                      </svg>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[2px] relative">
                      <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-full text-left">
                        {coluna}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mensagem de limite */}
        {colunasSelecionadas.length >= 3 && (
          <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[14px] mb-[16px]">
            Você pode selecionar no máximo 3 colunas. Desmarque uma coluna para selecionar outra.
          </p>
        )}

        {/* Buttons */}
        <div className="content-stretch flex items-start justify-end relative shrink-0 w-full">
          <button 
            onClick={handleAplicar}
            className="bg-[#fcfc30] hover:bg-[#e8e82b] transition-colors content-stretch flex items-center justify-center min-w-[160px] px-[16px] py-[12px] relative rounded-[4px] shrink-0 cursor-pointer"
          >
            <div className="flex flex-[1_0_0] flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#465eff] text-[14px] text-center tracking-[0.07px] uppercase">
              <p className="leading-[1.125]">APLICAR</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}