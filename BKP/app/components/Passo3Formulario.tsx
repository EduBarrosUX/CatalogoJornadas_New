import { UseFormRegister, FieldErrors } from 'react-hook-form';
import svgPaths from "@/imports/svg-st0q96v9y6";

interface Passo3FormularioProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  tipoHU?: 'Transação' | 'Ativo' | 'Indução' | 'Informacional';
  contextoInducao?: 'Saudação' | 'Feedback' | 'QR Code / Link' | 'Outro';
}

export function Passo3Formulario({ register, errors, tipoHU, contextoInducao }: Passo3FormularioProps) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start w-full max-w-[692px]">
      {/* Campos específicos para Indução */}
      {tipoHU === 'Indução' && (
        <>
          {/* Campo: A INDUÇÃO foi incluída em qual contexto */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
              10. A INDUÇÃO foi incluída em qual contexto: *
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

          {/* Campo: Informe em qual jornada a INDUÇÃO foi incluída */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
              11. Informe em qual jornada a INDUÇÃO foi incluída: *
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

      {/* Campo 11: Tema do fluxo */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
          {tipoHU === 'Indução' ? '12.' : '11.'} Qual é o Tema do seu fluxo? *
        </p>
        <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
          <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pb-[7px] pl-[12px] pr-[4px] pt-[8px] relative size-full">
                <input
                  type="text"
                  {...register('tema', { required: 'Campo obrigatório' })}
                  placeholder="Ex: Agronegócio, Investimentos, Crédito..."
                  className="flex-[1_0_0] bg-transparent font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px] outline-none placeholder:text-[#686c73]"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
        </div>
        {errors.tema && (
          <p className="text-red-500 text-xs mt-1">{errors.tema.message as string}</p>
        )}
      </div>

      {/* Campo 12: Nome da Hash Inicial */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
          12. Qual o nome da Hash Inicial? *
        </p>
        <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
          <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pb-[7px] pl-[12px] pr-[4px] pt-[8px] relative size-full">
                <input
                  type="text"
                  {...register('nomeHashInicial', { required: 'Campo obrigatório' })}
                  placeholder="Nome da hash inicial"
                  className="flex-[1_0_0] bg-transparent font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px] outline-none placeholder:text-[#686c73]"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
        </div>
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#888d95] text-[14px] tracking-[0.196px] w-full">
          Para ativos e induções, se a jornada estiver em uma múltipla resposta, informe a hash da múltipla
        </p>
        {errors.nomeHashInicial && (
          <p className="text-red-500 text-xs mt-1">{errors.nomeHashInicial.message as string}</p>
        )}
      </div>

      {/* Campo 13: Hash de início (UUID/Hash) */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
          13. Qual a Hash de início (UUID/Hash)? *
        </p>
        <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
          <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pb-[7px] pl-[12px] pr-[4px] pt-[8px] relative size-full">
                <input
                  type="text"
                  {...register('hashInicio', { required: 'Campo obrigatório' })}
                  placeholder="Ex: d823ab05-639c-11ea-bff3-005056924583"
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