import svgPaths from '@/imports/svg-xowhd8mzj1';

interface PaginatorProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  startIndex: number;
  endIndex: number;
}

export function Paginator({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  startIndex,
  endIndex
}: PaginatorProps) {
  return (
    <div className="content-stretch flex items-center justify-between px-[8px] mt-[24px] relative w-full">
      {/* Link "Mostrar tudo" */}
      <div className="content-stretch flex flex-col items-start justify-center py-[3px] relative shrink-0">
        <div className="flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d37f5] text-[16px] tracking-[0.08px] w-full">
          <p className="leading-[1.125] whitespace-pre-wrap">Mostrar tudo</p>
        </div>
      </div>

      {/* Container direito: Contador + Paginador */}
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
        <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#686c73] text-[12px] text-right tracking-[0.168px]">
          Mostrando {totalItems > 0 ? startIndex + 1 : 0}-{Math.min(endIndex, totalItems)} de {totalItems} itens
        </p>
        
        {/* Paginador */}
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          {/* Seta esquerda */}
          <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0">
            <button
              onClick={() => onPageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="relative shrink-0 size-[24px] disabled:cursor-not-allowed cursor-pointer"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p53b0c80} fill={currentPage === 1 ? '#D4D8DD' : '#888D95'} />
              </svg>
            </button>
          </div>

          {/* Páginas */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <div
              key={page}
              className={page === currentPage ? 'bg-[#fcfc30] relative rounded-[999px] shrink-0 size-[24px]' : 'bg-[#e0e9ff] relative rounded-[2px] shrink-0 size-[24px]'}
            >
              <button
                onClick={() => onPageChange(page)}
                className="flex flex-col items-center justify-center size-full cursor-pointer"
              >
                <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
                  <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#465eff] text-[12px] text-center tracking-[0.06px]">
                    {page}
                  </p>
                </div>
              </button>
            </div>
          ))}

          {/* Seta direita */}
          <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0">
            <button
              onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="relative shrink-0 size-[24px] disabled:cursor-not-allowed cursor-pointer"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p30f54000} fill={currentPage === totalPages ? '#D4D8DD' : '#888D95'} />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}