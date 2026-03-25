interface PeriodButtonGroupProps {
  selectedPeriod: string;
  onPeriodChange: (period: string) => void;
}

export function PeriodButtonGroup({ selectedPeriod, onPeriodChange }: PeriodButtonGroupProps) {
  const periods = [
    { value: 'hoje', label: 'Hoje' },
    { value: '7dias', label: 'Últimos 7 dias' },
    { value: '30dias', label: 'Últimos 30 dias' },
    { value: '1ano', label: '1 Ano' }
  ];

  return (
    <div className="content-stretch flex items-center relative shadow-[0px_2px_5px_0px_rgba(38,51,77,0.03)] shrink-0" data-name="Group Button">
      {periods.map((period, index) => {
        const isSelected = selectedPeriod === period.value;
        const isFirst = index === 0;
        const isLast = index === periods.length - 1;
        
        return (
          <button
            key={period.value}
            onClick={() => onPeriodChange(period.value)}
            className={`
              content-stretch flex h-[40px] items-center justify-center p-[15px] relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity
              ${isFirst ? 'pl-[20px] pr-[15px] rounded-tl-[5px]' : ''}
              ${isLast ? 'pl-[15px] pr-[20px] rounded-tr-[5px]' : ''}
              ${isSelected ? 'bg-[#4668ff]' : 'bg-[#f0f2f4]'}
            `}
            data-name={`Button ${index + 1}`}
          >
            <div 
              aria-hidden="true" 
              className={`
                absolute border-2 border-solid inset-[-1px] pointer-events-none
                ${isFirst ? 'rounded-tl-[6px]' : ''}
                ${isLast ? 'rounded-tr-[6px]' : ''}
                ${isSelected ? 'border-[#f5f6f7]' : 'border-[rgba(180,185,193,0.09)]'}
              `}
            />
            <p className={`
              css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[16px] text-center tracking-[0.08px]
              ${isSelected ? 'text-[#f9f9f9]' : 'text-[#646464]'}
            `}>
              {period.label}
            </p>
          </button>
        );
      })}
    </div>
  );
}
