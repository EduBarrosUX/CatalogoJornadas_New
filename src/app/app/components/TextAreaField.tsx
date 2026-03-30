import { forwardRef } from 'react';

interface TextAreaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  ({ label, error, className = '', rows = 4, ...props }, ref) => {
    return (
      <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
        {label && (
          <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
            {label}
          </p>
        )}
        <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
          <div className="bg-[#f0f2f4] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
            <div className="flex flex-row items-stretch size-full">
              <div className="content-stretch flex items-stretch pb-[7px] pl-[12px] pr-[4px] pt-[8px] relative size-full">
                <div className="content-stretch flex flex-[1_0_0] items-stretch min-h-px min-w-px relative">
                  <textarea
                    ref={ref}
                    rows={rows}
                    className={`flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic text-[16px] text-[#111214] tracking-[0.08px] bg-transparent border-none outline-none w-full resize-none placeholder:text-[rgba(108,112,119,0.5)] placeholder:font-['BancoDoBrasil_Textos:Regular',sans-serif] ${className}`}
                    {...props}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
        </div>
        {error && (
          <p className="text-red-500 text-sm mt-1">{error}</p>
        )}
      </div>
    );
  }
);

TextAreaField.displayName = 'TextAreaField';
