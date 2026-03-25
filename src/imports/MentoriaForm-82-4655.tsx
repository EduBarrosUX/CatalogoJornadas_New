import svgPaths from "./svg-banq378whd";

function TitleBar() {
  return <div className="absolute content-stretch flex gap-[32px] items-center left-[64px] top-[364px] w-[1500px]" data-name="Title Bar" />;
}

function Divider() {
  return (
    <div className="absolute h-[37px] left-[67px] top-[239px] w-[1241px]" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1241 37">
        <g id="Divider">
          <g id="Padding top" opacity="0.25"></g>
          <line id="Line" stroke="var(--stroke-0, #E5E7EB)" x2="1241" y1="2.5" y2="2.5" />
          <g id="Padding bottom" opacity="0.25"></g>
        </g>
      </svg>
    </div>
  );
}

function Icone() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icone"></g>
      </svg>
    </div>
  );
}

function ItemHome() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Item Home">
      <Icone />
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d37f5] text-[14px] tracking-[0.07px]">
        <p className="css-ew64yg leading-[1.125]">Voltar</p>
      </div>
    </div>
  );
}

function BreadcrumbItem() {
  return (
    <div className="content-stretch flex font-['BancoDoBrasil_Textos:Medium',sans-serif] gap-[8px] items-center leading-[0] not-italic relative shrink-0 text-[#6c7077] text-[14px] tracking-[0.07px]" data-name="Breadcrumb Item">
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0">
        <p className="css-ew64yg leading-[1.125]">/</p>
      </div>
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0">
        <p className="css-ew64yg leading-[1.125]">RME-0236</p>
      </div>
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[70px] top-[81px]" data-name="Breadcrumb">
      <ItemHome />
      <BreadcrumbItem />
    </div>
  );
}

function TitleBar1() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-name="Title Bar">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Titulos:Bold',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#111214] text-[22px]">Abertura de Crédito</p>
    </div>
  );
}

function Labels() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Labels">
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#686c73] text-[16px] tracking-[0.08px]">Jornada completa para abertura de conta corrente para pessoa física através dos canais digitais</p>
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

function TagStatus() {
  return (
    <div className="bg-[#f0f2f4] content-stretch flex gap-[2px] h-[24px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[999px] shrink-0 w-[101px]" data-name="Tag Status">
      <div aria-hidden="true" className="absolute border border-[#d4d8dd] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Bullet />
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#4668ff] text-[14px] tracking-[0.07px]">
        <p className="css-ew64yg leading-[1.125]">Enviada</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <TagStatus />
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Bold',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#4668ff] text-[12px] tracking-[0.168px]">Sua solicitação foi aberta e está aguardando ser analisada</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[799px]">
      <Frame19 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[67px] top-[112.5px] w-[1503px]">
      <TitleBar1 />
      <Labels />
      <Frame1 />
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-left">
          <path d={svgPaths.p10a4c80} fill="var(--fill-0, #2D37F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex items-center left-[57px] p-[10px] top-[67px] w-[82px]">
      <ArrowLeft />
    </div>
  );
}

function Banner() {
  return (
    <div className="absolute bg-white h-[1172px] left-0 top-0 w-[1920px]" data-name="Banner">
      <TitleBar />
      <Divider />
      <Breadcrumb />
      <Frame3 />
      <Frame2 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[160.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute css-ew64yg font-['BancoDoBrasil_Titulos:Bold',sans-serif] leading-[24px] left-[80px] not-italic text-[#2d37f5] text-[16px] text-center top-0">Dados da Jornada</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3053c630} fill="var(--fill-0, #2D37F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ebf2ff] h-[40px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <Text />
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[16px] top-[-1px]">Número da História</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#2d37f5] text-[16px] top-[-1px]">HU-2024-001</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-0 top-0 w-[577.5px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[16px] top-[-1px]">Tipo de Inclusão</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[16px] top-[-1px]">Nova Jornada</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-[601.5px] top-0 w-[577.5px]" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[16px] top-[-1px]">Data de Implementação</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[16px] top-[-1px]">15/03/2024</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-0 top-[74px] w-[577.5px]" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[16px] top-[-1px]">Data de Abertura</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[16px] top-[-1px]">10/01/2025</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-[601.5px] top-[74px] w-[577.5px]" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[16px] top-[-1px]">Diretoria</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[16px] top-[-1px]">Diretoria de Varejo</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-0 top-[148px] w-[577.5px]" data-name="Container">
      <Paragraph8 />
      <Paragraph9 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[16px] top-[-1px]">Tipo HU</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[16px] top-[-1px]">Ativo</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-[601.5px] top-[148px] w-[577.5px]" data-name="Container">
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[16px] top-[-1px]">RME</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[16px] top-[-1px]">RME-2024-001</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-0 top-[222px] w-[577.5px]" data-name="Container">
      <Paragraph12 />
      <Paragraph13 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[16px] top-[-1px]">Sistema Responsável</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[16px] top-[-1px]">Portal CAD</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-[601.5px] top-[222px] w-[577.5px]" data-name="Container">
      <Paragraph14 />
      <Paragraph15 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[16px] top-[-1px]">Periodicidade</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[16px] top-[-1px]">Contínua</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-0 top-[296px] w-[577.5px]" data-name="Container">
      <Paragraph16 />
      <Paragraph17 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[16px] top-[-1px]">Template Meta</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[16px] top-[-1px]">Template Padrão</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-[601.5px] top-[296px] w-[577.5px]" data-name="Container">
      <Paragraph18 />
      <Paragraph19 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[16px] top-[-1px]">Categoria do Ativo</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[16px] top-[-1px]">Conta Corrente</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-0 top-[370px] w-[577.5px]" data-name="Container">
      <Paragraph20 />
      <Paragraph21 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[16px] top-[-1px]">Tema</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[16px] top-[-1px]">Abertura de Conta</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-[601.5px] top-[370px] w-[577.5px]" data-name="Container">
      <Paragraph22 />
      <Paragraph23 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[16px] top-[-1px]">Nome Hash Inicial</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[16px] top-[-1px]">#abertura-conta</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-0 top-[444px] w-[577.5px]" data-name="Container">
      <Paragraph24 />
      <Paragraph25 />
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[16px] top-[-1px]">Hash de Início</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[16px] top-[-1px]">inicio-abertura-conta</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-[601.5px] top-[444px] w-[577.5px]" data-name="Container">
      <Paragraph26 />
      <Paragraph27 />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[16px] top-[-1px]">Título do Fluxo</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[16px] top-[-1px]">Abertura de Conta Corrente PF</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-0 top-[518px] w-[1179px]" data-name="Container">
      <Paragraph28 />
      <Paragraph29 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[16px] top-[-1px]">Descrição do Fluxo</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[16px] top-[-1px]">Jornada completa para abertura de conta corrente para pessoa física através dos canais digitais</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-0 top-[592px] w-[1179px]" data-name="Container">
      <Paragraph30 />
      <Paragraph31 />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[16px] top-[-1px]">Input/Gatilho</p>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[16px] top-[-1px]">{`Cliente acessa opção "Abrir Conta" no app`}</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-0 top-[666px] w-[1179px]" data-name="Container">
      <Paragraph32 />
      <Paragraph33 />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[16px] top-[-1px]">Canais</p>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[16px] top-[-1px]">App, Internet Banking</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-0 top-[740px] w-[577.5px]" data-name="Container">
      <Paragraph34 />
      <Paragraph35 />
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[16px] top-[-1px]">Status</p>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[16px] top-[-1px]">Em Análise</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-[601.5px] top-[740px] w-[577.5px]" data-name="Container">
      <Paragraph36 />
      <Paragraph37 />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[7px] top-[34px] w-[216.438px]" data-name="Link">
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#2d37f5] text-[16px]">https://figma.com/file/exemplo1</p>
    </div>
  );
}

function Figma() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="figma">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="figma">
          <g id="Vector">
            <path d={svgPaths.p1ca7900} fill="#24CB71" />
            <path d={svgPaths.p111ce00} fill="#FF7237" />
            <path d={svgPaths.p26d7c380} fill="#00B6FF" />
            <path d={svgPaths.p2f1b9780} fill="#FF3737" />
            <path d={svgPaths.p2e62d610} fill="var(--fill-0, #874FFF)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[21px] relative shrink-0 w-[103px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[16px] top-[-1px]">Link do Figma</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex gap-[5px] items-center left-[-5px] top-[-2px] w-[182px]">
      <Figma />
      <Paragraph38 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[53px] left-[-7px] top-[814px] w-[1186px]" data-name="Container">
      <Link />
      <Frame20 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[867px] relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-white h-[916px] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ebf2ff] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-br-[4px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[24px] px-[25px] relative size-full">
        <Container20 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col h-[956px] items-start relative shrink-0 w-[1277px]" data-name="Container">
      <Button />
      <Container21 />
    </div>
  );
}

function IconLabel() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0" data-name="Icon label">
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d37f5] text-[14px] text-center tracking-[0.07px] uppercase">
        <p className="css-ew64yg leading-[1.125]">Histórico de Comentários</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#fcfc30] content-stretch flex flex-col items-center justify-center relative rounded-[999px] shrink-0 size-[18px]" data-name="Badge">
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[12px] text-center tracking-[0.06px]">9</p>
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0" data-name="Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center px-[32px] relative">
        <IconLabel />
        <Badge />
      </div>
    </div>
  );
}

function AssetsRowTabItem() {
  return (
    <div className="bg-[#fefefe] content-stretch flex h-[48px] items-center justify-center relative rounded-tl-[4px] rounded-tr-[4px] shrink-0" data-name=".Assets / Row Tab Item">
      <div className="absolute bottom-px h-0 left-0 right-0" data-name="border">
        <div className="absolute inset-[-1px_0]" style={{ "--stroke-0": "rgba(45, 55, 245, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 285 2">
            <path d="M0 1H285" id="border" stroke="var(--stroke-0, #2D37F5)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Content />
    </div>
  );
}

function IconLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0" data-name="Icon label">
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111214] text-[14px] text-center tracking-[0.07px] uppercase">
        <p className="css-ew64yg leading-[1.125]">Dados da Jornada</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="h-[32px] relative shrink-0" data-name="Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start justify-center px-[32px] relative">
        <IconLabel1 />
      </div>
    </div>
  );
}

function AssetsRowTabItem1() {
  return (
    <div className="bg-[#fefefe] content-stretch flex h-[48px] items-center justify-center relative rounded-tl-[4px] rounded-tr-[4px] shrink-0" data-name=".Assets / Row Tab Item">
      <div className="absolute h-0 left-0 right-0 top-[48px]" data-name="border">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(180, 185, 193, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 211 1">
            <line id="border" stroke="var(--stroke-0, #B4B9C1)" x2="211" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Content1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Content">
      <AssetsRowTabItem />
      <AssetsRowTabItem1 />
    </div>
  );
}

function Fill() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Fill">
      <div aria-hidden="true" className="absolute border-[#b4b9c1] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-end min-h-px min-w-px overflow-clip relative" data-name="Container">
      <Content2 />
      <Fill />
    </div>
  );
}

function Tab() {
  return (
    <div className="absolute bg-[#fefefe] content-stretch flex inset-[0_58.49%_94.89%_0] items-end" data-name="Tab">
      <Container23 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 w-[232px]">
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Bold',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#646464] text-[14px] tracking-[0.196px]">C2342252 Débora Cardoso Ferreira</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start p-[10px] relative shrink-0 w-[275px]">
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#646464] text-[14px] tracking-[0.196px]">17/01/2025</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[150px]">
      <Frame6 />
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#646464] text-[14px] tracking-[0.196px]">15:45</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[807px]">
      <Frame8 />
    </div>
  );
}

function Comentarios() {
  return (
    <div className="bg-[#e9e9e9] relative shrink-0 w-full" data-name="Comentários">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center px-[16px] relative w-full">
          <Frame9 />
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['BancoDoBrasil_Textos:Regular',sans-serif] items-start leading-[1.125] not-italic px-[16px] relative text-[#646464] text-[14px] tracking-[0.196px] w-full">
        <p className="css-4hzbpn h-[58px] relative shrink-0 w-full">{`Semper sagittis phasellus aliquam enim magna tincidunt. Lectus elementum tortor et auctor. Tincidunt molestie ullamcorper dui at egestas tellus nascetur pellentesque fames. Vestibulum nunc enim amet nam porttitor elit eget. Elementum nunc neque mauris massa ut. `}</p>
        <p className="css-4hzbpn h-[58px] relative shrink-0 w-full">{`Semper sagittis phasellus aliquam enim magna tincidunt. Lectus elementum tortor et auctor. Tincidunt molestie ullamcorper dui at egestas tellus nascetur pellentesque fames. Vestibulum nunc enim amet nam porttitor elit eget. Elementum nunc neque mauris massa ut. `}</p>
        <p className="css-4hzbpn h-[58px] relative shrink-0 w-full">{`Semper sagittis phasellus aliquam enim magna tincidunt. Lectus elementum tortor et auctor. Tincidunt molestie ullamcorper dui at egestas tellus nascetur pellentesque fames. Vestibulum nunc enim amet nam porttitor elit eget. Elementum nunc neque mauris massa ut. `}</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d1d1d1] border-b border-solid inset-0 pointer-events-none" />
      <Comentarios />
      <Frame11 />
    </div>
  );
}

function Comentarios1() {
  return (
    <div className="h-[262px] relative shrink-0 w-full" data-name="Comentários">
      <div className="content-stretch flex flex-col items-start px-[36px] py-[16px] relative size-full">
        <Frame10 />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0 w-[232px]">
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Bold',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#646464] text-[14px] tracking-[0.196px]">C2342252 Débora Cardoso Ferreira</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start p-[10px] relative shrink-0 w-[275px]">
      <Frame12 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#646464] text-[14px] tracking-[0.196px]">17/01/2025</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[150px]">
      <Frame14 />
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#646464] text-[14px] tracking-[0.196px]">15:45</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[735px]">
      <Frame15 />
    </div>
  );
}

function Comentarios2() {
  return (
    <div className="bg-[#e9e9e9] relative shrink-0 w-full" data-name="Comentários">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center px-[16px] relative w-full">
          <Frame13 />
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['BancoDoBrasil_Textos:Regular',sans-serif] items-start leading-[1.125] not-italic px-[16px] relative text-[#646464] text-[14px] tracking-[0.196px] w-full">
        <p className="css-4hzbpn h-[58px] relative shrink-0 w-full">{`Semper sagittis phasellus aliquam enim magna tincidunt. Lectus elementum tortor et auctor. Tincidunt molestie ullamcorper dui at egestas tellus nascetur pellentesque fames. Vestibulum nunc enim amet nam porttitor elit eget. Elementum nunc neque mauris massa ut. `}</p>
        <p className="css-4hzbpn h-[58px] relative shrink-0 w-full">{`Semper sagittis phasellus aliquam enim magna tincidunt. Lectus elementum tortor et auctor. Tincidunt molestie ullamcorper dui at egestas tellus nascetur pellentesque fames. Vestibulum nunc enim amet nam porttitor elit eget. Elementum nunc neque mauris massa ut. `}</p>
        <p className="css-4hzbpn h-[58px] relative shrink-0 w-full">{`Semper sagittis phasellus aliquam enim magna tincidunt. Lectus elementum tortor et auctor. Tincidunt molestie ullamcorper dui at egestas tellus nascetur pellentesque fames. Vestibulum nunc enim amet nam porttitor elit eget. Elementum nunc neque mauris massa ut. `}</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#d1d1d1] border-b border-solid inset-0 pointer-events-none" />
      <Comentarios2 />
      <Frame17 />
    </div>
  );
}

function Comentarios3() {
  return (
    <div className="h-[262px] relative shrink-0 w-full" data-name="Comentários">
      <div className="content-stretch flex flex-col items-start px-[36px] py-[16px] relative size-full">
        <Frame18 />
      </div>
    </div>
  );
}

function HistoricoComentarios() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] inset-[9.37%_0_0_0] items-start" data-name="Histórico Comentários">
      <div aria-hidden="true" className="absolute border border-[#dadada] border-solid inset-0 pointer-events-none" />
      <Comentarios1 />
      <Comentarios3 />
      <Comentarios1 />
    </div>
  );
}

function ComponenteTabCad() {
  return (
    <div className="h-[939px] relative shrink-0 w-[1202px]" data-name="componente-tab-cad">
      <Tab />
      <HistoricoComentarios />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[160.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute css-ew64yg font-['BancoDoBrasil_Titulos:Regular',sans-serif] leading-[24px] left-[80.5px] not-italic text-[#2d37f5] text-[16px] text-center top-0">Dados da Jornada</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3053c630} fill="var(--fill-0, #2D37F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ebf2ff] h-[40px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <Text1 />
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[14px] top-[-1px]">Número da História</p>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[14px] top-[-1px]">HU-2024-001</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-0 top-0 w-[577.5px]" data-name="Container">
      <Paragraph39 />
      <Paragraph40 />
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[14px] top-[-1px]">Tipo de Inclusão</p>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[14px] top-[-1px]">Nova Jornada</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-[601.5px] top-0 w-[577.5px]" data-name="Container">
      <Paragraph41 />
      <Paragraph42 />
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[14px] top-[-1px]">Data de Implementação</p>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[14px] top-[-1px]">15/03/2024</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-0 top-[74px] w-[577.5px]" data-name="Container">
      <Paragraph43 />
      <Paragraph44 />
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[14px] top-[-1px]">Data de Abertura</p>
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[14px] top-[-1px]">10/01/2025</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-[601.5px] top-[74px] w-[577.5px]" data-name="Container">
      <Paragraph45 />
      <Paragraph46 />
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[14px] top-[-1px]">Diretoria</p>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[14px] top-[-1px]">Diretoria de Varejo</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-0 top-[148px] w-[577.5px]" data-name="Container">
      <Paragraph47 />
      <Paragraph48 />
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[14px] top-[-1px]">Tipo HU</p>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[14px] top-[-1px]">Ativo</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-[601.5px] top-[148px] w-[577.5px]" data-name="Container">
      <Paragraph49 />
      <Paragraph50 />
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[14px] top-[-1px]">RME</p>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[14px] top-[-1px]">RME-2024-001</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-0 top-[222px] w-[577.5px]" data-name="Container">
      <Paragraph51 />
      <Paragraph52 />
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[14px] top-[-1px]">Sistema Responsável</p>
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[14px] top-[-1px]">Portal CAD</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-[601.5px] top-[222px] w-[577.5px]" data-name="Container">
      <Paragraph53 />
      <Paragraph54 />
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[14px] top-[-1px]">Periodicidade</p>
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[14px] top-[-1px]">Contínua</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-0 top-[296px] w-[577.5px]" data-name="Container">
      <Paragraph55 />
      <Paragraph56 />
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[14px] top-[-1px]">Template Meta</p>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[14px] top-[-1px]">Template Padrão</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-[601.5px] top-[296px] w-[577.5px]" data-name="Container">
      <Paragraph57 />
      <Paragraph58 />
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[14px] top-[-1px]">Categoria do Ativo</p>
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[14px] top-[-1px]">Conta Corrente</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-0 top-[370px] w-[577.5px]" data-name="Container">
      <Paragraph59 />
      <Paragraph60 />
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[14px] top-[-1px]">Tema</p>
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[14px] top-[-1px]">Abertura de Conta</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-[601.5px] top-[370px] w-[577.5px]" data-name="Container">
      <Paragraph61 />
      <Paragraph62 />
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[14px] top-[-1px]">Nome Hash Inicial</p>
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[14px] top-[-1px]">#abertura-conta</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-0 top-[444px] w-[577.5px]" data-name="Container">
      <Paragraph63 />
      <Paragraph64 />
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[14px] top-[-1px]">Hash de Início</p>
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[14px] top-[-1px]">inicio-abertura-conta</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-[601.5px] top-[444px] w-[577.5px]" data-name="Container">
      <Paragraph65 />
      <Paragraph66 />
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[14px] top-[-1px]">Título do Fluxo</p>
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[14px] top-[-1px]">Abertura de Conta Corrente PF</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-0 top-[518px] w-[1179px]" data-name="Container">
      <Paragraph67 />
      <Paragraph68 />
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[14px] top-[-1px]">Descrição do Fluxo</p>
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[14px] top-[-1px]">Jornada completa para abertura de conta corrente para pessoa física através dos canais digitais</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-0 top-[592px] w-[1179px]" data-name="Container">
      <Paragraph69 />
      <Paragraph70 />
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[14px] top-[-1px]">Input/Gatilho</p>
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[14px] top-[-1px]">{`Cliente acessa opção "Abrir Conta" no app`}</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-0 top-[666px] w-[1179px]" data-name="Container">
      <Paragraph71 />
      <Paragraph72 />
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[14px] top-[-1px]">Canais</p>
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[14px] top-[-1px]">App, Internet Banking</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-0 top-[740px] w-[577.5px]" data-name="Container">
      <Paragraph73 />
      <Paragraph74 />
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[14px] top-[-1px]">Status</p>
    </div>
  );
}

function Paragraph76() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[14px] top-[-1px]">Em Análise</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-[601.5px] top-[740px] w-[577.5px]" data-name="Container">
      <Paragraph75 />
      <Paragraph76 />
    </div>
  );
}

function Paragraph77() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[1179px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#111214] text-[14px] top-[-1px]">Link do Figma</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[34px] w-[216.438px]" data-name="Link">
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#2d37f5] text-[14px]">https://figma.com/file/exemplo1</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[53px] left-0 top-[814px] w-[1179px]" data-name="Container">
      <Paragraph77 />
      <Link1 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[867px] relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
      <Container28 />
      <Container29 />
      <Container30 />
      <Container31 />
      <Container32 />
      <Container33 />
      <Container34 />
      <Container35 />
      <Container36 />
      <Container37 />
      <Container38 />
      <Container39 />
      <Container40 />
      <Container41 />
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-white h-[916px] relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ebf2ff] border-b border-l border-r border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-br-[4px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[24px] px-[25px] relative size-full">
        <Container44 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col h-[956px] items-start relative shrink-0 w-[1235px]" data-name="Container">
      <Button1 />
      <Container45 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[47px] h-[956px] items-start left-[calc(50%+0.5px)] overflow-clip top-[267px] w-[1277px]">
      <Container22 />
      <ComponenteTabCad />
      <Container46 />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white h-[1270px] left-[-1px] overflow-clip rounded-bl-[36px] rounded-br-[36px] top-0 w-[1406px]" data-name="Body">
      <Banner />
      <Frame4 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#6c7077] text-[18px]">Mensagem...</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f0f2f4] flex-[1_0_0] min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-name="Input">
      <div className="content-stretch flex items-start pt-[8px] px-[16px] relative size-full">
        <Content3 />
      </div>
    </div>
  );
}

function DragIcon() {
  return (
    <div className="absolute bottom-[-0.5px] contents h-[8.498px] right-[-14.06px] w-[41.002px]" data-name="drag-icon">
      <div className="absolute bottom-[-0.49px] flex items-center justify-center right-[3.59px] size-[4.95px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-45 scale-x-40 scale-y-40">
          <div className="bg-[#888d95] h-[15.096px] w-[2.516px]" />
        </div>
      </div>
      <div className="absolute bottom-[0.22px] flex items-center justify-center right-[4.29px] size-[7.778px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-45 scale-x-40 scale-y-40">
          <div className="bg-[#888d95] h-[25.16px] w-[2.516px]" />
        </div>
      </div>
    </div>
  );
}

function TextAreaResize() {
  return (
    <div className="h-[11px] relative shrink-0 w-full" data-name="text-area-resize">
      <div className="absolute bg-[#f0f2f4] inset-0" data-name="Input-field-bg" />
      <DragIcon />
    </div>
  );
}

function Group() {
  return (
    <div className="bg-[#f0f2f4] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-name="Group">
      <Input />
      <TextAreaResize />
      <div className="bg-[#f0f2f4] h-[4px] shrink-0 w-full" data-name="Space" />
      <div className="bg-[#b4b9c1] h-px shrink-0 w-full" data-name="Border Botton" />
    </div>
  );
}

function TextAreaFieldLarge() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[227px] items-start relative shrink-0 w-full" data-name="TextArea Field / Large">
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
        <span className="leading-[1.125]">{`Qual será a métrica de sucesso da transação no canal? `}</span>
        <span className="font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125]">(Exemplos: Satisfação - nota de avaliação WhatsApp, Volume de negócios digitais, etc)</span>
      </p>
      <Group />
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#6c7077] text-[14px] tracking-[0.196px] w-full">500 caracteres restantes</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#6c7077] text-[18px]">Mensagem...</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f0f2f4] flex-[1_0_0] min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-name="Input">
      <div className="content-stretch flex items-start pt-[8px] px-[16px] relative size-full">
        <Content4 />
      </div>
    </div>
  );
}

function DragIcon1() {
  return (
    <div className="absolute bottom-[-0.5px] contents h-[8.498px] right-[-14.06px] w-[41.002px]" data-name="drag-icon">
      <div className="absolute bottom-[-0.49px] flex items-center justify-center right-[3.59px] size-[4.95px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-45 scale-x-40 scale-y-40">
          <div className="bg-[#888d95] h-[15.096px] w-[2.516px]" />
        </div>
      </div>
      <div className="absolute bottom-[0.22px] flex items-center justify-center right-[4.29px] size-[7.778px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-45 scale-x-40 scale-y-40">
          <div className="bg-[#888d95] h-[25.16px] w-[2.516px]" />
        </div>
      </div>
    </div>
  );
}

function TextAreaResize1() {
  return (
    <div className="h-[11px] relative shrink-0 w-full" data-name="text-area-resize">
      <div className="absolute bg-[#f0f2f4] inset-0" data-name="Input-field-bg" />
      <DragIcon1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="bg-[#f0f2f4] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-name="Group">
      <Input1 />
      <TextAreaResize1 />
      <div className="bg-[#f0f2f4] h-[4px] shrink-0 w-full" data-name="Space" />
      <div className="bg-[#b4b9c1] h-px shrink-0 w-full" data-name="Border Botton" />
    </div>
  );
}

function TextAreaFieldLarge1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[227px] items-start relative shrink-0 w-full" data-name="TextArea Field / Large">
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">Qual o resultado projetado nos primeiros 6 meses com a implementação da transação no canal?</p>
      <Group1 />
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#6c7077] text-[14px] tracking-[0.196px] w-full">500 caracteres restantes</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#6c7077] text-[18px]">Mensagem...</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f0f2f4] flex-[1_0_0] min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-name="Input">
      <div className="content-stretch flex items-start pt-[8px] px-[16px] relative size-full">
        <Content5 />
      </div>
    </div>
  );
}

function DragIcon2() {
  return (
    <div className="absolute bottom-[-0.5px] contents h-[8.498px] right-[-14.06px] w-[41.002px]" data-name="drag-icon">
      <div className="absolute bottom-[-0.49px] flex items-center justify-center right-[3.59px] size-[4.95px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-45 scale-x-40 scale-y-40">
          <div className="bg-[#888d95] h-[15.096px] w-[2.516px]" />
        </div>
      </div>
      <div className="absolute bottom-[0.22px] flex items-center justify-center right-[4.29px] size-[7.778px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-45 scale-x-40 scale-y-40">
          <div className="bg-[#888d95] h-[25.16px] w-[2.516px]" />
        </div>
      </div>
    </div>
  );
}

function TextAreaResize2() {
  return (
    <div className="h-[11px] relative shrink-0 w-full" data-name="text-area-resize">
      <div className="absolute bg-[#f0f2f4] inset-0" data-name="Input-field-bg" />
      <DragIcon2 />
    </div>
  );
}

function Group2() {
  return (
    <div className="bg-[#f0f2f4] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-name="Group">
      <Input2 />
      <TextAreaResize2 />
      <div className="bg-[#f0f2f4] h-[4px] shrink-0 w-full" data-name="Space" />
      <div className="bg-[#b4b9c1] h-px shrink-0 w-full" data-name="Border Botton" />
    </div>
  );
}

function TextAreaFieldLarge2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[227px] items-start relative shrink-0 w-full" data-name="TextArea Field / Large">
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">Como será feito o acompanhamento dessa(s) métrica(s) de sucesso?</p>
      <Group2 />
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#6c7077] text-[14px] tracking-[0.196px] w-full">500 caracteres restantes</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[77px] top-[1456px] w-[1088px]">
      <TextAreaFieldLarge />
      <TextAreaFieldLarge1 />
      <TextAreaFieldLarge2 />
    </div>
  );
}

function ButtonCriticalSecondary() {
  return (
    <div className="absolute bg-[#ffebec] content-stretch flex items-center justify-center left-[974px] px-[16px] py-[9px] rounded-[4px] top-[2252px]" data-name="Button Critical Secondary">
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e3111f] text-[12px] text-center tracking-[0.06px] uppercase">
        <p className="css-ew64yg leading-[1.125]">LIMPAR</p>
      </div>
    </div>
  );
}

function ButtonPrimary() {
  return (
    <div className="absolute bg-[#fcfc30] content-stretch flex items-center justify-center left-[1060px] px-[16px] py-[9px] rounded-[4px] top-[2252px]" data-name="Button Primary">
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#465eff] text-[12px] text-center tracking-[0.06px] uppercase">
        <p className="css-ew64yg leading-[1.125]">Cadastrar</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[974px] top-[2252px]">
      <ButtonCriticalSecondary />
      <ButtonPrimary />
    </div>
  );
}

function Tootipfinal() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[28.002px] left-[calc(50%+360.73px)] top-[calc(50%+909px)] w-[30.456px]" data-name="tootipfinal" />;
}

export default function MentoriaForm() {
  return (
    <div className="overflow-clip relative rounded-[30px] size-full" data-name="Mentoria Form">
      <Body />
      <Frame />
      <Group3 />
      <Tootipfinal />
    </div>
  );
}