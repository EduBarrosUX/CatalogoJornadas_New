
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { useEffect, useMemo, useRef, useState } from 'react';
import svgPaths from "@/imports/svg-st0q96v9y6";

interface Passo3FormularioProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  tipoHU?: 'Transação' | 'Ativo' | 'Indução' | 'Informacional';
  contextoInducao?: 'Saudação' | 'Feedback' | 'QR Code / Link' | 'Outro';
}

function normalizeText(text: string) {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function Passo3Formulario({ register, errors, tipoHU, contextoInducao }: Passo3FormularioProps) {
  const canais = ['WhatsApp', 'App BB', 'Outros'];

  const [publicoSelecionado, setPublicoSelecionado] = useState('');
  const [canalSelecionado, setCanalSelecionado] = useState('');
  const [temaOpen, setTemaOpen] = useState(false);
  const [temaTerm, setTemaTerm] = useState('');

  const temaContainerRef = useRef<HTMLDivElement>(null);
  const temaInputRef = useRef<HTMLInputElement>(null);

  const numeroTema = (tipoHU === 'Indução' || tipoHU === 'Informacional') ? '13.' : tipoHU === 'Ativo' ? '13.' : '11.';
  const numeroNomeHash = (tipoHU === 'Indução' || tipoHU === 'Informacional') ? '14.' : tipoHU === 'Ativo' ? '14.' : '12.';
  const numeroHashInicio = (tipoHU === 'Indução' || tipoHU === 'Informacional') ? '15.' : tipoHU === 'Ativo' ? '15.' : '13.';

  const temaOptions = [
    { value: 'Agronegócio', label: 'Agronegócio' },
    { value: 'Atendimento', label: 'Atendimento' },
    { value: 'Benefício BB', label: 'Benefício BB' },
    { value: 'Canais', label: 'Canais' },
    { value: 'Cartão Consórcio', label: 'Cartão Consórcio' },
  ];

  const temaField = register('tema', { required: 'Campo obrigatório' });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (temaContainerRef.current && !temaContainerRef.current.contains(event.target as Node)) {
        setTemaOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (temaOpen && temaInputRef.current) {
      temaInputRef.current.focus();
      temaInputRef.current.select();
    }
  }, [temaOpen]);

  const filteredTemaOptions = useMemo(() => {
    const normalized = normalizeText(temaTerm.trim());
    if (!normalized) return temaOptions;
    return temaOptions.filter((option) => normalizeText(option.label).includes(normalized));
  }, [temaTerm]);

  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start w-full max-w-[692px]">
      {tipoHU === 'Indução' && (
        <>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] text-[#111214] text-[14px] tracking-[0.07px] w-full">
              10. A INDUÇÃO foi incluída em qual contexto: *
            </p>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              {['Saudação', 'Feedback', 'QR Code / Link', 'Outro'].map((opcao) => (
                <label key={opcao} className="relative rounded-[4px] shrink-0 w-full cursor-pointer">
                  <div
                    aria-hidden="true"
                    className={`absolute border ${contextoInducao === opcao ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'} border-solid inset-0 pointer-events-none rounded-[4px]`}
                  />
                  <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
                    <div className="relative shrink-0 size-[24px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <path d={contextoInducao === opcao ? svgPaths.p4501f00 : svgPaths.p26f9ce00} fill={contextoInducao === opcao ? '#2D37F5' : '#313338'} />
                      </svg>
                    </div>
                    <input
                      type="radio"
                      value={opcao}
                      {...register('contextoInducao', { required: tipoHU === 'Indução' ? 'Campo obrigatório' : false })}
                      className="sr-only"
                    />
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                      <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] text-[#111214] text-[16px] tracking-[0.08px] w-full">
                        {opcao}
                      </p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
            {errors.contextoInducao && (
              <p className="text-red-500 text-xs mt-1">{errors.contextoInducao.message as string}</p>
            )}
          </div>

          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] text-[#111214] text-[14px] tracking-[0.07px] w-full">
              11. Qual o público? *
            </p>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              {['PF', 'PJ'].map((opcao) => (
                <label key={opcao} className="relative rounded-[4px] shrink-0 w-full cursor-pointer">
                  <div aria-hidden="true" className={`absolute border ${publicoSelecionado === opcao ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'} border-solid inset-0 pointer-events-none rounded-[4px]`} />
                  <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
                    <div className="relative shrink-0 size-[24px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <path d={publicoSelecionado === opcao ? svgPaths.p4501f00 : svgPaths.p26f9ce00} fill={publicoSelecionado === opcao ? '#2D37F5' : '#313338'} />
                      </svg>
                    </div>
                    <input
                      type="radio"
                      value={opcao}
                      {...register('publico', {
                        required: tipoHU === 'Indução' ? 'Campo obrigatório' : false,
                        onChange: (e) => setPublicoSelecionado(e.target.value),
                      })}
                      className="sr-only"
                    />
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                      <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] text-[#111214] text-[16px] tracking-[0.08px] w-full">
                        {opcao}
                      </p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
            {errors.publico && (
              <p className="text-red-500 text-xs mt-1">{errors.publico.message as string}</p>
            )}
          </div>

          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] text-[#111214] text-[14px] tracking-[0.07px] w-full">
              12. Em qual canal esse fluxo será disponibilizado? *
            </p>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              {canais.map((canal) => (
                <label key={canal} className="relative rounded-[4px] shrink-0 w-full cursor-pointer">
                  <div aria-hidden="true" className={`absolute border ${canalSelecionado === canal ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'} border-solid inset-0 pointer-events-none rounded-[4px]`} />
                  <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
                    <div className="relative shrink-0 size-[24px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <path d={canalSelecionado === canal ? svgPaths.p4501f00 : svgPaths.p26f9ce00} fill={canalSelecionado === canal ? '#2D37F5' : '#313338'} />
                      </svg>
                    </div>
                    <input
                      type="radio"
                      value={canal}
                      {...register('canais', {
                        required: tipoHU === 'Indução' ? 'Campo obrigatório' : false,
                        onChange: (e) => setCanalSelecionado(e.target.value),
                      })}
                      className="sr-only"
                    />
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                      <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] text-[#111214] text-[16px] tracking-[0.08px] w-full">
                        {canal}
                      </p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
            {errors.canais && (
              <p className="text-red-500 text-xs mt-1">{errors.canais.message as string}</p>
            )}
          </div>
        </>
      )}

      {tipoHU === 'Informacional' && (
        <>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] text-[#111214] text-[14px] tracking-[0.07px] w-full">
              11. Qual o público? *
            </p>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              {['PF', 'PJ'].map((opcao) => (
                <label key={opcao} className="relative rounded-[4px] shrink-0 w-full cursor-pointer">
                  <div aria-hidden="true" className={`absolute border ${publicoSelecionado === opcao ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'} border-solid inset-0 pointer-events-none rounded-[4px]`} />
                  <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
                    <div className="relative shrink-0 size-[24px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <path d={publicoSelecionado === opcao ? svgPaths.p4501f00 : svgPaths.p26f9ce00} fill={publicoSelecionado === opcao ? '#2D37F5' : '#313338'} />
                      </svg>
                    </div>
                    <input
                      type="radio"
                      value={opcao}
                      {...register('publico', {
                        required: tipoHU === 'Informacional' ? 'Campo obrigatório' : false,
                        onChange: (e) => setPublicoSelecionado(e.target.value),
                      })}
                      className="sr-only"
                    />
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                      <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] text-[#111214] text-[16px] tracking-[0.08px] w-full">
                        {opcao}
                      </p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
            {errors.publico && (
              <p className="text-red-500 text-xs mt-1">{errors.publico.message as string}</p>
            )}
          </div>

          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] text-[#111214] text-[14px] tracking-[0.07px] w-full">
              12. Em qual canal esse fluxo será disponibilizado? *
            </p>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              {canais.map((canal) => (
                <label key={canal} className="relative rounded-[4px] shrink-0 w-full cursor-pointer">
                  <div aria-hidden="true" className={`absolute border ${canalSelecionado === canal ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'} border-solid inset-0 pointer-events-none rounded-[4px]`} />
                  <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
                    <div className="relative shrink-0 size-[24px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <path d={canalSelecionado === canal ? svgPaths.p4501f00 : svgPaths.p26f9ce00} fill={canalSelecionado === canal ? '#2D37F5' : '#313338'} />
                      </svg>
                    </div>
                    <input
                      type="radio"
                      value={canal}
                      {...register('canais', {
                        required: tipoHU === 'Informacional' ? 'Campo obrigatório' : false,
                        onChange: (e) => setCanalSelecionado(e.target.value),
                      })}
                      className="sr-only"
                    />
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                      <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] text-[#111214] text-[16px] tracking-[0.08px] w-full">
                        {canal}
                      </p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
            {errors.canais && (
              <p className="text-red-500 text-xs mt-1">{errors.canais.message as string}</p>
            )}
          </div>
        </>
      )}

      {tipoHU === 'Ativo' && (
        <>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] text-[#111214] text-[14px] tracking-[0.07px] w-full">
              11. Qual o público? *
            </p>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              {['PF', 'PJ'].map((opcao) => (
                <label key={opcao} className="relative rounded-[4px] shrink-0 w-full cursor-pointer">
                  <div aria-hidden="true" className={`absolute border ${publicoSelecionado === opcao ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'} border-solid inset-0 pointer-events-none rounded-[4px]`} />
                  <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
                    <div className="relative shrink-0 size-[24px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <path d={publicoSelecionado === opcao ? svgPaths.p4501f00 : svgPaths.p26f9ce00} fill={publicoSelecionado === opcao ? '#2D37F5' : '#313338'} />
                      </svg>
                    </div>
                    <input
                      type="radio"
                      value={opcao}
                      {...register('publico', {
                        required: tipoHU === 'Ativo' ? 'Campo obrigatório' : false,
                        onChange: (e) => setPublicoSelecionado(e.target.value),
                      })}
                      className="sr-only"
                    />
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                      <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] text-[#111214] text-[16px] tracking-[0.08px] w-full">
                        {opcao}
                      </p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
            {errors.publico && (
              <p className="text-red-500 text-xs mt-1">{errors.publico.message as string}</p>
            )}
          </div>

          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] text-[#111214] text-[14px] tracking-[0.07px] w-full">
              12. Em qual canal esse fluxo será disponibilizado? *
            </p>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              {canais.map((canal) => (
                <label key={canal} className="relative rounded-[4px] shrink-0 w-full cursor-pointer">
                  <div aria-hidden="true" className={`absolute border ${canalSelecionado === canal ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'} border-solid inset-0 pointer-events-none rounded-[4px]`} />
                  <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
                    <div className="relative shrink-0 size-[24px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <path d={canalSelecionado === canal ? svgPaths.p4501f00 : svgPaths.p26f9ce00} fill={canalSelecionado === canal ? '#2D37F5' : '#313338'} />
                      </svg>
                    </div>
                    <input
                      type="radio"
                      value={canal}
                      {...register('canais', {
                        required: tipoHU === 'Ativo' ? 'Campo obrigatório' : false,
                        onChange: (e) => setCanalSelecionado(e.target.value),
                      })}
                      className="sr-only"
                    />
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                      <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] text-[#111214] text-[16px] tracking-[0.08px] w-full">
                        {canal}
                      </p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
            {errors.canais && (
              <p className="text-red-500 text-xs mt-1">{errors.canais.message as string}</p>
            )}
          </div>
        </>
      )}

      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" ref={temaContainerRef}>
        <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] text-[#111214] text-[14px] tracking-[0.07px] w-full">
          {numeroTema} Qual é o Tema do seu fluxo? *
        </p>

        <input type="hidden" name={temaField.name} ref={temaField.ref} />

        <div className="relative w-full">
          <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
            <div className="bg-[#f0f2f4] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[10px] items-center pb-[7px] pt-[8px] px-[16px] relative w-full">
                  <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                    <input
                      ref={temaInputRef}
                      type="text"
                      value={temaTerm}
                      placeholder="Ex: Agronegócio, Investimentos, Crédito..."
                      className="flex-[1_0_0] bg-transparent font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[16px] tracking-[0.08px] outline-none placeholder:text-[#6c7077] text-[#111214]"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!temaOpen) setTemaTerm('');
                        setTemaOpen(true);
                      }}
                      onFocus={() => {
                        if (!temaOpen) setTemaTerm('');
                        setTemaOpen(true);
                      }}
                      onChange={(e) => {
                        setTemaTerm(e.target.value);
                        setTemaOpen(true);
                      }}
                    />
                  </div>
                  <button
                    type="button"
                    className="relative shrink-0 size-[24px]"
                    onClick={(event) => {
                      event.stopPropagation();
                      if (temaOpen) {
                        setTemaOpen(false);
                        return;
                      }
                      setTemaTerm('');
                      setTemaOpen(true);
                    }}
                  >
                    <svg className={`block size-full transition-transform ${temaOpen ? 'rotate-180' : ''}`} fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={svgPaths.pae4800} fill="#888D95" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
          </div>

          {temaOpen && (
            <div className="absolute bg-[#fefefe] overflow-clip p-[4px] shadow-[0px_10px_16px_0px_rgba(24,24,27,0.06),0px_3px_6px_0px_rgba(24,24,27,0.06),0px_0px_1px_0px_rgba(24,24,27,0.04)] top-[calc(100%+4px)] w-full z-50 max-h-[240px] rounded-[4px]">
              <div className="flex flex-col w-full overflow-y-auto max-h-[232px]">
                {filteredTemaOptions.length > 0 ? (
                  filteredTemaOptions.map((option, index) => (
                    <div key={option.value} className="w-full">
                      <div
                        className="bg-[#fefefe] min-h-[48px] w-full hover:bg-[#f0f2f4] transition-colors cursor-pointer px-[16px] py-[10px] flex items-center"
                        onClick={() => {
                          temaField.onChange(option.value);
                          setTemaTerm(option.label);
                          setTemaOpen(false);
                        }}
                      >
                        <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[16px] leading-[1.125] tracking-[0.08px]">
                          {option.label}
                        </p>
                      </div>
                      {index < filteredTemaOptions.length - 1 && (
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

        {errors.tema && (
          <p className="text-red-500 text-xs mt-1">{errors.tema.message as string}</p>
        )}
      </div>

      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] text-[#111214] text-[14px] tracking-[0.07px] w-full">
          {numeroNomeHash} Qual o nome da Hash Inicial? *
        </p>
        <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
          <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pb-[7px] pl-[12px] pr-[4px] pt-[8px] relative size-full">
                <input
                  type="text"
                  {...register('nomeHashInicial', { required: 'Campo obrigatório' })}
                  placeholder="Nome da hash inicial"
                  className="flex-[1_0_0] bg-transparent font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px text-[#686c73] text-[16px] tracking-[0.08px] outline-none placeholder:text-[#686c73]"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
        </div>
        {errors.nomeHashInicial && (
          <p className="text-red-500 text-xs mt-1">{errors.nomeHashInicial.message as string}</p>
        )}
      </div>

      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] text-[#111214] text-[14px] tracking-[0.07px] w-full">
          {numeroHashInicio} Qual a Hash de início (UUID/Hash)? *
        </p>

        <div className="mb-2 bg-[#e8f2ff] flex flex-col items-start justify-center p-[12px] relative rounded-[8px] w-full">
          <div aria-hidden="true" className="absolute border border-[#4a90e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="relative w-full">
            <div className="flex items-start gap-[8px]">
              <div className="relative shrink-0 size-[20px] mt-[1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="8" stroke="#2D37F5" strokeWidth="1.5" fill="none"/>
                  <path d="M10 6.5v4.5M10 13.5h.01" stroke="#2D37F5" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[14px] leading-[1.4]">
                  Para informacionais, ativos e induções, se a jornada estiver em uma múltipla resposta, informe a hash da múltipla.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
          <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pb-[7px] pl-[12px] pr-[4px] pt-[8px] relative size-full">
                <input
                  type="text"
                  {...register('hashInicio', { required: 'Campo obrigatório' })}
                  placeholder="Ex: d823ab05-639c-11ea-bff3-005056924583"
                  className="flex-[1_0_0] bg-transparent font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px text-[#686c73] text-[16px] tracking-[0.08px] outline-none placeholder:text-[#686c73]"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
        </div>

        {errors.hashInicio && (
          <p className="text-red-500 text-xs mt-1">{errors.hashInicio.message as string}</p>
        )}
      </div>
    </div>
  );
}
