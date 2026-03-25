import clsx from "clsx";
import svgPaths from "./svg-h49xx41kep";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          {children}
        </svg>
      </div>
    </div>
  );
}

function IconVector({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-1/4">
      <div className="absolute inset-[-8.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          {children}
        </svg>
      </div>
    </div>
  );
}
type TextTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextText({ text, additionalClassNames = "" }: TextTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex h-[23px] items-start", additionalClassNames)}>
      <p className="flex-[1_0_0] font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#111214] text-[20px]">{text}</p>
    </div>
  );
}
type ParagraphText1Props = {
  text: string;
};

function ParagraphText1({ text }: ParagraphText1Props) {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[480px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[15.75px] left-0 not-italic text-[#686c73] text-[14px] top-[-1px] tracking-[0.196px] whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}
type ParagraphTextProps = {
  text: string;
};

function ParagraphText({ text }: ParagraphTextProps) {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-0 top-0 w-[480px]">
      <p className="flex-[1_0_0] font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#111214] text-[16px] tracking-[0.08px]">{text}</p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[20px] shadow-[0px_10px_25px_0px_rgba(0,0,0,0.2)] size-full" data-name="Container">
      <div className="h-[105px] relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between pb-px px-[32px] relative size-full">
            <div className="h-[56px] relative shrink-0 w-[512px]" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
                <div className="bg-[#e0e9ff] relative rounded-[33554400px] shrink-0 size-[40px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] px-[8px] relative size-full">
                    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Prefix Icon">
                      <div className="flex flex-col items-center size-full">
                        <div className="content-stretch flex flex-col h-full items-center pt-[2px] relative">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Wrapper additionalClassNames="h-[56px]">
                  <p className="absolute font-['BancoDoBrasil_Titulos:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#2c3fbf] text-[20px] top-0 w-[445px]">Sugestões ou reporte de Erros do Catálogo de Jornadas</p>
                </Wrapper>
              </div>
            </div>
            <div className="relative shrink-0 size-[24px]" data-name="Button">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                  <IconVector>
                    <path d="M13 1L1 13" id="Vector" stroke="var(--stroke-0, #686C73)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </IconVector>
                  <IconVector>
                    <path d="M1 1L13 13" id="Vector" stroke="var(--stroke-0, #686C73)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </IconVector>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[545.5px] relative shrink-0 w-full" data-name="Form">
        <div className="content-stretch flex flex-col gap-[24px] items-start pt-[24px] px-[32px] relative size-full">
          <div className="content-stretch flex flex-col gap-[8px] h-[171.5px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="h-[32px] relative shrink-0 w-full" data-name="Label">
              <p className="absolute font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#111214] text-[14px] top-0 w-[536px]">Você tem uma sugestão ou quer reportar um problema referente ao Catálogo de Jornadas? *</p>
            </div>
            <div className="h-[131.5px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute h-[61.75px] left-0 rounded-[4px] top-0 w-[536px]" data-name="Label">
                <div className="absolute border border-[#2d37f5] border-solid h-[61.75px] left-0 rounded-[4px] top-0 w-[536px]" data-name="Container" />
                <div className="absolute h-[61.75px] left-0 top-0 w-[536px]" data-name="Container">
                  <div className="absolute content-stretch flex flex-col items-start left-[12px] size-[24px] top-[12px]" data-name="Container">
                    <Icon>
                      <path d={svgPaths.pa419700} fill="var(--fill-0, #2D37F5)" id="Vector" />
                    </Icon>
                  </div>
                  <div className="absolute h-[37.75px] left-[44px] top-[12px] w-[480px]" data-name="Container">
                    <ParagraphText text="Sugestão" />
                    <div className="absolute h-[15.75px] left-0 top-[22px] w-[480px]" data-name="Container">
                      <div className="absolute content-stretch flex flex-col h-[15.75px] items-start justify-center left-0 top-0 w-[480px]" data-name="Container">
                        <ParagraphText1 text="Enviar sugestão de melhoria" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute h-[61.75px] left-0 rounded-[4px] top-[69.75px] w-[536px]" data-name="Label">
                <div className="absolute border border-[#b4b9c1] border-solid h-[61.75px] left-0 rounded-[4px] top-0 w-[536px]" data-name="Container" />
                <div className="absolute h-[61.75px] left-0 top-0 w-[536px]" data-name="Container">
                  <div className="absolute content-stretch flex flex-col items-start left-[12px] size-[24px] top-[12px]" data-name="Container">
                    <Icon>
                      <path d={svgPaths.p3a58b490} fill="var(--fill-0, #313338)" id="Vector" />
                    </Icon>
                  </div>
                  <div className="absolute h-[37.75px] left-[44px] top-[12px] w-[480px]" data-name="Container">
                    <ParagraphText text="Reportar problema" />
                    <div className="absolute h-[15.75px] left-0 top-[22px] w-[480px]" data-name="Container">
                      <div className="absolute content-stretch flex flex-col h-[15.75px] items-start justify-center left-0 top-0 w-[480px]" data-name="Container">
                        <ParagraphText1 text="Reportar erro ou inconsistência" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] h-[233px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="h-[50px] relative shrink-0 w-full" data-name="Label">
              <TextText text="📝" additionalClassNames="left-0 top-0 w-[27.469px]" />
              <p className="absolute font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[24px] left-[27px] not-italic text-[#111214] text-[16px] top-[-3.5px] w-[533px]">Descreva sua sugestão aqui! Suas ideias, dicas e opiniões são super bem-vindas</p>
              <TextText text="💡😊" additionalClassNames="left-[123px] top-[20.5px] w-[54.922px]" />
            </div>
            <div className="bg-[#f0f2f4] content-stretch flex flex-col gap-[6px] h-[175px] items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container">
              <div className="h-[168px] relative shrink-0 w-full" data-name="Text Area">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-start p-[12px] relative size-full">
                    <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#686c73] text-[16px] whitespace-nowrap">Digite sua sugestão aqui...</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#b4b9c1] h-px shrink-0 w-full" data-name="Container" />
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] h-[45px] items-start relative shrink-0 w-full" data-name="Container">
            <Wrapper additionalClassNames="bg-[#e0e9ff] h-[45px] rounded-[8px]">
              <p className="-translate-x-1/2 absolute font-['BancoDoBrasil_Titulos:Bold',sans-serif] leading-[21px] left-[131.28px] not-italic text-[#465eff] text-[14px] text-center top-[11px] uppercase whitespace-nowrap">Cancelar</p>
            </Wrapper>
            <Wrapper additionalClassNames="bg-[#fcfc30] h-[45px] rounded-[8px]">
              <p className="-translate-x-1/2 absolute font-['BancoDoBrasil_Titulos:Bold',sans-serif] leading-[21px] left-[131.48px] not-italic text-[#465eff] text-[14px] text-center top-[11px] uppercase whitespace-nowrap">Enviar Sugestão</p>
            </Wrapper>
          </div>
        </div>
      </div>
    </div>
  );
}