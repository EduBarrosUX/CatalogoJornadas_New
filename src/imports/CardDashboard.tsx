import svgPaths from "./svg-j7k1tp96zf";

function Heading() {
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
          <path d={svgPaths.p28502300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#4668ff] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Component />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[8px] pt-[24px] px-[24px] relative w-full">
          <Heading />
          <Background />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['BancoDoBrasil_Textos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#465eff] text-[24px] w-full">
        <p className="css-4hzbpn leading-[32px]">1153</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-[336.656px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#686c73] text-[16px] top-0">80% do total</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Container3() {
  return <div className="bg-[#465eff] h-[8px] rounded-[33554400px] shrink-0 w-full" data-name="Container" />;
}

function Container4() {
  return (
    <div className="bg-[#e0e9ff] content-stretch flex flex-col h-[8px] items-start pr-[67.344px] relative rounded-[33554400px] shrink-0 w-[336.656px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[24px] px-[24px] relative w-full">
        <Container1 />
        <Container2 />
        <Container4 />
      </div>
    </div>
  );
}

export default function CardDashboard() {
  return (
    <div className="bg-[#fefefe] content-stretch flex flex-col gap-[16px] items-start pl-[4px] pr-px py-px relative rounded-[12px] size-full" data-name="Card-dashboard">
      <div aria-hidden="true" className="absolute border-[#4668ff] border-l-4 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_0px_0px_rgba(70,104,255,0.2),0px_8px_24px_0px_rgba(70,104,255,0.35)]" />
      <Container />
      <Container5 />
    </div>
  );
}