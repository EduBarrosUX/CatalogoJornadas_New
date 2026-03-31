import { BannerCatalogo } from '@/app/components/BannerCatalogo';

interface HeaderProps {
  painelAtivo: 'publico' | 'cad' | 'governanca';
  onChangePainel: (painel: 'publico' | 'cad' | 'governanca') => void;
}

export function Header({ painelAtivo, onChangePainel }: HeaderProps) {
  return (
    <div className="relative w-full">
      {/* Seção Catálogo de Jornadas com Robô e Navegação */}
      <div className="relative w-full h-[631px]">
        {/* Figma Header Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <BannerCatalogo painelAtivo={painelAtivo} onChangePainel={onChangePainel} />
        </div>
      </div>
    </div>
  );
}