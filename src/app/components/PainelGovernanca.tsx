import { useState } from 'react';
import svgPaths from '@/imports/svg-3dkfh9akxg';
import svgPathsPaginator from '@/imports/svg-yxb1sqbp9k';
import svgPathsRadio from '@/imports/svg-st0q96v9y6';
import type { JornadaCadastrada } from '@/app/App';
import { getStatusJornadaDisplayMasculino } from '@/app/lib/statusJornadaDisplay';
import { FiltroPeriodoHierarquico } from '@/app/components/FiltroPeriodoHierarquico';
import { SelectField } from '@/app/components/SelectField';
import { ModalPersonalizarFiltros } from '@/app/components/ModalPersonalizarFiltros';
import { Paginator } from '@/app/components/Paginator';
import { StatusBar } from '@/app/components/StatusBar';

interface PainelGovernancaProps {
  onVerDetalhes?: (jornada: any) => void;
  jornadas: JornadaCadastrada[];
  dataUltimaAtualizacao?: string;
}

export function PainelGovernanca({ onVerDetalhes, jornadas, dataUltimaAtualizacao = '03/02/2026 14:30' }: PainelGovernancaProps) {
  const CANAIS_FORMULARIO = ['WhatsApp', 'App BB', 'Outros'];
  const [dataInicio, setDataInicio] = useState(''); // Vazio por padrão
  const [dataTermino, setDataTermino] = useState(''); // Vazio por padrão
  const [periodo, setPeriodo] = useState('');
  const [tipoFiltro, setTipoFiltro] = useState<'data' | 'periodo' | ''>('data'); // Iniciar com 'data' selecionado
  const [periodoAno, setPeriodoAno] = useState('');
  const [periodoTrimestre, setPeriodoTrimestre] = useState('');
  const [periodoMes, setPeriodoMes] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // Estado para paginação
  const [nomeFluxo, setNomeFluxo] = useState('');
  const [filtroCardAtivo, setFiltroCardAtivo] = useState<string>('');
  const [tipoJornada, setTipoJornada] = useState('');
  const [status, setStatus] = useState('');
  const [temaFiltro, setTemaFiltro] = useState('');
  const [isMaisFiltrosOpen, setIsMaisFiltrosOpen] = useState(false);
  const [diretoriaFiltro, setDiretoriaFiltro] = useState('');
  const [canalFiltro, setCanalFiltro] = useState('');
  const [colunasVisiveis, setColunasVisiveis] = useState<string[]>(['TIPO', 'TEMA', 'STATUS', 'DIRETORIA', 'CANAL']);
  const [maisFiltrosExpandido, setMaisFiltrosExpandido] = useState(false); // Controla expansão dos filtros extras
  const [inclusaoFiltro, setInclusaoFiltro] = useState(''); // Filtro de Inclusão
  const [planoRequisitosFiltro, setPlanoRequisitosFiltro] = useState<'com_link' | 'com_justificativa' | ''>(''); // Filtro (TRN)

  // Garantir que STATUS sempre seja renderizado por último
  const colunasOrdenadas = [...colunasVisiveis].sort((a, b) => {
    if (a === 'STATUS') return 1;
    if (b === 'STATUS') return -1;
    return 0;
  });

  // Mapear status para cores
  const getStatusColors = (status: string) => {
    switch (status) {
      case 'Nova':
        return { bullet: '#4668FF', text: '#4668ff' };
      case 'Em análise':
        return { bullet: '#FF6F20', text: '#ff6f20' };
      case 'Correção':
        return { bullet: '#FFB31A', text: '#ad5f00' };
      case 'Aprovada':
        return { bullet: '#0C8A00', text: '#0c8a00' };
      case 'Implementada':
        return { bullet: '#5A059C', text: '#5a059c' };
      case 'Excluída':
        return { bullet: '#E3111F', text: '#e3111f' };
      // Manter compatibilidade com status antigos (lowercase)
      case 'nova':
        return { bullet: '#4668FF', text: '#4668ff' };
      case 'aprovada':
        return { bullet: '#0C8A00', text: '#0c8a00' };
      case 'implementada':
        return { bullet: '#5A059C', text: '#5a059c' };
      case 'excluída':
        return { bullet: '#E3111F', text: '#e3111f' };
      default:
        return { bullet: '#4668FF', text: '#4668ff' };
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

  // Calcular métricas de jornadas recebidas
  const jornadasNovas = jornadas.filter(j => j.tipoInclusao === 'Nova Jornada').length;
  const jornadasAlteradas = jornadas.filter(j => j.tipoInclusao === 'Alteração').length;
  const jornadasAprovadas = jornadas.filter(j => j.status === 'Aprovada').length;

  // Converter jornadas para formato da tabela com numeração sequencial por tipo
  const contadores = { 'Ativo': 0, 'Transação': 0, 'Indução': 0, 'Informacional': 0 };
  const contadorForm = { count: 0 };
  const jornadasTabela = jornadas.map(j => {
    contadores[j.tipoHU as keyof typeof contadores]++;
    const numero = String(contadores[j.tipoHU as keyof typeof contadores]).padStart(4, '0');
    
    // Gerar ID do Formulário sequencial
    contadorForm.count++;
    const formId = `FORM${String(contadorForm.count).padStart(4, '0')}`;
    
    // Status NIA: valor salvo na jornada ou fallback para demonstração
    const niaCycle = ['Produção', 'Inativa', 'Sanitizada', 'Excluída'];
    const statusNIA =
      j.statusNIA ?? niaCycle[(contadores[j.tipoHU as keyof typeof contadores] - 1) % 4];
    
    // Adicionar Diretoria e Canal de exemplo (distribui entre as opções disponíveis)
    const diretorias = [
      'Diretoria de Negócios Digitais',
      'Diretoria de Canais',
      'Diretoria de Tecnologia',
      'Diretoria de Produtos',
      'Diretoria de Experiência do Cliente',
      'Diretoria de Marketing'
    ];
    const canais = CANAIS_FORMULARIO;
    
    const indexDiretoria = contadores[j.tipoHU as keyof typeof contadores] % diretorias.length;
    const indexCanal = contadores[j.tipoHU as keyof typeof contadores] % canais.length;
    
    return {
      inclusao: j.tipoInclusao || 'Nova Jornada', // Nova jornada ou Alteração de jornada
      tipo: j.tipoHU,
      data: j.dataAbertura,
      formId: formId, // ID do formulário
      codigoCatalogo: `${getPrefixoId(j.tipoHU)}${numero}`.replace(/-/g, ''),
      titulo: j.tituloFluxo,
      tema: j.tema,
      status: j.status,
      // Campos mantidos para compatibilidade
      id: `${getPrefixoId(j.tipoHU)}${numero}`,
      hu: j.numeroHistoria,
      dataFim: j.dataImplementacao,
      statusNIA: statusNIA,
      cor: getStatusColors(j.status).bullet,
      rme: j.rme,
      diretoria: diretorias[indexDiretoria],
      canal: j.canais?.[0] || canais[indexCanal],
      // ADICIONAR: jornada original completa
      jornadaOriginal: j
    };
  });

  // Aplicar filtros
  const jornadasFiltradas = jornadasTabela.filter(jornada => {
    // Filtro de pesquisa (ID, HU ou Título)
    const searchLower = nomeFluxo.toLowerCase();
    const matchSearch = !nomeFluxo || 
      jornada.id.toLowerCase().includes(searchLower) ||
      jornada.hu.toLowerCase().includes(searchLower) ||
      jornada.titulo.toLowerCase().includes(searchLower);

    // Filtro de tipo (do dropdown OU do card clicado)
    const tipoFiltroAtivo = filtroCardAtivo || tipoJornada;
    const matchTipo = !tipoFiltroAtivo || jornada.tipo === tipoFiltroAtivo;

    // Filtro de status
    const matchStatus = !status || jornada.status === status;

    // Filtro de data (implementação simplificada)
    let matchData = true;
    if (dataInicio && jornada.data < dataInicio) {
      matchData = false;
    }
    if (dataTermino && jornada.data > dataTermino) {
      matchData = false;
    }

    // Filtro de período (implementação simplificada)
    let matchPeriodo = true;
    if (periodo && periodo !== '') {
      // Aqui você pode implementar lógica mais complexa baseada no período selecionado
      matchPeriodo = true; // Por enquanto, sempre verdadeiro
    }

    // Filtro de tema
    const matchTema = !temaFiltro || jornada.tema === temaFiltro;

    // Filtro de diretoria
    const matchDiretoria = !diretoriaFiltro || jornada.diretoria === diretoriaFiltro;

    // Filtro de canal
    const matchCanal = !canalFiltro || jornada.canal === canalFiltro;

    // Filtro de inclusão
    const matchInclusao = !inclusaoFiltro || jornada.inclusao === inclusaoFiltro;

    // Filtro de Plano de Requisitos (somente Transação/TRN)
    const isTransacao = jornada.tipo === 'Transação';
    const hasLinkPlano = !!jornada.jornadaOriginal?.linkPlanoRequisitos?.trim();
    const hasJustificativa = !!jornada.jornadaOriginal?.ausenciaPlanoRequisitos?.trim();
    const matchPlanoRequisitos =
      !planoRequisitosFiltro ||
      (planoRequisitosFiltro === 'com_link' && isTransacao && hasLinkPlano) ||
      (planoRequisitosFiltro === 'com_justificativa' && isTransacao && hasJustificativa);

    return matchSearch && matchTipo && matchStatus && matchData && matchPeriodo && matchTema && matchDiretoria && matchCanal && matchInclusao && matchPlanoRequisitos;
  });

  // Verificar se há algum filtro ativo
  const temFiltrosAtivos = !!(
    nomeFluxo ||
    tipoJornada ||
    temaFiltro ||
    status ||
    dataInicio ||
    dataTermino ||
    filtroCardAtivo ||
    periodoAno ||
    periodoTrimestre ||
    periodoMes ||
    diretoriaFiltro ||
    canalFiltro ||
    inclusaoFiltro ||
    planoRequisitosFiltro
  );

  // Paginação
  const itemsPorPagina = 10;
  const totalPaginas = Math.ceil(jornadasFiltradas.length / itemsPorPagina);
  const indexInicio = (currentPage - 1) * itemsPorPagina;
  const indexFim = indexInicio + itemsPorPagina;
  const jornadasPaginadas = jornadasFiltradas.slice(indexInicio, indexFim);

  const handleVerDetalhes = (jornada: any) => {
    if (onVerDetalhes) {
      onVerDetalhes(jornada);
    }
  };

  const totalDashboard = jornadasTabela.length;
  
  // Contar por tipo
  const jornadasAtivo = jornadasTabela.filter(j => j.tipo === 'Ativo').length;
  const jornadasTransacao = jornadasTabela.filter(j => j.tipo === 'Transação').length;
  const jornadasInducao = jornadasTabela.filter(j => j.tipo === 'Indução').length;
  const jornadasInformacional = jornadasTabela.filter(j => j.tipo === 'Informacional').length;
  
  // Calcular percentuais
  const percAtivo = totalDashboard > 0 ? Math.round((jornadasAtivo / totalDashboard) * 100) : 0;
  const percTransacao = totalDashboard > 0 ? Math.round((jornadasTransacao / totalDashboard) * 100) : 0;
  const percInducao = totalDashboard > 0 ? Math.round((jornadasInducao / totalDashboard) * 100) : 0;
  const percInformacional = totalDashboard > 0 ? Math.round((jornadasInformacional / totalDashboard) * 100) : 0;

  return (
    <>
    <div className="w-full">
      {/* Data da última atualização */}
      <div className="mb-[8px] w-full">
          <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[14px]">
            Data da última atualização: <span className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214]">{dataUltimaAtualizacao}</span>
          </p>
        </div>

        {/* Métricas e Botão - Tudo na mesma linha */}
        <div className="flex items-center justify-between mb-[24px] w-full">
          {/* Métricas Unificadas */}
          <div className="flex items-center gap-[32px]">
            {/* Jornadas cadastradas */}
            <div className="flex items-center gap-[6px]">
              <span className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#686c73] text-[16px]">
                Jornadas cadastradas:
              </span>
              <span className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#465eff] text-[20px]">
                {totalDashboard}
              </span>
            </div>
            
            {/* Novas */}
            <div className="flex items-center gap-[6px]">
              <span className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#686c73] text-[16px]">
                Novas:
              </span>
              <span className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#465eff] text-[20px]">
                {jornadasNovas}
              </span>
            </div>
            
            {/* Alteradas */}
            <div className="flex items-center gap-[6px]">
              <span className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#686c73] text-[16px]">
                Alteradas:
              </span>
              <span className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#465eff] text-[20px]">
                {jornadasAlteradas}
              </span>
            </div>
          </div>

          {/* Botão Subir Aprovadas */}
          <button 
            className="bg-[#0C8A00] flex items-center gap-[8px] px-[16px] py-[12px] rounded-[4px] hover:bg-[#0a7400] transition-colors cursor-pointer"
            onClick={() => {
              // Aqui você pode adicionar a lógica para subir as jornadas aprovadas
              alert(`${jornadasAprovadas} jornadas aprovadas serão enviadas para produção`);
            }}
          >
            <span className="font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-white text-[14px] tracking-[0.07px] uppercase leading-[1.125]">
              SUBIR APROVADAS ({jornadasAprovadas})
            </span>
          </button>
        </div>

        {/* Cards de Estatísticas */}
        <div className="flex gap-[12px] mb-[48px] w-full overflow-x-auto">
          {/* Card Ativo */}
          <div
            onClick={() => {
              setFiltroCardAtivo(filtroCardAtivo === 'Ativo' ? '' : 'Ativo');
              setTipoJornada('');
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
              <div className="bg-[#d1fae5] h-[8px] rounded-full w-full">
                <div className="bg-[#059669] h-[8px] rounded-full" style={{ width: '17%' }} />
              </div>
            </div>
          </div>

          {/* Card Indução */}
          <div
            onClick={() => {
              setFiltroCardAtivo(filtroCardAtivo === 'Indução' ? '' : 'Indução');
              setTipoJornada('');
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
              <div className="bg-[#ffedd5] h-[8px] rounded-full w-full">
                <div className="bg-[#ea580c] h-[8px] rounded-full" style={{ width: '3%' }} />
              </div>
            </div>
          </div>

          {/* Card Informacional */}
          <div
            onClick={() => {
              setFiltroCardAtivo(filtroCardAtivo === 'Informacional' ? '' : 'Informacional');
              setTipoJornada('');
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
              <div className="bg-[#e0f2fe] h-[8px] rounded-full w-full">
                <div className="bg-[#0284c7] h-[8px] rounded-full" style={{ width: '6%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Filtros de Data/Período com Radio Buttons */}
        <div className="content-stretch flex gap-[16px] items-start py-[16.741px] mb-[12px]">
          {/* Radio Button Inline */}
          <div className="content-stretch flex flex-col gap-[8px] items-start shrink-0 w-[243px]">
            <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic shrink-0 text-[#686c73] text-[14px] tracking-[0.07px] whitespace-pre-wrap">
              Filtrar por data de inclusão:
            </p>
            <div className="content-stretch flex gap-[16px] items-start shrink-0">
              {/* Opção Data */}
              <div
                onClick={() => {
                  setTipoFiltro('data');
                  // Limpar período quando selecionar data
                  setPeriodoAno('');
                  setPeriodoTrimestre('');
                  setPeriodoMes('');
                }}
                className="content-stretch flex gap-[8px] items-start py-[8px] rounded-[2px] shrink-0 cursor-pointer"
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

              {/* Opção Período */}
              <div
                onClick={() => {
                  setTipoFiltro('periodo');
                  // Limpar datas quando selecionar período
                  setDataInicio('');
                  setDataTermino('');
                }}
                className="content-stretch flex gap-[8px] items-start py-[8px] rounded-[2px] shrink-0 cursor-pointer"
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

          {/* Campos Condicionais - Data */}
          {tipoFiltro === 'data' && (
            <div className="content-stretch flex gap-[32px] items-center shrink-0">
              {/* Data de Início */}
              <div className="content-stretch flex flex-col gap-[8px] items-start shrink-0 w-[212px]">
                <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">Data de Início</p>
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
                <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">Data de Término</p>
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

          {/* Filtro de Período Hierárquico - inline na mesma linha */}
          {tipoFiltro === 'periodo' && (
            <div className="flex-1">
              <FiltroPeriodoHierarquico
                ano={periodoAno}
                trimestre={periodoTrimestre}
                mes={periodoMes}
                onAnoChange={setPeriodoAno}
                onTrimestreChange={setPeriodoTrimestre}
                onMesChange={setPeriodoMes}
              />
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#e0e0e0] my-[24px]" />

        {/* Filtros Adicionais */}
        <div className="content-stretch flex flex-col items-end relative shrink-0 w-full mb-[16px]">
          <div className="content-stretch flex gap-[8px] items-end justify-end relative shrink-0 w-full">
            {/* Nome do Fluxo */}
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
              <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">Nome do Fluxo</p>
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
                          placeholder="Buscar por ID, Titulo"
                          value={nomeFluxo}
                          onChange={(e) => setNomeFluxo(e.target.value)}
                          className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px] bg-transparent border-none outline-none w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
              </div>
            </div>

            {/* Tipo de Jornada */}
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
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

            {/* Tema */}
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
              <SelectField
                label="Tema"
                value={temaFiltro}
                onChange={setTemaFiltro}
                options={temasUnicos.map(tema => ({ value: tema, label: tema }))}
                placeholder="Filtro"
              />
            </div>

            {/* Status */}
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
              <SelectField
                label="Status"
                value={status}
                onChange={setStatus}
                options={[
                  { value: 'Nova', label: 'Enviado' },
                  { value: 'Em análise', label: 'Em análise' },
                  { value: 'Correção', label: 'Devolvido' },
                  { value: 'Aprovada', label: 'Aprovado' },
                  { value: 'Implementada', label: 'Implementado' },
                  { value: 'Excluída', label: 'Excluído' }
                ]}
                placeholder="Filtro"
              />
            </div>

            {/* Botão Mais Filtros */}
            <button
              onClick={() => setMaisFiltrosExpandido(!maisFiltrosExpandido)}
              className={`content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[4px] shrink-0 cursor-pointer transition-colors ${maisFiltrosExpandido ? 'bg-[#d0d9ff]' : 'bg-[#e0e9ff] hover:bg-[#d0d9ff]'}`}
            >
              <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#465eff] text-[14px] text-center tracking-[0.07px] uppercase">
                <p className="css-ew64yg leading-[1.125]">{maisFiltrosExpandido ? 'Menos Filtros' : 'Mais Filtros'}</p>
              </div>
            </button>
          </div>
        </div>

        {/* Filtros Extras (Diretoria e Canal) - Expandem quando "Mais Filtros" é clicado */}
        {maisFiltrosExpandido && (
          <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full mb-[16px]">
            {/* Filtro de Inclusão */}
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
              <SelectField
                label="Inclusão"
                value={inclusaoFiltro}
                onChange={setInclusaoFiltro}
                options={[
                  { value: 'Nova Jornada', label: 'Nova Jornada' },
                  { value: 'Alteração', label: 'Alteração' }
                ]}
                placeholder="Filtro"
              />
            </div>

            {/* Filtro: Plano de Requisitos (somente TRN/Transação) */}
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
              <SelectField
                label="Plano de Requisitos"
                value={planoRequisitosFiltro}
                onChange={(v) => setPlanoRequisitosFiltro(v as typeof planoRequisitosFiltro)}
                options={[
                  { value: 'com_link', label: 'Com link informado' },
                  { value: 'com_justificativa', label: 'Sem link (com justificativa)' }
                ]}
                placeholder="Filtro"
              />
            </div>

            {/* Filtro de Diretoria */}
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
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
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
              <SelectField
                label="Canal"
                value={canalFiltro}
                onChange={setCanalFiltro}
                options={[
                  { value: 'WhatsApp', label: 'WhatsApp' },
                  { value: 'App BB', label: 'App BB' },
                  { value: 'Outros', label: 'Outros' }
                ]}
                placeholder="Filtro"
              />
            </div>

          </div>
        )}

        {/* Barra de Status com Resultados e Limpar Tudo - só aparece se tiver filtros ativos */}
        {temFiltrosAtivos && (
          <StatusBar
            resultCount={jornadasFiltradas.length}
            onClearFilters={() => {
              // Limpar todos os filtros
              setNomeFluxo('');
              setTipoJornada('');
              setTemaFiltro('');
              setStatus('');
              setDataInicio('');
              setDataTermino('');
              setFiltroCardAtivo('');
              setPeriodoAno('');
              setPeriodoTrimestre('');
              setPeriodoMes('');
              setDiretoriaFiltro('');
              setCanalFiltro('');
              setInclusaoFiltro('');
              setPlanoRequisitosFiltro('');
              setCurrentPage(1);
            }}
          />
        )}

        {/* Tabela */}
        <div className="w-full">
          {/* Header da tabela */}
          <div className="bg-[#f0f2f4] relative w-full shadow-[inset_0px_-1px_0px_0px_#e0e0e0]">
            <div className="flex gap-[32px] items-center px-[16px] py-[20px]">
              {/* INCLUSÃO */}
              <div className="flex flex-1 gap-[4px] items-center min-w-0">
                <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[14px] tracking-[0.07px] uppercase leading-[1.125]">
                  INCLUSÃO
                </p>
                <svg className="size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p4c95ef0} fill="#888D95" />
                </svg>
              </div>

              {/* JORNADA */}
              <div className="flex flex-1 gap-[4px] items-center min-w-0">
                <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[14px] tracking-[0.07px] uppercase leading-[1.125]">
                  JORNADA
                </p>
                <svg className="size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p4c95ef0} fill="#888D95" />
                </svg>
              </div>

              {/* DATA */}
              <div className="flex flex-1 gap-[4px] items-center min-w-0">
                <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[14px] tracking-[0.07px] uppercase leading-[1.125]">
                  DATA
                </p>
                <svg className="size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p4c95ef0} fill="#888D95" />
                </svg>
              </div>

              {/* ID */}
              <div className="flex flex-1 gap-[4px] items-center min-w-0">
                <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[14px] tracking-[0.07px] uppercase leading-[1.125]">
                  ID
                </p>
                <svg className="size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p4c95ef0} fill="#888D95" />
                </svg>
              </div>

              {/* CÓDIGO */}
              <div className="flex flex-1 gap-[4px] items-center min-w-0">
                <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[14px] tracking-[0.07px] uppercase leading-[1.125]">
                  CÓDIGO
                </p>
                <svg className="size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p4c95ef0} fill="#888D95" />
                </svg>
              </div>

              {/* TÍTULO */}
              <div className="flex flex-1 gap-[4px] items-center min-w-0">
                <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[14px] tracking-[0.07px] uppercase leading-[1.125]">
                  TÍTULO
                </p>
                <svg className="size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p4c95ef0} fill="#888D95" />
                </svg>
              </div>

              {/* TEMA */}
              <div className="flex flex-1 gap-[4px] items-center min-w-0">
                <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[14px] tracking-[0.07px] uppercase leading-[1.125]">
                  TEMA
                </p>
                <svg className="size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p4c95ef0} fill="#888D95" />
                </svg>
              </div>

              {/* STATUS */}
              <div className="flex flex-1 gap-[4px] items-center min-w-0">
                <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[14px] tracking-[0.07px] uppercase leading-[1.125]">
                  STATUS
                </p>
                <svg className="size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p4c95ef0} fill="#888D95" />
                </svg>
              </div>

              {/* NavButton Spacer */}
              <div className="size-[24px]" />
            </div>
          </div>

          {/* Linhas da tabela */}
          {jornadasPaginadas.map((jornada, index) => (
            <div
              key={index}
              className="bg-[#fefefe] relative w-full shadow-[inset_0px_-1px_0px_0px_#e0e0e0] hover:bg-[#f9fafb] transition-colors cursor-pointer group"
              onClick={() => handleVerDetalhes(jornada)}
            >
              <div className="flex gap-[32px] items-center px-[16px] py-[20px]">
                {/* INCLUSÃO */}
                <div className="flex flex-1 items-center min-w-0">
                  <p className="flex-1 font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[14px] tracking-[0.196px] leading-[1.125]">
                    {jornada.inclusao}
                  </p>
                </div>

                {/* JORNADA */}
                <div className="flex flex-1 items-center min-w-0">
                  <p className="flex-1 font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[14px] tracking-[0.196px] leading-[1.125]">
                    {jornada.tipo}
                  </p>
                </div>

                {/* DATA */}
                <div className="flex flex-1 items-center min-w-0">
                  <p className="flex-1 font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[14px] tracking-[0.196px] leading-[1.125]">
                    {jornada.data}
                  </p>
                </div>

                {/* ID (FORM0001) */}
                <div className="flex flex-1 items-center min-w-0">
                  <p className="flex-1 font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[14px] tracking-[0.196px] leading-[1.125]">
                    {jornada.formId}
                  </p>
                </div>

                {/* CÓDIGO */}
                <div className="flex flex-1 items-center min-w-0">
                  <p className="flex-1 font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[14px] tracking-[0.196px] leading-[1.125]">
                    {jornada.codigoCatalogo}
                  </p>
                </div>

                {/* TÍTULO */}
                <div className="flex flex-1 items-center min-w-0">
                  <p className="flex-1 font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[14px] tracking-[0.196px] leading-[1.125]">
                    {jornada.titulo}
                  </p>
                </div>

                {/* TEMA */}
                <div className="flex flex-1 items-center min-w-0">
                  <p className="flex-1 font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[14px] tracking-[0.196px] leading-[1.125]">
                    {jornada.tema}
                  </p>
                </div>

                {/* STATUS */}
                <div className="flex flex-1 items-center relative min-w-0">
                  <div className="bg-[#f0f2f4] flex gap-[2px] h-[24px] items-center justify-center px-[8px] pl-[4px] py-[4px] rounded-full border border-[#d4d8dd]">
                    <svg className="size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" fill={getStatusColors(jornada.status).bullet} r="2.66667" />
                    </svg>
                    <span
                      className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[14px] tracking-[0.07px] leading-[1.125] whitespace-nowrap"
                      style={{ color: getStatusColors(jornada.status).text }}
                    >
                      {getStatusJornadaDisplayMasculino(jornada.status)}
                    </span>
                  </div>
                </div>

                {/* Botão de navegação (seta) */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVerDetalhes(jornada);
                  }}
                  className="flex items-center justify-center size-[24px] hover:opacity-60 transition-opacity"
                >
                  <svg className="size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p2d1c2300} fill="#888D95" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Paginação */}
        <Paginator
          currentPage={currentPage}
          totalPages={totalPaginas}
          totalItems={jornadasFiltradas.length}
          itemsPerPage={itemsPorPagina}
          startIndex={indexInicio}
          endIndex={indexFim}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
}