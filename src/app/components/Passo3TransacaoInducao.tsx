
import { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';
import { useEffect, useMemo, useRef, useState } from 'react';
import svgPaths from '@/imports/svg-st0q96v9y6';

interface Passo3TransacaoInducaoProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  canaisSelecionados: string[];
  onCanaisChange: (values: string[]) => void;
  tipoHU?: 'Transação' | 'Ativo' | 'Indução' | 'Informacional';
  watch: UseFormWatch<any>;
}

function normalizeText(text: string) {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function Passo3TransacaoInducao({
  register,
  errors,
  tipoHU,
  watch,
  canaisSelecionados,
  onCanaisChange
}: Passo3TransacaoInducaoProps) {
  const descricaoFluxo = watch('descricaoFluxo') || '';
  const caracteresRestantes = 198 - descricaoFluxo.length;
  const publico = watch('publico') || '';
  const canal = watch('canais') || '';
  const canalOutro = watch('canalOutro') || '';
  const [publicoSelecionado, setPublicoSelecionado] = useState(publico);
  const [canalSelecionado, setCanalSelecionado] = useState(canal || (Array.isArray(canaisSelecionados) ? canaisSelecionados[0] : ''));
  const [temaOpen, setTemaOpen] = useState(false);
  const [temaTerm, setTemaTerm] = useState('');
  const temaContainerRef = useRef<HTMLDivElement>(null);
  const temaInputRef = useRef<HTMLInputElement>(null);

  const tituloPlaceholder =
    canalSelecionado === 'Outros'
      ? 'Outros'
      : tipoHU === 'Transação'
        ? publicoSelecionado === 'PJ'
          ? 'Transação PJ - Titulo'
          : publicoSelecionado === 'PF'
            ? 'Transação PF - Titulo'
            : 'Digite o título'
        : 'Digite o título';

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

  useEffect(() => {
    if (canalSelecionado === 'Outros') {
      onCanaisChange([canalOutro || 'Outros']);
    }
  }, [canalSelecionado, canalOutro, onCanaisChange]);

  const temaOptions = [
    { value: 'Agronegócio', label: 'Agronegócio' },
    { value: 'Atendimento', label: 'Atendimento' },
    { value: 'Benefício BB', label: 'Benefício BB' },
    { value: 'Canais', label: 'Canais' },
    { value: 'Cartão Consórcio', label: 'Cartão Consórcio' },
  ];

  const filteredTemaOptions = useMemo(() => {
    const normalized = normalizeText(temaTerm.trim());
    if (!normalized) return temaOptions;
    return temaOptions.filter((option) => normalizeText(option.label).includes(normalized));
  }, [temaTerm]);

  const temaField = register('tema', { required: 'Campo obrigatório' });

  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start w-full max-w-[672px]">
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
            11. Qual o público?
          </p>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            {[
              { value: 'PF', label: 'Pessoa Física' },
              { value: 'PJ', label: 'Pessoa Jurídica' }
            ].map((opcao) => (
              <label key={opcao.value} className="relative rounded-[4px] shrink-0 w-full cursor-pointer">
                <div aria-hidden="true" className={`absolute border ${publicoSelecionado === opcao.value ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'} border-solid inset-0 pointer-events-none rounded-[4px]`} />
                <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={publicoSelecionado === opcao.value ? svgPaths.p4501f00 : svgPaths.p26f9ce00} fill={publicoSelecionado === opcao.value ? '#2D37F5' : '#313338'} />
                    </svg>
                  </div>
                  <input
                    type="radio"
                    value={opcao.value}
                    {...register('publico', {
                      required: 'Campo obrigatório',
                      onChange: (e) => setPublicoSelecionado(e.target.value),
                    })}
                    className="sr-only"
                  />
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                    <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-full">
                      {opcao.label}
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
          <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
            12. Em qual canal esse fluxo será disponibilizado?
          </p>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            {['WhatsApp', 'App BB', 'Outros'].map((item) => (
              <label key={item} className="relative rounded-[4px] shrink-0 w-full cursor-pointer">
                <div aria-hidden="true" className={`absolute border ${canalSelecionado === item ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'} border-solid inset-0 pointer-events-none rounded-[4px]`} />
                <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={canalSelecionado === item ? svgPaths.p4501f00 : svgPaths.p26f9ce00} fill={canalSelecionado === item ? '#2D37F5' : '#313338'} />
                    </svg>
                  </div>
                  <input
                    type="radio"
                    value={item}
                    checked={canalSelecionado === item}
                    onChange={() => {
                      setCanalSelecionado(item);
                      onCanaisChange([item]);
                    }}
                    className="sr-only"
                  />
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                    <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-full">
                      {item}
                    </p>
                  </div>
                </div>
              </label>
            ))}
          </div>
          {errors.canais && (
            <p className="text-red-500 text-xs mt-1">{errors.canais.message as string}</p>
          )}
          {canalSelecionado === 'Outros' && (
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full mt-2">
              <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#686c73] text-[14px] tracking-[0.07px] w-full">
                Informe o canal
              </p>
              <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
                <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center pb-[7px] pl-[12px] pr-[4px] pt-[8px] relative size-full">
                      <input
                        type="text"
                        {...register('canalOutro', {
                          required: canalSelecionado === 'Outros' ? 'Campo obrigatório' : false
                        })}
                        placeholder="Digite o canal"
                        className="flex-[1_0_0] bg-transparent font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px] outline-none placeholder:text-[#686c73]"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
          13. Crie um título que represente a jornada desenvolvida:
        </p>

        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
            <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pb-[7px] pl-[12px] pr-[4px] pt-[8px] relative size-full">
                  <input
                    type="text"
                    {...register('tituloFluxo', { required: 'Campo obrigatório' })}
                    placeholder={tituloPlaceholder}
                    className="flex-[1_0_0] bg-transparent font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px] outline-none placeholder:text-[#686c73]"
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
          </div>
          {errors.tituloFluxo && (
            <p className="text-red-500 text-xs mt-1">{errors.tituloFluxo.message as string}</p>
          )}
        </div>
      </div>

      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] min-w-full not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-[min-content]">
          14. Faça uma descrição do fluxo, detalhando sobre o que ele aborda:
        </p>

        <div className="bg-[#ffdf9f] h-[138px] relative rounded-[10px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[#ffb31a] border-solid inset-0 pointer-events-none rounded-[10px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[22px] items-center p-[16px] relative size-full">
              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative">
                <div className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Bold',sans-serif] min-h-px min-w-px not-italic relative text-[#686c73] text-[12px] tracking-[0.168px]">
                  <p className="leading-[1.125]">Informação</p>
                  <br />
                  <p className="leading-[1.125] flex items-center gap-[4px] flex-wrap">
                    <span>Acesse o agente Descreve Aí 👉</span>
                    <a
                      href="https://m365.cloud.microsoft/chat/?titleId=T_c2a294af-e20d-cedf-209c-95d137aff3d5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-[12px] py-[8px] rounded-[4px] bg-[#4A3AFF] text-white font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-[12px] tracking-[0.07px] uppercase leading-[1.125] no-underline hover:opacity-90 transition-opacity"
                    >
                      Abrir agente
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f0f2f4] content-stretch flex flex-col h-[191px] items-start overflow-clip relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
          <div className="bg-[#f0f2f4] flex-[1_0_0] min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="content-stretch flex items-start pt-[8px] px-[12px] relative size-full">
              <textarea
                {...register('descricaoFluxo', {
                  required: 'Campo obrigatório',
                  maxLength: { value: 198, message: 'Máximo de 198 caracteres' }
                })}
                placeholder="Informe o texto gerado no Descreve Aí, se não refletir o conteúdo da jornada gere novamente solicitando ajuste ao agente"
                className="flex-[1_0_0] bg-transparent font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic outline-none resize-none text-[#686c73] text-[16px] tracking-[0.08px] placeholder:text-[#686c73]"
              />
            </div>
          </div>
          <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
        </div>

        <div className="w-full flex justify-end">
          <p className="text-[#686c73] text-[12px]">
            {caracteresRestantes} caracteres restantes
          </p>
        </div>

        {errors.descricaoFluxo && (
          <p className="text-red-500 text-xs mt-1">{errors.descricaoFluxo.message as string}</p>
        )}
      </div>
    </div>
  );
}
