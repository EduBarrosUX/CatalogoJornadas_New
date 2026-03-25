import svgPaths from "./svg-qvrf26u9v2";

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

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-[1_0_0] flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#111214] text-[18px]">
        <p className="leading-[1.125] whitespace-pre-wrap">Sua Solicitação foi cadastrada com sucesso! Acompanhe a sua solicitação e aguarde a análise pelo CAD</p>
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

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <Content1 />
      <div className="flex flex-col font-['BancoDoBrasil_Textos:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111214] text-[14px] text-right tracking-[0.196px] whitespace-nowrap">
        <p className="leading-[1.125]">&nbsp;</p>
      </div>
      <IconButton />
    </div>
  );
}

export default function Toast() {
  return (
    <div className="bg-[#efffeb] content-stretch flex gap-[8px] items-start p-[8px] relative rounded-[4px] shadow-[0px_10px_16px_0px_rgba(24,24,27,0.06),0px_3px_6px_0px_rgba(24,24,27,0.06),0px_0px_1px_0px_rgba(24,24,27,0.04)] size-full" data-name="Toast">
      <Icon />
      <Content />
    </div>
  );
}