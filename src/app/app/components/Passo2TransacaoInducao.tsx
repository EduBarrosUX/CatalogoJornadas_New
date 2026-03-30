import { UseFormRegister, FieldErrors, Control } from 'react-hook-form';
import svgPaths from "@/imports/svg-st0q96v9y6";
import { SelectFieldForm } from '@/app/components/SelectFieldForm';

interface Passo2TransacaoInducaoProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  control: Control<any>;
  tipoHU?: 'Transação' | 'Ativo' | 'Indução' | 'Informacional';
  contextoInducao?: 'Saudação' | 'Feedback' | 'QR Code / Link' | 'Outro';
}

export function Passo2TransacaoInducao({ register, errors, control, tipoHU, contextoInducao }: Passo2TransacaoInducaoProps) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start w-full max-w-[692px]">
      {/* Campos específicos para Transação */}
      {tipoHU === 'Transação' && (
        <>
          {/* Campo 6: Link para acesso ao Plano de Requisitos */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
              6. Link para acesso ao Plano de Requisitos:
            </p>
            <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
              <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center pb-[7px] pl-[12px] pr-[4px] pt-[8px] relative size-full">
                    <input
                      type="url"
                      {...register('linkPlanoRequisitos')}
                      placeholder="https://..."
                      className="flex-[1_0_0] bg-transparent font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px] outline-none placeholder:text-[#686c73]"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
            </div>
            <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#686c73] text-[14px] tracking-[0.196px] w-full">
              Informe o plano de requisitos para todas as transações. Se não for possível, justifique abaixo.
            </p>
          </div>

          {/* Campo 7: Ausência - Plano de Requisitos */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
              7. Ausência - Plano de Requisitos:
            </p>
            <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
              <div className="bg-[#f0f2f4] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full min-h-[80px]">
                <div className="flex flex-row items-start size-full">
                  <div className="content-stretch flex items-start pb-[7px] pl-[12px] pr-[4px] pt-[8px] relative size-full">
                    <textarea
                      {...register('ausenciaPlanoRequisitos')}
                      placeholder="Justifique caso não seja possível informar o plano de requisitos"
                      rows={3}
                      className="flex-[1_0_0] bg-transparent font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px] outline-none placeholder:text-[#686c73] resize-none w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
            </div>
          </div>
        </>
      )}

      {/* Campos específicos para Indução */}
      {tipoHU === 'Indução' && (
        <>
          {/* Campo 6: A INDUÇÃO foi incluída em qual contexto */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
              6. A INDUÇÃO foi incluída em qual contexto:
            </p>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              {/* Opção: Saudação */}
              <label className={`relative rounded-[4px] shrink-0 w-full cursor-pointer`}>
                <div aria-hidden="true" className={`absolute border ${contextoInducao === 'Saudação' ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'} border-solid inset-0 pointer-events-none rounded-[4px]`} />
                <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={contextoInducao === 'Saudação' ? svgPaths.p4501f00 : svgPaths.p26f9ce00} fill={contextoInducao === 'Saudação' ? '#2D37F5' : '#313338'} />
                    </svg>
                  </div>
                  <input
                    type="radio"
                    value="Saudação"
                    {...register('contextoInducao', { required: tipoHU === 'Indução' ? 'Campo obrigatório' : false })}
                    className="sr-only"
                  />
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                    <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-full">
                      Saudação
                    </p>
                  </div>
                </div>
              </label>

              {/* Opção: Feedback */}
              <label className={`relative rounded-[4px] shrink-0 w-full cursor-pointer`}>
                <div aria-hidden="true" className={`absolute border ${contextoInducao === 'Feedback' ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'} border-solid inset-0 pointer-events-none rounded-[4px]`} />
                <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={contextoInducao === 'Feedback' ? svgPaths.p4501f00 : svgPaths.p26f9ce00} fill={contextoInducao === 'Feedback' ? '#2D37F5' : '#313338'} />
                    </svg>
                  </div>
                  <input
                    type="radio"
                    value="Feedback"
                    {...register('contextoInducao')}
                    className="sr-only"
                  />
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                    <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-full">
                      Feedback
                    </p>
                  </div>
                </div>
              </label>

              {/* Opção: QR Code / Link */}
              <label className={`relative rounded-[4px] shrink-0 w-full cursor-pointer`}>
                <div aria-hidden="true" className={`absolute border ${contextoInducao === 'QR Code / Link' ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'} border-solid inset-0 pointer-events-none rounded-[4px]`} />
                <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={contextoInducao === 'QR Code / Link' ? svgPaths.p4501f00 : svgPaths.p26f9ce00} fill={contextoInducao === 'QR Code / Link' ? '#2D37F5' : '#313338'} />
                    </svg>
                  </div>
                  <input
                    type="radio"
                    value="QR Code / Link"
                    {...register('contextoInducao')}
                    className="sr-only"
                  />
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                    <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-full">
                      QR Code / Link
                    </p>
                  </div>
                </div>
              </label>

              {/* Opção: Outro */}
              <label className={`relative rounded-[4px] shrink-0 w-full cursor-pointer`}>
                <div aria-hidden="true" className={`absolute border ${contextoInducao === 'Outro' ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'} border-solid inset-0 pointer-events-none rounded-[4px]`} />
                <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={contextoInducao === 'Outro' ? svgPaths.p4501f00 : svgPaths.p26f9ce00} fill={contextoInducao === 'Outro' ? '#2D37F5' : '#313338'} />
                    </svg>
                  </div>
                  <input
                    type="radio"
                    value="Outro"
                    {...register('contextoInducao')}
                    className="sr-only"
                  />
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                    <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-full">
                      Outro
                    </p>
                  </div>
                </div>
              </label>
            </div>
            {errors.contextoInducao && (
              <p className="text-red-500 text-xs mt-1">{errors.contextoInducao.message as string}</p>
            )}
          </div>

          {/* Campo 7: Informe em qual jornada a INDUÇÃO foi incluída */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
              7. Informe em qual jornada a INDUÇÃO foi incluída:
            </p>
            <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
              <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center pb-[7px] pl-[12px] pr-[4px] pt-[8px] relative size-full">
                    <input
                      type="text"
                      {...register('jornadaInducao', { required: tipoHU === 'Indução' ? 'Campo obrigatório' : false })}
                      placeholder="Nome da jornada onde a indução foi incluída"
                      className="flex-[1_0_0] bg-transparent font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px] outline-none placeholder:text-[#686c73]"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
            </div>
            {errors.jornadaInducao && (
              <p className="text-red-500 text-xs mt-1">{errors.jornadaInducao.message as string}</p>
            )}
          </div>
        </>
      )}

      {/* Campo: Tema do fluxo (comum para ambos) */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <SelectFieldForm
          control={control}
          name="tema"
          label={`${tipoHU === 'Transação' ? '8.' : '8.'} Qual é o tema do seu fluxo ?`}
          rules={{ required: 'Campo obrigatório' }}
          options={[
            { value: 'Agronegócio', label: 'Agronegócio' },
            { value: 'Atendimento', label: 'Atendimento' },
            { value: 'Benefício BB', label: 'Benefício BB' },
            { value: 'Canais', label: 'Canais' },
            { value: 'Cartão Consórcio', label: 'Cartão Consórcio' },
          ]}
          errorMessage={errors.tema?.message as string}
        />
      </div>

      {/* Campo: Nome da Hash Inicial */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
          9. Qual o nome da hash inicial?
        </p>
        
        {/* Alerta azul - Para Ativo e Indução */}
        {(tipoHU === 'Ativo' || tipoHU === 'Indução') && (
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
                  <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[14px] leading-[1.4]">
                    <strong>Importante:</strong> A hash a ser informada precisa ser a da múltipla, não a da hash do nó pai.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
          <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pb-[7px] pl-[12px] pr-[4px] pt-[8px] relative size-full">
                <input
                  type="text"
                  {...register('nomeHashInicial', { required: 'Campo obrigatório' })}
                  placeholder="Ex: TRN_consulta_encargos_giro_agro"
                  className="flex-[1_0_0] bg-transparent font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px] outline-none placeholder:text-[#686c73]"
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

      {/* Campo: Hash de início (UUID/Hash) */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
          10. Qual a hash inicial (UUID/Hash) ?
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
                  placeholder="Ex: 668dc1b9-9a3c-4f79-bfc5-3a60cacb9669"
                  className="flex-[1_0_0] bg-transparent font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px] outline-none placeholder:text-[#686c73]"
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