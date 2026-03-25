import svgPaths from "./svg-iwcddvsycn";

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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px pt-[2px] relative" data-name="Content">
      <div className="flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-full">
        <p className="leading-[1.125] whitespace-pre-wrap">WhatsApp PF</p>
      </div>
    </div>
  );
}

function Option() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Option 1">
      <div aria-hidden="true" className="absolute border border-[#2d37f5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
        <CheckboxIcon />
        <Content1 />
      </div>
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

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px pt-[2px] relative" data-name="Content">
      <div className="flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-full">
        <p className="leading-[1.125] whitespace-pre-wrap">WhatsApp PJ</p>
      </div>
    </div>
  );
}

function Option1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Option 2">
      <div aria-hidden="true" className="absolute border border-[#b4b9c1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
        <CheckboxIcon1 />
        <Content2 />
      </div>
    </div>
  );
}

function CheckboxIcon2() {
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px pt-[2px] relative" data-name="Content">
      <div className="flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-full">
        <p className="leading-[1.125] whitespace-pre-wrap">App BB</p>
      </div>
    </div>
  );
}

function Option2() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Option 3">
      <div aria-hidden="true" className="absolute border border-[#b4b9c1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
        <CheckboxIcon2 />
        <Content3 />
      </div>
    </div>
  );
}

function CheckboxIcon3() {
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

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px pt-[2px] relative" data-name="Content">
      <div className="flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-full">
        <p className="leading-[1.125] whitespace-pre-wrap">Outros</p>
      </div>
    </div>
  );
}

function Option3() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Option 4">
      <div aria-hidden="true" className="absolute border border-[#b4b9c1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
        <CheckboxIcon3 />
        <Content4 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <Option />
      <Option1 />
      <Option2 />
      <Option3 />
    </div>
  );
}

export default function CheckboxGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Checkbox Group">
      <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full whitespace-pre-wrap">17. Em qual canal esse fluxo será disponibilizado ?</p>
      <Content />
    </div>
  );
}