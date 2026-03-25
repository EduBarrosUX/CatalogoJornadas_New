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
    <div className="bg-[#f0f2f4] content-stretch flex gap-[2px] h-[24px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[999px] shrink-0 w-[104px]" data-name="Tag Status">
      <div aria-hidden="true" className="absolute border border-[#d4d8dd] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Bullet />
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#4668ff] text-[14px] tracking-[0.07px]">
        <p className="css-ew64yg leading-[1.125]">Enviada</p>
      </div>
    </div>
  );
}

function Bullet1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="bullet">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="bullet">
          <circle cx="8" cy="8" fill="var(--fill-0, #FFB31A)" id="Vector" r="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function TagStatus1() {
  return (
    <div className="bg-[#f0f2f4] content-stretch flex gap-[2px] h-[24px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[999px] shrink-0 w-[104px]" data-name="Tag Status">
      <div aria-hidden="true" className="absolute border border-[#d4d8dd] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Bullet1 />
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#ad5f00] text-[14px] tracking-[0.07px]">
        <p className="css-ew64yg leading-[1.125]">Iniciada</p>
      </div>
    </div>
  );
}

function Bullet2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="bullet">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="bullet">
          <circle cx="8" cy="8" fill="var(--fill-0, #FF6F20)" id="Vector" r="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function TagStatus2() {
  return (
    <div className="bg-[#f0f2f4] content-stretch flex gap-[2px] h-[24px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[999px] shrink-0 w-[104px]" data-name="Tag Status">
      <div aria-hidden="true" className="absolute border border-[#d4d8dd] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Bullet2 />
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#ff6f20] text-[14px] tracking-[0.07px]">
        <p className="css-ew64yg leading-[1.125]">Em análise</p>
      </div>
    </div>
  );
}

function Bullet3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="bullet">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="bullet">
          <circle cx="8" cy="8" fill="var(--fill-0, #E3111F)" id="Vector" r="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function TagStatus3() {
  return (
    <div className="bg-[#f0f2f4] content-stretch flex gap-[2px] h-[24px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[999px] shrink-0 w-[104px]" data-name="Tag Status">
      <div aria-hidden="true" className="absolute border border-[#d4d8dd] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Bullet3 />
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#e3111f] text-[14px] tracking-[0.07px]">
        <p className="css-ew64yg leading-[1.125]">Encerrada</p>
      </div>
    </div>
  );
}

function Bullet4() {
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

function TagStatus4() {
  return (
    <div className="bg-[#f0f2f4] content-stretch flex gap-[2px] h-[24px] items-center justify-center pl-[4px] pr-[8px] py-[4px] relative rounded-[999px] shrink-0 w-[104px]" data-name="Tag Status">
      <div aria-hidden="true" className="absolute border border-[#d4d8dd] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Bullet4 />
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#0c8a00] text-[14px] tracking-[0.07px]">
        <p className="css-ew64yg leading-[1.125]">Aprovada</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative size-full">
      <TagStatus />
      <TagStatus1 />
      <TagStatus2 />
      <TagStatus3 />
      <TagStatus4 />
    </div>
  );
}