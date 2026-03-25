import { useState } from 'react';
import type { FeedbackUsuario } from '@/app/App';
import svgPaths from '@/imports/svg-4dwa7b6ise';

interface ModalFeedbackProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (feedback: Omit<FeedbackUsuario, 'id' | 'data' | 'status'>) => void;
  jornadas: Array<{ id: string; titulo: string }>;
}

export function ModalFeedback({ isOpen, onClose, onSubmit, jornadas }: ModalFeedbackProps) {
  const [tipo, setTipo] = useState<'sugestao' | 'inconsistencia' | null>(null);
  const [codigoFluxo, setCodigoFluxo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    onSubmit({
      tipo: tipo as 'sugestao' | 'inconsistencia',
      jornadaRelacionada: tipo === 'inconsistencia' ? codigoFluxo : undefined,
      titulo: tipo === 'sugestao' ? 'Sugestão de Melhoria' : `Problema reportado - ${codigoFluxo}`,
      descricao,
      nomeUsuario: 'Usuário',
      emailUsuario: 'usuario@bb.com.br'
    });

    // Resetar formulário
    setTipo(null);
    setCodigoFluxo('');
    setDescricao('');
    
    // Mostrar mensagem de sucesso
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[20px] w-full max-w-[600px] max-h-[90vh] overflow-y-auto shadow-[0px_10px_25px_0px_rgba(0,0,0,0.2)]">
        {!showSuccess ? (
          <>
            {/* Header */}
            <div className="h-[105px] relative w-full border-b border-[#e0e0e0]">
              <div className="flex items-center h-full px-[32px] justify-between">
                {/* Left side - Icon + Title */}
                <div className="flex items-center gap-[12px]">
                  {/* Icon Container */}
                  <div className="bg-[#e0e9ff] rounded-full size-[40px] flex items-center justify-center p-[8px]">
                    <div className="size-[24px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p31835a80} stroke="#4668FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h2 className="font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-[#2c3fbf] text-[20px] leading-[28px] max-w-[445px]">
                    Sugestões ou reporte de Erros do Catálogo de Jornadas
                  </h2>
                </div>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="size-[24px] flex items-center justify-center text-[#686c73] hover:opacity-70 transition-opacity"
                >
                  <svg className="size-full" fill="none" viewBox="0 0 14 14">
                    <path d="M13 1L1 13" stroke="#686C73" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M1 1L13 13" stroke="#686C73" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-[32px] py-[24px]">
              {/* Pergunta 1: Tipo de Feedback */}
              <div className="mb-[24px]">
                <label className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[14px] leading-[16px] block mb-[8px]">
                  Você tem uma sugestão ou quer reportar um problema referente ao Catálogo de Jornadas? *
                </label>
                
                <div className="flex flex-col gap-[8px]">
                  {/* Opção: Sugestão */}
                  <label className={`relative rounded-[4px] w-full cursor-pointer border ${tipo === 'sugestao' ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'}`}>
                    <div className="flex gap-[8px] items-start p-[12px]">
                      {/* Radio Icon */}
                      <div className="size-[24px] shrink-0">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path 
                            d={tipo === 'sugestao' ? svgPaths.pa419700 : svgPaths.p3a58b490} 
                            fill={tipo === 'sugestao' ? '#2D37F5' : '#313338'} 
                          />
                        </svg>
                      </div>
                      
                      <input
                        type="radio"
                        checked={tipo === 'sugestao'}
                        onChange={() => setTipo('sugestao')}
                        className="sr-only"
                      />
                      
                      {/* Text */}
                      <div className="flex-1 flex flex-col gap-[4px]">
                        <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[16px] leading-[18px] tracking-[0.08px]">
                          Sugestão
                        </p>
                        <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[14px] leading-[15.75px] tracking-[0.196px]">
                          Enviar sugestão de melhoria
                        </p>
                      </div>
                    </div>
                  </label>

                  {/* Opção: Reportar problema */}
                  <label className={`relative rounded-[4px] w-full cursor-pointer border ${tipo === 'inconsistencia' ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'}`}>
                    <div className="flex gap-[8px] items-start p-[12px]">
                      {/* Radio Icon */}
                      <div className="size-[24px] shrink-0">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path 
                            d={tipo === 'inconsistencia' ? svgPaths.pa419700 : svgPaths.p3a58b490} 
                            fill={tipo === 'inconsistencia' ? '#2D37F5' : '#313338'} 
                          />
                        </svg>
                      </div>
                      
                      <input
                        type="radio"
                        checked={tipo === 'inconsistencia'}
                        onChange={() => setTipo('inconsistencia')}
                        className="sr-only"
                      />
                      
                      {/* Text */}
                      <div className="flex-1 flex flex-col gap-[4px]">
                        <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[16px] leading-[18px] tracking-[0.08px]">
                          Reportar problema
                        </p>
                        <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[14px] leading-[15.75px] tracking-[0.196px]">
                          Reportar erro ou inconsistência
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Se for Sugestão */}
              {tipo === 'sugestao' && (
                <div className="mb-[24px]">
                  <label className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[16px] leading-[24px] block mb-[8px]">
                    <span className="text-[20px]">📝</span> Descreva sua sugestão aqui! Suas ideias, dicas e opiniões são super bem-vindas <span className="text-[20px]">💡😊</span>
                  </label>
                  <div className="bg-[#f0f2f4] rounded-tl-[4px] rounded-tr-[4px]">
                    <textarea
                      value={descricao}
                      onChange={(e) => setDescricao(e.target.value)}
                      placeholder="Digite sua sugestão aqui..."
                      required
                      rows={6}
                      className="w-full px-[12px] py-[12px] font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[16px] leading-[24px] bg-transparent border-none outline-none placeholder:text-[#686c73] resize-none"
                    />
                    <div className="bg-[#b4b9c1] h-px w-full" />
                  </div>
                </div>
              )}

              {/* Se for Reportar Problema */}
              {tipo === 'inconsistencia' && (
                <>
                  <div className="mb-[24px]">
                    <label className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[16px] leading-[24px] block mb-[8px]">
                      <span className="text-[20px]">📌</span> Informe o Código do Fluxo conforme consta no Catálogo:
                    </label>
                    <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[14px] leading-[21px] mb-[8px]">
                      Ex: RME0286, TRN0187
                    </p>
                    <div className="bg-[#f0f2f4] rounded-tl-[4px] rounded-tr-[4px]">
                      <input
                        type="text"
                        value={codigoFluxo}
                        onChange={(e) => setCodigoFluxo(e.target.value)}
                        placeholder="Digite o código (ex: RME0286)"
                        required
                        className="w-full px-[12px] py-[10px] font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[16px] bg-transparent border-none outline-none placeholder:text-[#686c73]"
                      />
                      <div className="bg-[#b4b9c1] h-px w-full" />
                    </div>
                  </div>

                  <div className="mb-[24px]">
                    <label className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[16px] leading-[24px] block mb-[8px]">
                      <span className="text-[20px]">🔍</span> Descreva de forma detalhada o problema identificado:
                    </label>
                    <div className="bg-[#f0f2f4] rounded-tl-[4px] rounded-tr-[4px]">
                      <textarea
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        placeholder="Descreva o problema encontrado..."
                        required
                        rows={6}
                        className="w-full px-[12px] py-[12px] font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[16px] leading-[24px] bg-transparent border-none outline-none placeholder:text-[#686c73] resize-none"
                      />
                      <div className="bg-[#b4b9c1] h-px w-full" />
                    </div>
                  </div>
                </>
              )}

              {/* Botões */}
              {tipo && (
                <div className="flex gap-[12px]">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 bg-[#e0e9ff] hover:bg-[#d0d9ff] px-[24px] py-[12px] h-[45px] rounded-[8px] font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-[#465eff] text-[14px] leading-[21px] uppercase transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-[#fcfc30] hover:bg-[#eded20] px-[24px] py-[12px] h-[45px] rounded-[8px] font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-[#465eff] text-[14px] leading-[21px] uppercase transition-colors"
                  >
                    {tipo === 'sugestao' ? 'Enviar Sugestão' : 'Reportar Problema'}
                  </button>
                </div>
              )}

              {/* Botão Cancelar se nenhuma opção foi escolhida */}
              {!tipo && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={onClose}
                    className="bg-[#e0e9ff] hover:bg-[#d0d9ff] px-[24px] py-[12px] h-[45px] rounded-[8px] font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-[#465eff] text-[14px] leading-[21px] uppercase transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              )}
            </form>
          </>
        ) : (
          /* Mensagem de Sucesso */
          <div className="px-[32px] py-[64px] text-center">
            <div className="bg-[#e8f5e9] rounded-full size-[80px] flex items-center justify-center mx-auto mb-[24px]">
              <svg className="size-[40px]" fill="none" viewBox="0 0 24 24">
                <path
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  stroke="#0c8a00"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-[#2c3fbf] text-[24px] leading-[32px] mb-[8px]">
              Enviado com Sucesso!
            </h3>
            <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px]">
              Seu {tipo === 'sugestao' ? 'feedback' : 'reporte'} foi recebido. A equipe de Governança irá analisá-lo em breve.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
