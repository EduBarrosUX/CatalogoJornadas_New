import { useState } from 'react';
import svgPaths from '@/imports/svg-3dkfh9akxg';
import svgPathsPaginator from '@/imports/svg-yxb1sqbp9k';
import svgPathsRadio from '@/imports/svg-st0q96v9y6';
import svgPathsCheckbox from '@/imports/svg-hv9yqctnmg';
import type { JornadaCadastrada, FeedbackUsuario } from '@/app/App';
import { getStatusJornadaDisplayMasculino } from '@/app/lib/statusJornadaDisplay';
import { ModalFeedback } from '@/app/components/ModalFeedback';
import { MessagesSquare } from 'lucide-react';
import Edit from '@/imports/Edit-83-14391';
import { FiltroPeriodoHierarquico } from '@/app/components/FiltroPeriodoHierarquico';
import { SelectField } from '@/app/components/SelectField';
import { ModalPersonalizarFiltros } from '@/app/components/ModalPersonalizarFiltros';

interface PainelJornadasProps {
  onIncluirAlterar: () => void;
  onVerDetalhes?: (jornada: any) => void;
  jornadas: JornadaCadastrada[];
  onEnviarFeedback: (feedback: Omit<FeedbackUsuario, 'id' | 'data' | 'status'>) => void;
  onEditarJornada?: (jornada: JornadaCadastrada) => void;
  dataUltimaAtualizacao?: string;
  isPainelPublico?: boolean; // Nova prop para indicar se é painel público
}

export function PainelJornadas({ onIncluirAlterar, onVerDetalhes, jornadas, onEnviarFeedback, onEditarJornada, dataUltimaAtualizacao, isPainelPublico = false }: PainelJornadasProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [tipoJornada, setTipoJornada] = useState('');
  const [temaFiltro, setTemaFiltro] = useState('');
  const [statusFiltro, setStatusFiltro] = useState('');
  const [dataInicio, setDataInicio] = useState(''); // Vazio por padrão
  const [dataTermino, setDataTermino] = useState(''); // Vazio por padrão
  const [periodo, setPeriodo] = useState('');
  const [tipoFiltro, setTipoFiltro] = useState<'data' | 'periodo' | ''>('data'); // Iniciar com 'data' selecionado
  const [periodoAno, setPeriodoAno] = useState('');
  const [periodoTrimestre, setPeriodoTrimestre] = useState('');
  const [periodoMes, setPeriodoMes] = useState('');
  const [filtroCardAtivo, setFiltroCardAtivo] = useState<string>(''); // Novo estado para filtro dos cards
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [valorPeriodo, setValorPeriodo] = useState(''); // Novo estado para o valor do período
  const [isMaisFiltrosModalOpen, setIsMaisFiltrosModalOpen] = useState(false);
  const [colunasVisiveis, setColunasVisiveis] = useState<string[]>(['TIPO', 'TITULO', 'TEMA', 'CANAL', 'DIRETORIA', 'STATUS', 'CODIGO']);
  const [diretoriaFiltro, setDiretoriaFiltro] = useState('');
  const [canalFiltro, setCanalFiltro] = useState('');
  const [maisFiltrosExpandido, setMaisFiltrosExpandido] = useState(false); // Controla expansão dos filtros extras
  const [utilizaIAFiltro, setUtilizaIAFiltro] = useState(false); // Novo filtro para IA Generativa
  const [iaRespondeClienteFiltro, setIARespondeClienteFiltro] = useState(false); // Novo filtro para IA Generativa responde ao cliente

  // Manter ordem fixa das colunas conforme especificado
  const colunasOrdenadas = colunasVisiveis;

  // Mapear status para cores
  const getStatusColors = (status: string) => {
    switch (status) {
      case 'Nova':
        return { bullet: '#4668FF', text: '#4668ff', display: getStatusJornadaDisplayMasculino('Nova') };
      case 'Em análise':
        return { bullet: '#FF6F20', text: '#ff6f20', display: getStatusJornadaDisplayMasculino('Em análise') };
      case 'Correção':
        return { bullet: '#FFB31A', text: '#ad5f00', display: getStatusJornadaDisplayMasculino('Correção') };
      case 'Aprovada':
        return { bullet: '#0C8A00', text: '#0c8a00', display: getStatusJornadaDisplayMasculino('Aprovada') };
      case 'Implementada':
        return { bullet: '#5A059C', text: '#5a059c', display: getStatusJornadaDisplayMasculino('Implementada') };
      case 'Excluída':
        return { bullet: '#E3111F', text: '#e3111f', display: getStatusJornadaDisplayMasculino('Excluída') };
      default:
        return { bullet: '#4668FF', text: '#4668ff', display: getStatusJornadaDisplayMasculino(status) };
    }
  };

  // Mapear tipo para prefixo do ID
  const getPrefixoId = (tipo: string) => {
    switch (tipo) {
      case 'Ativo':
        return 'RME-';
      case 'Transação':
        return 'TRN-';
      case 'Indução':
        return 'IND-';
      case 'Informacional':
        return 'INF-';
      default:
        return 'RME-';
    }
  };

  // Extrair temas únicos das jornadas
  const temasUnicos = Array.from(new Set(jornadas.map(j => j.tema).filter(Boolean))).sort();

  // Converter jornadas para formato da tabela com numeração sequencial por tipo
  const contadores = { 'Ativo': 0, 'Transação': 0, 'Indução': 0 };
  const jornadasTabela = jornadas.map(j => {
    contadores[j.tipoHU as keyof typeof contadores]++;
    const numero = String(contadores[j.tipoHU as keyof typeof contadores]).padStart(4, '0');
    
    // Determinar Status NIA baseado na jornada (pode ser baseado em qualquer lógica)
    // Por exemplo: jornadas pares são Produção, ímpares são Sanitizada
    const statusNIA = contadores[j.tipoHU as keyof typeof contadores] % 2 === 0 ? 'Produção' : 'Sanitizada';
    
    // Adicionar Diretoria e Canal de exemplo (distribui entre as opções disponíveis)
    const diretorias = [
      'Diretoria de Negócios Digitais',
      'Diretoria de Canais',
      'Diretoria de Tecnologia',
      'Diretoria de Produtos',
      'Diretoria de Experiência do Cliente',
      'Diretoria de Marketing'
    ];
    const canais = ['Mobile', 'Web', 'Agência'];
    
    const indexDiretoria = contadores[j.tipoHU as keyof typeof contadores] % diretorias.length;
    const indexCanal = contadores[j.tipoHU as keyof typeof contadores] % canais.length;
    
    return {
      id: `${getPrefixoId(j.tipoHU)}${numero}`,
      hu: j.numeroHistoria,
      titulo: j.tituloFluxo,
      tipo: j.tipoHU,
      tema: j.tema,
      data: j.dataAbertura,
      status: j.status,
      statusNIA: statusNIA, // Novo campo para Status NIA
      statusColor: getStatusColors(j.status),
      rme: j.rme, // Manter o RME original para busca
      diretoria: diretorias[indexDiretoria],
      canal: canais[indexCanal]
    };
  });

  // Aplicar filtros
  const jornadasFiltradas = jornadasTabela.filter(jornada => {
    // Filtro de pesquisa (ID, HU ou Título)
    const searchLower = searchTerm.toLowerCase();
    const matchSearch = !searchTerm || 
      jornada.id.toLowerCase().includes(searchLower) ||
      jornada.hu.toLowerCase().includes(searchLower) ||
      jornada.titulo.toLowerCase().includes(searchLower);

    // Filtro de tipo (do dropdown OU do card clicado)
    const tipoFiltroAtivo = filtroCardAtivo || tipoJornada;
    const matchTipo = !tipoFiltroAtivo || jornada.tipo === tipoFiltroAtivo;

    // Filtro de tema
    const matchTema = !temaFiltro || jornada.tema === temaFiltro;

    // Filtro de Status NIA - comparar com statusNIA da jornada
    const matchStatus = !statusFiltro || jornada.statusNIA === statusFiltro;

    // Filtro de data (implementação simplificada - pode ser melhorada com parsing de datas)
    let matchData = true;
    if (dataInicio && jornada.data < dataInicio) {
      matchData = false;
    }
    if (dataTermino && jornada.data > dataTermino) {
      matchData = false;
    }

    // Filtro de período (implementação simplificada)
    let matchPeriodo = true;
    if (periodo && periodo !== 'Selecione') {
      // Aqui você pode implementar lógica mais complexa baseada no período selecionado
      // Por exemplo, calcular data atual - X dias e comparar
      matchPeriodo = true; // Por enquanto, sempre verdadeiro
    }

    // Filtros de Diretoria e Canal
    const matchDiretoria = !diretoriaFiltro || jornada.diretoria === diretoriaFiltro;
    const matchCanal = !canalFiltro || jornada.canal === canalFiltro;

    return matchSearch && matchTipo && matchTema && matchStatus && matchData && matchPeriodo && matchDiretoria && matchCanal;
  });

  // Verificar se há algum filtro ativo
  const temFiltrosAtivos = !!(
    searchTerm ||
    tipoJornada ||
    temaFiltro ||
    statusFiltro ||
    dataInicio ||
    dataTermino ||
    filtroCardAtivo ||
    periodoAno ||
    periodoTrimestre ||
    periodoMes ||
    diretoriaFiltro ||
    canalFiltro
  );

  // Paginação
  const itemsPorPagina = 10;
  const totalPaginas = Math.ceil(jornadasFiltradas.length / itemsPorPagina);
  const indexInicio = (currentPage - 1) * itemsPorPagina;
  const indexFim = indexInicio + itemsPorPagina;
  const jornadasPaginadas = jornadasFiltradas.slice(indexInicio, indexFim);

  // Total dos cards de dashboard (valores mockados para demonstração)
  const totalDashboard = 1153 + 249 + 43 + 87;

  // Função auxiliar para renderizar colunas dinamicamente
  const renderColunaHeader = (nomeColuna: string) => {
    const labelMap: Record<string, string> = {
      'TIPO': 'TIPO',
      'TITULO': 'TITULO',
      'TEMA': 'TEMA',
      'CANAL': 'CANAL',
      'DIRETORIA': 'DIRETORIA',
      'STATUS': 'STATUS NIA',
      'CODIGO': 'CÓDIGO'
    };

    return (
      <div key={nomeColuna} className="flex flex-1 gap-[4px] items-center min-w-0">
        <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[14px] tracking-[0.07px] uppercase leading-[1.125]">
          {labelMap[nomeColuna] || nomeColuna}
        </p>
        <svg className="size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p4c95ef0} fill="#888D95" />
        </svg>
      </div>
    );
  };

  // Função auxiliar para renderizar valor da coluna
  const renderColunaValor = (nomeColuna: string, jornada: any) => {
    const valorMap: Record<string, any> = {
      'TIPO': jornada.tipo,
      'TITULO': jornada.titulo,
      'TEMA': jornada.tema,
      'CANAL': jornada.canal || '-',
      'DIRETORIA': jornada.diretoria || '-',
      'STATUS': jornada.statusNIA,
      'CODIGO': jornada.id
    };

    const valor = valorMap[nomeColuna] || '-';

    // Para STATUS, adicionar ícone de edição se necessário
    if (nomeColuna === 'STATUS') {
      return (
        <div key={nomeColuna} className="flex flex-1 items-center relative min-w-0">
          <span className="flex-1 font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[14px] tracking-[0.196px] leading-[1.125]">
            {valor}
          </span>
          
          {/* Ícone de lápis para status "Nova" ou "Correção" */}
          {!isPainelPublico && (jornada.status === 'Nova' || jornada.status === 'Correção') && onEditarJornada && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                const jornadaCompleta = jornadas.find(j => j.rme === jornada.rme);
                if (jornadaCompleta) {
                  onEditarJornada(jornadaCompleta);
                }
              }}
              className="flex items-center justify-center size-[32px] shrink-0 rounded-[4px] hover:bg-[rgba(0,0,0,0.05)] transition-colors cursor-pointer absolute right-0"
              title="Editar jornada"
            >
              <div className="size-[32px]">
                <Edit />
              </div>
            </button>
          )}
        </div>
      );
    }

    return (
      <div key={nomeColuna} className="flex flex-1 items-center min-w-0">
        <p className="flex-1 font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[14px] tracking-[0.196px] leading-[1.125]">
          {valor}
        </p>
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Data da última atualização */}
      <div className="mb-[8px]">
        <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[14px]">
          Data da última atualização: <span className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214]">{dataUltimaAtualizacao}</span>
        </p>
      </div>

      {/* Header com título e botão */}
      <div className="flex items-center justify-between mb-[24px]">
        <div className="flex items-center gap-[6px]">
          <span className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#686c73] text-[16px]">
            Jornadas cadastradas:
          </span>
          <span className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#465eff] text-[20px]">
            {totalDashboard}
          </span>
        </div>
        
        <div className="flex items-center gap-[12px]">
          {/* Botão de Feedback */}
          <button
            onClick={() => setIsFeedbackModalOpen(true)}
            className="bg-white hover:bg-[#f9fafb] transition-colors rounded-[4px] px-[16px] py-[12px] cursor-pointer border border-[#d4d8dd] flex items-center gap-[8px]"
            title="Enviar Feedback"
          >
            <MessagesSquare className="size-[20px] text-[#4668ff]" />
            <span className="font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-[#4668ff] text-[14px] tracking-[0.07px] uppercase leading-[1.125]">
              ERROS/SUGESTÕES
            </span>
          </button>

          {/* Botão Incluir/Alterar */}
          <button
            onClick={onIncluirAlterar}
            className="bg-[#fcfc30] hover:bg-[#e8e82b] transition-colors rounded-[4px] px-[16px] py-[12px] cursor-pointer"
          >
            <span className="font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-[#465eff] text-[14px] tracking-[0.07px] uppercase leading-[1.125]">
              INCLUIR/ALTERAR
            </span>
          </button>
        </div>
      </div>

      {/* Cards de Estatísticas */}
      <div className="flex gap-[12px] mb-[48px] w-full overflow-x-auto">
        {/* Card Ativo */}
        <div
          onClick={() => {
            setFiltroCardAtivo(filtroCardAtivo === 'Ativo' ? '' : 'Ativo');
            setTipoJornada('');
            setCurrentPage(1);
          }}
          className="bg-[#fefefe] rounded-[12px] min-w-[280px] flex-1 h-[190px] p-[4px] cursor-pointer transition-all relative group"
        >
          <div 
            className={`absolute border-[#9333ea] border-l-4 border-solid inset-[4px] pointer-events-none rounded-[12px] transition-shadow ${
              filtroCardAtivo === 'Ativo' 
                ? 'shadow-[0px_0px_0px_0px_rgba(147,51,234,0.2),0px_8px_24px_0px_rgba(147,51,234,0.35)]' 
                : 'shadow-[0px_0px_2px_0px_#b3abab] group-hover:shadow-[0px_0px_0px_0px_rgba(147,51,234,0.1),0px_4px_12px_0px_rgba(147,51,234,0.2)]'
            }`}
          />
          <div className="flex items-center justify-between px-[24px] pt-[24px] pb-[8px]">
            <h4 className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#686c73] text-[14px] leading-[21px]">
              Ativo
            </h4>
            <div className={`rounded-[8px] size-[40px] flex items-center justify-center transition-colors ${
              filtroCardAtivo === 'Ativo' ? 'bg-[#9333ea]' : 'bg-[#f3e8ff]'
            }`}>
              <svg className="size-[15.99px]" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9896 15.9896">
                <path 
                  d={svgPaths.p28502300} 
                  stroke={filtroCardAtivo === 'Ativo' ? 'white' : '#9333ea'} 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.33333" 
                />
              </svg>
            </div>
          </div>
          <div className="px-[24px] pb-[24px]">
            <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#9333ea] text-[24px] leading-[32px] mb-[4px]">
              1153
            </p>
            <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px] mb-[4px]">
              80% do total
            </p>
            <div className="bg-[#f3e8ff] h-[8px] rounded-[33554400px] w-full">
              <div className="bg-[#9333ea] h-[8px] rounded-[33554400px]" style={{ width: '80%' }} />
            </div>
          </div>
        </div>

        {/* Card Transação */}
        <div
          onClick={() => {
            setFiltroCardAtivo(filtroCardAtivo === 'Transação' ? '' : 'Transação');
            setTipoJornada('');
            setCurrentPage(1);
          }}
          className="bg-[#fefefe] rounded-[12px] min-w-[280px] flex-1 h-[190px] p-[4px] cursor-pointer transition-all relative group"
        >
          <div 
            className={`absolute border-[#059669] border-l-4 border-solid inset-[4px] pointer-events-none rounded-[12px] transition-shadow ${
              filtroCardAtivo === 'Transação' 
                ? 'shadow-[0px_0px_0px_0px_rgba(5,150,105,0.2),0px_8px_24px_0px_rgba(5,150,105,0.35)]' 
                : 'shadow-[0px_0px_2px_0px_#b3abab] group-hover:shadow-[0px_0px_0px_0px_rgba(5,150,105,0.1),0px_4px_12px_0px_rgba(5,150,105,0.2)]'
            }`}
          />
          <div className="flex items-center justify-between px-[24px] pt-[24px] pb-[8px]">
            <h4 className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#686c73] text-[14px] leading-[21px]">
              Transação
            </h4>
            <div className={`rounded-[8px] size-[40px] flex items-center justify-center transition-colors ${
              filtroCardAtivo === 'Transação' ? 'bg-[#059669]' : 'bg-[#d1fae5]'
            }`}>
              <svg className="size-[15.99px]" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9896 15.9896">
                <path 
                  d={svgPaths.p28502300} 
                  stroke={filtroCardAtivo === 'Transação' ? 'white' : '#059669'} 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.33333" 
                />
              </svg>
            </div>
          </div>
          <div className="px-[24px] pb-[24px]">
            <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#059669] text-[24px] leading-[32px] mb-[4px]">
              249
            </p>
            <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px] mb-[4px]">
              17% do total
            </p>
            <div className="bg-[#d1fae5] h-[8px] rounded-[33554400px] w-full">
              <div className="bg-[#059669] h-[8px] rounded-[33554400px]" style={{ width: '17%' }} />
            </div>
          </div>
        </div>

        {/* Card Indução */}
        <div
          onClick={() => {
            setFiltroCardAtivo(filtroCardAtivo === 'Indução' ? '' : 'Indução');
            setTipoJornada('');
            setCurrentPage(1);
          }}
          className="bg-[#fefefe] rounded-[12px] min-w-[280px] flex-1 h-[190px] p-[4px] cursor-pointer transition-all relative group"
        >
          <div 
            className={`absolute border-[#ea580c] border-l-4 border-solid inset-[4px] pointer-events-none rounded-[12px] transition-shadow ${
              filtroCardAtivo === 'Indução' 
                ? 'shadow-[0px_0px_0px_0px_rgba(234,88,12,0.2),0px_8px_24px_0px_rgba(234,88,12,0.35)]' 
                : 'shadow-[0px_0px_2px_0px_#b3abab] group-hover:shadow-[0px_0px_0px_0px_rgba(234,88,12,0.1),0px_4px_12px_0px_rgba(234,88,12,0.2)]'
            }`}
          />
          <div className="flex items-center justify-between px-[24px] pt-[24px] pb-[8px]">
            <h4 className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#686c73] text-[14px] leading-[21px]">
              Indução
            </h4>
            <div className={`rounded-[8px] size-[40px] flex items-center justify-center transition-colors ${
              filtroCardAtivo === 'Indução' ? 'bg-[#ea580c]' : 'bg-[#ffedd5]'
            }`}>
              <svg className="size-[15.99px]" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9896 15.9896">
                <path 
                  d={svgPaths.p28502300} 
                  stroke={filtroCardAtivo === 'Indução' ? 'white' : '#ea580c'} 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.33333" 
                />
              </svg>
            </div>
          </div>
          <div className="px-[24px] pb-[24px]">
            <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#ea580c] text-[24px] leading-[32px] mb-[4px]">
              43
            </p>
            <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px] mb-[4px]">
              3% do total
            </p>
            <div className="bg-[#ffedd5] h-[8px] rounded-[33554400px] w-full">
              <div className="bg-[#ea580c] h-[8px] rounded-[33554400px]" style={{ width: '3%' }} />
            </div>
          </div>
        </div>

        {/* Card Informacional - Apenas visão pública */}
        {isPainelPublico && (
          <div
            onClick={() => {
              setFiltroCardAtivo(filtroCardAtivo === 'Informacional' ? '' : 'Informacional');
              setTipoJornada('');
              setCurrentPage(1);
            }}
            className="bg-[#fefefe] rounded-[12px] min-w-[280px] flex-1 h-[190px] p-[4px] cursor-pointer transition-all relative group"
          >
            <div 
              className={`absolute border-[#0284c7] border-l-4 border-solid inset-[4px] pointer-events-none rounded-[12px] transition-shadow ${
                filtroCardAtivo === 'Informacional' 
                  ? 'shadow-[0px_0px_0px_0px_rgba(2,132,199,0.2),0px_8px_24px_0px_rgba(2,132,199,0.35)]' 
                  : 'shadow-[0px_0px_2px_0px_#b3abab] group-hover:shadow-[0px_0px_0px_0px_rgba(2,132,199,0.1),0px_4px_12px_0px_rgba(2,132,199,0.2)]'
              }`}
            />
            <div className="flex items-center justify-between px-[24px] pt-[24px] pb-[8px]">
              <h4 className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#686c73] text-[14px] leading-[21px]">
                Informacional
              </h4>
              <div className={`rounded-[8px] size-[40px] flex items-center justify-center transition-colors ${
                filtroCardAtivo === 'Informacional' ? 'bg-[#0284c7]' : 'bg-[#e0f2fe]'
              }`}>
                <svg className="size-[15.99px]" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9896 15.9896">
                  <path 
                    d={svgPaths.p28502300} 
                    stroke={filtroCardAtivo === 'Informacional' ? 'white' : '#0284c7'} 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.33333" 
                  />
                </svg>
              </div>
            </div>
            <div className="px-[24px] pb-[24px]">
              <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#0284c7] text-[24px] leading-[32px] mb-[4px]">
                87
              </p>
              <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px] mb-[4px]">
                6% do total
              </p>
              <div className="bg-[#e0f2fe] h-[8px] rounded-[33554400px] w-full">
                <div className="bg-[#0284c7] h-[8px] rounded-[33554400px]" style={{ width: '6%' }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Filtro de Data e Período com Radio Buttons - Baseado no Figma */}
      <div className="content-stretch flex gap-[16px] items-start py-[16.741px] mb-[12px]">
        {/* Radio Button Inline */}
        <div className="content-stretch flex flex-col gap-[8px] items-start shrink-0 w-[280px]">
          <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic shrink-0 text-[#686c73] text-[14px] tracking-[0.07px] whitespace-pre-wrap">
            Filtrar por data de implementação
          </p>
          <div className="content-stretch flex gap-[16px] items-start shrink-0">
            {/* Option Data */}
            <div 
              className="content-stretch flex gap-[8px] items-start py-[8px] rounded-[2px] shrink-0 cursor-pointer"
              onClick={() => {
                setTipoFiltro('data');
                // Limpar período quando selecionar data
                setPeriodoAno('');
                setPeriodoTrimestre('');
                setPeriodoMes('');
              }}
            >
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={tipoFiltro === 'data' ? svgPathsRadio.p4501f00 : svgPathsRadio.p26f9ce00} fill={tipoFiltro === 'data' ? '#2D37F5' : '#313338'} />
                </svg>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[2px] shrink-0">
                <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic shrink-0 text-[#111214] text-[16px] tracking-[0.08px] whitespace-pre-wrap">
                  Data
                </p>
              </div>
            </div>

            {/* Option Período */}
            <div 
              className="content-stretch flex gap-[8px] items-start py-[8px] rounded-[2px] shrink-0 cursor-pointer"
              onClick={() => {
                setTipoFiltro('periodo');
                // Limpar datas quando selecionar período
                setDataInicio('');
                setDataTermino('');
              }}
            >
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={tipoFiltro === 'periodo' ? svgPathsRadio.p4501f00 : svgPathsRadio.p26f9ce00} fill={tipoFiltro === 'periodo' ? '#2D37F5' : '#313338'} />
                </svg>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[2px] shrink-0">
                <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic shrink-0 text-[#111214] text-[16px] tracking-[0.08px] whitespace-pre-wrap">
                  Período
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Campos de Data - Mostrar apenas se tipoFiltro === 'data' */}
        {tipoFiltro === 'data' && (
          <div className="content-stretch flex gap-[32px] items-center shrink-0">
            {/* Data de Início */}
            <div className="content-stretch flex flex-col gap-[8px] items-start shrink-0 w-[212px]">
              <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full whitespace-pre-wrap">
                Data de Início
              </p>
              <div className="bg-[#f0f2f4] content-stretch flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
                <div className="bg-[#f0f2f4] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[8px] items-center pb-[7px] pt-[8px] px-[12px] relative w-full">
                      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                        <input
                          type="text"
                          placeholder="DD / MM / AAAA"
                          value={dataInicio}
                          onChange={(e) => setDataInicio(e.target.value)}
                          className="flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px] bg-transparent border-none outline-none w-full"
                        />
                      </div>
                      <div className="relative shrink-0 size-[24px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path d={svgPaths.p3079f800} fill="#888D95" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
              </div>
            </div>

            {/* Data de Término */}
            <div className="content-stretch flex flex-col gap-[8px] items-start shrink-0 w-[250px]">
              <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full whitespace-pre-wrap">
                Data de Término
              </p>
              <div className="bg-[#f0f2f4] content-stretch flex flex-col items-start rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
                <div className="bg-[#f0f2f4] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[8px] items-center pb-[7px] pt-[8px] px-[12px] relative w-full">
                      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                        <input
                          type="text"
                          placeholder="DD / MM / AAAA"
                          value={dataTermino}
                          onChange={(e) => setDataTermino(e.target.value)}
                          className="flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px] bg-transparent border-none outline-none w-full"
                        />
                      </div>
                      <div className="relative shrink-0 size-[24px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path d={svgPaths.p3079f800} fill="#888D95" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
              </div>
            </div>
          </div>
        )}

        {/* Filtro de Período Hierárquico - Mostrar apenas se tipoFiltro === 'periodo' */}
        {tipoFiltro === 'periodo' && (
          <div className="flex-1">
            <FiltroPeriodoHierarquico
              ano={periodoAno}
              trimestre={periodoTrimestre}
              mes={periodoMes}
              onAnoChange={setPeriodoAno}
              onTrimestreChange={setPeriodoTrimestre}
              onMesChange={setPeriodoMes}
              onDataInicioChange={setDataInicio}
              onDataTerminoChange={setDataTermino}
            />
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#e0e0e0] my-[24px]" />

      {/* Barra de filtros */}
      <div className="flex gap-[8px] items-end mb-[16px]">
        {/* Barra de pesquisa - sempre visível */}
        <div className="flex-1 flex flex-col gap-[8px]">
          <label className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[14px] tracking-[0.07px] leading-[1.125]">
            Nome do Fluxo
          </label>
          <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
            <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center pb-[7px] pt-[8px] px-[8px] relative size-full">
                  <div className="relative shrink-0 size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path clipRule="evenodd" d={svgPaths.p36ed4f00} fill="#888D95" fillRule="evenodd" />
                    </svg>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                    <input
                      type="text"
                      placeholder="Pesquisar por ID, HU ou Titulo"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px] bg-transparent border-none outline-none w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
          </div>
        </div>

        {/* Selects dinâmicos baseados nas colunas visíveis */}
        {colunasVisiveis.includes('TIPO') && (
          <div className="flex-1 flex flex-col gap-[8px]">
            <SelectField
              label="Tipo de Jornada"
              value={tipoJornada}
              onChange={setTipoJornada}
              options={[
                { value: 'Ativo', label: 'Ativo' },
                { value: 'Transação', label: 'Transação' },
                { value: 'Indução', label: 'Indução' },
                { value: 'Informacional', label: 'Informacional' }
              ]}
              placeholder="Filtro"
            />
          </div>
        )}

        {colunasVisiveis.includes('TEMA') && (
          <div className="flex-1 flex flex-col gap-[8px]">
            <SelectField
              label="Tema"
              value={temaFiltro}
              onChange={setTemaFiltro}
              options={temasUnicos.map(tema => ({ value: tema, label: tema }))}
              placeholder="Filtro"
            />
          </div>
        )}

        {colunasVisiveis.includes('STATUS') && (
          <div className="flex-1 flex flex-col gap-[8px]">
            <SelectField
              label="Status NIA"
              value={statusFiltro}
              onChange={setStatusFiltro}
              options={[
                { value: 'Produção', label: 'Produção' },
                { value: 'Sanitizada', label: 'Sanitizado' }
              ]}
              placeholder="Filtro"
            />
          </div>
        )}

        {/* Botão Mais Filtros */}
        <button
          onClick={() => setMaisFiltrosExpandido(!maisFiltrosExpandido)}
          className={`content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[4px] shrink-0 cursor-pointer transition-colors ${
            maisFiltrosExpandido ? 'bg-[#d0d9ff]' : 'bg-[#e0e9ff] hover:bg-[#d0d9ff]'
          }`}
        >
          <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#465eff] text-[14px] text-center tracking-[0.07px] uppercase">
            <p className="css-ew64yg leading-[1.125]">{maisFiltrosExpandido ? 'Menos Filtros' : 'Mais Filtros'}</p>
          </div>
        </button>
      </div>

      {/* Filtros Extras (Diretoria e Canal) - Expandem quando "Mais Filtros" é clicado */}
      {maisFiltrosExpandido && (
        <div className="flex flex-col gap-[16px] mb-[16px]">
          <div className="flex gap-[8px] items-end">
            {/* Filtro de Diretoria */}
            <div className="flex-1 flex flex-col gap-[8px]">
              <SelectField
                label="Diretoria"
                value={diretoriaFiltro}
                onChange={setDiretoriaFiltro}
                options={[
                  { value: 'Diretoria de Negócios Digitais', label: 'Diretoria de Negócios Digitais' },
                  { value: 'Diretoria de Canais', label: 'Diretoria de Canais' },
                  { value: 'Diretoria de Tecnologia', label: 'Diretoria de Tecnologia' },
                  { value: 'Diretoria de Produtos', label: 'Diretoria de Produtos' },
                  { value: 'Diretoria de Experiência do Cliente', label: 'Diretoria de Experiência do Cliente' },
                  { value: 'Diretoria de Marketing', label: 'Diretoria de Marketing' }
                ]}
                placeholder="Filtro"
              />
            </div>

            {/* Filtro de Canal */}
            <div className="flex-1 flex flex-col gap-[8px]">
              <SelectField
                label="Canal"
                value={canalFiltro}
                onChange={setCanalFiltro}
                options={[
                  { value: 'Mobile', label: 'Mobile' },
                  { value: 'Web', label: 'Web' },
                  { value: 'Agência', label: 'Agência' }
                ]}
                placeholder="Filtro"
              />
            </div>

            {/* Espaços vazios para manter o alinhamento */}
            <div className="flex-1" />
          </div>
        </div>
      )}

      {/* Checkbox Utiliza IA Generativa - Sempre visível, baseado no design do Figma */}
      <div className="flex items-center gap-[16px] mb-[16px]">
        <label 
          className="flex gap-[8px] items-center rounded-[2px] cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setUtilizaIAFiltro(!utilizaIAFiltro);
          }}
        >
          <div className="relative shrink-0 size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path 
                d={utilizaIAFiltro ? svgPathsCheckbox.p73e7900 : svgPathsCheckbox.p12c0c180} 
                fill={utilizaIAFiltro ? 'var(--fill-0, #2D37F5)' : 'var(--fill-0, #313338)'} 
              />
            </svg>
          </div>
          <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic text-[#111214] text-[16px] tracking-[0.08px]">
            Utiliza IA Generativa
          </p>
        </label>

        {/* Checkbox Condicional: IA Generativa responde ao cliente? - só aparece se utilizaIAFiltro estiver marcado */}
        {utilizaIAFiltro && (
          <label 
            className="flex gap-[8px] items-center rounded-[2px] cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setIARespondeClienteFiltro(!iaRespondeClienteFiltro);
            }}
          >
            <div className="relative shrink-0 size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path 
                  d={iaRespondeClienteFiltro ? svgPathsCheckbox.p73e7900 : svgPathsCheckbox.p12c0c180} 
                  fill={iaRespondeClienteFiltro ? 'var(--fill-0, #2D37F5)' : 'var(--fill-0, #313338)'} 
                />
              </svg>
            </div>
            <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic text-[#111214] text-[16px] tracking-[0.08px]">
              IA Generativa responde ao cliente
            </p>
          </label>
        )}
      </div>

      {/* Barra de Status com Resultados e Limpar Tudo - só aparece se tiver filtros ativos */}
      {temFiltrosAtivos && (
        <div className="bg-[#f0f2f4] flex items-center justify-between px-[16px] py-[12px] rounded-[4px] mb-[16px]">
          <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[14px] tracking-[0.196px] leading-[1.125] opacity-87">
            {jornadasFiltradas.length} {jornadasFiltradas.length === 1 ? 'resultado' : 'resultados'}
          </p>
          <button
            onClick={() => {
              // Limpar todos os filtros
              setSearchTerm('');
              setTipoJornada('');
              setTemaFiltro('');
              setStatusFiltro('');
              setDataInicio('');
              setDataTermino('');
              setPeriodo('');
              setFiltroCardAtivo('');
              setPeriodoAno('');
              setPeriodoTrimestre('');
              setPeriodoMes('');
              setDiretoriaFiltro('');
              setCanalFiltro('');
              setUtilizaIAFiltro(false);
              setIARespondeClienteFiltro(false);
              setCurrentPage(1);
            }}
            className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#2d37f5] text-[14px] tracking-[0.07px] leading-[1.125] cursor-pointer hover:opacity-70 transition-opacity"
          >
            Limpar tudo
          </button>
        </div>
      )}

      {/* Tabela - Exatamente como no Figma */}
      <div className="w-full">
        {/* Header da tabela */}
        <div className="bg-[#f0f2f4] relative w-full shadow-[inset_0px_-1px_0px_0px_#e0e0e0]">
          <div className="flex gap-[48px] items-center px-[16px] py-[20px]">
            {/* Colunas dinâmicas */}
            {colunasOrdenadas.map(renderColunaHeader)}
            
            {/* Espaço para o botão de navegação */}
            <div className="size-[24px] shrink-0" />
          </div>
        </div>

        {/* Linhas da tabela */}
        {jornadasPaginadas.map((jornada, index) => (
          <div
            key={index}
            className="bg-[#fefefe] relative w-full shadow-[inset_0px_-1px_0px_0px_#e0e0e0] hover:bg-[#f9fafb] transition-colors cursor-pointer group"
            onClick={() => onVerDetalhes?.(jornada)}
          >
            <div className="flex gap-[48px] items-center px-[16px] py-[20px]">
              {/* Colunas dinâmicas */}
              {colunasOrdenadas.map(coluna => renderColunaValor(coluna, jornada))}
              
              {/* Botão de navegação - aparece apenas no hover */}
              <div className="size-[24px] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d="M9 6l6 6-6 6" stroke="#888D95" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Paginação */}
      <div className="content-stretch flex items-center justify-between px-[8px] mt-[24px]">
        {/* Link "Mostrar tudo" */}
        <div className="content-stretch flex flex-col items-start justify-center py-[3px] relative shrink-0">
          <div className="flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d37f5] text-[16px] tracking-[0.08px] w-full">
            <p className="css-4hzbpn leading-[1.125]">Mostrar tudo</p>
          </div>
        </div>

        {/* Container direito: Contador + Paginador */}
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <p className="css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#686c73] text-[12px] text-right tracking-[0.168px]">
            Mostrando {jornadasFiltradas.length > 0 ? indexInicio + 1 : 0}-{Math.min(indexFim, jornadasFiltradas.length)} de {jornadasFiltradas.length} itens
          </p>
          
          {/* Paginador */}
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            {/* Seta esquerda */}
            <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="relative shrink-0 size-[24px] disabled:cursor-not-allowed cursor-pointer"
              >
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPathsPaginator.p53b0c80} fill={currentPage === 1 ? '#D4D8DD' : '#888D95'} />
                </svg>
              </button>
            </div>

            {/* Páginas */}
            {Array.from({ length: totalPaginas }, (_, i) => i + 1).map(page => (
              <div
                key={page}
                className={page === currentPage ? 'bg-[#fcfc30] relative rounded-[999px] shrink-0 size-[24px]' : 'bg-[#e0e9ff] relative rounded-[2px] shrink-0 size-[24px]'}
              >
                <button
                  onClick={() => setCurrentPage(page)}
                  className="flex flex-col items-center justify-center size-full cursor-pointer"
                >
                  <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
                    <p className="css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#465eff] text-[12px] text-center tracking-[0.06px]">
                      {page}
                    </p>
                  </div>
                </button>
              </div>
            ))}

            {/* Seta direita */}
            <div className="content-stretch flex flex-col items-center justify-center relative rounded-[2px] shrink-0">
              <button
                onClick={() => setCurrentPage(Math.min(totalPaginas, currentPage + 1))}
                disabled={currentPage === totalPaginas}
                className="relative shrink-0 size-[24px] disabled:cursor-not-allowed cursor-pointer"
              >
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPathsPaginator.p30f54000} fill={currentPage === totalPaginas ? '#D4D8DD' : '#888D95'} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Feedback */}
      <ModalFeedback
        isOpen={isFeedbackModalOpen}
        onClose={() => setIsFeedbackModalOpen(false)}
        onSubmit={onEnviarFeedback}
        jornadas={jornadasTabela.map(j => ({ id: j.id, titulo: j.titulo }))}
      />

      {/* Modal de Mais Filtros */}
      <ModalPersonalizarFiltros
        isOpen={isMaisFiltrosModalOpen}
        onClose={() => setIsMaisFiltrosModalOpen(false)}
        onAplicar={(colunas) => {
          setColunasVisiveis(colunas);
        }}
        colunasIniciais={colunasVisiveis}
      />
    </div>
  );
}