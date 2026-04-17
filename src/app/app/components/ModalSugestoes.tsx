import { useState, useEffect } from 'react';
import svgPaths from "@/imports/svg-ajvlgisdh2";
import { InputField } from './InputField';

type ModalSugestoesProps = {
  onClose: () => void;
  onSubmit: (tipo: 'sugestao' | 'problema', descricao: string, codigoFluxo?: string, arquivo?: File) => void;
};

export function ModalSugestoes({ onClose, onSubmit }: ModalSugestoesProps) {
  const [tipoSelecionado, setTipoSelecionado] = useState<'sugestao' | 'problema'>('sugestao');
  const [descricao, setDescricao] = useState('');
  const [codigoFluxo, setCodigoFluxo] = useState('');
  const [arquivo, setArquivo] = useState<File | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const handleSubmit = () => {
    if (tipoSelecionado === 'sugestao' && descricao.trim()) {
      onSubmit(tipoSelecionado, descricao);
      setIsVisible(false);
      setTimeout(onClose, 300);
    } else if (tipoSelecionado === 'problema' && descricao.trim() && codigoFluxo.trim()) {
      onSubmit(tipoSelecionado, descricao, codigoFluxo, arquivo || undefined);
      setIsVisible(false);
      setTimeout(onClose, 300);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setArquivo(e.target.files[0]);
    }
  };

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center transition-all duration-300`}
      style={{ 
        zIndex: 9999,
        backgroundColor: isVisible ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)',
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      onClick={handleBackdropClick}
    >
      <div 
        className={`bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[20px] shadow-[0px_10px_25px_0px_rgba(0,0,0,0.2)] w-[600px] max-h-[90vh] overflow-y-auto transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`} 
        data-name="Container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="h-[105px] relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[#e0e0e0] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between pb-px px-[32px] relative size-full">
              <div className="h-[56px] relative shrink-0 w-[512px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
                  <div className="bg-[#e0e9ff] relative rounded-[33554400px] shrink-0 size-[40px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pt-[8px] px-[8px] relative size-full">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Prefix Icon">
                        <div className="flex flex-col items-center size-full">
                          <div className="content-stretch flex flex-col h-full items-center justify-center relative">
                            <div className="overflow-clip relative shrink-0 size-[18px]" data-name="relationship">
                              <div className="-translate-y-1/2 absolute aspect-[22.000995635986328/22] left-[4.17%] right-[4.16%] top-1/2" data-name="Vector">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5007 16.5">
                                  <g id="Vector">
                                    <path d={svgPaths.p11ae4600} fill="var(--fill-0, #465EFF)" />
                                    <path d={svgPaths.p3859b380} fill="var(--fill-0, #465EFF)" />
                                    <path d={svgPaths.p1a74ce00} fill="var(--fill-0, #465EFF)" />
                                    <path d={svgPaths.pd942e38} fill="var(--fill-0, #465EFF)" />
                                    <path d={svgPaths.p34fb2400} fill="var(--fill-0, #465EFF)" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-h-px min-w-px relative flex items-center">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full flex items-center">
                      <p className="font-['BancoDoBrasil_Titulos:Bold',sans-serif] leading-[28px] not-italic text-[#2c3fbf] text-[20px]">Enviar Erros ou Sugestões</p>
                    </div>
                  </div>
                </div>
              </div>
              <button 
                onClick={handleClose}
                className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-70 transition-opacity" 
                data-name="Button"
              >
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                  <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <div className="absolute inset-1/4">
                      <div className="absolute inset-[-8.33%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                          <path d="M13 1L1 13" id="Vector" stroke="var(--stroke-0, #686C73)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-1/4">
                      <div className="absolute inset-[-8.33%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                          <path d="M1 1L13 13" id="Vector" stroke="var(--stroke-0, #686C73)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="relative shrink-0 w-full" data-name="Form">
          <div className="content-stretch flex flex-col gap-[24px] items-start pt-[24px] px-[32px] pb-[32px] relative size-full">
            {/* Opções de Tipo */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
              <div className="h-[32px] relative shrink-0 w-full" data-name="Label">
                <p className="absolute font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[16px] left-0 not-italic text-[#111214] text-[14px] top-0 w-[536px]">Você tem uma sugestão ou quer reportar um problema referente ao Catálogo de Jornadas? *</p>
              </div>
              <div className="flex flex-col gap-[8px] relative shrink-0 w-full" data-name="Container">
                {/* Opção Sugestão */}
                <button
                  onClick={() => setTipoSelecionado('sugestao')}
                  className={`h-[61.75px] rounded-[4px] w-full border border-solid transition-all ${
                    tipoSelecionado === 'sugestao' ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'
                  }`}
                  data-name="Label"
                >
                  <div className="h-[61.75px]" data-name="Container">
                    <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[12px] size-full" data-name="Container">
                      <div className="content-stretch flex flex-col items-start shrink-0 size-[24px]" data-name="Container">
                        <div className="h-[24px] overflow-clip relative shrink-0 w-full">
                          <div className="absolute inset-[8.33%]" data-name="Vector">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              {tipoSelecionado === 'sugestao' ? (
                                <path d={svgPaths.pa419700} fill="var(--fill-0, #2D37F5)" id="Vector" />
                              ) : (
                                <path d={svgPaths.p3a58b490} fill="var(--fill-0, #313338)" id="Vector" />
                              )}
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[4px] items-start" data-name="Container">
                        <div className="content-stretch flex h-[18px] items-start w-[480px]">
                          <p className="flex-[1_0_0] font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[18px] min-h-px min-w-px not-italic text-left text-[#111214] text-[16px] tracking-[0.08px]">Sugestão</p>
                        </div>
                        <div className="h-[15.75px] relative shrink-0 w-[480px]" data-name="Container">
                          <div className="content-stretch flex flex-col h-[15.75px] items-start justify-center" data-name="Container">
                            <div className="h-[15.75px] relative shrink-0 w-[480px]">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                <p className="absolute font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[15.75px] left-0 not-italic text-[#686c73] text-[14px] top-[-1px] tracking-[0.196px] whitespace-nowrap">Enviar sugestão de melhoria</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Opção Reportar Problema */}
                <button
                  onClick={() => setTipoSelecionado('problema')}
                  className={`h-[61.75px] rounded-[4px] w-full border border-solid transition-all ${
                    tipoSelecionado === 'problema' ? 'border-[#2d37f5]' : 'border-[#b4b9c1]'
                  }`}
                  data-name="Label"
                >
                  <div className="h-[61.75px]" data-name="Container">
                    <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[12px] size-full" data-name="Container">
                      <div className="content-stretch flex flex-col items-start shrink-0 size-[24px]" data-name="Container">
                        <div className="h-[24px] overflow-clip relative shrink-0 w-full">
                          <div className="absolute inset-[8.33%]" data-name="Vector">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              {tipoSelecionado === 'problema' ? (
                                <path d={svgPaths.pa419700} fill="var(--fill-0, #2D37F5)" id="Vector" />
                              ) : (
                                <path d={svgPaths.p3a58b490} fill="var(--fill-0, #313338)" id="Vector" />
                              )}
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[4px] items-start" data-name="Container">
                        <div className="content-stretch flex h-[18px] items-start w-[480px]">
                          <p className="flex-[1_0_0] font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[18px] min-h-px min-w-px not-italic text-left text-[#111214] text-[16px] tracking-[0.08px]">Reportar erro</p>
                        </div>
                        <div className="h-[15.75px] relative shrink-0 w-[480px]" data-name="Container">
                          <div className="content-stretch flex flex-col h-[15.75px] items-start justify-center" data-name="Container">
                            <div className="h-[15.75px] relative shrink-0 w-[480px]">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                <p className="absolute font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[15.75px] left-0 not-italic text-[#686c73] text-[14px] top-[-1px] tracking-[0.196px] whitespace-nowrap">Erro ou inconsistência</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Campos específicos para Reportar Problema */}
            {tipoSelecionado === 'problema' && (
              <>
                {/* Campo de Código do Fluxo */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="h-[18px] relative shrink-0 w-full" data-name="Label">
                    <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[18px] not-italic text-[#111214] text-[16px] tracking-[0.08px]">Informe o Código do Fluxo conforme consta no Catálogo:</p>
                  </div>
                  <div className="h-[14.53px] relative shrink-0 w-full" data-name="Container">
                    <p className="absolute font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[14.531px] left-0 not-italic text-[#686c73] text-[13px] top-0 tracking-[0.182px] w-[536px]">Ex: RME0286, TRN0187</p>
                  </div>
                  <InputField
                    value={codigoFluxo}
                    onChange={(e) => setCodigoFluxo(e.target.value)}
                    placeholder="Digite o código (ex: RME0286)"
                  />
                </div>

                {/* Upload de Arquivo */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
                  <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#686c73] text-[14px] tracking-[0.07px] w-full">Enviar evidência</p>
                  <label className="bg-[#fefefe] relative rounded-[4px] shrink-0 w-full cursor-pointer hover:bg-[#f8f8f8] transition-colors">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      accept="image/*,.pdf"
                    />
                    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
                        <div className="bg-[#ebf2ff] relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon Static / Default / X-Small">
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="content-stretch flex items-center justify-center relative size-full">
                              <div className="relative shrink-0 size-[24px]" data-name="upload">
                                <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
                                    <g id="Vector">
                                      <path d={svgPaths.p25acbb00} fill="#4668FF" />
                                      <path d={svgPaths.p3bac6280} fill="#4668FF" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 whitespace-nowrap" data-name="Content area">
                          <div className="flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#111214] text-[14px] text-center tracking-[0.07px]">
                            <p className="leading-[1.125]">{arquivo ? arquivo.name : 'Enviar arquivo'}</p>
                          </div>
                          <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] relative shrink-0 text-[#686c73] text-[12px] tracking-[0.168px]">Arquivos jpg,png</p>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#b4b9c1] border-dashed inset-0 pointer-events-none rounded-[4px]" />
                  </label>
                </div>
              </>
            )}

            {/* Campo de Descrição */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
              <div className={`relative shrink-0 w-full ${tipoSelecionado === 'problema' ? 'h-[18px]' : 'h-auto'}`} data-name="Label">
                {tipoSelecionado === 'problema' ? (
                  <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[18px] not-italic text-[#111214] text-[16px] tracking-[0.08px]">Descreva de forma detalhada o problema identificado:</p>
                ) : (
                  <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[24px] not-italic text-[#111214] text-[16px]">Descreva sua sugestão aqui! Suas ideias, dicas e opiniões são super bem-vindas</p>
                )}
              </div>
              <div className="bg-[#f0f2f4] content-stretch flex flex-col gap-[6px] h-[175px] items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container">
                <div className="h-[168px] relative shrink-0 w-full" data-name="Text Area">
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex items-start p-[12px] relative size-full">
                      <textarea
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        placeholder={tipoSelecionado === 'problema' ? 'Descreva o problema encontrado...' : 'Digite sua sugestão aqui...'}
                        className="w-full h-full font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[24px] not-italic text-[#111214] text-[16px] bg-transparent border-none outline-none resize-none placeholder:text-[#686c73]"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-[#b4b9c1] h-px shrink-0 w-full" data-name="Container" />
              </div>
            </div>

            {/* Botões */}
            <div className="content-stretch flex gap-[12px] h-[45px] items-start relative shrink-0 w-full" data-name="Container">
              <button
                onClick={handleClose}
                className="flex-[1_0_0] min-h-px min-w-px relative bg-[#e0e9ff] h-[45px] rounded-[8px] hover:bg-[#d0dcff] transition-all cursor-pointer"
              >
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="-translate-x-1/2 absolute font-['BancoDoBrasil_Titulos:Bold',sans-serif] leading-[21px] left-1/2 not-italic text-[#465eff] text-[14px] text-center top-[11px] uppercase whitespace-nowrap">Cancelar</p>
                </div>
              </button>
              <button
                onClick={handleSubmit}
                disabled={
                  tipoSelecionado === 'sugestao' 
                    ? !descricao.trim() 
                    : !descricao.trim() || !codigoFluxo.trim()
                }
                className="flex-[1_0_0] min-h-px min-w-px relative bg-[#fcfc30] h-[45px] rounded-[8px] hover:bg-[#f0f020] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="-translate-x-1/2 absolute font-['BancoDoBrasil_Titulos:Bold',sans-serif] leading-[21px] left-1/2 not-italic text-[#465eff] text-[14px] text-center top-[11px] uppercase whitespace-nowrap">
                    {tipoSelecionado === 'sugestao' ? 'Enviar Sugestão' : 'Reportar Erro'}
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}