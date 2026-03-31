import { Button } from '@/app/components/Button';

interface BoasVindasFormularioProps {
  onIniciar: () => void;
  onVoltar?: () => void;
}

export function BoasVindasFormulario({ onIniciar, onVoltar }: BoasVindasFormularioProps) {
  return (
    <div className="w-full">
      <div className="space-y-5 max-w-2xl mx-auto">
        {/* Título Principal */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-[#191E76] mb-2">
            Cadastro de Jornadas
          </h1>
          <p className="text-sm text-[#6F6C90]">
            Registre novas jornadas ou solicite alterações em jornadas existentes
          </p>
        </div>

        {/* Cartão de Introdução */}
        <div className="bg-[#F0F2FF] border border-[#4A3AFF] rounded-lg p-5">
          <h2 className="text-base font-semibold text-[#191E76] mb-3">
            Como funciona
          </h2>
          <ol className="space-y-2 text-sm text-[#6F6C90]">
            <li>1. Preencha o formulário com 18 perguntas em 6 etapas</li>
            <li>2. Envie para análise da equipe de Governança</li>
            <li>3. Acompanhe o status na aba "Acompanhamento de Jornadas"</li>
            <li>4. Após aprovação, a jornada será incluída no catálogo</li>
          </ol>
        </div>

        {/* Aviso */}
        <div className="bg-[#ffdf9f] flex flex-col items-start justify-center p-4 relative rounded-[10px]">
          <div aria-hidden="true" className="absolute border border-[#ffb31a] border-solid inset-0 pointer-events-none rounded-[10px]" />
          <div className="relative w-full text-[#686c73] text-sm">
            <p className="font-semibold mb-2">⚠️ Importante</p>
            <p className="text-xs">
              Campos marcados com * são obrigatórios. A análise é feita em até 3 dias úteis. 
              Você será notificado caso seja necessário fazer correções.
            </p>
          </div>
        </div>

        {/* Botão para iniciar */}
        <div className="flex justify-between items-center pt-4">
          {onVoltar && (
            <button
              onClick={onVoltar}
              className="text-[#4A3AFF] hover:text-[#3A2AEF] font-medium flex items-center gap-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              VOLTAR
            </button>
          )}
          <Button
            type="button"
            variant="primary"
            onClick={onIniciar}
            className="ml-auto"
          >
            INICIAR CADASTRO
          </Button>
        </div>
      </div>
    </div>
  );
}