import { UseFormRegister, FieldErrors, UseFormWatch, UseFormSetValue } from 'react-hook-form';
import svgPathsRadio from '@/imports/svg-st0q96v9y6';

interface PassoHashInicialProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
  watch: UseFormWatch<any>;
  setValue: UseFormSetValue<any>;
}

export function PassoHashInicial({ register, errors, watch, setValue }: PassoHashInicialProps) {
  const hashPermanece = watch('hashPermanece');
  
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      {/* Pergunta 5: A Hash Inicial do fluxo permanece a mesma? */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
          5. A Hash Inicial do fluxo permanece a mesma?
        </p>
        
        <div className="content-stretch flex gap-[16px] items-start shrink-0">
          {/* Opção: Sim */}
          <div 
            className="content-stretch flex gap-[8px] items-start py-[8px] rounded-[2px] shrink-0 cursor-pointer"
            onClick={() => setValue('hashPermanece', 'sim')}
          >
            <div className="relative shrink-0 size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={hashPermanece === 'sim' ? svgPathsRadio.p4501f00 : svgPathsRadio.p26f9ce00} fill={hashPermanece === 'sim' ? '#2D37F5' : '#313338'} />
              </svg>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[2px] shrink-0">
              <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic shrink-0 text-[#111214] text-[16px] tracking-[0.08px] whitespace-pre-wrap">
                Sim
              </p>
            </div>
          </div>

          {/* Opção: Não */}
          <div 
            className="content-stretch flex gap-[8px] items-start py-[8px] rounded-[2px] shrink-0 cursor-pointer"
            onClick={() => setValue('hashPermanece', 'nao')}
          >
            <div className="relative shrink-0 size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={hashPermanece === 'nao' ? svgPathsRadio.p4501f00 : svgPathsRadio.p26f9ce00} fill={hashPermanece === 'nao' ? '#2D37F5' : '#313338'} />
              </svg>
            </div>
            <div className="content-stretch flex flex-col items-start pt-[2px] shrink-0">
              <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic shrink-0 text-[#111214] text-[16px] tracking-[0.08px] whitespace-pre-wrap">
                Não
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Se hash NÃO permanece: Campos para nova hash */}
      {hashPermanece === 'nao' && (
        <>
          {/* Nome da nova Hash Inicial */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
              Informe qual o nome da nova Hash Inicial:
            </p>
            <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#686c73] text-[12px] tracking-[0.06px] w-full">
              Ex: consultar_prazo_emprestimo
            </p>
            
            <div className="bg-[#f0f2f4] content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
              <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center pb-[7px] pt-[8px] px-[12px] relative size-full">
                    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                      <input
                        type="text"
                        placeholder="Ex: consultar_prazo_emprestimo"
                        {...register('novaHashNome', { required: hashPermanece === 'nao' })}
                        className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#111214] text-[16px] tracking-[0.08px] bg-transparent border-none outline-none w-full placeholder:text-[#686c73]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
            </div>
            
            {errors.novaHashNome && (
              <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#e3111f] text-[12px]">
                Este campo é obrigatório
              </p>
            )}
          </div>

          {/* Código da nova Hash Inicial */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
              Informe o código da nova Hash Inicial:
            </p>
            <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#686c73] text-[12px] tracking-[0.06px] w-full">
              Ex: d823ab05-639c-11ea-bff3-005056924583
            </p>
            
            <div className="bg-[#f0f2f4] content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
              <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center pb-[7px] pt-[8px] px-[12px] relative size-full">
                    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                      <input
                        type="text"
                        placeholder="Ex: d823ab05-639c-11ea-bff3-005056924583"
                        {...register('novaHashCodigo', { required: hashPermanece === 'nao' })}
                        className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#111214] text-[16px] tracking-[0.08px] bg-transparent border-none outline-none w-full placeholder:text-[#686c73]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
            </div>
            
            {errors.novaHashCodigo && (
              <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#e3111f] text-[12px]">
                Este campo é obrigatório
              </p>
            )}
          </div>
        </>
      )}

      {/* Campos comuns para SIM e NÃO */}
      {hashPermanece && (
        <>
          {/* Data da alteração */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
              6. Qual a data da alteração?
            </p>
            
            <div className="bg-[#f0f2f4] content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
              <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center pb-[7px] pt-[8px] px-[12px] relative size-full">
                    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                      <input
                        type="text"
                        placeholder="DD/MM/AAAA"
                        {...register('dataAlteracao', { required: true })}
                        className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#111214] text-[16px] tracking-[0.08px] bg-transparent border-none outline-none w-full placeholder:text-[#686c73]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
            </div>
            
            {errors.dataAlteracao && (
              <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#e3111f] text-[12px]">
                Este campo é obrigatório
              </p>
            )}
          </div>

          {/* Detalhes das alterações */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
              Detalhe as alterações que foram realizadas:
            </p>
            <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#686c73] text-[12px] tracking-[0.06px] w-full">
              Ex: Alteração para correção técnica, UX, Atualização de Conteúdo, etc e detalhe o que foi feito
            </p>
            
            <div className="bg-[#f0f2f4] content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 w-full">
              <div className="bg-[#f0f2f4] relative rounded-[4px] shrink-0 w-full min-h-[120px]">
                <div className="flex flex-row items-start size-full">
                  <div className="content-stretch flex gap-[8px] items-start pb-[7px] pt-[8px] px-[12px] relative size-full">
                    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
                      <textarea
                        placeholder="Descreva as alterações realizadas..."
                        {...register('detalhesAlteracao', { required: true })}
                        className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-[100px] min-w-px not-italic relative text-[#111214] text-[16px] tracking-[0.08px] bg-transparent border-none outline-none w-full placeholder:text-[#686c73] resize-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
            </div>
            
            {errors.detalhesAlteracao && (
              <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#e3111f] text-[12px]">
                Este campo é obrigatório
              </p>
            )}
          </div>

          {/* Link do Figma */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
              Link do Figma:
            </p>
            
            <div className="bg-[#f0f2f4] content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
              <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[8px] items-center pb-[7px] pt-[8px] px-[12px] relative size-full">
                    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                      <input
                        type="url"
                        placeholder="https://figma.com/file/..."
                        {...register('linkFigmaAlteracao', {
                          required: 'Campo obrigatório',
                          pattern: {
                            value: /^https:\/\/.+/i,
                            message: 'Informe uma URL válida iniciando com https://',
                          },
                        })}
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
                {errors.linkFigmaAlteracao.message as string}
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
