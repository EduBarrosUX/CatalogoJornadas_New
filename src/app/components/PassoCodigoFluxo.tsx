import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface PassoCodigoFluxoProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

export function PassoCodigoFluxo({ register, errors }: PassoCodigoFluxoProps) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
          4. Qual o código do fluxo que consta no catálogo de jornadas?
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
                    {...register('codigoFluxoCatalogo', { required: true })}
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
    </div>
  );
}
