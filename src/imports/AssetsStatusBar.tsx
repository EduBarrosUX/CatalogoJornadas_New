function SampleText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Sample Text">
      <p className="flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic opacity-87 relative text-[#111214] text-[14px] tracking-[0.196px] whitespace-pre-wrap">100 resultados</p>
    </div>
  );
}

function ClearLink() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Clear Link">
      <div className="flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d37f5] text-[14px] tracking-[0.07px] w-full">
        <p className="leading-[1.125] whitespace-pre-wrap">Limpar tudo</p>
      </div>
    </div>
  );
}

export default function AssetsStatusBar() {
  return (
    <div className="bg-[#f0f2f4] content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative rounded-[4px] size-full" data-name=".Assets / Status Bar">
      <SampleText />
      <ClearLink />
    </div>
  );
}