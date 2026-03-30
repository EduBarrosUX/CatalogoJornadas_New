import { UseFormRegister, FieldErrors, UseFormWatch, UseFormSetValue } from 'react-hook-form';
import svgPathsRadio from '@/imports/svg-st0q96v9y6';
import { DateInput } from '@/app/components/DateInput';

interface PassoAlteracaoCompletoProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
  watch: UseFormWatch<any>;
  setValue: UseFormSetValue<any>;
}

export function PassoAlteracaoCompleto({ register, errors, watch, setValue }: PassoAlteracaoCompletoProps) {
  const hashPermanece = watch('hashPermanece');
  const alteracaoReferenteTRN = watch('alteracaoReferenteTRN');

  const isTRNSim = alteracaoReferenteTRN === 'sim';
  const isTRNNao = alteracaoReferenteTRN === 'nao';
  const showPerguntaHash = isTRNSim || isTRNNao;

  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
          6. Qual o código do fluxo que consta no catálogo de jornadas ?
        </p>
        <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#686c73] text-[12px] tracking-[0.06px] w-full">
          ESCREVA A SIGLA E NÚMERO - Ex: RME0986, TRN0128, IND0003
        </p>
        <div className="bg-[#f0f2f4] content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
          <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[8px] items-center pb-[7px] pt-[8px] px-[12px] relative size-full">
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                  <input
                    type="text"
                    placeholder="Ex: RME0986"
                    {...register('codigoFluxoCatalogo', { required: 'Campo obrigatório' })}
                    className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#111214] text-[16px] tracking-[0.08px] bg-transparent border-none outline-none w-full placeholder:text-[#686c73]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
        </div>
        {errors.codigoFluxoCatalogo && (
          <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#e3111f] text-[12px]">
            Este campo é obrigatório
          </p>
        )}
      </div>

      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
          7. A alteração é referente a uma TRN?
        </p>
        <div className="content-stretch flex gap-[16px] items-start shrink-0">
          <div className="content-stretch flex gap-[8px] items-start py-[8px] rounded-[2px] shrink-0 cursor-pointer" onClick={() => setValue('alteracaoReferenteTRN', 'sim')}>
            <div className="relative shrink-0 size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={alteracaoReferenteTRN === 'sim' ? svgPathsRadio.p4501f00 : svgPathsRadio.p26f9ce00} fill={alteracaoReferenteTRN === 'sim' ? '#2D37F5' : '#313338'} />
              </svg>
            </div>
            <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic text-[#111214] text-[16px] tracking-[0.08px]">Sim</p>
          </div>
          <div className="content-stretch flex gap-[8px] items-start py-[8px] rounded-[2px] shrink-0 cursor-pointer" onClick={() => setValue('alteracaoReferenteTRN', 'nao')}>
            <div className="relative shrink-0 size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={alteracaoReferenteTRN === 'nao' ? svgPathsRadio.p4501f00 : svgPathsRadio.p26f9ce00} fill={alteracaoReferenteTRN === 'nao' ? '#2D37F5' : '#313338'} />
              </svg>
            </div>
            <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic text-[#111214] text-[16px] tracking-[0.08px]">Não</p>
          </div>
        </div>
      </div>

      {isTRNSim && (
        <>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
              8. Link para acesso ao plano de requisitos:
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
          </div>

          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
              9. Ausência - plano de requisitos:
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

      {showPerguntaHash && (
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
            {isTRNSim ? '10.' : '8.'} A hash inicial do fluxo permanece a mesma?
          </p>
          <div className="content-stretch flex gap-[16px] items-start shrink-0">
            <div className="content-stretch flex gap-[8px] items-start py-[8px] rounded-[2px] shrink-0 cursor-pointer" onClick={() => setValue('hashPermanece', 'sim')}>
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={hashPermanece === 'sim' ? svgPathsRadio.p4501f00 : svgPathsRadio.p26f9ce00} fill={hashPermanece === 'sim' ? '#2D37F5' : '#313338'} />
                </svg>
              </div>
              <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic text-[#111214] text-[16px] tracking-[0.08px]">Sim</p>
            </div>
            <div className="content-stretch flex gap-[8px] items-start py-[8px] rounded-[2px] shrink-0 cursor-pointer" onClick={() => setValue('hashPermanece', 'nao')}>
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={hashPermanece === 'nao' ? svgPathsRadio.p4501f00 : svgPathsRadio.p26f9ce00} fill={hashPermanece === 'nao' ? '#2D37F5' : '#313338'} />
                </svg>
              </div>
              <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic text-[#111214] text-[16px] tracking-[0.08px]">Não</p>
            </div>
          </div>
        </div>
      )}

      {showPerguntaHash && hashPermanece === 'sim' && (
        <>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
              {isTRNSim ? '11.' : '9.'} Qual a data da alteração?
            </p>
            <DateInput register={register} name="dataAlteracao" rules={{ required: 'Campo obrigatório' }} />
          </div>

          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
              {isTRNSim ? '12.' : '10.'} Detalhe as alterações que foram realizadas:
            </p>
            <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#686c73] text-[12px] tracking-[0.06px] w-full">
              Correção técnica, atualização de conteúdo, ajuste de mídia e outros. Detalhe de forma breve
            </p>
            <div className="bg-[#f0f2f4] content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full">
              <div className="bg-[#f0f2f4] relative rounded-[4px] shrink-0 w-full min-h-[120px]">
                <div className="flex flex-row items-start size-full">
                  <div className="content-stretch flex gap-[8px] items-start pb-[7px] pt-[8px] px-[12px] relative size-full">
                    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
                      <textarea
                        placeholder="Descreva as alterações realizadas..."
                        {...register('detalhesAlteracao', { required: 'Campo obrigatório' })}
                        className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-[100px] min-w-px not-italic relative text-[#111214] text-[16px] tracking-[0.08px] bg-transparent border-none outline-none w-full placeholder:text-[#686c73] resize-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
            </div>
          </div>
        </>
      )}

      {showPerguntaHash && hashPermanece === 'nao' && (
        <>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
              {isTRNSim ? '11.' : '9.'} Qual o nome da hash inicial?
            </p>
            <div className="bg-[#f0f2f4] content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
              <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center pb-[7px] pt-[8px] px-[12px] relative size-full">
                    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                      <input type="text" placeholder="Ex: consultar_prazo_emprestimo" {...register('novaHashNome', { required: 'Campo obrigatório' })} className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#111214] text-[16px] tracking-[0.08px] bg-transparent border-none outline-none w-full placeholder:text-[#686c73]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
            </div>
          </div>

          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
              {isTRNSim ? '12.' : '10.'} Qual a hash inicial (UUID/Hash) ?
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
            <div className="bg-[#f0f2f4] content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
              <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center pb-[7px] pt-[8px] px-[12px] relative size-full">
                    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                      <input type="text" placeholder="Ex: d823ab05-639c-11ea-bff3-005056924583" {...register('novaHashCodigo', { required: 'Campo obrigatório' })} className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#111214] text-[16px] tracking-[0.08px] bg-transparent border-none outline-none w-full placeholder:text-[#686c73]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
            </div>
          </div>

          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
              {isTRNSim ? '13.' : '11.'} Qual a data da alteração?
            </p>
            <DateInput register={register} name="dataAlteracao" rules={{ required: 'Campo obrigatório' }} />
          </div>

          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
              {isTRNSim ? '14.' : '12.'} Detalhe as alterações que foram realizadas:
            </p>
            <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#686c73] text-[12px] tracking-[0.06px] w-full">
              Correção técnica, atualização de conteúdo, ajuste de mídia e outros. Detalhe de forma breve
            </p>
            <div className="bg-[#f0f2f4] content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full">
              <div className="bg-[#f0f2f4] relative rounded-[4px] shrink-0 w-full min-h-[120px]">
                <div className="flex flex-row items-start size-full">
                  <div className="content-stretch flex gap-[8px] items-start pb-[7px] pt-[8px] px-[12px] relative size-full">
                    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
                      <textarea
                        placeholder="Descreva as alterações realizadas..."
                        {...register('detalhesAlteracao', { required: 'Campo obrigatório' })}
                        className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-[100px] min-w-px not-italic relative text-[#111214] text-[16px] tracking-[0.08px] bg-transparent border-none outline-none w-full placeholder:text-[#686c73] resize-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
            </div>
          </div>
        </>
      )}

      {showPerguntaHash && (hashPermanece === 'sim' || hashPermanece === 'nao') && (
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
            {(isTRNSim
              ? (hashPermanece === 'sim' ? '13.' : '15.')
              : (hashPermanece === 'sim' ? '11.' : '13.'))} Link do figma:
          </p>
          <div className="bg-[#f0f2f4] content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
            <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center pb-[7px] pt-[8px] px-[12px] relative size-full">
                  <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                    <input
                      type="text"
                      placeholder="https://figma.com/file/..."
                      {...register('linkFigmaAlteracao', { required: 'Campo obrigatório' })}
                      className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#111214] text-[16px] tracking-[0.08px] bg-transparent border-none outline-none w-full placeholder:text-[#686c73]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
          </div>
          {errors.linkFigmaAlteracao && (
            <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#e3111f] text-[12px]">
              Este campo é obrigatório
            </p>
          )}
        </div>
      )}
    </div>
  );
}