interface StatusTagProps {
  status: string;
  className?: string;
}

// Mapeamento de status para cores (bullet e texto)
const statusStyles: Record<string, { bulletColor: string; textColor: string; label: string }> = {
  'Enviada': { bulletColor: '#4668FF', textColor: '#4668ff', label: 'Enviada' },
  'Aprovado': { bulletColor: '#0C8A00', textColor: '#0c8a00', label: 'Aprovado' },
  'Em Análise': { bulletColor: '#FF6F20', textColor: '#ff6f20', label: 'Em Análise' },
  'Pendente Correção': { bulletColor: '#FFB31A', textColor: '#ad5f00', label: 'Pendente' },
  'Pendente': { bulletColor: '#FFB31A', textColor: '#ad5f00', label: 'Pendente' },
  'Rejeitado': { bulletColor: '#E3111F', textColor: '#e3111f', label: 'Rejeitado' },
};

export function StatusTag({ status, className = '' }: StatusTagProps) {
  const styles = statusStyles[status] || statusStyles['Enviada'];

  return (
    <div 
      className={`bg-[#f0f2f4] content-stretch flex gap-[1px] h-[24px] items-center justify-center pl-[3px] pr-[5px] py-[4px] relative rounded-[999px] shrink-0 ${className}`}
      data-name="Tag Status"
    >
      <div 
        aria-hidden="true" 
        className="absolute border border-[#d4d8dd] border-solid inset-0 pointer-events-none rounded-[999px]" 
      />
      {/* Bullet */}
      <div className="relative shrink-0 size-[14px]" data-name="bullet">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill={styles.bulletColor} r="2.66667" />
        </svg>
      </div>
      {/* Texto */}
      <div 
        className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[13px] tracking-[0.07px]"
        style={{ color: styles.textColor }}
      >
        <p className="css-ew64yg leading-[1.125]">{styles.label}</p>
      </div>
    </div>
  );
}