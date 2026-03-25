import svgPaths from "./svg-7px4k1mwm3";
import imgRobot1 from "@/assets/938819effa26e91dec3f12d8c0dcc985c939df48.png";

function TitleBar() {
  return <div className="absolute content-stretch flex gap-[32px] items-center left-[64px] top-[364px] w-[1500px]" data-name="Title Bar" />;
}

function Divider() {
  return (
    <div className="absolute h-[5px] left-[67px] top-[222px] w-[1241px]" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1241 5">
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
        <p className="css-ew64yg leading-[1.125]">#ID01</p>
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
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Titulos:Bold',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#111214] text-[22px]">PIX</p>
    </div>
  );
}

function Bullet() {
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
    <div className="bg-[#f0f2f4] content-stretch flex gap-[2px] h-[24px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[999px] shrink-0" data-name="Tag Status">
      <div aria-hidden="true" className="absolute border border-[#d4d8dd] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Bullet />
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#0c8a00] text-[14px] tracking-[0.07px]">
        <p className="css-ew64yg leading-[1.125]">Aprovada</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[799px]">
      <TagStatus />
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Bold',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#0c8a00] text-[12px] tracking-[0.168px]">Sua solicitação foi aprovada</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[67px] top-[112.5px] w-[1503px]">
      <TitleBar1 />
      <Frame6 />
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

function Frame11() {
  return (
    <div className="absolute content-stretch flex items-center left-[57px] p-[10px] top-[67px] w-[82px]">
      <ArrowLeft />
    </div>
  );
}

function Banner() {
  return (
    <div className="absolute bg-white h-[2017px] left-0 top-0 w-[1406px]" data-name="Banner">
      <TitleBar />
      <Divider />
      <Breadcrumb />
      <Frame20 />
      <Frame11 />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white h-[2233px] left-[-1px] overflow-clip top-0 w-[1406px]" data-name="Body">
      <Banner />
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

function Group26() {
  return (
    <div className="absolute contents left-[974px] top-[2252px]">
      <ButtonCriticalSecondary />
      <ButtonPrimary />
    </div>
  );
}

function Tootipfinal() {
  return <div className="absolute h-[28.002px] left-[calc(50%+360.73px)] top-[calc(50%+909.5px)] translate-x-[-50%] translate-y-[-50%] w-[30.456px]" data-name="tootipfinal" />;
}

function Relationship() {
  return (
    <div className="h-[26px] relative shrink-0 w-[25px]" data-name="relationship">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 26">
        <g id="relationship">
          <g id="Vector">
            <path d={svgPaths.p37c23280} fill="var(--fill-0, #646464)" />
            <path d={svgPaths.p1f148200} fill="var(--fill-0, #646464)" />
            <path d={svgPaths.p381b7980} fill="var(--fill-0, #646464)" />
            <path d={svgPaths.p34027040} fill="var(--fill-0, #646464)" />
            <path d={svgPaths.p1ecc7780} fill="var(--fill-0, #646464)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start leading-[1.125] min-h-px min-w-px not-italic relative self-stretch text-[#686c73] text-[14px] tracking-[0.07px]">
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Bold',sans-serif] relative shrink-0 w-full">{`Comentário do CAD: `}</p>
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] relative shrink-0 w-full">Sua solicitação está alinhada aos direcionadores estratégicos</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#ffdf9f] content-stretch flex gap-[8px] items-start p-[16px] relative rounded-[10px] shrink-0 w-[743px]">
      <div aria-hidden="true" className="absolute border border-[#ffb31a] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Relationship />
      <Frame8 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[41px]" data-name="robot 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRobot1} />
      </div>
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] h-[15px] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-[287px]">Sugestão da IA para abrir a História</p>
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[18px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group">
          <path d={svgPaths.p4aa5880} fill="var(--fill-0, #646464)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="Group">
      <Group />
    </div>
  );
}

function Copiar() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[26px]" data-name="copiar2">
      <Group1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cecece] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-end justify-end size-full">
        <div className="content-stretch flex gap-[10px] items-end justify-end p-[16px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[#686c73] text-[#ff3535] text-[0px] text-[14px] tracking-[0.196px]">
            <span className="font-['BancoDoBrasil_Textos:Bold',sans-serif] leading-[1.125]">
              Resumo
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </span>
            <span className="leading-[1.125]">{`[PORTAL] [TRANSAÇÃO] Pagina Nova Solicitação > Incluir Solicitação e Acompanhar Solicitação`}</span>
          </p>
          <Copiar />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[18px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group">
          <path d={svgPaths.p4aa5880} fill="var(--fill-0, #646464)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="Group">
      <Group2 />
    </div>
  );
}

function Copiar1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[26px]" data-name="copiar2">
      <Group3 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cecece] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-end justify-end size-full">
        <div className="content-stretch flex gap-[10px] items-end justify-end p-[16px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[#686c73] text-[#ff3535] text-[0px] text-[14px] tracking-[0.196px]">
            <span className="font-['BancoDoBrasil_Textos:Bold',sans-serif] leading-[1.125]">
              Tags
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </span>
            <span className="leading-[1.125]">#portal #transação #demanda_nova</span>
          </p>
          <Copiar1 />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[18px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group">
          <path d={svgPaths.p4aa5880} fill="var(--fill-0, #646464)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="Group">
      <Group4 />
    </div>
  );
}

function Copiar2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[26px]" data-name="copiar2">
      <Group5 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cecece] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-end justify-end size-full">
        <div className="content-stretch flex gap-[10px] items-end justify-end p-[16px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[#686c73] text-[#ff3535] text-[0px] text-[14px] tracking-[0.196px]">
            <span className="font-['BancoDoBrasil_Textos:Bold',sans-serif] leading-[1.125]">
              Descrição
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </span>
            <span className="leading-[1.125]">
              {`SENDO UM Analista do CAD QUERO QUE seja desenvolvida a página "Nova solicitação" > "Incluir solicitação" e "Acompanhar solicitação" PARA QUE os Gestores possam incluir e consultar novas solicitações de jornadas nos assistentes virtuais.`}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              {` Ganhos esperados:`}
              <br aria-hidden="true" />
              {` Na V.1: Padronização da esteira de entradas de demandas no CAD antes da abertura de histórias para avaliação negocial.`}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              {` Posteriormente será aberta história para a V.2, com utilização de IA generativa para análise das demandas e pontuação.`}
            </span>
          </p>
          <Copiar2 />
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[18px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group">
          <path d={svgPaths.p4aa5880} fill="var(--fill-0, #646464)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="Group">
      <Group6 />
    </div>
  );
}

function Copiar3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[26px]" data-name="copiar2">
      <Group7 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cecece] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-end justify-end size-full">
        <div className="content-stretch flex gap-[10px] items-end justify-end p-[16px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[#686c73] text-[#ff3535] text-[0px] text-[14px] tracking-[0.196px]">
            <span className="font-['BancoDoBrasil_Textos:Bold',sans-serif] leading-[1.125]">
              Critério de aceitação
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </span>
            <span className="leading-[1.125]">
              Desenvolvimento:
              <br aria-hidden="true" />
              {` - inclusão de formulários contendo as perguntas do  `}
            </span>
            <a className="cursor-pointer leading-[1.125]" href="https://genti.intranet.bb.com.br/ccm/resource/itemName/com.ibm.team.workitem.Attachment/1160090">
              <span className="leading-[1.125]" href="https://genti.intranet.bb.com.br/ccm/resource/itemName/com.ibm.team.workitem.Attachment/1160090">
                anexo 1160090
              </span>
            </a>
            <span className="leading-[1.125]">
              <br aria-hidden="true" />
              {` - salvar as respostas dos formulários`}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              {` Para Gestores (outros Dependências):`}
              <br aria-hidden="true" />
              {` a) Tela de inclusão de novas demandas (formulário em anexo)`}
              <br aria-hidden="true" />
              {` Obs: algumas informações devem estar pré-preenchidas com os dados da sessão (matrícula, Dependência, nome, e-mail), com possibilidade do usuário alterar`}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              {` Ao finalizar, modal para quem estiver preenchendo o formulário conferir antes de enviar e, ao confirmar, exibir oferecer a consulta da demanda.`}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              {` b) Tela de consulta de demandas abertas pelo Dependência: id da demanda, título da demanda, demandante, tipo de demanda, status`}
              <br aria-hidden="true" />
              {` Obs: Cada Dependência pode ter até 3 demandas com status "nova" e/ou "em análise"`}
              <br aria-hidden="true" />
              {` Obs 2:  Acompanhamento do status das demandas: "nova", "em análise", "análise concluída - abrir história", "análise concluída - Encerrada"`}
              <br aria-hidden="true" />
              {` Obs 3: Gestor poderá consultar somente as demandas do Dependência dele`}
              <br aria-hidden="true" />
              {` Obs 4: Gestor poderá editar e/ou excluir a demanda somente com status "nova"`}
            </span>
          </p>
          <Copiar3 />
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[18px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Group">
          <path d={svgPaths.p4aa5880} fill="var(--fill-0, #646464)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="Group">
      <Group8 />
    </div>
  );
}

function Copiar4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[26px]" data-name="copiar2">
      <Group9 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#cecece] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-end justify-end size-full">
        <div className="content-stretch flex gap-[10px] items-end justify-end p-[16px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[#686c73] text-[#ff3535] text-[0px] text-[14px] tracking-[0.196px]">
            <span className="font-['BancoDoBrasil_Textos:Bold',sans-serif] leading-[1.125]">
              Cenário de teste
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </span>
            <span className="leading-[1.125]">Página com as informações e funcionalidades disponíveis em prod.</span>
          </p>
          <Copiar4 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-full">
      <Frame10 />
      <Frame14 />
      <Frame15 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full">
      <Frame16 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame17 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame18 />
      <Frame22 />
    </div>
  );
}

function ButtonSecondary() {
  return (
    <div className="bg-[#e0e9ff] content-stretch flex items-center justify-end px-[16px] py-[9px] relative rounded-[4px] shrink-0" data-name="Button Secondary">
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#465eff] text-[12px] text-center tracking-[0.06px] uppercase">
        <p className="css-ew64yg leading-[1.125]">ABRIR HiSTÓRIA</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex h-[57px] items-center justify-end relative shrink-0 w-full">
      <ButtonSecondary />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Title">
      <div className="flex flex-[1_0_0] flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#2d37f5] text-[16px]">
        <p className="css-4hzbpn leading-[1.25]">Dados da Solicitação</p>
      </div>
    </div>
  );
}

function ChevronSmallUp() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron-small-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-small-up">
          <path d={svgPaths.p3053c630} fill="var(--fill-0, #2D37F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon Button">
      <ChevronSmallUp />
    </div>
  );
}

function Chevron() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Chevron">
      <IconButton />
    </div>
  );
}

function Layout() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative" data-name="Layout">
      <Title />
      <Chevron />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#ebf2ff] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative w-full">
          <Layout />
        </div>
      </div>
    </div>
  );
}

function Back() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="back">
          <path d={svgPaths.p1cb21b00} fill="var(--fill-0, #313338)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[34px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
          <circle cx="17" cy="17" fill="var(--fill-0, #4A3AFF)" id="Ellipse 436" r="17" />
        </svg>
      </div>
      <p className="col-1 css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[23px] ml-[16.5px] mt-[4.53px] relative row-1 text-[16px] text-center text-white translate-x-[-50%]" style={{ fontVariationSettings: "'opsz' 14" }}>
        1
      </p>
    </div>
  );
}

function Group15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Group14 />
    </div>
  );
}

function LinkNav() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center px-0 py-[3px] relative shrink-0 w-full" data-name="Link Nav">
      <div className="flex flex-col font-['BancoDoBrasil_Textos:Regular',sans-serif] justify-center leading-[1.125] not-italic relative shrink-0 text-[#191e76] text-[12px] tracking-[0.168px] w-full">
        <p className="css-4hzbpn mb-0">Informações</p>
        <p className="css-4hzbpn">Básicas</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[2px] top-0 w-[152px]">
      <Group15 />
      <LinkNav />
    </div>
  );
}

function Component() {
  return (
    <div className="h-[61px] relative shrink-0 w-[152.181px]" data-name="1">
      <div className="absolute bg-[#eff0f6] inset-[22.13%_0_68.03%_35.54%] rounded-[40px]" />
      <div className="absolute bg-[#4a3aff] inset-[22.95%_59.92%_67.21%_35.48%] rounded-[40px]" />
      <Frame30 />
    </div>
  );
}

function Group16() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[34px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
          <circle cx="17" cy="17" fill="var(--fill-0, #EFF0F6)" id="Ellipse 436" r="17" />
        </svg>
      </div>
      <p className="col-1 css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[23px] ml-[16px] mt-[4.53px] relative row-1 text-[#6f6c90] text-[16px] text-center translate-x-[-50%]" style={{ fontVariationSettings: "'opsz' 14" }}>
        2
      </p>
    </div>
  );
}

function Group17() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Group16 />
    </div>
  );
}

function LinkNav1() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center px-0 py-[3px] relative shrink-0 w-full" data-name="Link Nav">
      <div className="flex flex-col font-['BancoDoBrasil_Textos:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b4b9c1] text-[12px] tracking-[0.168px] w-full">
        <p className="css-4hzbpn leading-[1.125]">Público-Alvo</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[2px] top-0 w-[152px]">
      <Group17 />
      <LinkNav1 />
    </div>
  );
}

function Component1() {
  return (
    <div className="h-[61px] relative shrink-0 w-[152.181px]" data-name="2">
      <div className="absolute bg-[#eff0f6] inset-[22.13%_0_68.03%_35.54%] rounded-[40px]" />
      <Frame31 />
    </div>
  );
}

function Group18() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[34px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
          <circle cx="17" cy="17" fill="var(--fill-0, #EFF0F6)" id="Ellipse 436" r="17" />
        </svg>
      </div>
      <p className="col-1 css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[23px] ml-[16px] mt-[4.53px] relative row-1 text-[#6f6c90] text-[16px] text-center translate-x-[-50%]" style={{ fontVariationSettings: "'opsz' 14" }}>
        3
      </p>
    </div>
  );
}

function Group19() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Group18 />
    </div>
  );
}

function LinkNav2() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center px-0 py-[3px] relative shrink-0 w-full" data-name="Link Nav">
      <div className="flex flex-col font-['BancoDoBrasil_Textos:Regular',sans-serif] justify-center leading-[1.125] not-italic relative shrink-0 text-[#b4b9c1] text-[12px] tracking-[0.168px] w-full">
        <p className="css-4hzbpn mb-0">Confirmação</p>
        <p className="css-4hzbpn">e Comprovante</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[2px] top-0 w-[152px]">
      <Group19 />
      <LinkNav2 />
    </div>
  );
}

function Component2() {
  return (
    <div className="h-[61px] relative shrink-0 w-[152.181px]" data-name="3">
      <div className="absolute bg-[#eff0f6] inset-[22.13%_0_68.03%_35.54%] rounded-[40px]" />
      <Frame33 />
    </div>
  );
}

function Group20() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[34px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
          <circle cx="17" cy="17" fill="var(--fill-0, #EFF0F6)" id="Ellipse 436" r="17" />
        </svg>
      </div>
      <p className="col-1 css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[23px] ml-[16px] mt-[4.53px] relative row-1 text-[#6f6c90] text-[16px] text-center translate-x-[-50%]" style={{ fontVariationSettings: "'opsz' 14" }}>
        4
      </p>
    </div>
  );
}

function Group21() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Group20 />
    </div>
  );
}

function LinkNav3() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center px-0 py-[3px] relative shrink-0 w-full" data-name="Link Nav">
      <div className="flex flex-col font-['BancoDoBrasil_Textos:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b4b9c1] text-[12px] tracking-[0.168px] w-full">
        <p className="css-4hzbpn leading-[1.125]">Transbordo</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[2px] top-0 w-[152px]">
      <Group21 />
      <LinkNav3 />
    </div>
  );
}

function Component3() {
  return (
    <div className="h-[61px] relative shrink-0 w-[152.181px]" data-name="4">
      <div className="absolute bg-[#eff0f6] inset-[22.13%_0_68.03%_35.54%] rounded-[40px]" />
      <Frame34 />
    </div>
  );
}

function Group22() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[34px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
          <circle cx="17" cy="17" fill="var(--fill-0, #EFF0F6)" id="Ellipse 436" r="17" />
        </svg>
      </div>
      <p className="col-1 css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[23px] ml-[16px] mt-[4.53px] relative row-1 text-[#6f6c90] text-[16px] text-center translate-x-[-50%]" style={{ fontVariationSettings: "'opsz' 14" }}>
        5
      </p>
    </div>
  );
}

function Group23() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Group22 />
    </div>
  );
}

function LinkNav4() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center px-0 py-[3px] relative shrink-0 w-full" data-name="Link Nav">
      <div className="flex flex-col font-['BancoDoBrasil_Textos:Regular',sans-serif] justify-center leading-[1.125] not-italic relative shrink-0 text-[#b4b9c1] text-[12px] tracking-[0.168px] w-full">
        <p className="css-4hzbpn mb-0">Mídias</p>
        <p className="css-4hzbpn">e Documentação</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[2px] top-0 w-[152px]">
      <Group23 />
      <LinkNav4 />
    </div>
  );
}

function Component4() {
  return (
    <div className="h-[61px] relative shrink-0 w-[152.181px]" data-name="5">
      <div className="absolute bg-[#eff0f6] inset-[22.13%_0_68.03%_35.54%] rounded-[40px]" />
      <Frame35 />
    </div>
  );
}

function Group24() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[34px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
          <circle cx="17" cy="17" fill="var(--fill-0, #EFF0F6)" id="Ellipse 436" r="17" />
        </svg>
      </div>
      <p className="col-1 css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[23px] ml-[16.5px] mt-[4.53px] relative row-1 text-[#6f6c90] text-[16px] text-center translate-x-[-50%]" style={{ fontVariationSettings: "'opsz' 14" }}>
        6
      </p>
    </div>
  );
}

function Group25() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Group24 />
    </div>
  );
}

function LinkNav5() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center px-0 py-[3px] relative shrink-0 w-full" data-name="Link Nav">
      <div className="flex flex-col font-['BancoDoBrasil_Textos:Regular',sans-serif] justify-center leading-[1.125] not-italic relative shrink-0 text-[#b4b9c1] text-[12px] tracking-[0.168px] w-full">
        <p className="css-4hzbpn mb-0">Indução</p>
        <p className="css-4hzbpn">e Acompanhamento</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[2px] top-0 w-[152px]">
      <Group25 />
      <LinkNav5 />
    </div>
  );
}

function Component5() {
  return (
    <div className="h-[61px] relative shrink-0 w-[152.181px]" data-name="6">
      <div className="absolute bg-[#eff0f6] inset-[22.13%_0_68.03%_35.54%] rounded-[40px]" />
      <Frame36 />
    </div>
  );
}

function TimelineForm() {
  return (
    <div className="content-stretch flex gap-[19px] h-[56px] items-start relative shrink-0 w-[1069px]" data-name="timeline-form">
      <Back />
      <Component />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute content-stretch flex items-start left-[21px] top-[92px]">
      <TimelineForm />
    </div>
  );
}

function LinkNav6() {
  return <div className="absolute content-stretch flex flex-col items-start justify-center left-px px-0 py-[3px] top-0" data-name="Link Nav" />;
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#b4b9c1] text-[16px] tracking-[0.08px]">Pix</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[7px] pt-[8px] px-[16px] relative size-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Group">
      <Input />
      <div className="bg-[#d4d8dd] h-px shrink-0 w-full" data-name="Border Botton" />
    </div>
  );
}

function TextFieldRegular() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text Field / Regular">
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#b4b9c1] text-[14px] tracking-[0.07px] w-full">Qual o tema/produto?</p>
      <Group10 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-full">
      <TextFieldRegular />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col h-[82px] items-center justify-center relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#b4b9c1] text-[16px] tracking-[0.08px]">#199</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[7px] pt-[8px] px-[16px] relative size-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Group">
      <Input1 />
      <div className="bg-[#d4d8dd] h-px shrink-0 w-full" data-name="Border Botton" />
    </div>
  );
}

function TextFieldRegular1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text Field / Regular">
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#b4b9c1] text-[14px] tracking-[0.07px] w-full">Qual o objetivo/escopo da transação?</p>
      <Group11 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative w-[473px]">
      <TextFieldRegular1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col h-[82px] items-center justify-center relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame />
      <Frame1 />
    </div>
  );
}

function TextAreaFieldLarge() {
  return <div className="content-stretch flex flex-col gap-[8px] h-[120px] items-start shrink-0 w-[474px]" data-name="TextArea Field / Large" />;
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[259px] items-start relative shrink-0 w-full">
      <Frame32 />
      <TextAreaFieldLarge />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-0 top-[67px] w-[473px]">
      <Frame5 />
    </div>
  );
}

function RadiobuttonIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Radiobutton Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p4501f00} fill="var(--fill-0, #D4D8DD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px pb-0 pt-[2px] px-0 relative" data-name="Content">
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#b4b9c1] text-[16px] tracking-[0.08px] w-full">Sim</p>
    </div>
  );
}

function Option() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Option 1">
      <div aria-hidden="true" className="absolute border border-[#b4b9c1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
        <RadiobuttonIcon />
        <Content2 />
      </div>
    </div>
  );
}

function RadiobuttonIcon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Radiobutton Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p26f9ce00} fill="var(--fill-0, #D4D8DD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px pb-0 pt-[2px] px-0 relative" data-name="Content">
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#b4b9c1] text-[16px] tracking-[0.08px] w-full">Não</p>
    </div>
  );
}

function Option1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Option 2">
      <div aria-hidden="true" className="absolute border border-[#d4d8dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
        <RadiobuttonIcon1 />
        <Content3 />
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <Option />
      <Option1 />
    </div>
  );
}

function RadioButton() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[473px]" data-name="Radio Button">
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#b4b9c1] text-[14px] tracking-[0.07px] w-full">A RA ou Regulatório especifica que a transação deve ser disponibilizada no WhatsApp?</p>
      <Content4 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[3px] top-[359px]">
      <RadioButton />
    </div>
  );
}

function Frame21() {
  return <div className="absolute h-[51px] left-[614px] top-[315px] w-[496px]" />;
}

function RadiobuttonIcon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Radiobutton Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p4501f00} fill="var(--fill-0, #D4D8DD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px pb-0 pt-[2px] px-0 relative" data-name="Content">
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#b4b9c1] text-[16px] tracking-[0.08px] w-full">Sim</p>
    </div>
  );
}

function Option2() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Option 1">
      <div aria-hidden="true" className="absolute border border-[#d4d8dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
        <RadiobuttonIcon2 />
        <Content5 />
      </div>
    </div>
  );
}

function RadiobuttonIcon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Radiobutton Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p26f9ce00} fill="var(--fill-0, #B4B9C1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px pb-0 pt-[2px] px-0 relative" data-name="Content">
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#b4b9c1] text-[16px] tracking-[0.08px] w-full">Não</p>
    </div>
  );
}

function Option3() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Option 2">
      <div aria-hidden="true" className="absolute border border-[#b4b9c1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
        <RadiobuttonIcon3 />
        <Content6 />
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <Option2 />
      <Option3 />
    </div>
  );
}

function RadioButton1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 top-0 w-[473px]" data-name="Radio Button">
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#b4b9c1] text-[14px] tracking-[0.07px] w-full">Essa transação já existe em outro Canal?</p>
      <Content7 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute h-[128px] left-[609px] top-[79px] w-[495px]">
      <RadioButton1 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#b4b9c1] text-[16px] tracking-[0.08px]">Bot no WhatsApp PF</p>
    </div>
  );
}

function Icone1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icone">
          <path d={svgPaths.pae4800} fill="var(--fill-0, #D4D8DD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f0f2f4] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pb-[7px] pt-[8px] px-[16px] relative w-full">
          <Content8 />
          <Icone1 />
        </div>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-between relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Group">
      <Input2 />
      <div className="bg-[#d4d8dd] h-px shrink-0 w-full" data-name="Border Botton" />
    </div>
  );
}

function SelectFieldRegular() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 top-0 w-[474px]" data-name="Select Field / Regular">
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#b4b9c1] text-[14px] tracking-[0.07px] w-full">Em qual canal deseja incluir a transação?</p>
      <Group12 />
    </div>
  );
}

function SelecionarTipo() {
  return (
    <div className="absolute h-[64px] left-0 top-0 w-[464px]" data-name="Selecionar Tipo">
      <SelectFieldRegular />
    </div>
  );
}

function SelecionarTipo1() {
  return (
    <div className="absolute h-[69px] left-0 top-[270px] w-[464px]" data-name="Selecionar Tipo">
      <SelecionarTipo />
    </div>
  );
}

function RadiobuttonIcon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Radiobutton Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p4501f00} fill="var(--fill-0, #D4D8DD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px pb-0 pt-[2px] px-0 relative" data-name="Content">
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#b4b9c1] text-[16px] tracking-[0.08px] w-full">Sim</p>
    </div>
  );
}

function Option4() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Option 1">
      <div aria-hidden="true" className="absolute border border-[#d4d8dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
        <RadiobuttonIcon4 />
        <Content9 />
      </div>
    </div>
  );
}

function RadiobuttonIcon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Radiobutton Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p26f9ce00} fill="var(--fill-0, #D4D8DD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px pb-0 pt-[2px] px-0 relative" data-name="Content">
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#b4b9c1] text-[16px] tracking-[0.08px] w-full">Não</p>
    </div>
  );
}

function Option5() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Option 2">
      <div aria-hidden="true" className="absolute border border-[#d4d8dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
        <RadiobuttonIcon5 />
        <Content10 />
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content">
      <Option4 />
      <Option5 />
    </div>
  );
}

function RadioButton2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[473px]" data-name="Radio Button">
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#b4b9c1] text-[14px] tracking-[0.07px] w-full">A alteração visa atender RA (Recomendação de auditoria) ou Regulatório (Regulamento ou lei específica)?</p>
      <Content11 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-px top-[545px]">
      <RadioButton2 />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#b4b9c1] text-[18px]">Mensagem...</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-[#f0f2f4] flex-[1_0_0] min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-name="Input">
      <div className="content-stretch flex items-start pb-0 pt-[8px] px-[16px] relative size-full">
        <Content12 />
      </div>
    </div>
  );
}

function DragIcon() {
  return (
    <div className="absolute bottom-[-0.92px] contents h-[8.921px] right-[-3.09px] w-[19.978px]" data-name="drag-icon">
      <div className="absolute bottom-[-0.49px] flex items-center justify-center right-[3.59px] size-[4.95px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[45deg] scale-[74.46%]">
          <div className="bg-[#d4d8dd] h-[8.058px] w-[1.343px]" />
        </div>
      </div>
      <div className="absolute bottom-[0.22px] flex items-center justify-center right-[4.29px] size-[7.778px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[45deg] scale-[74.46%]">
          <div className="bg-[#d4d8dd] h-[13.43px] w-[1.343px]" />
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

function Group13() {
  return (
    <div className="bg-[#f0f2f4] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-tl-[4px] rounded-tr-[4px] w-full" data-name="Group">
      <Input3 />
      <TextAreaResize />
      <div className="bg-[#f0f2f4] h-[4px] shrink-0 w-full" data-name="Space" />
      <div className="bg-[#d4d8dd] h-px shrink-0 w-full" data-name="Border Botton" />
    </div>
  );
}

function TextAreaFieldLarge1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[266px] items-start left-[609px] top-[239px] w-[505px]" data-name="TextArea Field / Large">
      <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#b4b9c1] text-[14px] tracking-[0.07px] w-full">Informe o link do protótipo (Figma, Marvel, Sketch, etc) da transação já implementada em outro canal</p>
      <Group13 />
    </div>
  );
}

function ButtonSecondary1() {
  return (
    <div className="bg-[#e0e9ff] content-stretch flex items-center justify-center px-[16px] py-[9px] relative rounded-[4px] shrink-0" data-name="Button Secondary">
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#465eff] text-[12px] text-center tracking-[0.06px] uppercase">
        <p className="css-ew64yg leading-[1.125]">VOLTAR</p>
      </div>
    </div>
  );
}

function ButtonPrimary1() {
  return (
    <div className="bg-[#fcfc30] content-stretch flex items-center justify-center px-[16px] py-[9px] relative rounded-[4px] shrink-0" data-name="Button Primary">
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#465eff] text-[12px] text-center tracking-[0.06px] uppercase">
        <p className="css-ew64yg leading-[1.125]">PROXIMO</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-[935px] top-[689px]">
      <ButtonSecondary1 />
      <ButtonPrimary1 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute h-[721px] left-[72px] top-[148px] w-[1110px]">
      <LinkNav6 />
      <Frame27 />
      <Frame21 />
      <SelecionarTipo1 />
      <Frame28 />
      <Frame4 />
      <Frame26 />
      <Frame7 />
      <TextAreaFieldLarge1 />
    </div>
  );
}

function Icone2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icone">
          <path d={svgPaths.p3f909700} fill="var(--fill-0, #2D37F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Icon">
      <Icone2 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Text">
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#4668ff] text-[14px] text-ellipsis tracking-[0.07px] w-full">
        <p className="css-g0mm18 leading-[1.125] overflow-hidden">Nova Jornada / Cliente PF / Transação</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center self-stretch">
        <Icon />
      </div>
      <Text />
    </div>
  );
}

function LinkNav7() {
  return (
    <div className="absolute content-stretch flex items-center left-[66px] top-[52px] w-[394px]" data-name="Link Nav">
      <Container />
    </div>
  );
}

function Pag() {
  return (
    <div className="h-[100px] relative shrink-0 w-full" data-name="pag 1">
      <LinkNav7 />
      <Frame29 />
      <Frame25 />
    </div>
  );
}

function Content13() {
  return (
    <div className="relative rounded-bl-[4px] rounded-br-[4px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
        <Pag />
      </div>
    </div>
  );
}

function Accordion() {
  return (
    <div className="bg-[#fefefe] h-[767px] relative rounded-[8px] shrink-0 w-[1262px]" data-name="Accordion">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Header />
        <Content13 />
      </div>
      <div aria-hidden="true" className="absolute border-[#d4d8dd] border-b-2 border-l border-r border-solid border-t inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame24 />
      <Frame23 />
      <Accordion />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[753px] items-start left-[63px] top-[260px] w-[1266px]">
      <Frame9 />
      <Frame37 />
    </div>
  );
}

export default function MentoriaForm() {
  return (
    <div className="overflow-clip relative rounded-bl-[36px] rounded-br-[36px] size-full" data-name="Mentoria Form">
      <Body />
      <Group26 />
      <Tootipfinal />
      <Frame19 />
    </div>
  );
}