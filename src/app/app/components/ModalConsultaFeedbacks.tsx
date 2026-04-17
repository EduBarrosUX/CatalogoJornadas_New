import { useEffect, useMemo, useState } from 'react';
import { Paginator } from '@/app/components/Paginator';
import { SelectField } from '@/app/components/SelectField';
import { ToastNotification } from '@/app/components/ToastNotification';

export type FeedbackRegistro = {
  id: string;
  tipo: 'sugestao' | 'problema';
  descricao: string;
  codigoFluxo?: string;
  anexoNome?: string;
  dataEnvio: string;
  origem: string;
  status?: 'Enviado' | 'Em análise' | 'Ajustado' | 'Invalidado';
};

type ModalConsultaFeedbacksProps = {
  onClose: () => void;
  registros: FeedbackRegistro[];
  modo?: 'catalogo' | 'gestao';
  onAtualizarRegistro?: (id: string, partial: Partial<FeedbackRegistro>) => void;
};

function getStatusVisual(status: 'Enviado' | 'Novo' | 'Em análise' | 'Ajustado' | 'Invalidado') {
  switch (status) {
    case 'Enviado':
    case 'Novo':
      return { bullet: '#4668FF', text: '#4668ff' };
    case 'Em análise':
      return { bullet: '#FF6F20', text: '#ff6f20' };
    case 'Ajustado':
      return { bullet: '#0C8A00', text: '#0c8a00' };
    case 'Invalidado':
      return { bullet: '#E3111F', text: '#e3111f' };
    default:
      return { bullet: '#4668FF', text: '#4668ff' };
  }
}

function StatusBadge({ status }: { status: 'Enviado' | 'Novo' | 'Em análise' | 'Ajustado' | 'Invalidado' }) {
  const colors = getStatusVisual(status);
  return (
    <div className="bg-[#f0f2f4] inline-flex gap-[2px] h-[24px] items-center justify-center px-[8px] pl-[4px] py-[4px] rounded-full border border-[#d4d8dd]">
      <svg className="size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <circle cx="8" cy="8" fill={colors.bullet} r="2.66667" />
      </svg>
      <span className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[14px] tracking-[0.07px] leading-[1.125] whitespace-nowrap" style={{ color: colors.text }}>
        {status}
      </span>
    </div>
  );
}

export function ModalConsultaFeedbacks({ onClose, registros, modo = 'catalogo', onAtualizarRegistro }: ModalConsultaFeedbacksProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [filtroTipo, setFiltroTipo] = useState<'sugestao' | 'problema'>('problema');
  const [currentPage, setCurrentPage] = useState(1);
  const [registroSelecionado, setRegistroSelecionado] = useState<FeedbackRegistro | null>(null);
  const [statusSelecionadoGestao, setStatusSelecionadoGestao] = useState<'Novo' | 'Em análise' | 'Ajustado' | 'Invalidado'>('Novo');
  const [showToast, setShowToast] = useState(false);
  const itemsPerPage = 10;

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  const statusExibicao = (registro: FeedbackRegistro): 'Enviado' | 'Novo' | 'Em análise' | 'Ajustado' | 'Invalidado' => {
    // Sugestões: status fixo no modal
    if (registro.tipo === 'sugestao') {
      return modo === 'gestao' ? 'Novo' : 'Enviado';
    }
    const baseStatus = registro.status ?? 'Enviado';
    if (modo === 'gestao' && baseStatus === 'Enviado') return 'Novo';
    return baseStatus;
  };

  const registrosFiltrados = useMemo(() => {
    const filtrados = registros.filter((r) => r.tipo === filtroTipo);
    // Em Sugestões, mostrar 5 cadastrados conforme solicitado
    if (filtroTipo === 'sugestao') return filtrados.slice(0, 5);
    // Em Erros, garantir que apareça 1 de cada status da gestão (para visualização)
    if (modo === 'gestao') {
      const ordemGestao = ['Novo', 'Em análise', 'Ajustado', 'Invalidado'] as const;
      const primeiro = filtrados[0];
      const escolhidos: string[] = [];
      const primeiroDeCada = ordemGestao
        .map((st) => filtrados.find((r) => !escolhidos.includes(r.id) && statusExibicao(r) === st))
        .filter(Boolean)
        .map((r) => {
          escolhidos.push((r as FeedbackRegistro).id);
          return r as FeedbackRegistro;
        });

      // Se algum status não existir nos dados, clonar o primeiro registro só para visualização
      const faltantes = ordemGestao.filter((st) => !primeiroDeCada.some((r) => statusExibicao(r) === st));
      const mocks: FeedbackRegistro[] = primeiro
        ? faltantes.map((st) => ({
            ...primeiro,
            id: `${primeiro.id}-mock-${st}`,
            status: st === 'Novo' ? 'Enviado' : st,
          }))
        : [];

      const idsRemover = new Set([...escolhidos, ...mocks.map((m) => m.id)]);
      const resto = filtrados.filter((r) => !idsRemover.has(r.id));
      return [...primeiroDeCada, ...mocks, ...resto];
    }

    // Em Erros no Acompanhamento, garantir 1 de cada status (Enviado no lugar de Novo)
    const ordemCatalogo = ['Enviado', 'Em análise', 'Ajustado', 'Invalidado'] as const;
    const primeiro = filtrados[0];
    const escolhidos: string[] = [];
    const primeiroDeCada = ordemCatalogo
      .map((st) => filtrados.find((r) => !escolhidos.includes(r.id) && statusExibicao(r) === st))
      .filter(Boolean)
      .map((r) => {
        escolhidos.push((r as FeedbackRegistro).id);
        return r as FeedbackRegistro;
      });

    const faltantes = ordemCatalogo.filter((st) => !primeiroDeCada.some((r) => statusExibicao(r) === st));
    const mocks: FeedbackRegistro[] = primeiro
      ? faltantes.map((st) => ({
          ...primeiro,
          id: `${primeiro.id}-mock-${st}`,
          status: st,
        }))
      : [];

    const idsRemover = new Set([...escolhidos, ...mocks.map((m) => m.id)]);
    const resto = filtrados.filter((r) => !idsRemover.has(r.id));
    return [...primeiroDeCada, ...mocks, ...resto];
  }, [registros, filtroTipo, modo]);

  const codigoExibicao = (registro: FeedbackRegistro) => {
    if (registro.tipo === 'sugestao') return '—';
    return (registro.codigoFluxo || '-').replace(/-/g, '');
  };

  const salvarStatusDetalhe = (novoStatus: 'Novo' | 'Em análise' | 'Ajustado' | 'Invalidado') => {
    if (!registroSelecionado) return;
    const statusPersistido: FeedbackRegistro['status'] = novoStatus === 'Novo' ? 'Enviado' : novoStatus;
    const atualizado: FeedbackRegistro = { ...registroSelecionado, status: statusPersistido };
    setRegistroSelecionado(atualizado);
    onAtualizarRegistro?.(registroSelecionado.id, { status: statusPersistido });
    setShowToast(true);
  };

  useEffect(() => {
    if (registroSelecionado && modo === 'gestao') {
      setStatusSelecionadoGestao(statusExibicao(registroSelecionado));
    }
  }, [registroSelecionado, modo]);

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
        className={`bg-white rounded-[20px] w-[1280px] max-w-[99vw] max-h-[96vh] overflow-visible shadow-[0px_10px_25px_0px_rgba(0,0,0,0.25)] transition-all duration-200 ${
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
          <div className="flex items-center gap-[12px]">
            <button
              type="button"
              onClick={handleClose}
              className="text-[#686c73] hover:opacity-70 text-[22px] leading-none cursor-pointer"
            >
              x
            </button>
          </div>
        </div>

        {!registroSelecionado && (
        <div className="px-[24px] py-[16px] border-b border-[#eef0f3] flex items-center gap-[12px]">
          <span className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[14px] text-[#111214]">Filtrar:</span>
          <button
            type="button"
            onClick={() => { setFiltroTipo('problema'); setCurrentPage(1); }}
            className={`px-[10px] py-[6px] rounded-[6px] text-[13px] cursor-pointer ${
              filtroTipo === 'problema' ? 'bg-[#ffe7e9] text-[#b42318]' : 'bg-[#f5f6f8] text-[#6c7077]'
            }`}
          >
            Erros
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
                      <th className="px-[16px] py-[12px] text-[12px] text-[#6c7077] font-semibold">Data</th>
                      <th className="px-[16px] py-[12px] text-[12px] text-[#6c7077] font-semibold">Tipo</th>
                      {filtroTipo === 'problema' && (
                        <th className="px-[16px] py-[12px] text-[12px] text-[#6c7077] font-semibold">Código</th>
                      )}
                      <th className="px-[16px] py-[12px] text-[12px] text-[#6c7077] font-semibold">Descrição</th>
                      <th className="px-[16px] py-[12px] text-[12px] text-[#6c7077] font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrosPaginados.map((r) => (
                      <tr
                        key={r.id}
                        className="border-t border-[#eef0f3] cursor-pointer hover:bg-[#f9fafb]"
                        onClick={() => setRegistroSelecionado(r)}
                      >
                        <td className="px-[16px] py-[12px] text-[13px] text-[#111214]">{r.dataEnvio}</td>
                        <td className="px-[16px] py-[12px] text-[13px] text-[#111214]">
                          {r.tipo === 'problema' ? 'Erro' : 'Sugestão'}
                        </td>
                        {filtroTipo === 'problema' && (
                          <td className="px-[16px] py-[12px] text-[13px] text-[#111214]">{codigoExibicao(r)}</td>
                        )}
                        <td className="px-[16px] py-[12px] text-[13px] text-[#111214]">{r.descricao}</td>
                        <td className="px-[16px] py-[12px] text-[13px] text-[#111214]">
                          <StatusBadge status={statusExibicao(r)} />
                        </td>
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
          <div className="px-[24px] py-[20px] overflow-visible">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              <div>
                <p className="text-[#6c7077] text-[12px]">Status</p>
                <div className="mt-[4px]">
                  <StatusBadge status={statusExibicao(registroSelecionado)} />
                </div>
              </div>
              <div className="flex items-start justify-between gap-[12px]">
                <div>
                  <p className="text-[#6c7077] text-[12px]">Tipo</p>
                  <p className="text-[#111214] text-[14px] font-['BancoDoBrasil_Textos:Medium',sans-serif]">
                    {registroSelecionado.tipo === 'problema' ? 'Erro' : 'Sugestão'}
                  </p>
                </div>
                {modo === 'gestao' && (
                  <button
                    type="button"
                    onClick={() => salvarStatusDetalhe(statusSelecionadoGestao)}
                    className="bg-[#fcfc30] content-stretch flex items-center px-[16px] py-[12px] relative rounded-[4px] shrink-0 hover:bg-[#eded20] transition-colors cursor-pointer"
                  >
                    <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#465eff] text-[14px] text-center tracking-[0.07px] uppercase">
                      <p className="css-ew64yg leading-[1.125]">SALVAR</p>
                    </div>
                  </button>
                )}
              </div>
              {modo === 'gestao' && (
                <div className="md:col-span-2 w-full md:w-[360px] overflow-visible">
                  <SelectField
                    label="Status:"
                    value={statusSelecionadoGestao}
                    onChange={(value) => setStatusSelecionadoGestao(value as 'Novo' | 'Em análise' | 'Ajustado' | 'Invalidado')}
                    options={[
                      { value: 'Novo', label: 'Novo' },
                      { value: 'Em análise', label: 'Em Análise' },
                      { value: 'Ajustado', label: 'Ajustado' },
                      { value: 'Invalidado', label: 'Invalidado' }
                    ]}
                    placeholder="Selecione o status"
                  />
                </div>
              )}
              <div>
                <p className="text-[#6c7077] text-[12px]">Data</p>
                <p className="text-[#111214] text-[14px] font-['BancoDoBrasil_Textos:Medium',sans-serif]">
                  {registroSelecionado.dataEnvio}
                </p>
              </div>
              <div>
                <p className="text-[#6c7077] text-[12px]">Código</p>
                <p className="text-[#111214] text-[14px] font-['BancoDoBrasil_Textos:Medium',sans-serif]">
                  {codigoExibicao(registroSelecionado)}
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
      {showToast && (
        <ToastNotification
          message="Status atualizado com sucesso!"
          onClose={() => setShowToast(false)}
          type="success"
        />
      )}
    </div>
  );
}
