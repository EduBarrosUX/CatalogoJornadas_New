import { useEffect, useMemo, useState } from 'react';
import { Paginator } from '@/app/components/Paginator';

export type FeedbackRegistro = {
  id: string;
  tipo: 'sugestao' | 'problema';
  descricao: string;
  codigoFluxo?: string;
  anexoNome?: string;
  dataEnvio: string;
  origem: string;
};

type ModalConsultaFeedbacksProps = {
  onClose: () => void;
  registros: FeedbackRegistro[];
};

export function ModalConsultaFeedbacks({ onClose, registros }: ModalConsultaFeedbacksProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [filtroTipo, setFiltroTipo] = useState<'todos' | 'sugestao' | 'problema'>('todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [registroSelecionado, setRegistroSelecionado] = useState<FeedbackRegistro | null>(null);
  const itemsPerPage = 10;

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  const registrosFiltrados = useMemo(() => {
    if (filtroTipo === 'todos') return registros;
    return registros.filter((r) => r.tipo === filtroTipo);
  }, [registros, filtroTipo]);

  const totalPages = Math.max(1, Math.ceil(registrosFiltrados.length / itemsPerPage));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const registrosPaginados = registrosFiltrados.slice(startIndex, endIndex);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 200);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center transition-all duration-200"
      style={{
        zIndex: 9999,
        backgroundColor: isVisible ? 'rgba(0,0,0,0.55)' : 'rgba(0,0,0,0)',
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        className={`bg-white rounded-[20px] w-[1100px] max-w-[96vw] max-h-[92vh] overflow-hidden shadow-[0px_10px_25px_0px_rgba(0,0,0,0.25)] transition-all duration-200 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <div className="px-[24px] py-[16px] border-b border-[#e5e7eb] flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            {registroSelecionado && (
              <button
                type="button"
                onClick={() => setRegistroSelecionado(null)}
                className="text-[#465eff] text-[14px] font-['BancoDoBrasil_Textos:Medium',sans-serif] hover:underline cursor-pointer"
              >
                Voltar
              </button>
            )}
            <h2 className="font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-[#2c3fbf] text-[20px]">
              {registroSelecionado ? 'Detalhe de erro/sugestão' : 'Consulta de erros e sugestões'}
            </h2>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="text-[#686c73] hover:opacity-70 text-[22px] leading-none cursor-pointer"
          >
            x
          </button>
        </div>

        {!registroSelecionado && (
        <div className="px-[24px] py-[16px] border-b border-[#eef0f3] flex items-center gap-[12px]">
          <span className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[14px] text-[#111214]">Filtrar:</span>
          <button
            type="button"
            onClick={() => { setFiltroTipo('todos'); setCurrentPage(1); }}
            className={`px-[10px] py-[6px] rounded-[6px] text-[13px] cursor-pointer ${
              filtroTipo === 'todos' ? 'bg-[#e0e9ff] text-[#2d37f5]' : 'bg-[#f5f6f8] text-[#6c7077]'
            }`}
          >
            Todos
          </button>
          <button
            type="button"
            onClick={() => { setFiltroTipo('problema'); setCurrentPage(1); }}
            className={`px-[10px] py-[6px] rounded-[6px] text-[13px] cursor-pointer ${
              filtroTipo === 'problema' ? 'bg-[#ffe7e9] text-[#b42318]' : 'bg-[#f5f6f8] text-[#6c7077]'
            }`}
          >
            Problemas
          </button>
          <button
            type="button"
            onClick={() => { setFiltroTipo('sugestao'); setCurrentPage(1); }}
            className={`px-[10px] py-[6px] rounded-[6px] text-[13px] cursor-pointer ${
              filtroTipo === 'sugestao' ? 'bg-[#eafbf2] text-[#067647]' : 'bg-[#f5f6f8] text-[#6c7077]'
            }`}
          >
            Sugestões
          </button>
        </div>
        )}

        {!registroSelecionado ? (
          <>
            <div className="overflow-auto max-h-[70vh]">
              {registrosFiltrados.length === 0 ? (
                <div className="px-[24px] py-[32px] text-[#6c7077] text-[14px]">
                  Nenhum registro enviado na versão catálogo.
                </div>
              ) : (
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#f8fafc] text-left">
                      <th className="px-[16px] py-[12px] text-[12px] text-[#6c7077] font-semibold">Tipo</th>
                      <th className="px-[16px] py-[12px] text-[12px] text-[#6c7077] font-semibold">Descrição</th>
                      <th className="px-[16px] py-[12px] text-[12px] text-[#6c7077] font-semibold">Código fluxo</th>
                      <th className="px-[16px] py-[12px] text-[12px] text-[#6c7077] font-semibold">Origem</th>
                      <th className="px-[16px] py-[12px] text-[12px] text-[#6c7077] font-semibold">Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrosPaginados.map((r) => (
                      <tr
                        key={r.id}
                        className="border-t border-[#eef0f3] cursor-pointer hover:bg-[#f9fafb]"
                        onClick={() => setRegistroSelecionado(r)}
                      >
                        <td className="px-[16px] py-[12px] text-[13px] text-[#111214]">
                          {r.tipo === 'problema' ? 'Problema' : 'Sugestão'}
                        </td>
                        <td className="px-[16px] py-[12px] text-[13px] text-[#111214]">{r.descricao}</td>
                        <td className="px-[16px] py-[12px] text-[13px] text-[#111214]">{r.codigoFluxo || '-'}</td>
                        <td className="px-[16px] py-[12px] text-[13px] text-[#111214]">{r.origem}</td>
                        <td className="px-[16px] py-[12px] text-[13px] text-[#111214]">{r.dataEnvio}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {registrosFiltrados.length > 0 && (
              <div className="px-[12px] pb-[12px]">
                <Paginator
                  currentPage={safeCurrentPage}
                  totalPages={totalPages}
                  totalItems={registrosFiltrados.length}
                  itemsPerPage={itemsPerPage}
                  onPageChange={setCurrentPage}
                  startIndex={startIndex}
                  endIndex={endIndex}
                />
              </div>
            )}
          </>
        ) : (
          <div className="px-[24px] py-[20px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              <div>
                <p className="text-[#6c7077] text-[12px]">Tipo</p>
                <p className="text-[#111214] text-[14px] font-['BancoDoBrasil_Textos:Medium',sans-serif]">
                  {registroSelecionado.tipo === 'problema' ? 'Problema' : 'Sugestão'}
                </p>
              </div>
              <div>
                <p className="text-[#6c7077] text-[12px]">Data</p>
                <p className="text-[#111214] text-[14px] font-['BancoDoBrasil_Textos:Medium',sans-serif]">
                  {registroSelecionado.dataEnvio}
                </p>
              </div>
              <div>
                <p className="text-[#6c7077] text-[12px]">Origem</p>
                <p className="text-[#111214] text-[14px] font-['BancoDoBrasil_Textos:Medium',sans-serif]">
                  {registroSelecionado.origem}
                </p>
              </div>
              <div>
                <p className="text-[#6c7077] text-[12px]">Código do fluxo</p>
                <p className="text-[#111214] text-[14px] font-['BancoDoBrasil_Textos:Medium',sans-serif]">
                  {registroSelecionado.codigoFluxo || '-'}
                </p>
              </div>
            </div>
            <div className="mt-[16px]">
              <p className="text-[#6c7077] text-[12px]">Descrição</p>
              <p className="text-[#111214] text-[14px] leading-[1.4] whitespace-pre-wrap">
                {registroSelecionado.descricao}
              </p>
            </div>
            <div className="mt-[16px]">
              <p className="text-[#6c7077] text-[12px]">Anexo</p>
              <p className="text-[#111214] text-[14px] font-['BancoDoBrasil_Textos:Medium',sans-serif]">
                {registroSelecionado.anexoNome || 'Sem anexo'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
