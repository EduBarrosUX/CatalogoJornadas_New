import type { FeedbackRegistro } from '@/app/components/ModalConsultaFeedbacks';
import { useMemo, useState } from 'react';

type ConsultaFeedbacksPageProps = {
  registros: FeedbackRegistro[];
};

export function ConsultaFeedbacksPage({ registros }: ConsultaFeedbacksPageProps) {
  const [filtroTipo, setFiltroTipo] = useState<'todos' | 'sugestao' | 'problema'>('todos');

  const registrosFiltrados = useMemo(() => {
    if (filtroTipo === 'todos') return registros;
    return registros.filter((r) => r.tipo === filtroTipo);
  }, [registros, filtroTipo]);

  return (
    <div className="w-full">
      <div className="mb-[16px] flex items-center gap-[12px]">
        <span className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[14px] text-[#111214]">Filtrar:</span>
        <button type="button" onClick={() => setFiltroTipo('todos')} className={`px-[10px] py-[6px] rounded-[6px] text-[13px] cursor-pointer ${filtroTipo === 'todos' ? 'bg-[#e0e9ff] text-[#2d37f5]' : 'bg-[#f5f6f8] text-[#6c7077]'}`}>Todos</button>
        <button type="button" onClick={() => setFiltroTipo('problema')} className={`px-[10px] py-[6px] rounded-[6px] text-[13px] cursor-pointer ${filtroTipo === 'problema' ? 'bg-[#ffe7e9] text-[#b42318]' : 'bg-[#f5f6f8] text-[#6c7077]'}`}>Problemas</button>
        <button type="button" onClick={() => setFiltroTipo('sugestao')} className={`px-[10px] py-[6px] rounded-[6px] text-[13px] cursor-pointer ${filtroTipo === 'sugestao' ? 'bg-[#eafbf2] text-[#067647]' : 'bg-[#f5f6f8] text-[#6c7077]'}`}>Sugestões</button>
      </div>

      <div className="border border-[#e5e7eb] rounded-[8px] overflow-hidden">
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
              {registrosFiltrados.map((r) => (
                <tr key={r.id} className="border-t border-[#eef0f3]">
                  <td className="px-[16px] py-[12px] text-[13px] text-[#111214]">{r.tipo === 'problema' ? 'Problema' : 'Sugestão'}</td>
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
    </div>
  );
}
