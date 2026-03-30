import { useState, useRef, useEffect, useMemo } from 'react';
import svgPaths from '@/imports/svg-3dkfh9akxg';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

interface SelectFieldFormProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  options: { value: string; label: string }[];
  placeholder?: string;
  rules?: any;
  errorMessage?: string;
  searchable?: boolean;
}

export function SelectFieldForm<T extends FieldValues>({
  label,
  name,
  control,
  options,
  placeholder = 'Selecione',
  rules,
  errorMessage,
  searchable = true,
}: SelectFieldFormProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <SelectFieldInner
          label={label}
          value={value || ''}
          onChange={onChange}
          options={options}
          placeholder={placeholder}
          errorMessage={errorMessage}
          searchable={searchable}
        />
      )}
    />
  );
}

interface SelectFieldInnerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  errorMessage?: string;
  searchable?: boolean;
}

function normalizeText(text: string) {
  return text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function SelectFieldInner({
  label,
  value,
  onChange,
  options,
  placeholder = 'Selecione',
  errorMessage,
  searchable = true,
}: SelectFieldInnerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    if (!isOpen) {
      setSearchTerm(selectedOption?.label || '');
    }
  }, [selectedOption, isOpen]);

  useEffect(() => {
    if (isOpen && searchable && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isOpen, searchable]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredOptions = useMemo(() => {
    if (!searchable) return options;

    const normalized = normalizeText(searchTerm.trim());
    if (!normalized) return options;

    return options.filter((option) => normalizeText(option.label).includes(normalized));
  }, [options, searchTerm, searchable]);

  const displayText = selectedOption ? selectedOption.label : placeholder;

  const handleArrowClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (isOpen) {
      setIsOpen(false);
      return;
    }
    setSearchTerm('');
    setIsOpen(true);
  };

  const handleInputClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (!isOpen) {
      setSearchTerm('');
    }
    setIsOpen(true);
  };

  const handleInputFocus = () => {
    if (!isOpen) {
      setSearchTerm('');
    }
    setIsOpen(true);
  };

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" ref={containerRef}>
      {label && (
        <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
          {label}
        </p>
      )}

      <div className="relative w-full">
        <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
          <div
            className="bg-[#f0f2f4] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full"
            onClick={!searchable ? () => setIsOpen((prev) => !prev) : undefined}
          >
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[10px] items-center pb-[7px] pt-[8px] px-[16px] relative w-full">
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                  {searchable ? (
                    <input
                      ref={inputRef}
                      type="text"
                      value={isOpen ? searchTerm : displayText}
                      placeholder={placeholder}
                      className="flex-[1_0_0] bg-transparent font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[16px] tracking-[0.08px] outline-none placeholder:text-[#6c7077] text-[#111214]"
                      onClick={handleInputClick}
                      onFocus={handleInputFocus}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setIsOpen(true);
                      }}
                    />
                  ) : (
                    <p className={`flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[16px] tracking-[0.08px] ${value ? 'text-[#111214]' : 'text-[#6c7077]'}`}>
                      {displayText}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  className="relative shrink-0 size-[24px]"
                  onClick={handleArrowClick}
                >
                  <svg className={`block size-full transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPaths.pae4800} fill="#888D95" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
        </div>

        {isOpen && (
          <div className="absolute bg-[#fefefe] overflow-clip p-[4px] shadow-[0px_10px_16px_0px_rgba(24,24,27,0.06),0px_3px_6px_0px_rgba(24,24,27,0.06),0px_0px_1px_0px_rgba(24,24,27,0.04)] top-[calc(100%+4px)] w-full z-50 max-h-[240px] rounded-[4px]">
            <div className="flex flex-col w-full overflow-y-auto max-h-[232px]">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <div key={option.value} className="w-full">
                    <div
                      className="bg-[#fefefe] min-h-[48px] w-full hover:bg-[#f0f2f4] transition-colors cursor-pointer px-[16px] py-[10px] flex items-center"
                      onClick={() => {
                        onChange(option.value);
                        setSearchTerm(option.label);
                        setIsOpen(false);
                      }}
                    >
                      <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[16px] leading-[1.125] tracking-[0.08px]">
                        {option.label}
                      </p>
                    </div>
                    {index < filteredOptions.length - 1 && (
                      <div className="bg-[#E5E7EB] h-px w-full" />
                    )}
                  </div>
                ))
              ) : (
                <div className="px-[16px] py-[12px]">
                  <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[14px] leading-[1.125]">
                    Nenhuma opção encontrada
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {errorMessage && (
        <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#e3111f] text-[12px] leading-[1.125]">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
