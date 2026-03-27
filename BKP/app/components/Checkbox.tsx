import svgPaths from "@/imports/svg-xa533culqr";

interface CheckboxProps {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function Checkbox({ label, description, checked, onChange }: CheckboxProps) {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full">
      <div
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none rounded-[4px] border border-solid ${
          checked ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'
        }`}
      />
      <label className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <div className="relative shrink-0 size-[24px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="Icon">
              {checked ? (
                <path
                  d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                  fill="#2D37F5"
                  id="Vector"
                />
              ) : (
                <path
                  d={svgPaths.p12c0c180}
                  fill="#313338"
                  id="Vector"
                />
              )}
            </g>
          </svg>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px pb-0 pt-[2px] px-0 relative">
          <div className="flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-full">
            <p className="css-4hzbpn leading-[1.125]">{label}</p>
          </div>
          {description && (
            <div className="content-stretch flex items-start relative shrink-0 w-full">
              <div className="flex flex-[1_0_0] flex-col font-['BancoDoBrasil_Textos:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#686c73] text-[14px] tracking-[0.196px]">
                <p className="css-4hzbpn leading-[1.125]">{description}</p>
              </div>
            </div>
          )}
        </div>
      </label>
    </div>
  );
}

interface CheckboxGroupProps {
  label: string;
  options: Array<{
    value: string;
    label: string;
    description?: string;
  }>;
  selectedValues: string[];
  onChange: (values: string[]) => void;
}

export function CheckboxGroup({ label, options, selectedValues, onChange }: CheckboxGroupProps) {
  const handleCheckboxChange = (value: string, checked: boolean) => {
    if (checked) {
      onChange([...selectedValues, value]);
    } else {
      onChange(selectedValues.filter(v => v !== value));
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
      {label && (
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#686c73] text-[14px] tracking-[0.07px] w-full">
          {label}
        </p>
      )}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        {options.map((option) => (
          <Checkbox
            key={option.value}
            label={option.label}
            description={option.description}
            checked={selectedValues.includes(option.value)}
            onChange={(checked) => handleCheckboxChange(option.value, checked)}
          />
        ))}
      </div>
    </div>
  );
}