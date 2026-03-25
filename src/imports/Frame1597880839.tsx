function ButtonSecondary() {
  return (
    <div className="bg-[#e0e9ff] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[4px] shrink-0" data-name="Button Secondary">
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#465eff] text-[14px] text-center tracking-[0.07px] uppercase">
        <p className="css-ew64yg leading-[1.125]">VOLTAR</p>
      </div>
    </div>
  );
}

function ButtonPrimary() {
  return (
    <div className="bg-[#fcfc30] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[4px] shrink-0" data-name="Button Primary">
      <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#465eff] text-[14px] text-center tracking-[0.07px] uppercase">
        <p className="css-ew64yg leading-[1.125]">PROXIMO</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative size-full">
      <ButtonSecondary />
      <ButtonPrimary />
    </div>
  );
}