import { useState, useRef, useEffect } from 'react';
import svgPaths from '@/imports/svg-3dkfh9akxg';

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  allowClear?: boolean;
}

export function SelectField({ label, value, onChange, options, placeholder = 'Selecione', allowClear = false }: SelectFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);
  const displayText = selectedOption ? selectedOption.label : placeholder;

  const handleFieldClick = () => {
    // Se allowClear está ativo e já tem valor, limpar ao invés de abrir
    if (allowClear && value) {
      onChange('');
      setIsOpen(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" ref={containerRef}>
      <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
        {label}
      </p>
      
      {/* Select Field */}
      <div className="relative w-full">
        <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
          <div 
            className="bg-[#f0f2f4] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full cursor-pointer"
            onClick={handleFieldClick}
          >
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[10px] items-center pb-[7px] pt-[8px] px-[16px] relative w-full">
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                  <p className={`flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[16px] tracking-[0.08px] ${value ? 'text-[#111214]' : 'text-[#6c7077]'}`}>
                    {displayText}
                  </p>
                </div>
                <div className="relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPaths.pae4800} fill="#888D95" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute bg-[#fefefe] overflow-clip p-[4px] shadow-[0px_10px_16px_0px_rgba(24,24,27,0.06),0px_3px_6px_0px_rgba(24,24,27,0.06),0px_0px_1px_0px_rgba(24,24,27,0.04)] top-[calc(100%+4px)] w-full z-50 max-h-[240px] rounded-[4px]">
            <div className="flex flex-col w-full overflow-y-auto">
              {options.map((option, index) => (
                <div key={option.value} className="w-full">
                  <div
                    className="bg-[#fefefe] min-h-[48px] w-full hover:bg-[#f0f2f4] transition-colors cursor-pointer px-[16px] py-[10px] flex items-center"
                    onClick={() => {
                      onChange(option.value);
                      setIsOpen(false);
                    }}
                  >
                    <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[16px] leading-[1.125] tracking-[0.08px]">
                      {option.label}
                    </p>
                  </div>
                  {index < options.length - 1 && (
                    <div className="bg-[#E5E7EB] h-px w-full" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}