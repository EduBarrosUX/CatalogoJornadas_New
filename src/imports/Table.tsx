import svgPaths from "./svg-f9pzsfcq6q";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p259c6a40} fill="var(--fill-0, #0C8A00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-[1_0_0] flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#111214] text-[18px]">
        <p className="css-4hzbpn leading-[1.125]">Sua Solicitação foi cadastrada com sucesso! Acompanhe a sua solicitação e aguarde a análise pelo CAD</p>
      </div>
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPaths.p23737a00} fill="var(--fill-0, #313338)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Icon Button">
      <Close />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <Content />
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Textos:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111214] text-[14px] text-right tracking-[0.196px]">
        <p className="css-ew64yg leading-[1.125]">&nbsp;</p>
      </div>
      <IconButton />
    </div>
  );
}

function Toast() {
  return (
    <div className="bg-[#efffeb] relative rounded-[4px] shadow-[0px_10px_16px_0px_rgba(24,24,27,0.06),0px_3px_6px_0px_rgba(24,24,27,0.06),0px_0px_1px_0px_rgba(24,24,27,0.04)] shrink-0 w-full" data-name="Toast">
      <div className="content-stretch flex gap-[8px] items-start p-[8px] relative w-full">
        <Icon />
        <Content1 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center px-0 py-[32px] relative shrink-0 w-full">
      <Toast />
    </div>
  );
}

function TitleBar() {
  return (
    <div className="content-stretch flex gap-[32px] h-[38px] items-center relative shrink-0 w-full" data-name="Title Bar">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Titulos:Bold',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#111214] text-[22px]">Solicitações cadastradas</p>
    </div>
  );
}

function Icone() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icone">
          <path clipRule="evenodd" d={svgPaths.p36ed4f00} fill="var(--fill-0, #888D95)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px]">Procure pelo ID</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[7px] pt-[8px] px-[8px] relative size-full">
          <Icone />
          <Content2 />
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

function SearchFieldRegular() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Search Field / Regular">
      <Group />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px]">Data Abertura</p>
    </div>
  );
}

function Icone1() {
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

function Input1() {
  return (
    <div className="bg-[#f0f2f4] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pb-[7px] pt-[8px] px-[12px] relative w-full">
          <Content3 />
          <Icone1 />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Group">
      <Input1 />
      <div className="bg-[#b4b9c1] h-px shrink-0 w-full" data-name="Border Botton" />
    </div>
  );
}

function SelectFieldRegular() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Select Field - Regular">
      <Group1 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px]">Status</p>
    </div>
  );
}

function Icone2() {
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

function Input2() {
  return (
    <div className="bg-[#f0f2f4] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pb-[7px] pt-[8px] px-[12px] relative w-full">
          <Content4 />
          <Icone2 />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Group">
      <Input2 />
      <div className="bg-[#b4b9c1] h-px shrink-0 w-full" data-name="Border Botton" />
    </div>
  );
}

function SelectFieldRegular1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Select Field - Regular">
      <Group2 />
    </div>
  );
}

function ButtonSecondary() {
  return (
    <div className="bg-[#e0e9ff] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[4px] shrink-0" data-name="Button Secondary">
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#465eff] text-[14px] text-center tracking-[0.07px] uppercase">
        <p className="css-ew64yg leading-[1.125]">MAIS FILTROS</p>
      </div>
    </div>
  );
}

function ButtonSecondary1() {
  return (
    <div className="bg-[#e0e9ff] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[4px] shrink-0" data-name="Button Secondary">
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#465eff] text-[14px] text-center tracking-[0.07px] uppercase">
        <p className="css-ew64yg leading-[1.125]">LIMPAR</p>
      </div>
    </div>
  );
}

function FilterBar() {
  return (
    <div className="content-stretch flex gap-[8px] h-[50px] items-end relative shrink-0 w-full" data-name="Filter Bar">
      <SearchFieldRegular />
      <SelectFieldRegular />
      <SelectFieldRegular1 />
      <ButtonSecondary />
      <ButtonSecondary1 />
    </div>
  );
}

function FilterBar1() {
  return (
    <div className="content-stretch flex flex-col h-[66px] items-end relative shrink-0 w-full" data-name="Filter Bar">
      <FilterBar />
    </div>
  );
}

function SortIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Sort Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Sort Icon">
          <path d={svgPaths.p4c95ef0} fill="var(--fill-0, #888D95)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AssetsColumnHeaderCell() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px overflow-clip relative" data-name=".Assets/ Column Header Cell">
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] uppercase">{` ID`}</p>
      <SortIcon />
    </div>
  );
}

function SortIcon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Sort Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Sort Icon">
          <path d={svgPaths.p4c95ef0} fill="var(--fill-0, #888D95)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ColumnCell() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[24px] items-center min-h-px min-w-px overflow-clip relative" data-name="Column Cell">
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] uppercase">{`   TEMA/PRODUTO`}</p>
      <SortIcon1 />
    </div>
  );
}

function SortIcon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Sort Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Sort Icon">
          <path d={svgPaths.p4c95ef0} fill="var(--fill-0, #888D95)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AssetsColumnHeaderCell1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px overflow-clip relative" data-name=".Assets/ Column Header Cell">
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] uppercase">{`               DATA ABERTURA`}</p>
      <SortIcon2 />
    </div>
  );
}

function SortIcon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Sort Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Sort Icon">
          <path d={svgPaths.p4c95ef0} fill="var(--fill-0, #888D95)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AssetsColumnHeaderCell2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px overflow-clip relative" data-name=".Assets/ Column Header Cell">
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] uppercase">{`                              STATUS`}</p>
      <SortIcon3 />
    </div>
  );
}

function ActionbarSpacer() {
  return <div className="h-[24px] shrink-0 w-[120px]" data-name="Actionbar-Spacer" />;
}

function NavButtonSpacer() {
  return <div className="shrink-0 size-[24px]" data-name="NavButton-Spacer" />;
}

function ColumnHeaderLine() {
  return (
    <div className="bg-[#f0f2f4] relative shrink-0 w-full" data-name="Column Header Line">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[8px] py-[16px] relative w-full">
          <AssetsColumnHeaderCell />
          <ColumnCell />
          <AssetsColumnHeaderCell1 />
          <AssetsColumnHeaderCell2 />
          <ActionbarSpacer />
          <NavButtonSpacer />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e0e0e0]" />
    </div>
  );
}

function AssetsTableLineContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-0 py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">#01</p>
    </div>
  );
}

function AssetsTableLineContent1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-0 py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">PIX</p>
    </div>
  );
}

function AssetsTableLineContent2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-0 py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] h-[16px] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">16/01/2025</p>
    </div>
  );
}

function AssetsTableLineContent3() {
  return <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-0 py-[4px]" data-name=".Assets/ Table Line Content" />;
}

function ChevronLargeRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-large-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-large-right">
          <path d={svgPaths.p2d1c2300} fill="var(--fill-0, #888D95)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavButton() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Nav Button">
      <ChevronLargeRight />
    </div>
  );
}

function TableLine() {
  return (
    <div className="bg-[#fefefe] relative shrink-0 w-full" data-name="Table Line">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[8px] py-[16px] relative w-full">
          <AssetsTableLineContent />
          <AssetsTableLineContent1 />
          <AssetsTableLineContent2 />
          <AssetsTableLineContent3 />
          <NavButton />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e0e0e0]" />
    </div>
  );
}

function TableContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table Content">
      <ColumnHeaderLine />
      <TableLine />
    </div>
  );
}

function TableContent1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table Content">
      <TableContent />
    </div>
  );
}

function AssetsTableLineContent4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-0 py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">#02</p>
    </div>
  );
}

function AssetsTableLineContent5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-0 py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">PIX</p>
    </div>
  );
}

function AssetsTableLineContent6() {
  return <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-0 py-[4px]" data-name=".Assets/ Table Line Content" />;
}

function ChevronLargeRight1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-large-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-large-right">
          <path d={svgPaths.p2d1c2300} fill="var(--fill-0, #888D95)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavButton1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Nav Button">
      <ChevronLargeRight1 />
    </div>
  );
}

function TableLine1() {
  return (
    <div className="bg-[#fefefe] relative shrink-0 w-full" data-name="Table Line">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[8px] py-[16px] relative w-full">
          <AssetsTableLineContent4 />
          <AssetsTableLineContent5 />
          {[...Array(2).keys()].map((_, i) => (
            <AssetsTableLineContent6 key={i} />
          ))}
          <NavButton1 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e0e0e0]" />
    </div>
  );
}

function AssetsTableLineContent7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-0 py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">#02</p>
    </div>
  );
}

function AssetsTableLineContent8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-0 py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">PIX</p>
    </div>
  );
}

function AssetsTableLineContent9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-0 py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">14/01/2025</p>
    </div>
  );
}

function AssetsTableLineContent10() {
  return <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-0 py-[4px]" data-name=".Assets/ Table Line Content" />;
}

function ChevronLargeRight2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-large-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-large-right">
          <path d={svgPaths.p2d1c2300} fill="var(--fill-0, #888D95)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavButton2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Nav Button">
      <ChevronLargeRight2 />
    </div>
  );
}

function TableLine2() {
  return (
    <div className="bg-[#fefefe] relative shrink-0 w-full" data-name="Table Line">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[8px] py-[16px] relative w-full">
          <AssetsTableLineContent7 />
          <AssetsTableLineContent8 />
          <AssetsTableLineContent9 />
          <AssetsTableLineContent10 />
          <NavButton2 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e0e0e0]" />
    </div>
  );
}

function AssetsTableLineContent11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-0 py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">#02</p>
    </div>
  );
}

function AssetsTableLineContent12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-0 py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">PIX</p>
    </div>
  );
}

function AssetsTableLineContent13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-0 py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">11/01/2025</p>
    </div>
  );
}

function AssetsTableLineContent14() {
  return <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-0 py-[4px]" data-name=".Assets/ Table Line Content" />;
}

function ChevronLargeRight3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-large-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-large-right">
          <path d={svgPaths.p2d1c2300} fill="var(--fill-0, #888D95)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavButton3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Nav Button">
      <ChevronLargeRight3 />
    </div>
  );
}

function TableLine3() {
  return (
    <div className="bg-[#fefefe] relative shrink-0 w-full" data-name="Table Line">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[8px] py-[16px] relative w-full">
          <AssetsTableLineContent11 />
          <AssetsTableLineContent12 />
          <AssetsTableLineContent13 />
          <AssetsTableLineContent14 />
          <NavButton3 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e0e0e0]" />
    </div>
  );
}

function AssetsTableLineContent15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-0 py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">#02</p>
    </div>
  );
}

function AssetsTableLineContent16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-0 py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">PIX</p>
    </div>
  );
}

function AssetsTableLineContent17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-0 py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">06/01/2025</p>
    </div>
  );
}

function AssetsTableLineContent18() {
  return <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-0 py-[4px]" data-name=".Assets/ Table Line Content" />;
}

function ChevronLargeRight4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-large-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-large-right">
          <path d={svgPaths.p2d1c2300} fill="var(--fill-0, #888D95)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavButton4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Nav Button">
      <ChevronLargeRight4 />
    </div>
  );
}

function TableLine4() {
  return (
    <div className="bg-[#fefefe] relative shrink-0 w-full" data-name="Table Line">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[8px] py-[16px] relative w-full">
          <AssetsTableLineContent15 />
          <AssetsTableLineContent16 />
          <AssetsTableLineContent17 />
          <AssetsTableLineContent18 />
          <NavButton4 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e0e0e0]" />
    </div>
  );
}

function ChevronSmallLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-small-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-small-left">
          <path d={svgPaths.p53b0c80} fill="var(--fill-0, #D4D8DD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeftNav() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Left Nav">
      <ChevronSmallLeft />
    </div>
  );
}

function Page() {
  return (
    <div className="bg-[#fcfc30] relative rounded-[999px] shrink-0 size-[24px]" data-name="Page">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#465eff] text-[12px] text-center tracking-[0.06px]">1</p>
        </div>
      </div>
    </div>
  );
}

function ChevronSmallRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-small-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-small-right">
          <path d={svgPaths.p30f54000} fill="var(--fill-0, #888D95)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeftNav1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Left Nav">
      <ChevronSmallRight />
    </div>
  );
}

function AssetsPaginator() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name=".Assets / Paginator">
      <LeftNav />
      <Page />
      <LeftNav1 />
    </div>
  );
}

function PaginatorContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paginator Container">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-end px-[8px] py-[16px] relative w-full">
          <AssetsPaginator />
        </div>
      </div>
    </div>
  );
}

export default function Table() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip px-[41px] py-[18px] relative rounded-[30px] size-full" data-name="Table">
      <Frame />
      <TitleBar />
      <FilterBar1 />
      <TableContent1 />
      <TableLine1 />
      <TableLine2 />
      <TableLine3 />
      <TableLine4 />
      <PaginatorContainer />
    </div>
  );
}