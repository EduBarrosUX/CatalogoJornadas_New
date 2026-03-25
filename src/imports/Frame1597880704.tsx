import svgPaths from "./svg-6iej88i2c6";

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

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start leading-[1.125] min-h-px min-w-px not-italic relative self-stretch text-[#686c73] text-[14px] tracking-[0.07px] whitespace-pre-wrap">
      <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] relative shrink-0 w-full">{`Comentário da Governança: `}</p>
      <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] relative shrink-0 w-full">Solicitação não está alinhada aos direcionadores estratégicos definidos para o trimestre</p>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#ffdf9f] content-stretch flex gap-[8px] items-start p-[16px] relative rounded-[10px] size-full">
      <div aria-hidden="true" className="absolute border border-[#ffb31a] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Relationship />
      <Frame />
    </div>
  );
}