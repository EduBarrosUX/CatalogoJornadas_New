import imgBotBb1 from "@/assets/cae8f36f8d431f2f2daf9304067668145d47d2f2.png";
import img01 from "@/assets/108d199cecf3b3b5b2b743995a6dc91b1b7a18b9.png";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[337px] left-[648px] rounded-[44px] top-[207px] w-[323px]" data-name="BOT_BB_1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[44px]">
          <img alt="" className="absolute h-[110.49%] left-[-36.09%] max-w-none top-[-3.99%] w-[172.93%]" src={imgBotBb1} />
        </div>
      </div>
      <div className="absolute h-[660px] left-0 top-0 w-[1173px]" data-name="01">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img01} />
      </div>
    </div>
  );
}