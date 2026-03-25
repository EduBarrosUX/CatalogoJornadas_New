import { UseFormRegister, FieldErrors, Control } from 'react-hook-form';
import svgPaths from '@/imports/svg-st0q96v9y6';
import { DateInput } from '@/app/components/DateInput';
import { SelectFieldForm } from '@/app/components/SelectFieldForm';

interface Passo1FormularioProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  control: Control<any>;
  utilizaIAGenerativa?: string;
  iaGenerativaRespondeCliente?: string; // Mudado para string porque vem como 'true' ou 'false'
  tipoInclusao?: 'novo' | 'alteracao' | 'alteracao-trn';
  tipoHU?: 'Transação' | 'Ativo' | 'Indução' | 'Informacional';
}

export function Passo1Formulario({ register, errors, control, utilizaIAGenerativa, iaGenerativaRespondeCliente, tipoInclusao, tipoHU }: Passo1FormularioProps) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start w-full max-w-[720px]">
      {/* Campo 1: Número da História no GENTI */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
          1. Qual é o número da História no GENTI? *
        </p>
        <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
          <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pb-[7px] pl-[12px] pr-[4px] pt-[8px] relative size-full">
                <input
                  type="text"
                  {...register('numeroHistoria', { required: 'Campo obrigatório' })}
                  placeholder="Ex: 10203040"
                  className="flex-[1_0_0] bg-transparent font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px] outline-none placeholder:text-[#686c73]"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
        </div>
        {errors.numeroHistoria && (
          <p className="text-red-500 text-xs mt-1">{errors.numeroHistoria.message as string}</p>
        )}
      </div>

      {/* Campo 2: A jornada utiliza IA Generativa? */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
          2. A jornada utiliza IA Generativa? *
        </p>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          {/* Opção: Sim */}
          <label className={`relative rounded-[4px] shrink-0 w-full cursor-pointer`}>
            <div aria-hidden="true" className={`absolute border ${utilizaIAGenerativa === 'true' ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'} border-solid inset-0 pointer-events-none rounded-[4px]`} />
            <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={utilizaIAGenerativa === 'true' ? svgPaths.p4501f00 : svgPaths.p26f9ce00} fill={utilizaIAGenerativa === 'true' ? '#2D37F5' : '#313338'} />
                </svg>
              </div>
              <input
                type="radio"
                value="true"
                {...register('utilizaIAGenerativa', { required: 'Campo obrigatório' })}
                className="sr-only"
              />
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-full">
                  Sim
                </p>
              </div>
            </div>
          </label>

          {/* Opção: Não */}
          <label className={`relative rounded-[4px] shrink-0 w-full cursor-pointer`}>
            <div aria-hidden="true" className={`absolute border ${utilizaIAGenerativa === 'false' ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'} border-solid inset-0 pointer-events-none rounded-[4px]`} />
            <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={utilizaIAGenerativa === 'false' ? svgPaths.p4501f00 : svgPaths.p26f9ce00} fill={utilizaIAGenerativa === 'false' ? '#2D37F5' : '#313338'} />
                </svg>
              </div>
              <input
                type="radio"
                value="false"
                {...register('utilizaIAGenerativa')}
                className="sr-only"
              />
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-full">
                  Não
                </p>
              </div>
            </div>
          </label>
        </div>
        {errors.utilizaIAGenerativa && (
          <p className="text-red-500 text-xs mt-1">{errors.utilizaIAGenerativa.message as string}</p>
        )}
      </div>

      {/* Campo 3: IA Generativa responde ao cliente? - Mostrar apenas se utilizaIAGenerativa === 'true' */}
      {utilizaIAGenerativa === 'true' && (
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
            3. IA Generativa responde ao cliente? *
          </p>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            {/* Opção: Sim */}
            <label className={`relative rounded-[4px] shrink-0 w-full cursor-pointer`}>
              <div aria-hidden="true" className={`absolute border ${iaGenerativaRespondeCliente === 'true' ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'} border-solid inset-0 pointer-events-none rounded-[4px]`} />
              <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
                <div className="relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={iaGenerativaRespondeCliente === 'true' ? svgPaths.p4501f00 : svgPaths.p26f9ce00} fill={iaGenerativaRespondeCliente === 'true' ? '#2D37F5' : '#313338'} />
                  </svg>
                </div>
                <input
                  type="radio"
                  value="true"
                  {...register('iaGenerativaRespondeCliente', { required: utilizaIAGenerativa === 'true' ? 'Campo obrigatório' : false })}
                  className="sr-only"
                />
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                  <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-full">
                    Sim
                  </p>
                </div>
              </div>
            </label>

            {/* Opção: Não */}
            <label className={`relative rounded-[4px] shrink-0 w-full cursor-pointer`}>
              <div aria-hidden="true" className={`absolute border ${iaGenerativaRespondeCliente === 'false' ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'} border-solid inset-0 pointer-events-none rounded-[4px]`} />
              <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
                <div className="relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={iaGenerativaRespondeCliente === 'false' ? svgPaths.p4501f00 : svgPaths.p26f9ce00} fill={iaGenerativaRespondeCliente === 'false' ? '#2D37F5' : '#313338'} />
                  </svg>
                </div>
                <input
                  type="radio"
                  value="false"
                  {...register('iaGenerativaRespondeCliente')}
                  className="sr-only"
                />
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                  <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-full">
                    Não
                  </p>
                </div>
              </div>
            </label>
          </div>
          {errors.iaGenerativaRespondeCliente && (
            <p className="text-red-500 text-xs mt-1">{errors.iaGenerativaRespondeCliente.message as string}</p>
          )}
        </div>
      )}

      {/* Campo 4: Tipo de Inclusão - Radio Buttons */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
          {utilizaIAGenerativa === 'true' ? '4.' : '3.'} Sua inclusão é referente a: *
        </p>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          {/* Opção: Novo fluxo */}
          <label className={`relative rounded-[4px] shrink-0 w-full cursor-pointer`}>
            <div aria-hidden="true" className={`absolute border ${tipoInclusao === 'novo' ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'} border-solid inset-0 pointer-events-none rounded-[4px]`} />
            <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={tipoInclusao === 'novo' ? svgPaths.p4501f00 : svgPaths.p26f9ce00} fill={tipoInclusao === 'novo' ? '#2D37F5' : '#313338'} />
                </svg>
              </div>
              <input
                type="radio"
                value="novo"
                {...register('tipoInclusao', { required: 'Campo obrigatório' })}
                className="sr-only"
              />
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-full">
                  Novo fluxo
                </p>
                <div className="content-stretch flex items-start relative shrink-0 w-full">
                  <div className="flex flex-[1_0_0] flex-col font-['BancoDoBrasil_Textos:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#686c73] text-[14px] tracking-[0.196px]">
                    <p className="css-4hzbpn leading-[1.125]">Nunca esteve no catálogo</p>
                  </div>
                </div>
              </div>
            </div>
          </label>

          {/* Opção: Alteração de fluxo existente */}
          <label className={`relative rounded-[4px] shrink-0 w-full cursor-pointer`}>
            <div aria-hidden="true" className={`absolute border ${tipoInclusao === 'alteracao' ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'} border-solid inset-0 pointer-events-none rounded-[4px]`} />
            <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={tipoInclusao === 'alteracao' ? svgPaths.p4501f00 : svgPaths.p26f9ce00} fill={tipoInclusao === 'alteracao' ? '#2D37F5' : '#313338'} />
                </svg>
              </div>
              <input
                type="radio"
                value="alteracao"
                {...register('tipoInclusao')}
                className="sr-only"
              />
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-full">
                  Alteração de fluxo existente
                </p>
                <div className="content-stretch flex items-start relative shrink-0 w-full">
                  <div className="flex flex-[1_0_0] flex-col font-['BancoDoBrasil_Textos:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#686c73] text-[14px] tracking-[0.196px]">
                    <p className="css-4hzbpn leading-[1.125]">Já está no catálogo e será atualizado</p>
                  </div>
                </div>
              </div>
            </div>
          </label>
        </div>
        {errors.tipoInclusao && (
          <p className="text-red-500 text-xs mt-1">{errors.tipoInclusao.message as string}</p>
        )}
      </div>

      {/* Mostrar campos diferentes baseado no tipo de inclusão */}
      {tipoInclusao && (
        <>
          {/* SE FOR NOVO FLUXO: mostrar Data e Diretoria */}
          {tipoInclusao === 'novo' && (
            <>
              {/* Campo 5: Data de implementação */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[402px]">
                <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
                  5. Informe a data em que o fluxo finalizado foi implementado em Produção no NIA: *
                </p>
                <DateInput
                  register={register}
                  name="dataImplementacao"
                  rules={{ required: 'Campo obrigatório' }}
                />
                {errors.dataImplementacao && (
                  <p className="text-red-500 text-xs mt-1">{errors.dataImplementacao.message as string}</p>
                )}
              </div>

              {/* Campo 6: Diretoria */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[328px]">
                <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
                  6. Selecione a Diretoria demandante da HU: *
                </p>
                <SelectFieldForm
                  control={control}
                  name="diretoria"
                  rules={{ required: 'Campo obrigatrio' }}
                  options={[
                    { value: 'ASG_9720', label: 'ASG_9720' },
                    { value: 'BB CONSÓRCIOS_4122', label: 'BB CONSÓRCIOS_4122' },
                    { value: 'BB SEGUROS_8869', label: 'BB SEGUROS_8869' },
                    { value: 'CAD_1901', label: 'CAD_1901' },
                    { value: 'CRM_9045', label: 'CRM_9045' },
                    { value: 'DEMPE_9879', label: 'DEMPE_9879' },
                    { value: 'DICRE_8624', label: 'DICRE_8624' },
                    { value: 'DIEMP_9973', label: 'DIEMP_9973' },
                    { value: 'DIGOV_8593', label: 'DIGOV_8593' },
                    { value: 'DIMAC_9984', label: 'DIMAC_9984' },
                    { value: 'DIMEP_9880', label: 'DIMEP_9880' },
                    { value: 'DINED_9897', label: 'DINED_9897' },
                    { value: 'DIPES_8559', label: 'DIPES_8559' },
                    { value: 'DIRAG_8596', label: 'DIRAG_8596' },
                    { value: 'DIREC_8008', label: 'DIREC_8008' },
                    { value: 'DITEC_9903', label: 'DITEC_9903' },
                    { value: 'DIVAR_8592', label: 'DIVAR_8592' },
                    { value: 'OUVIDORIABB_8948', label: 'OUVIDORIABB_8948' },
                    { value: 'UAC_9010', label: 'UAC_9010' },
                    { value: 'UCI_9797', label: 'UCI_9797' },
                    { value: 'UCR_8595', label: 'UCR_8595' },
                    { value: 'UEG_9240', label: 'UEG_9240' },
                    { value: 'UNI_9558', label: 'UNI_9558' },
                    { value: 'UPB_9882', label: 'UPB_9882' },
                    { value: 'USD_9548', label: 'USD_9548' },
                    { value: 'USI_8896', label: 'USI_8896' },
                  ]}
                />
                {errors.diretoria && (
                  <p className="text-red-500 text-xs mt-1">{errors.diretoria.message as string}</p>
                )}
              </div>
            </>
          )}

          {/* Campo Tipo de HU - SOMENTE PARA NOVO FLUXO */}
          {tipoInclusao === 'novo' && (
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full">
                <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.07px]">
                  7. Sua HU é referente à: *
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                {/* Card: Transação */}
                <label className={`${tipoHU === 'Transação' ? 'bg-[#ebf2ff]' : 'bg-[#fefefe]'} flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] cursor-pointer`}>
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="relative shrink-0 size-[24px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <path d={tipoHU === 'Transação' ? svgPaths.p14672280 : svgPaths.p26f9ce00} fill={tipoHU === 'Transação' ? '#2D37F5' : '#888D95'} />
                          </svg>
                        </div>
                      </div>
                      <input
                        type="radio"
                        value="Transação"
                        {...register('tipoHU', { required: 'Campo obrigatório' })}
                        className="sr-only"
                      />
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                        <div className={`flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 ${tipoHU === 'Transação' ? 'text-[#2d37f5]' : 'text-[#111214]'} text-[18px] w-full`}>
                          <p className="css-4hzbpn leading-[1.25]">Transação</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className={`absolute ${tipoHU === 'Transação' ? 'border-2 border-[#2d37f5]' : 'border-[#d4d8dd] border-b-2 border-l border-r border-t'} border-solid inset-0 pointer-events-none rounded-[8px]`} />
                </label>

                {/* Card: Ativo */}
                <label className={`${tipoHU === 'Ativo' ? 'bg-[#ebf2ff]' : 'bg-[#fefefe]'} flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] cursor-pointer`}>
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="relative shrink-0 size-[24px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <path d={tipoHU === 'Ativo' ? svgPaths.p14672280 : svgPaths.p26f9ce00} fill={tipoHU === 'Ativo' ? '#2D37F5' : '#888D95'} />
                          </svg>
                        </div>
                      </div>
                      <input
                        type="radio"
                        value="Ativo"
                        {...register('tipoHU')}
                        className="sr-only"
                      />
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                        <div className={`flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 ${tipoHU === 'Ativo' ? 'text-[#2d37f5]' : 'text-[#111214]'} text-[18px] w-full`}>
                          <p className="css-4hzbpn leading-[1.25]">Ativo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className={`absolute ${tipoHU === 'Ativo' ? 'border-2 border-[#2d37f5]' : 'border-[#d4d8dd] border-b-2 border-l border-r border-t'} border-solid inset-0 pointer-events-none rounded-[8px]`} />
                </label>

                {/* Card: Indução */}
                <label className={`${tipoHU === 'Indução' ? 'bg-[#ebf2ff]' : 'bg-[#fefefe]'} flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] cursor-pointer`}>
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="relative shrink-0 size-[24px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <path d={tipoHU === 'Indução' ? svgPaths.p14672280 : svgPaths.p26f9ce00} fill={tipoHU === 'Indução' ? '#2D37F5' : '#888D95'} />
                          </svg>
                        </div>
                      </div>
                      <input
                        type="radio"
                        value="Indução"
                        {...register('tipoHU')}
                        className="sr-only"
                      />
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                        <div className={`flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 ${tipoHU === 'Indução' ? 'text-[#2d37f5]' : 'text-[#111214]'} text-[18px] w-full`}>
                          <p className="css-4hzbpn leading-[1.25]">Indução</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className={`absolute ${tipoHU === 'Indução' ? 'border-2 border-[#2d37f5]' : 'border-[#d4d8dd] border-b-2 border-l border-r border-t'} border-solid inset-0 pointer-events-none rounded-[8px]`} />
                </label>

                {/* Card: Informacional */}
                <label className={`${tipoHU === 'Informacional' ? 'bg-[#ebf2ff]' : 'bg-[#fefefe]'} flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] cursor-pointer`}>
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="relative shrink-0 size-[24px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <path d={tipoHU === 'Informacional' ? svgPaths.p14672280 : svgPaths.p26f9ce00} fill={tipoHU === 'Informacional' ? '#2D37F5' : '#888D95'} />
                          </svg>
                        </div>
                      </div>
                      <input
                        type="radio"
                        value="Informacional"
                        {...register('tipoHU')}
                        className="sr-only"
                      />
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                        <div className={`flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 ${tipoHU === 'Informacional' ? 'text-[#2d37f5]' : 'text-[#111214]'} text-[18px] w-full`}>
                          <p className="css-4hzbpn leading-[1.25]">Informacional</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className={`absolute ${tipoHU === 'Informacional' ? 'border-2 border-[#2d37f5]' : 'border-[#d4d8dd] border-b-2 border-l border-r border-t'} border-solid inset-0 pointer-events-none rounded-[8px]`} />
                </label>
              </div>
              {errors.tipoHU && (
                <p className="text-red-500 text-xs mt-1">{errors.tipoHU.message as string}</p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}