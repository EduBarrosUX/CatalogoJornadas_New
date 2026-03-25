function IconLabel() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0" data-name="Icon label">
      <div className="flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d37f5] text-[14px] text-center tracking-[0.07px] uppercase whitespace-nowrap">
        <p className="leading-[1.125]">TODAS AS ENTREGAS</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0" data-name="Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center px-[32px] relative">
        <IconLabel />
      </div>
    </div>
  );
}

function AssetsRowTabItem() {
  return (
    <div className="bg-[#fefefe] content-stretch flex flex-[1_0_0] h-[48px] items-center justify-center min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px]" data-name=".Assets / Row Tab Item">
      <div className="absolute bottom-px h-0 left-0 right-0" data-name="border">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 451 2">
            <path d="M0 1H451" id="border" stroke="var(--stroke-0, #2D37F5)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Content />
    </div>
  );
}

function IconLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0" data-name="Icon label">
      <div className="flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111214] text-[14px] text-center tracking-[0.07px] uppercase whitespace-nowrap">
        <p className="leading-[1.125]">MINHAS ENTREGAS</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="h-[32px] relative shrink-0" data-name="Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start justify-center px-[32px] relative">
        <IconLabel1 />
      </div>
    </div>
  );
}

function AssetsRowTabItem1() {
  return (
    <div className="bg-[#fefefe] content-stretch flex flex-[1_0_0] h-[48px] items-center justify-center min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px]" data-name=".Assets / Row Tab Item">
      <div className="absolute h-0 left-0 right-0 top-[48px]" data-name="border">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 451 1">
            <line id="border" stroke="var(--stroke-0, #B4B9C1)" x2="451" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Content1 />
    </div>
  );
}

export default function Tab() {
  return (
    <div className="bg-[#fefefe] content-stretch flex items-center relative size-full" data-name="Tab">
      <AssetsRowTabItem />
      <AssetsRowTabItem1 />
    </div>
  );
}