
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface Passo4CanalGatilhoProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  canaisSelecionados: string;
  onCanaisChange: (values: string[]) => void;
}

export function Passo4CanalGatilho({
  register,
  errors
}: Passo4CanalGatilhoProps) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start w-full max-w-[672px]">
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
            15. Qual é o Input de Gatilho?
          </p>
          <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
            <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pb-[7px] pl-[12px] pr-[4px] pt-[8px] relative size-full">
                  <input
                    type="text"
                    {...register('inputGatilho')}
                    placeholder="Exemplo: Saldo"
                    className="flex-[1_0_0] bg-transparent font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px] outline-none placeholder:text-[#686c73]"
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
          </div>
          {errors.inputGatilho && (
            <p className="text-red-500 text-xs mt-1">{errors.inputGatilho.message as string}</p>
          )}
        </div>
      </div>

      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
            16. Link do Figma:
          </p>
          <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
            <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center pb-[7px] pt-[8px] px-[16px] relative size-full">
                  <input
                    type="url"
                    {...register('linkFigma')}
                    placeholder="https://www.figma.com/file/..."
                    className="flex-[1_0_0] bg-transparent font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px] outline-none placeholder:text-[rgba(108,112,119,0.5)]"
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
          </div>
        </div>

        <div className="bg-[#f0f2ff] h-[170px] relative rounded-[10px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[#4a3aff] border-solid inset-0 pointer-events-none rounded-[10px]" />
          <div className="content-stretch flex flex-col gap-[12px] items-start pb-px pt-[25px] px-[25px] relative size-full">
            <div className="h-[28px] relative shrink-0 w-full">
              <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Bold',sans-serif] leading-[1.125] left-0 not-italic text-[#4a3aff] text-[16px] top-[-1px] tracking-[0.08px]">
                ✅ Revisão Final
              </p>
            </div>
            <div className="relative shrink-0 w-full">
              <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.4] not-italic text-[#6f6c90] text-[14px] w-full">
                A atualização do Catálogo de Jornadas ocorre às sextas-feiras e contempla somente as jornadas com status “aprovada”. Caso sejam identificadas inconsistências ou necessidade de ajustes, a Governança poderá devolver a jornada para correções.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
