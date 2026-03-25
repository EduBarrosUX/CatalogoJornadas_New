import svgPaths from "@/imports/svg-6nf3xt6wyt";

interface DateRangeFieldsProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
}

export function DateRangeFields({ startDate, endDate, onStartDateChange, onEndDateChange }: DateRangeFieldsProps) {
  const formatDateDisplay = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      {/* Labels */}
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 flex-1" data-name="Label">
          <div className="flex flex-col font-['BancoDoBrasil_Textos:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#686c73] text-[14px] w-full">
            <p className="css-4hzbpn leading-[24px]">Data de Início</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 flex-1" data-name="Label">
          <div className="flex flex-col font-['BancoDoBrasil_Textos:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#686c73] text-[14px] w-full">
            <p className="css-4hzbpn leading-[24px]">Data de Término</p>
          </div>
        </div>
      </div>

      {/* Date Inputs */}
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
        {/* Data de Início */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 flex-1" data-name="Date Field / Regular">
          <div className="bg-[#f0f2f4] content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Group">
            <div className="bg-[#f0f2f4] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Input">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center pb-[7px] pt-[8px] px-[12px] relative w-full">
                  <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => onStartDateChange(e.target.value)}
                      className="flex-1 bg-transparent font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[16px] text-black tracking-[0.08px] outline-none"
                      placeholder="De: DD/MM/AAAA"
                    />
                  </div>
                  <div className="relative shrink-0 size-[24px]" data-name="Icone">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p3079f800} fill="#888D95" opacity="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#b4b9c1] h-px shrink-0 w-full" data-name="Border Botton" />
          </div>
        </div>

        {/* Data de Término */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 flex-1" data-name="Date Field / Regular">
          <div className="bg-[#f0f2f4] content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Group">
            <div className="bg-[#f0f2f4] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Input">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center pb-[7px] pt-[8px] px-[12px] relative w-full">
                  <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => onEndDateChange(e.target.value)}
                      className="flex-1 bg-transparent font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[16px] text-black tracking-[0.08px] outline-none"
                      placeholder="Até: DD/MM/AAAA"
                    />
                  </div>
                  <div className="relative shrink-0 size-[24px]" data-name="Icone">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p3079f800} fill="#888D95" opacity="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#b4b9c1] h-px shrink-0 w-full" data-name="Border Botton" />
          </div>
        </div>
      </div>
    </div>
  );
}
