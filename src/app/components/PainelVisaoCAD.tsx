import { useRef, useState } from 'react';
import svgPaths from '@/imports/svg-3dkfh9akxg';
import svgPathsPaginator from '@/imports/svg-yxb1sqbp9k';
import svgPathsRadio from '@/imports/svg-st0q96v9y6';
import type { JornadaCadastrada } from '@/app/App';
import { FiltroPeriodoHierarquico } from '@/app/components/FiltroPeriodoHierarquico';
import { SelectField } from '@/app/components/SelectField';
import { ModalPersonalizarFiltros } from '@/app/components/ModalPersonalizarFiltros';
import Edit from '@/imports/Edit-83-14391';

interface PainelVisaoCADProps {
  onIncluirAlterar?: () => void;
  onVerDetalhes?: (jornada: any) => void;
  jornadas: JornadaCadastrada[];
  dataUltimaAtualizacao?: string;
  onEditarJornada?: (jornada: JornadaCadastrada) => void;
}

export function PainelVisaoCAD({ onIncluirAlterar, onVerDetalhes, jornadas, dataUltimaAtualizacao = '03/02/2026 14:30', onEditarJornada }: PainelVisaoCADProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [tipoJornada, setTipoJornada] = useState('');
  const [temaFiltro, setTemaFiltro] = useState('');
  const [statusFiltro, setStatusFiltro] = useState('');
  const [dataInicio, setDataInicio] = useState(''); // Vazio por padrão
  const [dataTermino, setDataTermino] = useState(''); // Vazio por padrão
  const [tipoFiltro, setTipoFiltro] = useState<'data' | 'periodo' | ''>('data'); // Iniciar com 'data' selecionado
  const [periodoAno, setPeriodoAno] = useState('');
  const [periodoTrimestre, setPeriodoTrimestre] = useState('');
  const [periodoMes, setPeriodoMes] = useState('');
  const [filtroCardAtivo, setFiltroCardAtivo] = useState<string>('');
  const [isMaisFiltrosOpen, setIsMaisFiltrosOpen] = useState(false);
  const [diretoriaFiltro, setDiretoriaFiltro] = useState('');
  const [canalFiltro, setCanalFiltro] = useState('');
  const [colunasVisiveis, setColunasVisiveis] = useState<string[]>(['TIPO', 'TEMA', 'STATUS', 'DIRETORIA', 'CANAL']);
  const [maisFiltrosExpandido, setMaisFiltrosExpandido] = useState(false); // Controla expansão dos filtros extras
  const [abaAtiva, setAbaAtiva] = useState<'todas' | 'minhas'>('todas'); // Estado para controlar a aba ativa
  const dataInicioRef = useRef<HTMLInputElement>(null);
  const dataTerminoRef = useRef<HTMLInputElement>(null);

  const formatDateMask = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 8);
    if (digits.length <= 2) return digits;
    if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
  };

  const isoToDisplayDate = (iso: string) => {
    if (!iso || !iso.includes('-')) return '';
    const [year, month, day] = iso.split('-');
    if (!year || !month || !day) return '';
    return `${day}/${month}/${year}`;
  };

  const displayToIsoDate = (display: string) => {
    const match = display.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (!match) return '';
    const [, day, month, year] = match;
    return `${year}-${month}-${day}`;
  };

  // Garantir que STATUS sempre seja renderizado por último
  const colunasOrdenadas = [...colunasVisiveis].sort((a, b) => {
    if (a === 'STATUS') return 1;
    if (b === 'STATUS') return -1;
    return 0;
  });

  // Mapear status para cores e texto de exibição
  const getStatusColors = (status: string) => {
    switch (status) {
      case 'Nova':
        return { bullet: '#4668FF', text: '#4668ff', display: 'Enviada' };
      case 'Em análise':
        return { bullet: '#FF6F20', text: '#ff6f20', display: 'Em análise' };
      case 'Correção':
        return { bullet: '#FFB31A', text: '#ad5f00', display: 'Devolvida' };
      case 'Aprovada':
        return { bullet: '#0C8A00', text: '#0c8a00', display: 'Aprovada' };
      case 'Implementada':
        return { bullet: '#5A059C', text: '#5a059c', display: 'Implementada' };
      case 'Excluída':
        return { bullet: '#E3111F', text: '#e3111f', display: 'Excluída' };
      default:
        return { bullet: '#4668FF', text: '#4668ff', display: status };
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
  const contadores = { 'Ativo': 0, 'Transação': 0, 'Indução': 0, 'Informacional': 0 };
  const jornadasTabela = jornadas
    // Primeiro filtrar por aba ativa (Todas ou Minhas Entregas)
    .filter(j => {
      if (abaAtiva === 'minhas') {
        // Mostrar apenas jornadas do usuário atual
        return j.cadastradoPor === 'usuario.atual@bb.com.br';
      }
      // Aba "todas" mostra todas as jornadas
      return true;
    })
    .map((j, index) => {
      contadores[j.tipoHU as keyof typeof contadores]++;
      const numero = String(contadores[j.tipoHU as keyof typeof contadores]).padStart(4, '0');
      const numeroForm = String(index + 1).padStart(4, '0');
    
    // Determinar Status NIA baseado na jornada
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
      idFormulario: `FORM${numeroForm}`,
      codigoCatalogo: j.rme?.trim() ? j.rme : `${getPrefixoId(j.tipoHU)}${numero}`,
      hu: j.numeroHistoria,
      titulo: j.tituloFluxo,
      tipo: j.tipoHU,
      tema: j.tema,
      data: j.dataAbertura,
      dataInclusao: j.dataAbertura || '01/02/2026',
      status: j.status,
      statusNIA: statusNIA,
      statusColor: getStatusColors(j.status),
      rme: j.rme,
      diretoria: diretorias[indexDiretoria],
      canal: canais[indexCanal],
      jornadaOriginal: j
    };
  });

  // Aplicar filtros
  const jornadasFiltradas = jornadasTabela.filter(jornada => {
    const searchLower = searchTerm.toLowerCase();
    const matchSearch = !searchTerm || 
      jornada.idFormulario.toLowerCase().includes(searchLower) ||
      jornada.hu.toLowerCase().includes(searchLower) ||
      jornada.titulo.toLowerCase().includes(searchLower);

    const tipoFiltroAtivo = filtroCardAtivo || tipoJornada;
    const matchTipo = !tipoFiltroAtivo || jornada.tipo === tipoFiltroAtivo;
    const matchTema = !temaFiltro || jornada.tema === temaFiltro;
    const statusInterno = statusFiltro === 'Enviada' ? 'Nova' : statusFiltro;
    const matchStatus = !statusFiltro || jornada.status === statusInterno;
    const matchDiretoria = !diretoriaFiltro || jornada.diretoria === diretoriaFiltro;
    const matchCanal = !canalFiltro || jornada.canal === canalFiltro;

    return matchSearch && matchTipo && matchTema && matchStatus && matchDiretoria && matchCanal;
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

  // Calcular estatísticas reais baseadas nas jornadas da tabela
  const totalDashboard = jornadasTabela.length;
  const jornadasNovas = jornadasTabela.filter(j => j.tipoInclusao === 'Nova Jornada').length;
  const jornadasAlteradas = jornadasTabela.filter(j => j.tipoInclusao === 'Alteração').length;
  
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

  // Função auxiliar para renderizar colunas dinamicamente
  const renderColunaHeader = (nomeColuna: string) => {
    const labelMap: Record<string, string> = {
      'TIPO': 'TIPO',
      'TEMA': 'TEMA',
      'STATUS': 'STATUS',
      'DIRETORIA': 'DIRETORIA',
      'CANAL': 'CANAL'
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
      'TEMA': jornada.tema,
      'STATUS': jornada.statusColor.display,
      'DIRETORIA': jornada.diretoria || '-',
      'CANAL': jornada.canal || '-'
    };

    const valor = valorMap[nomeColuna] || '-';

    // Para STATUS, renderizar com badge e ícone de edição
    if (nomeColuna === 'STATUS') {
      return (
        <div key={nomeColuna} className="flex flex-1 items-center relative min-w-0">
          <div className="bg-[#f0f2f4] flex gap-[2px] h-[24px] items-center justify-center px-[8px] pl-[4px] py-[4px] rounded-full border border-[#d4d8dd]">
            <svg className="size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <circle cx="8" cy="8" fill={jornada.statusColor.bullet} r="2.66667" />
            </svg>
            <span
              className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[14px] tracking-[0.07px] leading-[1.125] whitespace-nowrap"
              style={{ color: jornada.statusColor.text }}
            >
              {valor}
            </span>
          </div>
          
          {/* Ícone de lápis para status "Enviada" ou "Correção" */}
          {(jornada.status === 'Nova' || jornada.status === 'Correção') && onEditarJornada && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                const jornadaCompleta = jornadas.find(j => j.rme === jornada.rme);
                if (jornadaCompleta) {
                  onEditarJornada(jornadaCompleta);
                }
              }}
              className="flex items-center justify-center size-[24px] shrink-0 rounded-[4px] hover:bg-[rgba(0,0,0,0.05)] transition-colors cursor-pointer ml-[8px]"
              title="Editar jornada"
            >
              <div className="size-[24px]">
                <Edit />
              </div>
            </button>
          )}
        </div>
      );
    }

    return (
      <div key={nomeColuna} className="flex flex-1 items-center py-[4px] min-w-0">
        <p className="flex-1 font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[14px] tracking-[0.196px] leading-[1.125]">
          {valor}
        </p>
      </div>
    );
  };

  const handleVerDetalhes = (jornada: any) => {
    if (onVerDetalhes) {
      onVerDetalhes(jornada);
    }
  };

  const handleAplicarMaisFiltros = (filtros: { diretoria: string; canal: string }) => {
    setDiretoriaFiltro(filtros.diretoria);
    setCanalFiltro(filtros.canal);
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
        
        {/* Botão Incluir/Alterar */}
        {onIncluirAlterar && (
          <button
            onClick={onIncluirAlterar}
            className="bg-[#fcfc30] hover:bg-[#e8e82b] transition-colors rounded-[4px] px-[16px] py-[12px] cursor-pointer"
          >
            <span className="font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-[#465eff] text-[14px] tracking-[0.07px] uppercase leading-[1.125]">
              INCLUIR/ALTERAR
            </span>
          </button>
        )}
      </div>

      {/* Cards de estatísticas */}
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
              {jornadasAtivo}
            </p>
            <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px] mb-[4px]">
              {percAtivo}% do total
            </p>
            <div className="bg-[#f3e8ff] h-[8px] rounded-[33554400px] w-full">
              <div className="bg-[#9333ea] h-[8px] rounded-[33554400px]" style={{ width: `${percAtivo}%` }} />
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
              {jornadasTransacao}
            </p>
            <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px] mb-[4px]">
              {percTransacao}% do total
            </p>
            <div className="bg-[#d1fae5] h-[8px] rounded-[33554400px] w-full">
              <div className="bg-[#059669] h-[8px] rounded-[33554400px]" style={{ width: `${percTransacao}%` }} />
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
              {jornadasInducao}
            </p>
            <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px] mb-[4px]">
              {percInducao}% do total
            </p>
            <div className="bg-[#ffedd5] h-[8px] rounded-[33554400px] w-full">
              <div className="bg-[#ea580c] h-[8px] rounded-[33554400px]" style={{ width: `${percInducao}%` }} />
            </div>
          </div>
        </div>

        {/* Card Informacional */}
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
              {jornadasInformacional}
            </p>
            <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px] mb-[4px]">
              {percInformacional}% do total
            </p>
            <div className="bg-[#e0f2fe] h-[8px] rounded-[33554400px] w-full">
              <div className="bg-[#0284c7] h-[8px] rounded-[33554400px]" style={{ width: `${percInformacional}%` }} />
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
                          value={dataInicio}
                          onChange={(e) => setDataInicio(formatDateMask(e.target.value))}
                          placeholder="dd / mm / aaaa"
                          inputMode="numeric"
                          className="flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px] bg-transparent border-none outline-none w-full"
                        />
                        <input
                          ref={dataInicioRef}
                          type="date"
                          value={displayToIsoDate(dataInicio)}
                          onChange={(e) => setDataInicio(isoToDisplayDate(e.target.value))}
                          className="sr-only"
                          tabIndex={-1}
                          aria-hidden="true"
                        />
                      </div>
                      <button
                        type="button"
                        className="relative shrink-0 size-[24px] cursor-pointer"
                        onClick={() => {
                          if (dataInicioRef.current) {
                            if (typeof dataInicioRef.current.showPicker === 'function') {
                              dataInicioRef.current.showPicker();
                            } else {
                              dataInicioRef.current.focus();
                            }
                          }
                        }}
                      >
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path d={svgPaths.p3079f800} fill="#888D95" />
                        </svg>
                      </button>
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
                          value={dataTermino}
                          onChange={(e) => setDataTermino(formatDateMask(e.target.value))}
                          placeholder="dd / mm / aaaa"
                          inputMode="numeric"
                          className="flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#686c73] text-[16px] tracking-[0.08px] bg-transparent border-none outline-none w-full"
                        />
                        <input
                          ref={dataTerminoRef}
                          type="date"
                          value={displayToIsoDate(dataTermino)}
                          onChange={(e) => setDataTermino(isoToDisplayDate(e.target.value))}
                          className="sr-only"
                          tabIndex={-1}
                          aria-hidden="true"
                        />
                      </div>
                      <button
                        type="button"
                        className="relative shrink-0 size-[24px] cursor-pointer"
                        onClick={() => {
                          if (dataTerminoRef.current) {
                            if (typeof dataTerminoRef.current.showPicker === 'function') {
                              dataTerminoRef.current.showPicker();
                            } else {
                              dataTerminoRef.current.focus();
                            }
                          }
                        }}
                      >
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <path d={svgPaths.p3079f800} fill="#888D95" />
                        </svg>
                      </button>
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

      {/* Barra de filtros */}
      <div className="flex gap-[8px] items-end mb-[16px]">
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
                      placeholder="Buscar por ID, Código ou Título"
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
              label="Status"
              value={statusFiltro}
              onChange={setStatusFiltro}
              options={[
                { value: 'Enviada', label: 'Enviada' },
                { value: 'Em análise', label: 'Em análise' },
                { value: 'Correção', label: 'Devolvida' },
                { value: 'Aprovada', label: 'Aprovada' },
                { value: 'Implementada', label: 'Implementada' },
                { value: 'Excluída', label: 'Excluída' }
              ]}
              placeholder="Filtro"
            />
          </div>
        )}

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

      {/* Filtros Extras (Diretoria e Canal) - Expandem quando "Mais Filtros" é clicado */}
      {maisFiltrosExpandido && (
        <div className="flex gap-[8px] items-end mb-[16px]">
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
      )}

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
              setFiltroCardAtivo('');
              setPeriodoAno('');
              setPeriodoTrimestre('');
              setPeriodoMes('');
              setDiretoriaFiltro('');
              setCanalFiltro('');
              setCurrentPage(1);
            }}
            className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#2d37f5] text-[14px] tracking-[0.07px] leading-[1.125] cursor-pointer hover:opacity-70 transition-opacity"
          >
            Limpar tudo
          </button>
        </div>
      )}

      {/* Tabs: Todas as Entregas / Minhas Entregas */}
      <div className="bg-[#fefefe] content-stretch flex items-center relative w-full h-[48px] mb-[16px]">
        {/* Tab: Todas as Entregas */}
        <button
          onClick={() => setAbaAtiva('todas')}
          className="bg-[#fefefe] content-stretch flex flex-1 h-[48px] items-center justify-center min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] cursor-pointer hover:opacity-80 transition-opacity"
        >
          {abaAtiva === 'todas' && (
            <div className="absolute bottom-px h-0 left-0 right-0">
              <div className="absolute inset-[-1px_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 451 2">
                  <path d="M0 1H451" stroke="#2D37F5" strokeWidth="2" />
                </svg>
              </div>
            </div>
          )}
          {abaAtiva === 'minhas' && (
            <div className="absolute h-0 left-0 right-0 top-[48px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 451 1">
                  <line stroke="#B4B9C1" x2="451" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          )}
          <div className="relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center px-[32px] relative">
              <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0">
                <div className={`flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center tracking-[0.07px] uppercase whitespace-nowrap ${abaAtiva === 'todas' ? 'text-[#2d37f5]' : 'text-[#111214]'}`}>
                  <p className="leading-[1.125]">TODAS AS ENTREGAS</p>
                </div>
              </div>
            </div>
          </div>
        </button>

        {/* Tab: Minhas Entregas */}
        <button
          onClick={() => setAbaAtiva('minhas')}
          className="bg-[#fefefe] content-stretch flex flex-1 h-[48px] items-center justify-center min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] cursor-pointer hover:opacity-80 transition-opacity"
        >
          {abaAtiva === 'minhas' && (
            <div className="absolute bottom-px h-0 left-0 right-0">
              <div className="absolute inset-[-1px_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 451 2">
                  <path d="M0 1H451" stroke="#2D37F5" strokeWidth="2" />
                </svg>
              </div>
            </div>
          )}
          {abaAtiva === 'todas' && (
            <div className="absolute h-0 left-0 right-0 top-[48px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 451 1">
                  <line stroke="#B4B9C1" x2="451" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          )}
          <div className="h-[32px] relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-start justify-center px-[32px] relative">
              <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0">
                <div className={`flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center tracking-[0.07px] uppercase whitespace-nowrap ${abaAtiva === 'minhas' ? 'text-[#2d37f5]' : 'text-[#111214]'}`}>
                  <p className="leading-[1.125]">MINHAS ENTREGAS</p>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Tabela */}
      <div className="w-full">
        {/* Header da tabela */}
        <div className="bg-[#f0f2f4] relative w-full shadow-[inset_0px_-1px_0px_0px_#e0e0e0]">
          <div className="flex gap-[32px] items-center px-[16px] py-[20px]">
            {/* Data de Inclusão - Coluna fixa */}
            <div className="flex flex-1 gap-0 items-center min-w-0">
              <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[14px] tracking-[0.07px] uppercase leading-[1.125]">
                DATA DE INCLUSÃO
              </p>
              <svg className="size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p4c95ef0} fill="#888D95" />
              </svg>
            </div>

            {/* ID (Código do Formulário) - Coluna fixa */}
            <div className="flex flex-1 gap-[4px] items-center min-w-0">
              <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[14px] tracking-[0.07px] uppercase leading-[1.125]">
                ID
              </p>
              <svg className="size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p4c95ef0} fill="#888D95" />
              </svg>
            </div>

            {/* Código do Catálogo - Coluna fixa */}
            <div className="flex flex-1 gap-[4px] items-center min-w-0">
              <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[14px] tracking-[0.07px] uppercase leading-[1.125]">
                CÓDIGO
              </p>
              <svg className="size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p4c95ef0} fill="#888D95" />
              </svg>
            </div>

            {/* Tipo - Coluna fixa */}
            <div className="flex flex-1 gap-[4px] items-center min-w-0">
              <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[14px] tracking-[0.07px] uppercase leading-[1.125]">
                TIPO
              </p>
              <svg className="size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p4c95ef0} fill="#888D95" />
              </svg>
            </div>

            {/* Título - Coluna fixa */}
            <div className="flex flex-1 gap-[4px] items-center min-w-0">
              <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[14px] tracking-[0.07px] uppercase leading-[1.125]">
                TÍTULO
              </p>
              <svg className="size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p4c95ef0} fill="#888D95" />
              </svg>
            </div>

            {/* Tema - Coluna fixa */}
            <div className="flex flex-1 gap-[4px] items-center min-w-0">
              <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[14px] tracking-[0.07px] uppercase leading-[1.125]">
                TEMA
              </p>
              <svg className="size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p4c95ef0} fill="#888D95" />
              </svg>
            </div>

            {/* Canal - Coluna fixa */}
            <div className="flex flex-1 gap-[4px] items-center min-w-0">
              <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[14px] tracking-[0.07px] uppercase leading-[1.125]">
                CANAL
              </p>
              <svg className="size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p4c95ef0} fill="#888D95" />
              </svg>
            </div>

            {/* Status - Coluna fixa */}
            <div className="flex flex-1 gap-[4px] items-center min-w-0">
              <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#111214] text-[14px] tracking-[0.07px] uppercase leading-[1.125]">
                STATUS
              </p>
              <svg className="size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p4c95ef0} fill="#888D95" />
              </svg>
            </div>
            
            {/* Espaço para o botão de navegação */}
            <div className="size-[24px] shrink-0" />
          </div>
        </div>

        {/* Linhas da tabela */}
        {jornadasPaginadas.map((jornada, index) => (
          <div
            key={index}
            className="bg-[#fefefe] relative w-full shadow-[inset_0px_-1px_0px_0px_#e0e0e0] hover:bg-[#f9fafb] transition-colors cursor-pointer group"
            onClick={() => handleVerDetalhes(jornada)}
          >
            <div className="flex gap-[48px] items-center px-[16px] py-[20px]">
              {/* Data de Inclusão - Coluna fixa */}
              <div className="flex flex-1 items-center min-w-0">
                <p className="flex-1 font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[14px] tracking-[0.196px] leading-[1.125]">
                  {jornada.dataInclusao}
                </p>
              </div>

              {/* ID (Código do Formulário) - Coluna fixa */}
              <div className="flex flex-1 items-center min-w-0">
                <p className="flex-1 font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[14px] tracking-[0.196px] leading-[1.125]">
                  {jornada.idFormulario}
                </p>
              </div>

              {/* Código do Catálogo - Coluna fixa */}
              <div className="flex flex-1 items-center min-w-0">
                <p className="flex-1 font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[14px] tracking-[0.196px] leading-[1.125]">
                  {jornada.codigoCatalogo}
                </p>
              </div>

              {/* Tipo - Coluna fixa */}
              <div className="flex flex-1 items-center min-w-0">
                <p className="flex-1 font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[14px] tracking-[0.196px] leading-[1.125]">
                  {jornada.tipo}
                </p>
              </div>

              {/* Título - Coluna fixa */}
              <div className="flex flex-1 items-center min-w-0">
                <p className="flex-1 font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[14px] tracking-[0.196px] leading-[1.125]">
                  {jornada.titulo}
                </p>
              </div>

              {/* Tema - Coluna fixa */}
              <div className="flex flex-1 items-center min-w-0">
                <p className="flex-1 font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[14px] tracking-[0.196px] leading-[1.125]">
                  {jornada.tema}
                </p>
              </div>

              {/* Canal - Coluna fixa */}
              <div className="flex flex-1 items-center min-w-0">
                <p className="flex-1 font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[14px] tracking-[0.196px] leading-[1.125]">
                  {jornada.canal}
                </p>
              </div>

              {/* Status com ícone de edição para Correção e Em análise */}
              <div className="flex flex-1 items-center relative min-w-0">
                <div className="bg-[#f0f2f4] flex gap-[2px] h-[24px] items-center justify-center px-[8px] pl-[4px] py-[4px] rounded-full border border-[#d4d8dd]">
                  <svg className="size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" fill={jornada.statusColor.bullet} r="2.66667" />
                  </svg>
                  <span
                    className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[14px] tracking-[0.07px] leading-[1.125] whitespace-nowrap"
                    style={{ color: jornada.statusColor.text }}
                  >
                    {jornada.statusColor.display}
                  </span>
                </div>
                
                {/* Ícone de lápis para status "Correção" ou "Em análise" */}
                {(jornada.status === 'Correção' || jornada.status === 'Em análise') && onEditarJornada && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const jornadaCompleta = jornadas.find(j => j.rme === jornada.rme);
                      if (jornadaCompleta) {
                        onEditarJornada(jornadaCompleta);
                      }
                    }}
                    className="flex items-center justify-center size-[24px] shrink-0 rounded-[4px] hover:bg-[rgba(0,0,0,0.05)] transition-colors cursor-pointer ml-[8px]"
                    title="Editar jornada"
                  >
                    <div className="size-[24px]">
                      <Edit />
                    </div>
                  </button>
                )}
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
      <div className="content-stretch flex items-center justify-between px-[8px] mt-[24px]">
        <div className="content-stretch flex flex-col items-start justify-center py-[3px] relative shrink-0">
          <div className="flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d37f5] text-[16px] tracking-[0.08px] w-full">
            <p className="css-4hzbpn leading-[1.125]">Mostrar tudo</p>
          </div>
        </div>

        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <p className="css-ew64yg font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#686c73] text-[12px] text-right tracking-[0.168px]">
            Mostrando {jornadasFiltradas.length > 0 ? indexInicio + 1 : 0}-{Math.min(indexFim, jornadasFiltradas.length)} de {jornadasFiltradas.length} itens
          </p>
          
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
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

      {/* Modal Mais Filtros */}
      <ModalPersonalizarFiltros
        isOpen={isMaisFiltrosOpen}
        onClose={() => setIsMaisFiltrosOpen(false)}
        onAplicar={(colunas) => {
          setColunasVisiveis(colunas);
        }}
        colunasIniciais={colunasVisiveis}
      />
    </div>
  );
}