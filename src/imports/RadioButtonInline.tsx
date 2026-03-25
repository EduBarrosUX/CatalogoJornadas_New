import svgPaths from "./svg-vrd13utf86";

function CheckboxIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checkbox Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p26f9ce00} fill="var(--fill-0, #313338)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative self-stretch shrink-0" data-name="Content">
      <div className="flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-full">
        <p className="leading-[1.125] whitespace-pre-wrap">Data</p>
      </div>
    </div>
  );
}

function Option() {
  return (
    <div className="content-stretch flex gap-[8px] items-start py-[8px] relative rounded-[2px] shrink-0" data-name="Option 1">
      <CheckboxIcon />
      <Content />
    </div>
  );
}

function CheckboxIcon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checkbox Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p26f9ce00} fill="var(--fill-0, #313338)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative self-stretch shrink-0" data-name="Content">
      <div className="flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-full">
        <p className="leading-[1.125] whitespace-pre-wrap">Período</p>
      </div>
    </div>
  );
}

function Option1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start py-[8px] relative rounded-[2px] shrink-0" data-name="Option 2">
      <CheckboxIcon1 />
      <Content1 />
    </div>
  );
}

function Component4PxGroup() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="4px Group">
      <Option />
      <Option1 />
    </div>
  );
}

export default function RadioButtonInline() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Radio Button Inline">
      <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] min-w-full not-italic relative shrink-0 text-[#686c73] text-[14px] tracking-[0.07px] w-[min-content] whitespace-pre-wrap">Filtrar por data ou período</p>
      <Component4PxGroup />
    </div>
  );
}