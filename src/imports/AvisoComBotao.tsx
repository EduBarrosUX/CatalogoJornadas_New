function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <div className="font-['BancoDoBrasil_Textos:Bold','Noto_Sans:Regular',sans-serif] leading-[0] relative shrink-0 text-[#686c73] text-[12px] tracking-[0.168px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="css-4hzbpn mb-0">
          <span className="leading-[1.125]">
            Informação
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
          <span className="font-['BancoDoBrasil_Textos:Regular','Noto_Sans:Regular',sans-serif] leading-[1.125]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>{`Providencie imagem que esteja relacionada ao BB e/ou tema/produto conforme especificações abaixo e anexe-a na História aberta no GenTI: `}</span>
        </p>
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Regular','Noto_Sans:Regular',sans-serif] leading-[1.125] mb-0" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>{`Formato: PNG ou JPEG `}</p>
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Regular','Noto_Sans:Regular',sans-serif] leading-[1.125] mb-0" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>{`Tamanho máximo: 5 MB `}</p>
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Regular','Noto_Sans:Regular',sans-serif] leading-[1.125] mb-0" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          {`Dimensões: 500 x 500 px `}
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Regular','Noto_Sans:Regular',sans-serif] leading-[1.125] mb-0" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          {`O uso de imagens, além de fortalecer a marca BB, também traz maior segurança e favorece maior interação dos usuários. `}
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Regular','Noto_Sans:Regular',sans-serif] leading-[1.125] mb-0" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>{`Recomendamos que a imagem não possua uma quantidade grande de texto, pois uma abordagem visual mais limpa e direta gera maior impacto e engajamento. `}</p>
        <p className="css-4hzbpn leading-[1.125]">&nbsp;</p>
      </div>
    </div>
  );
}

export default function AvisoComBotao() {
  return (
    <div className="bg-[#ffdf9f] content-stretch flex flex-col items-end justify-center p-[16px] relative rounded-[10px] size-full" data-name="Aviso com Botão">
      <div aria-hidden="true" className="absolute border border-[#ffb31a] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Frame />
    </div>
  );
}