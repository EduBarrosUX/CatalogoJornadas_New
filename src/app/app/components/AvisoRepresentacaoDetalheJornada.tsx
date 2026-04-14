export function AvisoRepresentacaoDetalheJornada() {
  return (
    <div className="mb-6 bg-[#e8f2ff] flex flex-col items-start justify-center p-[12px] relative rounded-[8px] w-full">
      <div aria-hidden="true" className="absolute border border-[#4a90e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative w-full">
        <div className="flex items-start gap-[8px]">
          <div className="relative shrink-0 size-[20px] mt-[1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="8" stroke="#2D37F5" strokeWidth="1.5" fill="none" />
              <path d="M10 6.5v4.5M10 13.5h.01" stroke="#2D37F5" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[14px] leading-[1.4]">
              Essa é só uma representação, seguir o padrão do formulário. Todos os dados preenchidos no formulário, deve aparecer nesse detalhamento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
