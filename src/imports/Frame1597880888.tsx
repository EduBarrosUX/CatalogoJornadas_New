import svgPaths from "./svg-hv9yqctnmg";

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
        <p className="leading-[1.125] whitespace-pre-wrap">Utiliza IA Generativa</p>
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

function CheckboxGroupInline() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Checkbox Group inline">
      <Content />
    </div>
  );
}

function CheckboxIcon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checkbox Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p12c0c180} fill="var(--fill-0, #313338)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative self-stretch shrink-0" data-name="Content">
      <div className="flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-full">
        <p className="leading-[1.125] whitespace-pre-wrap">Utiliza IA Generativa</p>
      </div>
    </div>
  );
}

function Option1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start py-[8px] relative rounded-[2px] shrink-0" data-name="Option 1">
      <CheckboxIcon1 />
      <Content3 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Content">
      <Option1 />
    </div>
  );
}

function CheckboxGroupInline1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Checkbox Group inline">
      <Content2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
      <CheckboxGroupInline />
      <CheckboxGroupInline1 />
    </div>
  );
}