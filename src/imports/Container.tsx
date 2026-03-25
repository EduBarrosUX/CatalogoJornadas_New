function Button() {
  return (
    <div className="bg-[#4668ff] content-stretch flex h-[40px] items-center justify-center pl-[20px] pr-[15px] py-[15px] relative rounded-tl-[5px] shrink-0" data-name="Button 1">
      <div aria-hidden="true" className="absolute border-2 border-[#f5f6f7] border-solid inset-[-1px] pointer-events-none rounded-tl-[6px]" />
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#f9f9f9] text-[16px] text-center tracking-[0.08px]">Hoje</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f0f2f4] content-stretch flex h-[40px] items-center justify-center p-[15px] relative shrink-0" data-name="Button 2">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(180,185,193,0.09)] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#646464] text-[16px] text-center tracking-[0.08px]">Ultimos 7 dias</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f0f2f4] content-stretch flex h-[40px] items-center justify-center p-[15px] relative shrink-0" data-name="Button 3">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(180,185,193,0.09)] border-solid inset-[-1px] pointer-events-none" />
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#646464] text-[16px] text-center tracking-[0.08px]">Ultimos 30 dias</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f0f2f4] content-stretch flex h-[40px] items-center justify-center pl-[15px] pr-[20px] py-[15px] relative rounded-tr-[5px] shrink-0" data-name="Button 4">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(180,185,193,0.09)] border-solid inset-[-1px] pointer-events-none rounded-tr-[6px]" />
      <p className="css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#646464] text-[16px] text-center tracking-[0.08px]">1 Ano</p>
    </div>
  );
}

function GroupButton() {
  return (
    <div className="content-stretch flex items-center relative shadow-[0px_2px_5px_0px_rgba(38,51,77,0.03)] shrink-0" data-name="Group Button">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-start flex flex-wrap items-start relative size-full" data-name="Container">
      <GroupButton />
    </div>
  );
}