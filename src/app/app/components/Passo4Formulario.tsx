
import { UseFormRegister, FieldErrors, UseFormWatch, UseFormSetValue } from 'react-hook-form';
import { useEffect, useRef } from 'react';

interface Passo4FormularioProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  watch: UseFormWatch<any>;
  setValue: UseFormSetValue<any>;
}

/** Placeholder do título para jornadas do tipo Indução (PF/PJ + contexto). */
export function getInducaoTituloPlaceholder(
  publico: string,
  contextoInducao: string,
  inducaoQrModo?: 'nao' | 'sim' | 'padrao' | 'checkin'
): string | null {
  if (publico !== 'PF' && publico !== 'PJ') return null;
  const prefix = publico === 'PJ' ? 'Indução PJ' : 'Indução PF';
  if (contextoInducao === 'Outro') {
    return `${prefix} - Título`;
  }
  if (contextoInducao === 'Saudação') {
    return `${prefix} - Saudação - Título`;
  }
  if (contextoInducao === 'Feedback') {
    return `${prefix} - Feedback - Título`;
  }
  if (contextoInducao === 'QR Code / Link') {
    if (inducaoQrModo === 'checkin' || inducaoQrModo === 'sim') {
      return `${prefix} - QR Code - Check-in - Título`;
    }
    return `${prefix} - QR Code - Título`;
  }
  return null;
}

export function Passo4Formulario({ register, errors, watch, setValue }: Passo4FormularioProps) {
  const descricaoFluxo = watch('descricaoFluxo') || '';
  const caracteresRestantes = 198 - descricaoFluxo.length;
  const publico = watch('publico') || '';
  const tipoHU = watch('tipoHU') || '';
  const contextoInducao = watch('contextoInducao') || '';
  const inducaoQrModo = watch('inducaoQrModo') as 'nao' | 'sim' | 'padrao' | 'checkin' | undefined;
  const tituloFluxo = watch('tituloFluxo') || '';
  const inducaoPlaceholder =
    tipoHU === 'Indução' && contextoInducao && publico
      ? getInducaoTituloPlaceholder(publico, contextoInducao, inducaoQrModo ?? 'padrao')
      : null;
  const tituloPlaceholder =
    inducaoPlaceholder != null
      ? inducaoPlaceholder
      : (publico === 'PF' || publico === 'PJ') && tipoHU === 'Transação'
        ? `Transação ${publico} - Titulo`
        : (publico === 'PF' || publico === 'PJ') && tipoHU === 'Ativo'
          ? `Ativo ${publico} - Titulo`
          : (publico === 'PF' || publico === 'PJ') && tipoHU === 'Informacional'
            ? `Informacional ${publico} - Titulo`
            : 'Digite o título';

  const lastAutoTitleRef = useRef<string>('');
  useEffect(() => {
    if (tituloPlaceholder === 'Digite o título') return;

    const lastAuto = lastAutoTitleRef.current;
    if (tipoHU === 'Indução') {
      setValue('tituloFluxo', tituloPlaceholder, { shouldDirty: true, shouldValidate: true });
      lastAutoTitleRef.current = tituloPlaceholder;
      return;
    }

    // Preenche automaticamente enquanto o usuário não personalizar o campo.
    if (!tituloFluxo.trim() || tituloFluxo === lastAuto) {
      setValue('tituloFluxo', tituloPlaceholder, { shouldDirty: true, shouldValidate: true });
      lastAutoTitleRef.current = tituloPlaceholder;
    }
  }, [tipoHU, tituloFluxo, tituloPlaceholder, setValue]);

  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start w-full max-w-[672px]">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
          16. Crie um título que represente a jornada desenvolvida:
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
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] min-w-full not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.08px] w-[min-content]">
          17. Faça uma descrição do fluxo, detalhando sobre o que ele aborda:
        </p>

        <div className="bg-[#ffdf9f] h-[138px] relative rounded-[10px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[#ffb31a] border-solid inset-0 pointer-events-none rounded-[10px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[22px] items-center p-[16px] relative size-full">
              <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative">
                <div className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Bold',sans-serif] min-h-px min-w-px not-italic relative text-[#686c73] text-[12px] tracking-[0.168px]">
                  <p className="leading-[1.125]">
                    Informação
                  </p>
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
