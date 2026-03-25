import { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form';
import { CheckboxGroup } from '@/app/components/Checkbox';

interface Passo3TransacaoInducaoProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  canaisSelecionados: string[];
  onCanaisChange: (values: string[]) => void;
  tipoHU?: 'Transação' | 'Ativo' | 'Indução' | 'Informacional';
  watch: UseFormWatch<any>;
}

export function Passo3TransacaoInducao({ 
  register, 
  errors, 
  canaisSelecionados, 
  onCanaisChange,
  tipoHU,
  watch
}: Passo3TransacaoInducaoProps) {
  
  const descricaoFluxo = watch('descricaoFluxo') || '';
  const caracteresRestantes = 500 - descricaoFluxo.length;

  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start w-full max-w-[672px]">
      {/* Campo 11: Título do Fluxo - COPIADO DO ATIVO */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        {/* Label */}
        <div className="h-[40px] relative shrink-0 w-full">
          <p className="absolute css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] left-0 not-italic text-[#111214] text-[14px] top-0 tracking-[0.07px] w-[672px]">
            11. Crie um título curto e objetivo pro fluxo. Este nome deve representá-lo e será utilizado no Catálogo de Jornadas: *
          </p>
        </div>

        {/* Aviso amarelo com informações */}
        <div className="bg-[#ffdf9f] h-[280px] relative rounded-[10px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[#ffb31a] border-solid inset-0 pointer-events-none rounded-[10px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[22px] items-center p-[16px] relative size-full">
              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative">
                <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular','Noto_Sans:Regular',sans-serif] leading-[0] min-h-px min-w-px relative text-[#686c73] text-[12px] tracking-[0.168px]">
                  <span className="font-['BancoDoBrasil_Textos:Bold','Noto_Sans:Regular',sans-serif] leading-[1.125]">
                    Informação
                    <br />
                    <br />
                  </span>
                  <span className="leading-[1.125]">
                    Inicie com Tipo de jornada + Público seguindo o exemplo:
                    <br />
                    <br />
                  </span>
                  <span className="font-['BancoDoBrasil_Textos:Bold','Noto_Sans:Regular',sans-serif] leading-[1.125]">
                    Ativo:
                  </span>
                  <span className="leading-[1.125]">
                    <br />
                    {` - Ativo PF → \"Ativo PF – Título\"`}
                    <br />
                    {` - Ativo PJ → \"Ativo PJ – Título\"`}
                    <br />
                    <br />
                  </span>
                  <span className="font-['BancoDoBrasil_Textos:Bold','Noto_Sans:Regular',sans-serif] leading-[1.125]">
                    Transação:
                  </span>
                  <span className="leading-[1.125]">
                    <br />
                    {` - Transação – Título`}
                    <br />
                    <br />
                  </span>
                  <span className="font-['BancoDoBrasil_Textos:Bold','Noto_Sans:Regular',sans-serif] leading-[1.125]">
                    Indução:
                  </span>
                  <span className="leading-[1.125]">
                    <br />
                    {` - Indução Saudação → \"Indução Saudação – Título\"`}
                    <br />
                    {` - Indução Feedback → \"Indução Feedback – Título\"`}
                    <br />
                    {` - Indução QR Code → \"Indução QR Code – Título\"`}
                    <br />
                    {` - Indução QR Code Check-in → \"Indução QR Code - Check-in Título do Evento\"`}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Campo de Input */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
            <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pb-[7px] pl-[12px] pr-[4px] pt-[8px] relative size-full">
                  <input
                    type="text"
                    {...register('tituloFluxo', { required: 'Campo obrigatório' })}
                    placeholder={
                      tipoHU === 'Transação' 
                        ? 'Transação - Digite o Titulo' 
                        : 'Indução Saudação - Digite o Titulo'
                    }
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

      {/* Campo 12: Descrição do Fluxo - COPIADO DO ATIVO COM LINK */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        {/* Label */}
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] min-w-full not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-[min-content]">
          12. Faça uma descrição do fluxo, detalhando sobre o que ele aborda: *
        </p>

        {/* Aviso amarelo com link do agente */}
        <div className="bg-[#ffdf9f] h-[138px] relative rounded-[10px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[#ffb31a] border-solid inset-0 pointer-events-none rounded-[10px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[22px] items-center p-[16px] relative size-full">
              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative">
                <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Bold',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[#686c73] text-[12px] tracking-[0.168px]">
                  <span className="leading-[1.125]">
                    Informação
                    <br />
                    <br />
                    💡 Utilize o agente{' '}
                    <a 
                      href="https://m365.cloud.microsoft/chat/?titleId=T_c2a294af-e20d-cedf-209c-95d137aff3d5" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="[text-decoration-skip-ink:none] decoration-solid text-[#4668ff] underline"
                    >
                      Descreve Aí
                    </a>
                    {' '}para auxiliá-lo na descrição:
                    <br />
                    <br />
                  </span>
                  <a 
                    href="https://m365.cloud.microsoft/chat/?titleId=T_c2a294af-e20d-cedf-209c-95d137aff3d5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="[text-decoration-skip-ink:none] decoration-solid leading-[1.125] text-[#4668ff] underline"
                  >
                    https://m365.cloud.microsoft/chat/?titleId=T_c2a294af-e20d-cedf-209c-95d137aff3d5
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TextArea */}
        <div className="bg-[#f0f2f4] content-stretch flex flex-col h-[191px] items-start overflow-clip relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
          <div className="bg-[#f0f2f4] flex-[1_0_0] min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] w-full">
            <div className="content-stretch flex items-start pt-[8px] px-[12px] relative size-full">
              <textarea
                {...register('descricaoFluxo', { 
                  required: 'Campo obrigatório',
                  maxLength: { value: 500, message: 'Máximo de 500 caracteres' }
                })}
                placeholder="Descreva detalhadamente o que o fluxo aborda..."
                className="flex-[1_0_0] bg-transparent font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#686c73] text-[18px] outline-none placeholder:text-[#686c73] resize-none w-full h-[160px]"
                maxLength={500}
              />
            </div>
          </div>
          
          {/* Resize Handle */}
          <div className="h-[11px] relative shrink-0 w-full">
            <div className="absolute bg-[#f0f2f4] inset-0" />
            <div className="absolute bottom-[-0.49px] contents h-[8.485px] right-[-16.8px] w-[46.434px]">
              <div className="absolute bottom-[-0.49px] flex items-center justify-center right-[3.59px] size-[4.95px]" style={{ '--transform-inner-width': '0', '--transform-inner-height': '0' } as React.CSSProperties}>
                <div className="flex-none rotate-45 scale-x-35 scale-y-35">
                  <div className="bg-[#888d95] h-[16.965px] w-[2.828px]" />
                </div>
              </div>
              <div className="absolute bottom-[0.22px] flex items-center justify-center right-[4.29px] size-[7.778px]" style={{ '--transform-inner-width': '0', '--transform-inner-height': '0' } as React.CSSProperties}>
                <div className="flex-none rotate-45 scale-x-35 scale-y-35">
                  <div className="bg-[#888d95] h-[28.275px] w-[2.828px]" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f0f2f4] h-[4px] shrink-0 w-full" />
          <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
        </div>

        {/* Contador de caracteres */}
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-w-full not-italic relative shrink-0 text-[#686c73] text-[14px] tracking-[0.196px] w-[min-content]">
          {caracteresRestantes} caracteres restantes
        </p>

        {errors.descricaoFluxo && (
          <p className="text-red-500 text-xs mt-1">{errors.descricaoFluxo.message as string}</p>
        )}
      </div>
    </div>
  );
}