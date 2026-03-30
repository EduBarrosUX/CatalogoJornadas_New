import { useState } from 'react';
import { X } from 'lucide-react';

interface ModalMaisFiltrosProps {
  isOpen: boolean;
  onClose: () => void;
  onAplicar: (filtros: { diretoria: string; canal: string }) => void;
  diretoriaInicial?: string;
  canalInicial?: string;
}

export function ModalMaisFiltros({ 
  isOpen, 
  onClose, 
  onAplicar, 
  diretoriaInicial = '', 
  canalInicial = '' 
}: ModalMaisFiltrosProps) {
  const [diretoria, setDiretoria] = useState(diretoriaInicial);
  const [canal, setCanal] = useState(canalInicial);

  if (!isOpen) return null;

  const handleAplicar = () => {
    onAplicar({ diretoria, canal });
    onClose();
  };

  const handleLimpar = () => {
    setDiretoria('');
    setCanal('');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-[20px] w-full max-w-[600px] shadow-[0px_10px_25px_0px_rgba(0,0,0,0.2)]">
        {/* Header */}
        <div className="flex items-center justify-between px-[32px] py-[24px] border-b border-[#e0e0e0]">
          <h2 className="font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-[#2c3fbf] text-[20px] leading-[28px]">
            Mais Filtros
          </h2>
          <button
            onClick={onClose}
            className="text-[#686c73] hover:text-[#111214] transition-colors"
          >
            <X className="size-[24px]" />
          </button>
        </div>

        {/* Body */}
        <div className="px-[32px] py-[24px] space-y-[20px]">
          {/* Diretoria */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[14px] tracking-[0.07px] leading-[1.125]">
              Diretoria
            </label>
            <div className="bg-[#f0f2f4] rounded-tl-[4px] rounded-tr-[4px] relative">
              <select
                value={diretoria}
                onChange={(e) => setDiretoria(e.target.value)}
                className="w-full px-[12px] py-[8px] bg-transparent font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[16px] tracking-[0.08px] leading-[1.25] border-none outline-none appearance-none cursor-pointer"
              >
                <option value="">Selecionar</option>
                <option value="Diretoria de Negócios">Diretoria de Negócios</option>
                <option value="Diretoria de Varejo">Diretoria de Varejo</option>
                <option value="Diretoria de Atacado">Diretoria de Atacado</option>
                <option value="Diretoria de Tecnologia">Diretoria de Tecnologia</option>
                <option value="Diretoria de Operações">Diretoria de Operações</option>
              </select>
              <div className="bg-[#b4b9c1] h-px w-full" />
            </div>
          </div>

          {/* Canal */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[14px] tracking-[0.07px] leading-[1.125]">
              Canal
            </label>
            <div className="bg-[#f0f2f4] rounded-tl-[4px] rounded-tr-[4px] relative">
              <select
                value={canal}
                onChange={(e) => setCanal(e.target.value)}
                className="w-full px-[12px] py-[8px] bg-transparent font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[16px] tracking-[0.08px] leading-[1.25] border-none outline-none appearance-none cursor-pointer"
              >
                <option value="">Selecionar</option>
                <option value="App">App</option>
                <option value="Internet Banking">Internet Banking</option>
                <option value="Agência">Agência</option>
                <option value="Caixa Eletrônico">Caixa Eletrônico</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Call Center">Call Center</option>
              </select>
              <div className="bg-[#b4b9c1] h-px w-full" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-[12px] px-[32px] py-[24px] border-t border-[#e0e0e0]">
          <button
            onClick={handleLimpar}
            className="px-[24px] py-[12px] bg-white border border-[#d4d8dd] rounded-[4px] font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-[#465eff] text-[14px] tracking-[0.07px] uppercase leading-[1.125] hover:bg-[#f9fafb] transition-colors"
          >
            Limpar
          </button>
          <button
            onClick={handleAplicar}
            className="px-[24px] py-[12px] bg-[#fcfc30] rounded-[4px] font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-[#465eff] text-[14px] tracking-[0.07px] uppercase leading-[1.125] hover:bg-[#e8e82b] transition-colors"
          >
            Aplicar
          </button>
        </div>
      </div>
    </div>
  );
}
