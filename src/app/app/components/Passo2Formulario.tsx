import { UseFormRegister, FieldErrors, Control } from 'react-hook-form';
import svgPaths from "@/imports/svg-r9x150h1mf";
import { SelectFieldForm } from '@/app/components/SelectFieldForm';

interface Passo2FormularioProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  control: Control<any>;
  periodicidade?: 'unico' | 'recorrente';
  tipoHU?: 'Transação' | 'Ativo' | 'Indução';
  tipoInclusao?: 'novo' | 'alteracao' | 'alteracao-trn';
}

export function Passo2Formulario({ register, errors, control, periodicidade, tipoHU, tipoInclusao }: Passo2FormularioProps) {
  const mostrarRME = tipoHU === 'Ativo' || tipoInclusao !== 'novo';
  const numeroRME = '7.';
  const numeroSistema = mostrarRME ? '8.' : '7.';
  const numeroPeriodicidade = mostrarRME ? '9.' : '8.';
  const numeroTemplateMeta = mostrarRME ? '10.' : '9.';
  const numeroCategoriaAtivo = mostrarRME ? '11.' : '10.';
  const numeroPlanoRequisitos = mostrarRME ? '11.' : '10.';
  const numeroAusenciaPlano = mostrarRME ? '12.' : '11.';
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start w-full max-w-[692px]">
      {/* Campo RME - Mostrar para Ativo e também para alterações */}
      {mostrarRME && (
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
          {numeroRME} Qual o número do RME?
        </p>
        <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
          <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pb-[7px] pl-[12px] pr-[4px] pt-[8px] relative size-full">
                <input
                  type="text"
                  {...register('rme', { required: tipoInclusao !== 'novo' ? 'Campo obrigatório' : false })}
                  placeholder="Digite somente números"
                  className="flex-[1_0_0] bg-transparent font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px] outline-none placeholder:text-[#686c73]"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
        </div>
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#686c73] text-[14px] tracking-[0.196px] w-full">
          Informe somente números, sem iniciar com RME
        </p>
        {errors.rme && (
          <p className="text-red-500 text-xs mt-1">{errors.rme.message as string}</p>
        )}
      </div>
      )}

      {/* Campo 7: Sistema Responsável */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <SelectFieldForm
          control={control}
          name="sistemaResponsavel"
          label={`${numeroSistema} Sistema Responsável:`}
          rules={{ required: 'Campo obrigatório' }}
          options={[
            { value: 'NIA', label: 'NIA' },
            { value: 'META', label: 'META' },
            { value: 'SAC', label: 'SAC' },
            { value: 'CRM', label: 'CRM' },
          ]}
          errorMessage={errors.sistemaResponsavel?.message as string}
          isSearchable
          isCreatable
        />
      </div>

      {/* Campo 8: Periodicidade de envio - Radio Buttons */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
          {numeroPeriodicidade} Qual a periodicidade de envio ?
        </p>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          {/* Opção: Disparo único */}
          <label className={`relative rounded-[4px] shrink-0 w-full cursor-pointer`}>
            <div aria-hidden="true" className={`absolute border ${periodicidade === 'unico' ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'} border-solid inset-0 pointer-events-none rounded-[4px]`} />
            <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={periodicidade === 'unico' ? svgPaths.p4501f00 : svgPaths.p26f9ce00} fill={periodicidade === 'unico' ? '#2D37F5' : '#313338'} />
                </svg>
              </div>
              <input
                type="radio"
                value="unico"
                {...register('periodicidade', { required: 'Campo obrigatório' })}
                className="sr-only"
              />
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-full">
                  Disparo único
                </p>
                <div className="content-stretch flex items-start relative shrink-0 w-full">
                  <div className="flex flex-[1_0_0] flex-col font-['BancoDoBrasil_Textos:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#686c73] text-[14px] tracking-[0.196px]">
                    <p className="css-4hzbpn leading-[1.125]">Realizado em data ou período específico (Exemplo: Somente em 02/05/2025 ou de 02/05/2025 a 10/05/2025)</p>
                  </div>
                </div>
              </div>
            </div>
          </label>

          {/* Opção: Disparo recorrente */}
          <label className={`relative rounded-[4px] shrink-0 w-full cursor-pointer`}>
            <div aria-hidden="true" className={`absolute border ${periodicidade === 'recorrente' ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'} border-solid inset-0 pointer-events-none rounded-[4px]`} />
            <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={periodicidade === 'recorrente' ? svgPaths.p4501f00 : svgPaths.p26f9ce00} fill={periodicidade === 'recorrente' ? '#2D37F5' : '#313338'} />
                </svg>
              </div>
              <input
                type="radio"
                value="recorrente"
                {...register('periodicidade')}
                className="sr-only"
              />
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-full">
                  Disparo recorrente
                </p>
                <div className="content-stretch flex items-start relative shrink-0 w-full">
                  <div className="flex flex-[1_0_0] flex-col font-['BancoDoBrasil_Textos:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#686c73] text-[14px] tracking-[0.196px]">
                    <p className="css-4hzbpn leading-[1.125]">Realizado sem interrupção</p>
                  </div>
                </div>
              </div>
            </div>
          </label>
        </div>
        {errors.periodicidade && (
          <p className="text-red-500 text-xs mt-1">{errors.periodicidade.message as string}</p>
        )}
      </div>

      {/* Campo 9: Nome do template na META */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
          {numeroTemplateMeta} Qual o nome do template na META?
        </p>
        <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
          <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center pb-[7px] pl-[12px] pr-[4px] pt-[8px] relative size-full">
                <input
                  type="text"
                  {...register('templateMeta', { required: 'Campo obrigatório' })}
                  placeholder="Ex: template_boas_vindas"
                  className="flex-[1_0_0] bg-transparent font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px] outline-none placeholder:text-[#686c73]"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
        </div>
        {errors.templateMeta && (
          <p className="text-red-500 text-xs mt-1">{errors.templateMeta.message as string}</p>
        )}
      </div>

      {/* Campo 10: Categoria do Ativo na Meta (condicional) */}
      {tipoHU === 'Ativo' && (
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <SelectFieldForm
            control={control}
            name="categoriaAtivo"
            label={`${numeroCategoriaAtivo} Qual a categoria do Ativo na Meta ?`}
            rules={{ required: tipoHU === 'Ativo' ? 'Campo obrigatório' : false }}
            options={[
              { value: 'Autenticação', label: 'Autenticação' },
              { value: 'Marketing', label: 'Marketing' },
              { value: 'Utilidade', label: 'Utilidade' },
            ]}
            errorMessage={errors.categoriaAtivo?.message as string}
          />
        </div>
      )}

      {/* Campos específicos para Transação */}
      {tipoHU === 'Transação' && (
        <>
          {/* Campo: Link para acesso ao Plano de Requisitos */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
              {numeroPlanoRequisitos} Link para acesso ao Plano de Requisitos:
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

          {/* Campo: Ausência - Plano de Requisitos */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
              {numeroAusenciaPlano} Ausência - Plano de Requisitos:
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
    </div>
  );
}