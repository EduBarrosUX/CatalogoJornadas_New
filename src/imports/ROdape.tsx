import imgImage31 from "@/assets/ef5bd0151adc335fd8c6650bac263e8df178d1af.png";
import imgQrCodePlus1 from "@/assets/f3f7aeb1e1283de20f8abf69e5ddf52c04a8e872.png";

function Group() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-[11.69px] relative row-1">
      <div className="col-1 h-[25px] ml-0 mt-[3.37px] relative row-1 w-[26px]" data-name="image 31">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage31} />
      </div>
      <p className="col-1 css-4hzbpn font-['BancoDoBrasil_Titulos:Bold',sans-serif] leading-[normal] ml-[22.88px] mt-0 not-italic relative row-1 text-[26px] text-white w-[196px]">️ 61 4004-0001</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1">
      <p className="col-1 css-4hzbpn font-['BancoDoBrasil_Titulos:Medium',sans-serif] h-[11px] leading-[normal] ml-[0.75px] mt-0 not-italic relative row-1 text-[13px] text-white w-[244px]">Converse com o nosso contatinho:</p>
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Group3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[335.75px]">
      <div className="relative rounded-[3px] shrink-0 size-[74px]" data-name="qr-code-plus 1">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[3px]">
          <div className="absolute bg-white inset-0 rounded-[3px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[3px] size-full" src={imgQrCodePlus1} />
        </div>
      </div>
      <Group2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[335.75px]">
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="col-1 content-stretch flex flex-col items-center justify-center ml-0 mt-0 relative row-1">
      <Frame2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Frame1 />
    </div>
  );
}

function QrCode() {
  return (
    <div className="relative rounded-bl-[32px] rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full" data-name="QR Code">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[16px] relative w-full">
          <Group1 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <QrCode />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#00ffe0] relative rounded-bl-[32px] rounded-br-[32px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="css-ew64yg font-['BancoDoBrasil_Titulos:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1653fd] text-[14px]">© Banco do Brasil S/A</p>
        </div>
      </div>
    </div>
  );
}

export default function ROdape() {
  return (
    <div className="bg-[#465eff] content-stretch flex flex-col items-start justify-end relative rounded-bl-[32px] rounded-br-[32px] size-full" data-name="ROdapé">
      <Frame4 />
      <Frame />
    </div>
  );
}