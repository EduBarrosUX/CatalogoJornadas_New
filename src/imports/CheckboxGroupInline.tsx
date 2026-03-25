import svgPaths from "./svg-naeauob2si";

function CheckboxIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checkbox Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p73e7900} fill="var(--fill-0, #2D37F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative self-stretch shrink-0" data-name="Content">
      <div className="flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-full">
        <p className="leading-[1.125] whitespace-pre-wrap">Label da opção</p>
      </div>
    </div>
  );
}

function Option() {
  return (
    <div className="content-stretch flex gap-[8px] items-start py-[8px] relative rounded-[2px] shrink-0" data-name="Option 1">
      <CheckboxIcon />
      <Content1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Content">
      <Option />
    </div>
  );
}

export default function CheckboxGroupInline() {
  return (
    <div className="bg-[#fefefe] content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Checkbox Group inline">
      <Content />
    </div>
  );
}