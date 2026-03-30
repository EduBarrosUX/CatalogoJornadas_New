import svgPaths from '@/imports/svg-3dkfh9akxg';

interface DateInputProps {
  register: any;
  name: string;
  rules?: any;
  error?: string;
}

export function DateInput({ register, name, rules, error }: DateInputProps) {
  return (
    <>
      <div className="bg-[#f0f2f4] content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
        <div className="bg-[#f0f2f4] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center pb-[7px] pt-[8px] px-[12px] relative w-full">
              <input
                type="date"
                {...register(name, rules)}
                className="flex-[1_0_0] bg-transparent font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-black text-[16px] tracking-[0.08px] outline-none [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-[32px] [&::-webkit-calendar-picker-indicator]:h-[32px] [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0"
              />
              <div className="relative shrink-0 size-[24px] pointer-events-none -ml-[32px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p3079f800} fill="#888D95" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
      </div>
    </>
  );
}