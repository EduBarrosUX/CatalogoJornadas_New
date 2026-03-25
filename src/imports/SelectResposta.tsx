import svgPaths from "./svg-ey8emayqfo";

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#6c7077] text-[16px] tracking-[0.08px] whitespace-pre-wrap">Selecione</p>
    </div>
  );
}

function Icone() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icone">
          <path d={svgPaths.pae4800} fill="var(--fill-0, #888D95)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f0f2f4] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pb-[7px] pt-[8px] px-[16px] relative w-full">
          <Content />
          <Icone />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Group">
      <Input />
      <div className="bg-[#b4b9c1] h-px shrink-0 w-full" data-name="Border Botton" />
    </div>
  );
}

function SelectFieldRegular() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] inset-[-4.55%_0.07%_71.21%_0] items-start" data-name="Select Field - Regular">
      <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full whitespace-pre-wrap">Adicionar Nova Resposta</p>
      <Group />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#111214] text-[16px] text-ellipsis tracking-[0.08px] w-full whitespace-nowrap">
        <p className="leading-[1.125] overflow-hidden">Texto</p>
      </div>
    </div>
  );
}

function TextItem() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative" data-name="Text Item">
      <Label />
    </div>
  );
}

function Layout() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Layout">
      <TextItem />
    </div>
  );
}

function MenuItems() {
  return (
    <div className="bg-[#fefefe] min-h-[48px] relative shrink-0 w-full" data-name="Menu Items">
      <div className="flex flex-col justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[16px] py-[10px] relative w-full">
          <Layout />
        </div>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#111214] text-[16px] text-ellipsis tracking-[0.08px] w-full whitespace-nowrap">
        <p className="leading-[1.125] overflow-hidden">Reply Button</p>
      </div>
    </div>
  );
}

function TextItem1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative" data-name="Text Item">
      <Label1 />
    </div>
  );
}

function Layout1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Layout">
      <TextItem1 />
    </div>
  );
}

function MenuItems1() {
  return (
    <div className="bg-[#fefefe] min-h-[48px] relative shrink-0 w-full" data-name="Menu Items">
      <div className="flex flex-col justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[16px] py-[10px] relative w-full">
          <Layout1 />
        </div>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#111214] text-[16px] text-ellipsis tracking-[0.08px] w-full whitespace-nowrap">
        <p className="leading-[1.125] overflow-hidden">List Menssage</p>
      </div>
    </div>
  );
}

function TextItem2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative" data-name="Text Item">
      <Label2 />
    </div>
  );
}

function Layout2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Layout">
      <TextItem2 />
    </div>
  );
}

function MenuItems2() {
  return (
    <div className="bg-[#fefefe] min-h-[48px] relative shrink-0 w-full" data-name="Menu Items">
      <div className="flex flex-col justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[16px] py-[10px] relative w-full">
          <Layout2 />
        </div>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#111214] text-[16px] text-ellipsis tracking-[0.08px] w-full whitespace-nowrap">
        <p className="leading-[1.125] overflow-hidden">Voz</p>
      </div>
    </div>
  );
}

function TextItem3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative" data-name="Text Item">
      <Label3 />
    </div>
  );
}

function Layout3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Layout">
      <TextItem3 />
    </div>
  );
}

function MenuItems3() {
  return (
    <div className="bg-[#fefefe] min-h-[48px] relative shrink-0 w-full" data-name="Menu Items">
      <div className="flex flex-col justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center min-h-[inherit] px-[16px] py-[10px] relative w-full">
          <Layout3 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <MenuItems />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 580 1">
            <line id="Divider" stroke="var(--stroke-0, #E5E7EB)" x2="580" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <MenuItems1 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 580 1">
            <line id="Divider" stroke="var(--stroke-0, #E5E7EB)" x2="580" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <MenuItems2 />
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 580 1">
            <line id="Divider" stroke="var(--stroke-0, #E5E7EB)" x2="580" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <MenuItems3 />
    </div>
  );
}

function IOsScrollbar() {
  return (
    <div className="h-full relative shrink-0 w-[8px]" data-name="iOS/ Scrollbar">
      <div className="absolute bg-[#e5e7eb] h-[94px] left-0 rounded-[4px] top-0 w-[8px]" data-name="scroll" />
    </div>
  );
}

function MenuDropdown() {
  return (
    <div className="absolute bg-[#fefefe] content-stretch flex gap-[4px] inset-[19.7%_0_4.55%_0.07%] items-start overflow-clip p-[4px] shadow-[0px_10px_16px_0px_rgba(24,24,27,0.06),0px_3px_6px_0px_rgba(24,24,27,0.06),0px_0px_1px_0px_rgba(24,24,27,0.04)]" data-name="Menu Dropdown">
      <Container />
      <IOsScrollbar />
    </div>
  );
}

export default function SelectResposta() {
  return (
    <div className="relative size-full" data-name="Select Resposta">
      <SelectFieldRegular />
      <MenuDropdown />
    </div>
  );
}