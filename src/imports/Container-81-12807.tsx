import svgPaths from "./svg-3dkfh9akxg";

function Heading() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute css-ew64yg font-['Arial:Bold',sans-serif] leading-[33px] left-0 not-italic text-[#111214] text-[22px] top-[-3px]">Jornadas cadastradas</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="css-4hzbpn flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#686c73] text-[14px]">8 jornadas cadastradas</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[57px] relative shrink-0 w-[220.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function ButtonPrimary() {
  return (
    <div className="bg-[#fcfc30] relative rounded-[4px] shrink-0" data-name="Button Primary">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[16px] py-[12px] relative">
        <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#465eff] text-[14px] text-center tracking-[0.07px] uppercase">
          <p className="css-ew64yg leading-[1.125]">+ INCLUIR/ALTERAR</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex h-[57px] items-center justify-between left-0 top-0 w-[1229px]" data-name="Container">
      <Container />
      <ButtonPrimary />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 4">
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#686c73] text-[14px]">
        <p className="css-ew64yg leading-[21px]">Ativo</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9896 15.9896">
        <g id="Component 1">
          <path d={svgPaths.p28502300} id="Vector" stroke="var(--stroke-0, #4668FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#e5e9ff] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Component />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[8px] pt-[24px] px-[24px] relative w-full">
          <Heading1 />
          <Background />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['BancoDoBrasil_Textos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#465eff] text-[24px] w-full">
        <p className="css-4hzbpn leading-[32px]">1153</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[336.656px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#686c73] text-[16px] top-0">80% do total</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function Container5() {
  return <div className="bg-[#465eff] h-[8px] rounded-[33554400px] shrink-0 w-full" data-name="Container" />;
}

function Container6() {
  return (
    <div className="bg-[#e0e9ff] content-stretch flex flex-col h-[8px] items-start pr-[67.344px] relative rounded-[33554400px] shrink-0 w-[336.656px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[24px] px-[24px] relative w-full">
        <Container3 />
        <Container4 />
        <Container6 />
      </div>
    </div>
  );
}

function CardDashboard() {
  return (
    <div className="bg-[#fefefe] content-stretch flex flex-col gap-[16px] h-[190px] items-start pl-[4px] pr-px py-px relative rounded-[12px] shrink-0 w-[401px]" data-name="Card-dashboard">
      <div aria-hidden="true" className="absolute border-[#4668ff] border-l-4 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_2px_0px_#b3abab]" />
      <Container2 />
      <Container7 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 4">
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#686c73] text-[14px]">
        <p className="css-ew64yg leading-[21px]">Transação</p>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9896 15.9896">
        <g id="Component 1">
          <path d={svgPaths.p28502300} id="Vector" stroke="var(--stroke-0, #4668FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#e5e9ff] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Component1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[8px] pt-[24px] px-[24px] relative w-full">
          <Heading2 />
          <Background1 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['BancoDoBrasil_Textos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#465eff] text-[24px] w-full">
        <p className="css-4hzbpn leading-[32px]">249</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[336.656px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#686c73] text-[16px] top-0">17% do total</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function Container11() {
  return <div className="bg-[#465eff] h-[8px] rounded-[33554400px] shrink-0 w-[65px]" data-name="Container" />;
}

function Container12() {
  return (
    <div className="bg-[#e0e9ff] content-stretch flex flex-col h-[8px] items-start pr-[67.344px] relative rounded-[33554400px] shrink-0 w-[336.656px]" data-name="Container">
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[24px] px-[24px] relative w-full">
        <Container9 />
        <Container10 />
        <Container12 />
      </div>
    </div>
  );
}

function CardDashboard1() {
  return (
    <div className="bg-[#fefefe] content-stretch flex flex-col gap-[16px] h-[190px] items-start pl-[4px] pr-px py-px relative rounded-[12px] shrink-0 w-[401px]" data-name="Card-dashboard">
      <div aria-hidden="true" className="absolute border-[#4668ff] border-l-4 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_2px_0px_#b3abab]" />
      <Container8 />
      <Container13 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 4">
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#686c73] text-[14px]">
        <p className="css-ew64yg leading-[21px]">Indução</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 size-[15.99px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9896 15.9896">
        <g id="Component 1">
          <path d={svgPaths.p28502300} id="Vector" stroke="var(--stroke-0, #4668FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#e5e9ff] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Component2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[8px] pt-[24px] px-[24px] relative w-full">
          <Heading3 />
          <Background2 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['BancoDoBrasil_Textos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#465eff] text-[24px] w-full">
        <p className="css-4hzbpn leading-[32px]">43</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[336.656px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#686c73] text-[16px] top-0">3% do total</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph3 />
    </div>
  );
}

function Container17() {
  return <div className="bg-[#465eff] h-[8px] rounded-[33554400px] shrink-0 w-[21px]" data-name="Container" />;
}

function Container18() {
  return (
    <div className="bg-[#e0e9ff] content-stretch flex flex-col h-[8px] items-start pr-[67.344px] relative rounded-[33554400px] shrink-0 w-[336.656px]" data-name="Container">
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[24px] px-[24px] relative w-full">
        <Container15 />
        <Container16 />
        <Container18 />
      </div>
    </div>
  );
}

function CardDashboard2() {
  return (
    <div className="bg-[#fefefe] content-stretch flex flex-col gap-[16px] h-[190px] items-start pl-[4px] pr-px py-px relative rounded-[12px] shrink-0 w-[401px]" data-name="Card-dashboard">
      <div aria-hidden="true" className="absolute border-[#4668ff] border-l-4 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_2px_0px_#b3abab]" />
      <Container14 />
      <Container19 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <CardDashboard />
      <CardDashboard1 />
      <CardDashboard2 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px]">DD / MM / AAAA</p>
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
          <Content />
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
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">Data de Início</p>
      <Group />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px]">DD / MM / AAAA</p>
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
          <Content1 />
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
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">Data de Término</p>
      <Group1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px]">Selecione</p>
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
          <Content2 />
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

function SelectFieldRegular() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[252px]" data-name="Select Field - Regular">
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">Período</p>
      <Group2 />
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Data">
      <DateFieldRegular />
      <DateFieldRegular1 />
      <SelectFieldRegular />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="content-stretch flex flex-col items-start py-[16.741px] relative rounded-[8px] shrink-0 w-[964px]" data-name="Background+Border">
      <Data />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <BackgroundBorder />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[190px] items-start left-0 top-[88px] w-[1226px]" data-name="Container">
      <Frame1 />
      <Frame />
    </div>
  );
}

function Divider() {
  return (
    <div className="absolute h-[5px] left-0 top-[384px] w-[1229px]" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1229 5">
        <g id="Divider">
          <g id="Padding top" opacity="0.25"></g>
          <line id="Line" stroke="var(--stroke-0, #E5E7EB)" x2="1229" y1="2.5" y2="2.5" />
          <g id="Padding bottom" opacity="0.25"></g>
        </g>
      </svg>
    </div>
  );
}

function AcompanhamentoJornadas() {
  return (
    <div className="h-[402px] relative shrink-0 w-[1270px]" data-name="AcompanhamentoJornadas">
      <Container1 />
      <Container20 />
      <Divider />
    </div>
  );
}

function Icone3() {
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

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px]">Pesquisar por ID, HU ou Titulo</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[7px] pt-[8px] px-[8px] relative size-full">
          <Icone3 />
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Group">
      <Input3 />
      <div className="bg-[#b4b9c1] h-px shrink-0 w-full" data-name="Border Botton" />
    </div>
  );
}

function SearchFieldRegular() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Search Field / Regular">
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">Nome do Fluxo</p>
      <Group3 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px]">Filtro</p>
    </div>
  );
}

function Icone4() {
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

function Input4() {
  return (
    <div className="bg-[#f0f2f4] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pb-[7px] pt-[8px] px-[12px] relative w-full">
          <Content4 />
          <Icone4 />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Group">
      <Input4 />
      <div className="bg-[#b4b9c1] h-px shrink-0 w-full" data-name="Border Botton" />
    </div>
  );
}

function SelectFieldRegular1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Select Field - Regular">
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">Tipo de Jornada</p>
      <Group4 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px]">Filtro</p>
    </div>
  );
}

function Icone5() {
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

function Input5() {
  return (
    <div className="bg-[#f0f2f4] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pb-[7px] pt-[8px] px-[12px] relative w-full">
          <Content5 />
          <Icone5 />
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Group">
      <Input5 />
      <div className="bg-[#b4b9c1] h-px shrink-0 w-full" data-name="Border Botton" />
    </div>
  );
}

function SelectFieldRegular2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Select Field - Regular">
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">Tema</p>
      <Group5 />
    </div>
  );
}

function ButtonSecondary() {
  return (
    <div className="bg-[#e0e9ff] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[4px] shrink-0" data-name="Button Secondary">
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#465eff] text-[14px] text-center tracking-[0.07px] uppercase">
        <p className="css-ew64yg leading-[1.125]">Mais Filtros</p>
      </div>
    </div>
  );
}

function FilterBar() {
  return (
    <div className="content-stretch flex gap-[8px] items-end justify-end relative shrink-0 w-full" data-name="Filter Bar">
      <SearchFieldRegular />
      <SelectFieldRegular1 />
      <SelectFieldRegular2 />
      <ButtonSecondary />
    </div>
  );
}

function FilterBar1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Filter Bar">
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
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] uppercase">ID</p>
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
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] uppercase">HU</p>
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
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] uppercase">TITULO</p>
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
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] uppercase">TIPO</p>
      <SortIcon3 />
    </div>
  );
}

function SortIcon4() {
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

function AssetsColumnHeaderCell3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px overflow-clip relative" data-name=".Assets/ Column Header Cell">
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] uppercase">TEMA</p>
      <SortIcon4 />
    </div>
  );
}

function SortIcon5() {
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

function ColumnCell1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px overflow-clip relative" data-name="Column Cell">
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] uppercase">DATA</p>
      <SortIcon5 />
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
          <AssetsColumnHeaderCell3 />
          <ColumnCell1 />
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
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">RME-3223</p>
    </div>
  );
}

function AssetsTableLineContent1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="[text-decoration-skip-ink:none] css-4hzbpn decoration-solid flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#2d37f5] text-[14px] tracking-[0.196px] underline">HU-3222</p>
    </div>
  );
}

function AssetsTableLineContent2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">Conteúdo</p>
    </div>
  );
}

function AssetsTableLineContent3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">Investimentos</p>
    </div>
  );
}

function AssetsTableLineContent4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">23/01/2025</p>
    </div>
  );
}

function Bullet() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="bullet">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="bullet">
          <circle cx="8" cy="8" fill="var(--fill-0, #4668FF)" id="Vector" r="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Status() {
  return (
    <div className="bg-[#f0f2f4] content-stretch flex gap-[2px] h-[24px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[999px] shrink-0" data-name="status">
      <div aria-hidden="true" className="absolute border border-[#d4d8dd] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Bullet />
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#4668ff] text-[14px] tracking-[0.07px]">
        <p className="css-ew64yg leading-[1.125]">Enviada</p>
      </div>
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[2px] shrink-0" data-name="Action">
      <Status />
    </div>
  );
}

function ActionCell() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[120px]" data-name="Action Cell">
      <Action />
    </div>
  );
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
          {[...Array(2).keys()].map((_, i) => (
            <AssetsTableLineContent2 key={i} />
          ))}
          <AssetsTableLineContent3 />
          <AssetsTableLineContent4 />
          <ActionCell />
          <NavButton />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e0e0e0]" />
    </div>
  );
}

function AssetsTableLineContent5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">Conteúdo</p>
    </div>
  );
}

function AssetsTableLineContent6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="[text-decoration-skip-ink:none] css-4hzbpn decoration-solid flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#2d37f5] text-[14px] tracking-[0.196px] underline">HU-3222</p>
    </div>
  );
}

function AssetsTableLineContent7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">Investimentos</p>
    </div>
  );
}

function AssetsTableLineContent8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">23/01/2025</p>
    </div>
  );
}

function Bullet1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="bullet">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="bullet">
          <circle cx="8" cy="8" fill="var(--fill-0, #0C8A00)" id="Vector" r="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function TagStatus() {
  return (
    <div className="bg-[#f0f2f4] content-stretch flex gap-[2px] h-[24px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[999px] shrink-0 w-[104px]" data-name="Tag Status">
      <div aria-hidden="true" className="absolute border border-[#d4d8dd] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Bullet1 />
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#0c8a00] text-[14px] tracking-[0.07px]">
        <p className="css-ew64yg leading-[1.125]">Aprovada</p>
      </div>
    </div>
  );
}

function Status1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="status">
      <TagStatus />
    </div>
  );
}

function Action1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Action">
      <Status1 />
    </div>
  );
}

function ActionCell1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[120px]" data-name="Action Cell">
      <Action1 />
    </div>
  );
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
          <AssetsTableLineContent5 />
          <AssetsTableLineContent6 />
          <AssetsTableLineContent5 />
          <AssetsTableLineContent5 />
          <AssetsTableLineContent7 />
          <AssetsTableLineContent8 />
          <ActionCell1 />
          <NavButton1 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e0e0e0]" />
    </div>
  );
}

function AssetsTableLineContent9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">Conteúdo</p>
    </div>
  );
}

function AssetsTableLineContent10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="[text-decoration-skip-ink:none] css-4hzbpn decoration-solid flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#2d37f5] text-[14px] tracking-[0.196px] underline">HU-3222</p>
    </div>
  );
}

function AssetsTableLineContent11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">Investimentos</p>
    </div>
  );
}

function AssetsTableLineContent12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">23/01/2025</p>
    </div>
  );
}

function Bullet2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="bullet">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="bullet">
          <circle cx="8" cy="8" fill="var(--fill-0, #FF6F20)" id="Vector" r="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Status2() {
  return (
    <div className="bg-[#f0f2f4] content-stretch flex gap-[2px] h-[24px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[999px] shrink-0" data-name="status">
      <div aria-hidden="true" className="absolute border border-[#d4d8dd] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Bullet2 />
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#ff6f20] text-[14px] tracking-[0.07px]">
        <p className="css-ew64yg leading-[1.125]">Em análise</p>
      </div>
    </div>
  );
}

function Action2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Action">
      <Status2 />
    </div>
  );
}

function ActionCell2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[120px]" data-name="Action Cell">
      <Action2 />
    </div>
  );
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
          <AssetsTableLineContent9 />
          <AssetsTableLineContent10 />
          <AssetsTableLineContent9 />
          <AssetsTableLineContent9 />
          <AssetsTableLineContent11 />
          <AssetsTableLineContent12 />
          <ActionCell2 />
          <NavButton2 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e0e0e0]" />
    </div>
  );
}

function AssetsTableLineContent13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">Conteúdo</p>
    </div>
  );
}

function AssetsTableLineContent14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="[text-decoration-skip-ink:none] css-4hzbpn decoration-solid flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#2d37f5] text-[14px] tracking-[0.196px] underline">HU-3222</p>
    </div>
  );
}

function AssetsTableLineContent15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">Investimentos</p>
    </div>
  );
}

function AssetsTableLineContent16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">23/01/2025</p>
    </div>
  );
}

function Bullet3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="bullet">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="bullet">
          <circle cx="8" cy="8" fill="var(--fill-0, #4668FF)" id="Vector" r="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Status3() {
  return (
    <div className="bg-[#f0f2f4] content-stretch flex gap-[2px] h-[24px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[999px] shrink-0" data-name="status">
      <div aria-hidden="true" className="absolute border border-[#d4d8dd] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Bullet3 />
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#4668ff] text-[14px] tracking-[0.07px]">
        <p className="css-ew64yg leading-[1.125]">Enviada</p>
      </div>
    </div>
  );
}

function Action3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Action">
      <Status3 />
    </div>
  );
}

function ActionCell3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[120px]" data-name="Action Cell">
      <Action3 />
    </div>
  );
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
          <AssetsTableLineContent13 />
          <AssetsTableLineContent14 />
          <AssetsTableLineContent13 />
          <AssetsTableLineContent13 />
          <AssetsTableLineContent15 />
          <AssetsTableLineContent16 />
          <ActionCell3 />
          <NavButton3 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e0e0e0]" />
    </div>
  );
}

function AssetsTableLineContent17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">Conteúdo</p>
    </div>
  );
}

function AssetsTableLineContent18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="[text-decoration-skip-ink:none] css-4hzbpn decoration-solid flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#2d37f5] text-[14px] tracking-[0.196px] underline">HU-3222</p>
    </div>
  );
}

function AssetsTableLineContent19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">Investimentos</p>
    </div>
  );
}

function AssetsTableLineContent20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">23/01/2025</p>
    </div>
  );
}

function Bullet4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="bullet">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="bullet">
          <circle cx="8" cy="8" fill="var(--fill-0, #E3111F)" id="Vector" r="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Status4() {
  return (
    <div className="bg-[#f0f2f4] content-stretch flex gap-[2px] h-[24px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[999px] shrink-0" data-name="status">
      <div aria-hidden="true" className="absolute border border-[#d4d8dd] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Bullet4 />
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#e3111f] text-[14px] tracking-[0.07px]">
        <p className="css-ew64yg leading-[1.125]">Encerrada</p>
      </div>
    </div>
  );
}

function Action4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Action">
      <Status4 />
    </div>
  );
}

function ActionCell4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[120px]" data-name="Action Cell">
      <Action4 />
    </div>
  );
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
          <AssetsTableLineContent17 />
          <AssetsTableLineContent18 />
          <AssetsTableLineContent17 />
          <AssetsTableLineContent17 />
          <AssetsTableLineContent19 />
          <AssetsTableLineContent20 />
          <ActionCell4 />
          <NavButton4 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e0e0e0]" />
    </div>
  );
}

function AssetsTableLineContent21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">Conteúdo</p>
    </div>
  );
}

function AssetsTableLineContent22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="[text-decoration-skip-ink:none] css-4hzbpn decoration-solid flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#2d37f5] text-[14px] tracking-[0.196px] underline">HU-3222</p>
    </div>
  );
}

function AssetsTableLineContent23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">Investimentos</p>
    </div>
  );
}

function AssetsTableLineContent24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">23/01/2025</p>
    </div>
  );
}

function Bullet5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="bullet">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="bullet">
          <circle cx="8" cy="8" fill="var(--fill-0, #5A059C)" id="Vector" r="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function TagStatus1() {
  return (
    <div className="bg-[#f0f2f4] content-stretch flex gap-[2px] h-[24px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[999px] shrink-0 w-[132px]" data-name="Tag Status">
      <div aria-hidden="true" className="absolute border border-[#d4d8dd] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Bullet5 />
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#5a059c] text-[14px] tracking-[0.07px]">
        <p className="css-ew64yg leading-[1.125]">Implementada</p>
      </div>
    </div>
  );
}

function Status5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="status">
      <TagStatus1 />
    </div>
  );
}

function Action5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Action">
      <Status5 />
    </div>
  );
}

function ActionCell5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[120px]" data-name="Action Cell">
      <Action5 />
    </div>
  );
}

function ChevronLargeRight5() {
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

function NavButton5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Nav Button">
      <ChevronLargeRight5 />
    </div>
  );
}

function TableLine5() {
  return (
    <div className="bg-[#fefefe] relative shrink-0 w-full" data-name="Table Line">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[8px] py-[16px] relative w-full">
          <AssetsTableLineContent21 />
          <AssetsTableLineContent22 />
          <AssetsTableLineContent21 />
          <AssetsTableLineContent21 />
          <AssetsTableLineContent23 />
          <AssetsTableLineContent24 />
          <ActionCell5 />
          <NavButton5 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e0e0e0]" />
    </div>
  );
}

function AssetsTableLineContent25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">Conteúdo</p>
    </div>
  );
}

function AssetsTableLineContent26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="[text-decoration-skip-ink:none] css-4hzbpn decoration-solid flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#2d37f5] text-[14px] tracking-[0.196px] underline">HU-3222</p>
    </div>
  );
}

function AssetsTableLineContent27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">Investimentos</p>
    </div>
  );
}

function AssetsTableLineContent28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px py-[4px] relative" data-name=".Assets/ Table Line Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic relative text-[#111214] text-[14px] tracking-[0.196px]">23/01/2025</p>
    </div>
  );
}

function Bullet6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="bullet">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="bullet">
          <circle cx="8" cy="8" fill="var(--fill-0, #FFB31A)" id="Vector" r="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Status6() {
  return (
    <div className="bg-[#f0f2f4] content-stretch flex gap-[2px] h-[24px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[999px] shrink-0" data-name="status">
      <div aria-hidden="true" className="absolute border border-[#d4d8dd] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Bullet6 />
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#ad5f00] text-[14px] tracking-[0.07px]">
        <p className="css-ew64yg leading-[1.125]">Iniciada</p>
      </div>
    </div>
  );
}

function Action6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Action">
      <Status6 />
    </div>
  );
}

function ActionCell6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-[120px]" data-name="Action Cell">
      <Action6 />
    </div>
  );
}

function ChevronLargeRight6() {
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

function NavButton6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0" data-name="Nav Button">
      <ChevronLargeRight6 />
    </div>
  );
}

function TableLine6() {
  return (
    <div className="bg-[#fefefe] relative shrink-0 w-full" data-name="Table Line">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[8px] py-[16px] relative w-full">
          <AssetsTableLineContent25 />
          <AssetsTableLineContent26 />
          <AssetsTableLineContent25 />
          <AssetsTableLineContent25 />
          <AssetsTableLineContent27 />
          <AssetsTableLineContent28 />
          <ActionCell6 />
          <NavButton6 />
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
      <TableLine1 />
      <TableLine2 />
      <TableLine3 />
      <TableLine4 />
      <TableLine5 />
      <TableLine6 />
      <TableLine3 />
      <TableLine3 />
      <TableLine3 />
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

function LinkNav() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center py-[3px] relative shrink-0" data-name="Link Nav">
      <div className="flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d37f5] text-[16px] tracking-[0.08px] w-full">
        <p className="css-4hzbpn leading-[1.125]">Mostrar tudo</p>
      </div>
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

function Page1() {
  return (
    <div className="bg-[#e0e9ff] relative rounded-[2px] shrink-0 size-[24px]" data-name="Page">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#465eff] text-[12px] text-center tracking-[0.06px]">2</p>
        </div>
      </div>
    </div>
  );
}

function Page2() {
  return (
    <div className="bg-[#e0e9ff] relative rounded-[2px] shrink-0 size-[24px]" data-name="Page">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#465eff] text-[12px] text-center tracking-[0.06px]">3</p>
        </div>
      </div>
    </div>
  );
}

function Page3() {
  return (
    <div className="bg-[#e0e9ff] relative rounded-[2px] shrink-0 size-[24px]" data-name="Page">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#465eff] text-[12px] text-center tracking-[0.06px]">4</p>
        </div>
      </div>
    </div>
  );
}

function Page4() {
  return (
    <div className="bg-[#e0e9ff] relative rounded-[2px] shrink-0 size-[24px]" data-name="Page">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#465eff] text-[12px] text-center tracking-[0.06px]">5</p>
        </div>
      </div>
    </div>
  );
}

function Page5() {
  return (
    <div className="bg-[#e0e9ff] relative rounded-[2px] shrink-0 size-[24px]" data-name="Page">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#465eff] text-[12px] text-center tracking-[0.06px]">6</p>
        </div>
      </div>
    </div>
  );
}

function Page6() {
  return (
    <div className="bg-[#e0e9ff] relative rounded-[2px] shrink-0 size-[24px]" data-name="Page">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#465eff] text-[12px] text-center tracking-[0.06px]">7</p>
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name=".Assets / Paginator">
      <LeftNav />
      <Page />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <LeftNav1 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#686c73] text-[12px] text-right tracking-[0.168px]">Mostrando 1-10 de 100 itens</p>
      <AssetsPaginator />
    </div>
  );
}

function PaginatorContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paginator Container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] relative w-full">
          <LinkNav />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[1228px]" data-name="Table">
      <FilterBar1 />
      <TableContent1 />
      <PaginatorContainer />
    </div>
  );
}

export default function Container22() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pt-[48px] px-[64px] relative rounded-[30px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-full" data-name="Container">
      <AcompanhamentoJornadas />
      <Table />
    </div>
  );
}