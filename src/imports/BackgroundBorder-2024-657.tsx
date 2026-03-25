import svgPaths from "./svg-hhkc1panyb";

function CheckboxIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checkbox Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p4501f00} fill="var(--fill-0, #2D37F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative self-stretch shrink-0" data-name="Content">
      <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[16px] tracking-[0.08px] w-full whitespace-pre-wrap">Data</p>
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

function RadioButtonInline() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[243px]" data-name="Radio Button Inline">
      <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] min-w-full not-italic relative shrink-0 text-[#686c73] text-[14px] tracking-[0.07px] w-[min-content] whitespace-pre-wrap">Filtrar por data ou período</p>
      <Component4PxGroup />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px] whitespace-pre-wrap">DD / MM / AAAA</p>
    </div>
  );
}

function Icone() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icone">
          <path d={svgPaths.p3079f800} fill="var(--fill-0, #888D95)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f0f2f4] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[7px] pt-[8px] px-[12px] relative w-full">
          <Content2 />
          <Icone />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="bg-[#f0f2f4] content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Group">
      <Input />
      <div className="bg-[#b4b9c1] h-px shrink-0 w-full" data-name="Border Botton" />
    </div>
  );
}

function DateFieldRegular() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[212px]" data-name="Date Field / Regular">
      <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full whitespace-pre-wrap">Data de Início</p>
      <Group />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px] whitespace-pre-wrap">DD / MM / AAAA</p>
    </div>
  );
}

function Icone1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icone">
          <path d={svgPaths.p3079f800} fill="var(--fill-0, #888D95)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f0f2f4] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[7px] pt-[8px] px-[12px] relative w-full">
          <Content3 />
          <Icone1 />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="bg-[#f0f2f4] content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Group">
      <Input1 />
      <div className="bg-[#b4b9c1] h-px shrink-0 w-full" data-name="Border Botton" />
    </div>
  );
}

function DateFieldRegular1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[250px]" data-name="Date Field / Regular">
      <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full whitespace-pre-wrap">Data de Término</p>
      <Group1 />
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Data">
      <DateFieldRegular />
      <DateFieldRegular1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <RadioButtonInline />
      <Data />
    </div>
  );
}

export default function BackgroundBorder() {
  return (
    <div className="content-stretch flex flex-col items-start py-[16.741px] relative rounded-[8px] size-full" data-name="Background+Border">
      <Frame />
    </div>
  );
}