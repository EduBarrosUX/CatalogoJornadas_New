import svgPaths from "./svg-t1s27fykl1";

function PrefixIcon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-full relative shrink-0">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col h-full items-center pt-[2px] relative">{children}</div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative size-full">
      <div className="bg-[#e0e9ff] content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-[4px] shrink-0" data-name="Button Secondary">
        <div className="flex flex-row items-center self-stretch">
          <PrefixIcon>
            <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Icon">
              <div className="absolute inset-[8.33%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                  <g id="Vector">
                    <path d={svgPaths.p529da00} fill="var(--fill-0, #465EFF)" />
                    <path d={svgPaths.p1d7fb570} fill="var(--fill-0, #465EFF)" />
                  </g>
                </svg>
              </div>
            </div>
          </PrefixIcon>
        </div>
        <div className="flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#465eff] text-[14px] text-center tracking-[0.07px] uppercase whitespace-nowrap">
          <p className="leading-[1.125]">ABRIR CATÁLOGO</p>
        </div>
      </div>
      <div className="bg-[#e0e9ff] content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-[4px] shrink-0" data-name="Button Secondary">
        <div className="flex flex-row items-center self-stretch">
          <PrefixIcon>
            <div className="overflow-clip relative shrink-0 size-[18px]" data-name="relationship">
              <div className="-translate-y-1/2 absolute aspect-[22.000995635986328/22] left-[4.17%] right-[4.16%] top-1/2" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5007 16.5">
                  <g id="Vector">
                    <path d={svgPaths.p11ae4600} fill="var(--fill-0, #465EFF)" />
                    <path d={svgPaths.p3859b380} fill="var(--fill-0, #465EFF)" />
                    <path d={svgPaths.p1a74ce00} fill="var(--fill-0, #465EFF)" />
                    <path d={svgPaths.pd942e38} fill="var(--fill-0, #465EFF)" />
                    <path d={svgPaths.p34fb2400} fill="var(--fill-0, #465EFF)" />
                  </g>
                </svg>
              </div>
            </div>
          </PrefixIcon>
        </div>
        <div className="flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#465eff] text-[14px] text-center tracking-[0.07px] uppercase whitespace-nowrap">
          <p className="leading-[1.125]">Enviar erro ou sugestão</p>
        </div>
      </div>
    </div>
  );
}