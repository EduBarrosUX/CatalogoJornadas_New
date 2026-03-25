import clsx from "clsx";
import svgPaths from "./svg-ajvlgisdh2";

function ProgressBarHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex items-center pr-[160px] relative size-full">{children}</div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type VectorProps = {
  additionalClassNames?: string;
};

function Vector({ children, additionalClassNames = "" }: React.PropsWithChildren<VectorProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
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

function FileUploadHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#fefefe] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">{children}</div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b4b9c1] border-dashed inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("overflow-clip relative shrink-0", additionalClassNames)}>
      <Vector additionalClassNames="inset-[8.33%]">{children}</Vector>
    </div>
  );
}
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return (
    <div className="absolute content-stretch flex h-[23px] items-start left-0 top-0 w-[27.469px]">
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
type ProgressBarContentTextProps = {
  text: string;
  feedback: string;
  additionalClassNames?: string;
};

function ProgressBarContentText({ text, feedback, additionalClassNames = "" }: ProgressBarContentTextProps) {
  return (
    <div className={clsx("content-stretch flex gap-[16px] items-end relative shrink-0 w-full", additionalClassNames)}>
      <p className="flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] min-h-px min-w-px not-italic overflow-hidden relative text-[#111214] text-[12px] text-ellipsis tracking-[0.168px]">{text}</p>
      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-end justify-end min-h-px min-w-px relative" data-name="Feedback">
        <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] not-italic overflow-hidden relative shrink-0 text-[#0c8a00] text-[12px] text-ellipsis text-right tracking-[0.168px] w-[136px] whitespace-nowrap">{feedback}</p>
        <Wrapper additionalClassNames="size-[16px]">
          <path d={svgPaths.p251cd200} fill="var(--fill-0, #313338)" id="Vector" />
        </Wrapper>
      </div>
    </div>
  );
}
type WarningProps = {
  additionalClassNames?: string;
};

function Warning({ additionalClassNames = "" }: WarningProps) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="absolute inset-[11.6%_8.33%_9.23%_8.34%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p280c6b70} fill="var(--fill-0, #313338)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}
type ProgressBarProps = {
  className?: string;
  completed?: boolean;
  feedback?: string;
  label?: boolean;
  size?: "Regular" | "Small";
  state?: "Default" | "Success" | "Warning" | "Critical";
  text?: string;
  type?: "Default" | "Compact";
  value?: string;
};

function ProgressBar({ className, completed = false, feedback = "Mensagem ", label = true, size = "Regular", state = "Default", text = "Descrição", type = "Default", value = "Value%" }: ProgressBarProps) {
  const isCompactAndIsDefaultAndRegularAndNotCompletedOrDefaultAndSmall = type === "Compact" && ((state === "Default" && size === "Regular" && !completed) || (state === "Default" && size === "Small" && !completed) || (state === "Default" && size === "Regular" && completed) || (state === "Default" && size === "Small" && completed) || (state === "Success" && size === "Small" && !completed) || (state === "Success" && size === "Regular" && !completed) || (state === "Success" && size === "Small" && completed) || (state === "Success" && size === "Regular" && completed) || (state === "Warning" && size === "Small" && !completed) || (state === "Warning" && size === "Regular" && !completed) || (state === "Warning" && size === "Small" && completed) || (state === "Warning" && size === "Regular" && completed) || (state === "Critical" && size === "Small" && !completed) || (state === "Critical" && size === "Regular" && !completed) || (state === "Critical" && size === "Small" && completed) || (state === "Critical" && size === "Regular" && completed));
  const isCriticalAndDefaultAndIsSmallAndNotCompletedOrRegularAndNot = state === "Critical" && type === "Default" && ((size === "Small" && !completed) || (size === "Regular" && !completed) || (size === "Small" && completed) || (size === "Regular" && completed));
  const isCriticalAndDefaultAndRegularAndCompleted = state === "Critical" && type === "Default" && size === "Regular" && completed;
  const isCriticalAndDefaultAndRegularAndNotCompleted = state === "Critical" && type === "Default" && size === "Regular" && !completed;
  const isDefaultAndDefaultAndCompletedAndIsRegularOrSmall = state === "Default" && type === "Default" && completed && ["Regular", "Small"].includes(size);
  const isDefaultAndDefaultAndNotCompletedAndIsRegularOrSmall = state === "Default" && type === "Default" && !completed && ["Regular", "Small"].includes(size);
  const isDefaultAndDefaultAndSmallAndCompleted = state === "Default" && type === "Default" && size === "Small" && completed;
  const isDefaultAndDefaultAndSmallAndNotCompleted = state === "Default" && type === "Default" && size === "Small" && !completed;
  const isSuccessAndDefaultAndIsSmallAndNotCompletedOrRegularAndNot = state === "Success" && type === "Default" && ((size === "Small" && !completed) || (size === "Regular" && !completed) || (size === "Small" && completed));
  const isSuccessAndDefaultAndRegularAndCompleted = state === "Success" && type === "Default" && size === "Regular" && completed;
  const isSuccessAndDefaultAndRegularAndNotCompleted = state === "Success" && type === "Default" && size === "Regular" && !completed;
  const isSuccessAndDefaultAndSmallAndCompleted = state === "Success" && type === "Default" && size === "Small" && completed;
  const isWarningAndDefaultAndIsSmallAndNotCompletedOrRegularAndNot = state === "Warning" && type === "Default" && ((size === "Small" && !completed) || (size === "Regular" && !completed) || (size === "Small" && completed) || (size === "Regular" && completed));
  const isWarningAndDefaultAndRegularAndCompleted = state === "Warning" && type === "Default" && size === "Regular" && completed;
  const isWarningAndDefaultAndRegularAndNotCompleted = state === "Warning" && type === "Default" && size === "Regular" && !completed;
  return (
    <div className={className || "relative w-[328px]"}>
      <div className={`content-stretch flex flex-col items-start relative w-full ${isCompactAndIsDefaultAndRegularAndNotCompletedOrDefaultAndSmall ? "" : "gap-[8px]"}`}>
        {isCompactAndIsDefaultAndRegularAndNotCompletedOrDefaultAndSmall && (
          <div className={`relative shrink-0 w-full ${type === "Compact" && size === "Small" && completed && ["Default", "Success", "Warning", "Critical"].includes(state) ? "bg-[#ebf2ff] content-stretch flex h-[4px] items-center" : type === "Compact" && size === "Regular" && completed && ["Default", "Success", "Warning", "Critical"].includes(state) ? "bg-[#ebf2ff] content-stretch flex h-[8px] items-center" : type === "Compact" && size === "Small" && !completed && ["Default", "Success", "Warning", "Critical"].includes(state) ? "bg-[rgba(0,0,0,0.12)] h-[4px]" : "bg-[rgba(0,0,0,0.12)] h-[8px]"}`} data-name="Background">
            {type === "Compact" && !completed && ((state === "Default" && size === "Regular") || (state === "Default" && size === "Small") || (state === "Success" && size === "Small") || (state === "Success" && size === "Regular") || (state === "Warning" && size === "Small") || (state === "Warning" && size === "Regular") || (state === "Critical" && size === "Small") || (state === "Critical" && size === "Regular")) && (
              <ProgressBarHelper>
                <div className={`flex-[1_0_0] min-h-px min-w-px ${state === "Critical" && type === "Compact" && size === "Regular" && !completed ? "bg-[#e3111f] h-[8px]" : state === "Critical" && type === "Compact" && size === "Small" && !completed ? "bg-[#e3111f] h-[4px]" : state === "Warning" && type === "Compact" && size === "Regular" && !completed ? "bg-[#ffb31a] h-[8px]" : state === "Warning" && type === "Compact" && size === "Small" && !completed ? "bg-[#ffb31a] h-[4px]" : state === "Success" && type === "Compact" && size === "Regular" && !completed ? "bg-[#14aa03] h-[8px]" : state === "Success" && type === "Compact" && size === "Small" && !completed ? "bg-[#14aa03] h-[4px]" : state === "Default" && type === "Compact" && size === "Small" && !completed ? "bg-[#3853ff] h-[4px]" : "bg-[#3853ff] h-[8px]"}`} data-name="Progress" />
              </ProgressBarHelper>
            )}
            {type === "Compact" && completed && ((state === "Default" && size === "Regular") || (state === "Default" && size === "Small") || (state === "Success" && size === "Small") || (state === "Success" && size === "Regular") || (state === "Warning" && size === "Small") || (state === "Warning" && size === "Regular") || (state === "Critical" && size === "Small") || (state === "Critical" && size === "Regular")) && <div className={`flex-[1_0_0] min-h-px min-w-px ${state === "Critical" && type === "Compact" && size === "Regular" && completed ? "bg-[#e3111f] h-[8px]" : state === "Critical" && type === "Compact" && size === "Small" && completed ? "bg-[#e3111f] h-[4px]" : state === "Warning" && type === "Compact" && size === "Regular" && completed ? "bg-[#ffb31a] h-[8px]" : state === "Warning" && type === "Compact" && size === "Small" && completed ? "bg-[#ffb31a] h-[4px]" : state === "Success" && type === "Compact" && size === "Regular" && completed ? "bg-[#14aa03] h-[8px]" : state === "Success" && type === "Compact" && size === "Small" && completed ? "bg-[#14aa03] h-[4px]" : state === "Default" && type === "Compact" && size === "Small" && completed ? "bg-[#3853ff] h-[4px]" : "bg-[#3853ff] h-[8px]"}`} data-name="Progress" />}
          </div>
        )}
        {isWarningAndDefaultAndIsSmallAndNotCompletedOrRegularAndNot && label && (
          <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Content">
            <div className="flex flex-[1_0_0] flex-col font-['BancoDoBrasil_Textos:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#111214] text-[12px] text-ellipsis tracking-[0.168px]">
              <p className="leading-[1.125]">{text}</p>
            </div>
            <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-end justify-end min-h-px min-w-px relative" data-name="Feedback">
              <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] not-italic overflow-hidden relative shrink-0 text-[#ad5f00] text-[12px] text-ellipsis text-right tracking-[0.168px] w-[136px] whitespace-nowrap">{feedback}</p>
              <Warning additionalClassNames="size-[16px]" />
            </div>
          </div>
        )}
        {isWarningAndDefaultAndIsSmallAndNotCompletedOrRegularAndNot && (
          <div className={`relative rounded-[999px] shrink-0 w-full ${isWarningAndDefaultAndRegularAndCompleted ? "bg-[#ebf2ff] content-stretch flex h-[8px] items-center" : state === "Warning" && type === "Default" && size === "Small" && completed ? "bg-[#ebf2ff] content-stretch flex h-[4px] items-center" : isWarningAndDefaultAndRegularAndNotCompleted ? "bg-[rgba(0,0,0,0.12)] h-[8px]" : "bg-[rgba(0,0,0,0.12)] h-[4px]"}`} data-name="Background">
            {state === "Warning" && type === "Default" && !completed && ["Small", "Regular"].includes(size) && (
              <ProgressBarHelper>
                <div className={`bg-[#ffb31a] flex-[1_0_0] min-h-px min-w-px rounded-[999px] ${isWarningAndDefaultAndRegularAndNotCompleted ? "h-[8px]" : "h-[4px]"}`} data-name="Progress" />
              </ProgressBarHelper>
            )}
            {state === "Warning" && type === "Default" && completed && ["Small", "Regular"].includes(size) && <div className={`bg-[#ffb31a] flex-[1_0_0] min-h-px min-w-px rounded-[999px] ${isWarningAndDefaultAndRegularAndCompleted ? "h-[8px]" : "h-[4px]"}`} data-name="Progress" />}
          </div>
        )}
        {isCriticalAndDefaultAndIsSmallAndNotCompletedOrRegularAndNot && label && (
          <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full" data-name="Content">
            <div className="flex flex-[1_0_0] flex-col font-['BancoDoBrasil_Textos:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#111214] text-[12px] text-ellipsis tracking-[0.168px]">
              <p className="leading-[1.125]">{text}</p>
            </div>
            <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-end justify-end min-h-px min-w-px relative" data-name="Feedback">
              <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] not-italic overflow-hidden relative shrink-0 text-[#e3111f] text-[12px] text-ellipsis text-right tracking-[0.168px] w-[136px] whitespace-nowrap">{feedback}</p>
              <div className="relative shrink-0 size-[16px]" data-name="error">
                <div className="absolute inset-[8.53%_7.34%_6.16%_7.34%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.4748 20.4748">
                    <path clipRule="evenodd" d={svgPaths.p187c2580} fill="var(--fill-0, #313338)" fillRule="evenodd" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
        {isCriticalAndDefaultAndIsSmallAndNotCompletedOrRegularAndNot && (
          <div className={`relative rounded-[999px] shrink-0 w-full ${isCriticalAndDefaultAndRegularAndCompleted ? "bg-[#ebf2ff] content-stretch flex h-[8px] items-center" : state === "Critical" && type === "Default" && size === "Small" && completed ? "bg-[#ebf2ff] content-stretch flex h-[4px] items-center" : isCriticalAndDefaultAndRegularAndNotCompleted ? "bg-[rgba(0,0,0,0.12)]" : "bg-[rgba(0,0,0,0.12)] h-[4px]"}`} data-name="Background">
            {state === "Critical" && type === "Default" && !completed && ["Small", "Regular"].includes(size) && (
              <div className="flex flex-row items-center size-full">
                <div className={`content-stretch flex items-center pr-[160px] relative ${isCriticalAndDefaultAndRegularAndNotCompleted ? "w-full" : "size-full"}`}>
                  <div className={`bg-[#e3111f] flex-[1_0_0] min-h-px min-w-px rounded-[999px] ${isCriticalAndDefaultAndRegularAndNotCompleted ? "h-[8px]" : "h-[4px]"}`} data-name="Progress" />
                </div>
              </div>
            )}
            {state === "Critical" && type === "Default" && completed && ["Small", "Regular"].includes(size) && <div className={`bg-[#e3111f] flex-[1_0_0] min-h-px min-w-px rounded-[999px] ${isCriticalAndDefaultAndRegularAndCompleted ? "h-[8px]" : "h-[4px]"}`} data-name="Progress" />}
          </div>
        )}
        {isSuccessAndDefaultAndIsSmallAndNotCompletedOrRegularAndNot && label && <ProgressBarContentText text={text} feedback={feedback} />}
        {isSuccessAndDefaultAndIsSmallAndNotCompletedOrRegularAndNot && (
          <div className={`relative rounded-[999px] shrink-0 w-full ${isSuccessAndDefaultAndSmallAndCompleted ? "bg-[#ebf2ff] content-stretch flex h-[4px] items-center" : isSuccessAndDefaultAndRegularAndNotCompleted ? "bg-[rgba(0,0,0,0.12)] h-[8px]" : "bg-[rgba(0,0,0,0.12)] h-[4px]"}`} data-name="Background">
            {state === "Success" && type === "Default" && !completed && ["Small", "Regular"].includes(size) && (
              <ProgressBarHelper>
                <div className={`bg-[#14aa03] flex-[1_0_0] min-h-px min-w-px rounded-[999px] ${isSuccessAndDefaultAndRegularAndNotCompleted ? "h-[8px]" : "h-[4px]"}`} data-name="Progress" />
              </ProgressBarHelper>
            )}
            {isSuccessAndDefaultAndSmallAndCompleted && <div className="bg-[#14aa03] flex-[1_0_0] h-[4px] min-h-px min-w-px rounded-[999px]" data-name="Progress" />}
          </div>
        )}
        {isDefaultAndDefaultAndNotCompletedAndIsRegularOrSmall && label && (
          <div className="content-stretch flex font-['BancoDoBrasil_Textos:Regular',sans-serif] gap-[16px] items-end leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[12px] text-ellipsis tracking-[0.168px] w-full" data-name="Content">
            <p className="flex-[1_0_0] min-h-px min-w-px overflow-hidden relative">{text}</p>
            <p className="flex-[1_0_0] min-h-px min-w-px overflow-hidden relative text-right whitespace-nowrap">{value}</p>
          </div>
        )}
        {isDefaultAndDefaultAndNotCompletedAndIsRegularOrSmall && (
          <div className={`bg-[rgba(0,0,0,0.12)] relative rounded-[999px] shrink-0 w-full ${isDefaultAndDefaultAndSmallAndNotCompleted ? "h-[4px]" : "h-[8px]"}`} data-name="Background">
            <ProgressBarHelper>
              <div className={`bg-[#3853ff] flex-[1_0_0] min-h-px min-w-px rounded-[999px] ${isDefaultAndDefaultAndSmallAndNotCompleted ? "h-[4px]" : "h-[8px]"}`} data-name="Progress" />
            </ProgressBarHelper>
          </div>
        )}
        {isDefaultAndDefaultAndCompletedAndIsRegularOrSmall && label && (
          <div className="content-stretch flex font-['BancoDoBrasil_Textos:Regular',sans-serif] gap-[16px] items-end leading-[1.125] not-italic relative shrink-0 text-[12px] text-ellipsis tracking-[0.168px] w-full" data-name="Content">
            <p className="flex-[1_0_0] min-h-px min-w-px overflow-hidden relative text-[#111214]">{text}</p>
            <p className="flex-[1_0_0] min-h-px min-w-px overflow-hidden relative text-[#4668ff] text-right whitespace-nowrap">{value}</p>
          </div>
        )}
        {isDefaultAndDefaultAndCompletedAndIsRegularOrSmall && (
          <div className={`bg-[#ebf2ff] content-stretch flex items-center relative rounded-[999px] shrink-0 w-full ${isDefaultAndDefaultAndSmallAndCompleted ? "h-[4px]" : "h-[8px]"}`} data-name="Background">
            <div className={`bg-[#3853ff] flex-[1_0_0] min-h-px min-w-px rounded-[999px] ${isDefaultAndDefaultAndSmallAndCompleted ? "h-[4px]" : "h-[8px]"}`} data-name="Progress" />
          </div>
        )}
        {isSuccessAndDefaultAndRegularAndCompleted && label && <ProgressBarContentText text={text} additionalClassNames="justify-end" feedback={feedback} />}
        {isSuccessAndDefaultAndRegularAndCompleted && (
          <div className="bg-[#ebf2ff] content-stretch flex h-[8px] items-center relative rounded-[999px] shrink-0 w-full" data-name="Background">
            <div className="bg-[#14aa03] flex-[1_0_0] h-[8px] min-h-px min-w-px rounded-[999px]" data-name="Progress" />
          </div>
        )}
      </div>
    </div>
  );
}
type AssetsFileUploadProgressProps = {
  className?: string;
  state?: "Default" | "Completed" | "With Error";
};

function AssetsFileUploadProgress({ className, state = "Default" }: AssetsFileUploadProgressProps) {
  const isWithError = state === "With Error";
  return (
    <div className={className || `relative w-[328px] ${isWithError ? "rounded-[4px]" : ""}`}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center py-[8px] relative w-full">
          <div className={`relative rounded-[8px] shrink-0 size-[32px] ${isWithError ? "bg-[#fff5f5]" : "bg-[#ebf2ff]"}`} data-name="Icon Static / Default / X-Small">
            <div className={`flex items-center justify-center size-full ${isWithError ? "flex-col" : "flex-row"}`}>
              <div className={`content-stretch flex items-center justify-center relative size-full ${isWithError ? "flex-col" : ""}`}>
                {["Default", "Completed"].includes(state) && (
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="document">
                    <div className="absolute inset-[4.17%_12.5%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
                        <path clipRule="evenodd" d={svgPaths.p32a3a000} fill="var(--fill-0, #313338)" fillRule="evenodd" id="Vector" />
                      </svg>
                    </div>
                  </div>
                )}
                {isWithError && <Warning additionalClassNames="size-[24px]" />}
              </div>
            </div>
          </div>
          <ProgressBar className="flex-[1_0_0] min-h-px min-w-px relative" completed={state === "Completed" ? true : undefined} size="Small" state={isWithError ? "Critical" : undefined} />
          <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon Button">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="delete">
                  <div className="absolute inset-[10.42%_20.83%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18.999">
                      <path d={svgPaths.p2721580} fill="var(--fill-0, #313338)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type FileUploadProps = {
  className?: string;
  showLabel?: boolean;
  state?: "Default" | "On Progress" | "Multi Files";
  textLabel?: string;
};

function FileUpload({ className, showLabel = true, state = "Default", textLabel = "File Upload Label" }: FileUploadProps) {
  const isMultiFiles = state === "Multi Files";
  return (
    <div className={className || "relative w-[320px]"}>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
        {showLabel && <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#686c73] text-[14px] tracking-[0.07px] w-full">{textLabel}</p>}
        {state === "Default" && (
          <FileUploadHelper>
            <div className="bg-[#ebf2ff] relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon Static / Default / X-Small">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center relative size-full">
                  <div className="relative shrink-0 size-[24px]" data-name="upload">
                    <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
                        <g id="Vector">
                          <path d={svgPaths.p25acbb00} fill="#4668FF" />
                          <path d={svgPaths.p3bac6280} fill="#4668FF" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-name="Content area">
              <div className="flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#111214] text-[14px] text-center tracking-[0.07px]">
                <p className="leading-[1.125]">Enviar arquivo</p>
              </div>
              <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] relative shrink-0 text-[#686c73] text-[12px] tracking-[0.168px]">hint text</p>
            </div>
          </FileUploadHelper>
        )}
        {state === "On Progress" && <AssetsFileUploadProgress className="relative shrink-0 w-full" state="Completed" />}
        {isMultiFiles && (
          <>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
              <AssetsFileUploadProgress className="relative shrink-0 w-full" state="Completed" />
              <AssetsFileUploadProgress className="relative shrink-0 w-full" />
              <AssetsFileUploadProgress className="relative shrink-0 w-full" />
            </div>
            <FileUploadHelper>
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon">
                <Vector additionalClassNames="inset-[8.34%_8.33%_8.33%_8.33%]">
                  <path d={svgPaths.p32338900} fill="var(--fill-0, #313338)" id="Vector" />
                </Vector>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Content area">
                <div className="flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111214] text-[14px] text-center tracking-[0.07px] whitespace-nowrap">
                  <p className="leading-[1.125]">Adicionar arquivo</p>
                </div>
              </div>
            </FileUploadHelper>
          </>
        )}
      </div>
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
                <Wrapper1 additionalClassNames="h-[56px]">
                  <p className="absolute font-['BancoDoBrasil_Titulos:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#2c3fbf] text-[20px] top-0 w-[445px]">Sugestões ou reporte de Erros do Catálogo de Jornadas</p>
                </Wrapper1>
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
      <div className="h-[727px] relative shrink-0 w-full" data-name="Form">
        <div className="absolute content-stretch flex flex-col gap-[8px] h-[171.5px] items-start left-[32px] top-[24px] w-[536px]" data-name="Container">
          <div className="h-[32px] relative shrink-0 w-full" data-name="Label">
            <p className="absolute font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#111214] text-[14px] top-0 w-[536px]">Você tem uma sugestão ou quer reportar um problema referente ao Catálogo de Jornadas? *</p>
          </div>
          <div className="h-[131.5px] relative shrink-0 w-full" data-name="Container">
            <div className="absolute h-[61.75px] left-0 rounded-[4px] top-0 w-[536px]" data-name="Label">
              <div className="absolute border border-[#b4b9c1] border-solid h-[61.75px] left-0 rounded-[4px] top-0 w-[536px]" data-name="Container" />
              <div className="absolute h-[61.75px] left-0 top-0 w-[536px]" data-name="Container">
                <div className="absolute content-stretch flex flex-col items-start left-[12px] size-[24px] top-[12px]" data-name="Container">
                  <Wrapper additionalClassNames="h-[24px] w-full">
                    <path d={svgPaths.p3a58b490} fill="var(--fill-0, #313338)" id="Vector" />
                  </Wrapper>
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
              <div className="absolute border border-[#2d37f5] border-solid h-[61.75px] left-0 rounded-[4px] top-0 w-[536px]" data-name="Container" />
              <div className="absolute h-[61.75px] left-0 top-0 w-[536px]" data-name="Container">
                <div className="absolute content-stretch flex flex-col items-start left-[12px] size-[24px] top-[12px]" data-name="Container">
                  <Wrapper additionalClassNames="h-[24px] w-full">
                    <path d={svgPaths.pa419700} fill="var(--fill-0, #2D37F5)" id="Vector" />
                  </Wrapper>
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
        <div className="absolute content-stretch flex flex-col items-start left-[32px] top-[219.5px] w-[536px]">
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[8px] h-[107px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="h-[25px] relative shrink-0 w-full" data-name="Label">
                  <TextText text="📌" />
                  <p className="absolute font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[24px] left-[27.47px] not-italic text-[#111214] text-[16px] top-px whitespace-nowrap">Informe o Código do Fluxo conforme consta no Catálogo:</p>
                </div>
                <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#686c73] text-[14px] top-[-1px] whitespace-nowrap">Ex: RME0286, TRN0187</p>
                </div>
                <div className="bg-[#f0f2f4] content-stretch flex flex-col h-[45px] items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container">
                  <div className="h-[44px] relative shrink-0 w-full" data-name="Text Input">
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-center px-[12px] py-[10px] relative size-full">
                        <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#686c73] text-[16px] whitespace-nowrap">Digite o código (ex: RME0286)</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#b4b9c1] h-px shrink-0 w-full" data-name="Container" />
                </div>
              </div>
              <FileUpload className="relative shrink-0 w-[320px]" textLabel="Enviar evidência" />
              <div className="content-stretch flex flex-col gap-[8px] h-[208px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="h-[25px] relative shrink-0 w-full" data-name="Label">
                  <TextText text="🔍" />
                  <p className="absolute font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[24px] left-[27.47px] not-italic text-[#111214] text-[16px] top-px whitespace-nowrap">Descreva de forma detalhada o problema identificado:</p>
                </div>
                <div className="bg-[#f0f2f4] content-stretch flex flex-col gap-[6px] h-[175px] items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container">
                  <div className="h-[168px] relative shrink-0 w-full" data-name="Text Area">
                    <div className="overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-start p-[12px] relative size-full">
                        <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#686c73] text-[16px] whitespace-nowrap">Descreva o problema encontrado...</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#b4b9c1] h-px shrink-0 w-full" data-name="Container" />
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[12px] h-[45px] items-start relative shrink-0 w-full" data-name="Container">
              <Wrapper1 additionalClassNames="bg-[#e0e9ff] h-[45px] rounded-[8px]">
                <p className="-translate-x-1/2 absolute font-['BancoDoBrasil_Titulos:Bold',sans-serif] leading-[21px] left-[131.28px] not-italic text-[#465eff] text-[14px] text-center top-[11px] uppercase whitespace-nowrap">Cancelar</p>
              </Wrapper1>
              <Wrapper1 additionalClassNames="bg-[#fcfc30] h-[45px] rounded-[8px]">
                <p className="-translate-x-1/2 absolute font-['BancoDoBrasil_Titulos:Bold',sans-serif] leading-[21px] left-[131.14px] not-italic text-[#465eff] text-[14px] text-center top-[11px] uppercase whitespace-nowrap">Reportar Problema</p>
              </Wrapper1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}