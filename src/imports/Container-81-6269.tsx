import svgPaths from "./svg-wau7llsfxa";

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

function Frame() {
  return (
    <div className="content-stretch flex items-center py-[10px] relative shrink-0 w-[28px]">
      <ArrowLeft />
    </div>
  );
}

function ItemHome() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Item Home">
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
        <p className="css-ew64yg leading-[1.125]">Formulário</p>
      </div>
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Breadcrumb">
      <ItemHome />
      <BreadcrumbItem />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-[177px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <Frame />
        <Breadcrumb />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Frame1 />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-[#eff0f6] h-[6.031px] left-[54.08px] rounded-[40px] top-[13.48px] w-[98.094px]" data-name="Container" />;
}

function Icon() {
  return (
    <div className="h-[34px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <path d={svgPaths.p2c011100} fill="var(--fill-0, #EFF0F6)" id="Vector" />
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[34px] top-0" data-name="Container">
      <Icon />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[29.484px] left-[7.75px] top-[4.52px] w-[17.5px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[23px] left-[8.75px] text-[#6f6c90] text-[16px] text-center top-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        1
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute left-0 size-[34px] top-0" data-name="Container">
      <Container2 />
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[152px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[13.5px] min-h-px min-w-px not-italic relative text-[#b4b9c1] text-[12px] tracking-[0.168px]">Informações</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[152px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[13.5px] min-h-px min-w-px not-italic relative text-[#b4b9c1] text-[12px] tracking-[0.168px]">Básicas</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[27px] items-start justify-center left-0 top-[40.5px] w-[152px]" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[66px] left-[2px] top-0 w-[152px]" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[61px] relative shrink-0 w-[152.172px]" data-name="Container">
      <Container1 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-[#eff0f6] h-[6.031px] left-[54.08px] rounded-[40px] top-[13.48px] w-[98.094px]" data-name="Container" />;
}

function Icon1() {
  return (
    <div className="h-[34px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <path d={svgPaths.p2c011100} fill="var(--fill-0, #EFF0F6)" id="Vector" />
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[34px] top-0" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[29.484px] left-[7.75px] top-[4.52px] w-[17.5px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[23px] left-[9.14px] text-[#6f6c90] text-[16px] text-center top-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        2
      </p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute left-0 size-[34px] top-0" data-name="Container">
      <Container8 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[152px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[13.5px] min-h-px min-w-px not-italic relative text-[#b4b9c1] text-[12px] tracking-[0.168px]">Sistema</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[152px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[13.5px] min-h-px min-w-px not-italic relative text-[#b4b9c1] text-[12px] tracking-[0.168px]">e Periodicidade</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[27px] items-start justify-center left-0 top-[40.5px] w-[152px]" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[66px] left-[2px] top-0 w-[152px]" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[61px] relative shrink-0 w-[152.172px]" data-name="Container">
      <Container7 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-[#eff0f6] h-[6.031px] left-[54.08px] rounded-[40px] top-[13.48px] w-[98.094px]" data-name="Container" />;
}

function Icon2() {
  return (
    <div className="h-[34px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <path d={svgPaths.p2c011100} fill="var(--fill-0, #4A3AFF)" id="Vector" />
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[34px] top-0" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[29.484px] left-[7.75px] top-[4.52px] w-[17.5px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[23px] left-[9.02px] text-[16px] text-center text-white top-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        3
      </p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute left-0 size-[34px] top-0" data-name="Container">
      <Container14 />
      <Paragraph6 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[152px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[13.5px] min-h-px min-w-px not-italic relative text-[#191e76] text-[12px] tracking-[0.168px]">Categoria</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[152px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[13.5px] min-h-px min-w-px not-italic relative text-[#191e76] text-[12px] tracking-[0.168px]">e Tema</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col h-[27px] items-start justify-center left-0 top-[40.5px] w-[152px]" data-name="Container">
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[66px] left-[2px] top-0 w-[152px]" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[61px] relative shrink-0 w-[152.172px]" data-name="Container">
      <Container13 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return <div className="absolute bg-[#eff0f6] h-[6.031px] left-[54.08px] rounded-[40px] top-[13.48px] w-[98.094px]" data-name="Container" />;
}

function Icon3() {
  return (
    <div className="h-[34px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <path d={svgPaths.p2c011100} fill="var(--fill-0, #EFF0F6)" id="Vector" />
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[34px] top-0" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[29.484px] left-[7.75px] top-[4.52px] w-[17.5px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[23px] left-[8.89px] text-[#6f6c90] text-[16px] text-center top-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        4
      </p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute left-0 size-[34px] top-0" data-name="Container">
      <Container20 />
      <Paragraph9 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[152px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[13.5px] min-h-px min-w-px not-italic relative text-[#b4b9c1] text-[12px] tracking-[0.168px]">Título</p>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[152px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[13.5px] min-h-px min-w-px not-italic relative text-[#b4b9c1] text-[12px] tracking-[0.168px]">e Descrição</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col h-[27px] items-start justify-center left-0 top-[40.5px] w-[152px]" data-name="Container">
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[66px] left-[2px] top-0 w-[152px]" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[61px] relative shrink-0 w-[152.172px]" data-name="Container">
      <Container19 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return <div className="absolute bg-[#eff0f6] h-[6.031px] left-[54.08px] rounded-[40px] top-[13.48px] w-[98.094px]" data-name="Container" />;
}

function Icon4() {
  return (
    <div className="h-[34px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <path d={svgPaths.p2c011100} fill="var(--fill-0, #EFF0F6)" id="Vector" />
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[34px] top-0" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[29.484px] left-[7.75px] top-[4.52px] w-[17.5px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[23px] left-[8.86px] text-[#6f6c90] text-[16px] text-center top-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        5
      </p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute left-0 size-[34px] top-0" data-name="Container">
      <Container26 />
      <Paragraph12 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[152px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[13.5px] min-h-px min-w-px not-italic relative text-[#b4b9c1] text-[12px] tracking-[0.168px]">Canal</p>
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[152px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[13.5px] min-h-px min-w-px not-italic relative text-[#b4b9c1] text-[12px] tracking-[0.168px]">e Gatilho</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col h-[27px] items-start justify-center left-0 top-[40.5px] w-[152px]" data-name="Container">
      <Paragraph13 />
      <Paragraph14 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[66px] left-[2px] top-0 w-[152px]" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[61px] relative shrink-0 w-[152.172px]" data-name="Container">
      <Container25 />
      <Container29 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[19px] items-start left-0 top-0">
      <Container6 />
      <Container12 />
      <Container18 />
      <Container24 />
      <Container30 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[61px] relative shrink-0 w-full" data-name="Container">
      <Frame4 />
    </div>
  );
}

function SpaceVertical() {
  return <div className="h-full opacity-20 shrink-0 w-[8px]" data-name="Space Vertical" />;
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px]">Ex: Agronegócio, Investimentos, Crédito...</p>
      <div className="flex flex-row items-center self-stretch">
        <SpaceVertical />
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[7px] pl-[12px] pr-[4px] pt-[8px] relative size-full">
          <Content />
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

function TextFieldRegular() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[692px]" data-name="Text Field / Regular">
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">11. Qual é o Tema do seu fluxo? *</p>
      <Group />
    </div>
  );
}

function SpaceVertical1() {
  return <div className="h-full opacity-20 shrink-0 w-[8px]" data-name="Space Vertical" />;
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px]">Nome da hash inicial</p>
      <div className="flex flex-row items-center self-stretch">
        <SpaceVertical1 />
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[7px] pl-[12px] pr-[4px] pt-[8px] relative size-full">
          <Content1 />
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

function TextFieldRegular1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[692px]" data-name="Text Field / Regular">
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">12. Qual o nome da Hash Inicial? *</p>
      <Group1 />
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#888d95] text-[14px] tracking-[0.196px] w-full">Para ativos e induções, se a jornada estiver em uma múltipla resposta, informe a hash da múltipla</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <TextFieldRegular />
      <TextFieldRegular1 />
    </div>
  );
}

function SpaceVertical2() {
  return <div className="h-full opacity-20 shrink-0 w-[8px]" data-name="Space Vertical" />;
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px]">Ex: d823ab05-639c-11ea-bff3-005056924583</p>
      <div className="flex flex-row items-center self-stretch">
        <SpaceVertical2 />
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[7px] pl-[12px] pr-[4px] pt-[8px] relative size-full">
          <Content2 />
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

function TextFieldRegular2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[692px]" data-name="Text Field / Regular">
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">13. Qual a Hash de início (UUID/Hash)? *</p>
      <Group2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0">
      <Frame3 />
      <TextFieldRegular2 />
    </div>
  );
}

function Container32() {
  return <div className="h-[69px] shrink-0 w-full" data-name="Container" />;
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[190px] items-start left-0 top-0 w-[896px]" data-name="Container">
      <Frame2 />
      <Container32 />
    </div>
  );
}

function Form() {
  return (
    <div className="h-[294.75px] relative shrink-0 w-full" data-name="Form">
      <Container33 />
    </div>
  );
}

function FormularioJornadasMultiStep() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[455.75px] items-start relative shrink-0 w-full" data-name="FormularioJornadasMultiStep">
      <Container />
      <Container31 />
      <Form />
    </div>
  );
}

export default function Container34() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pt-[48px] px-[64px] relative rounded-[30px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-full" data-name="Container">
      <FormularioJornadasMultiStep />
    </div>
  );
}