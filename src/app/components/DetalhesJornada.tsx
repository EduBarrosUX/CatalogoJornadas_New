import { JornadaCadastrada } from '@/app/App';
import svgPaths from '@/imports/svg-r15mp4gs3v';
import Figma from '@/imports/Figma';
import Edit from '@/imports/Edit-83-14391';
import { ComentarioGovernanca } from '@/app/components/ComentarioGovernanca';

interface DetalhesJornadaProps {
  jornada: JornadaCadastrada;
  onVoltar: () => void;
  onEditar?: () => void;
  isPainelGovernanca?: boolean;
}

export function DetalhesJornada({ jornada, onVoltar, onEditar, isPainelGovernanca = false }: DetalhesJornadaProps) {
  // Mapear status para cores e texto
  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'Nova':
        return { bullet: '#4668FF', text: '#4668ff', display: 'Enviada' };
      case 'Em análise':
        return { bullet: '#FF6F20', text: '#ff6f20', display: 'Em análise' };
      case 'Correção':
        // No Painel Governança mostra "Devolvida", no Painel CAD mostra "Devolvida"
        return { bullet: '#FFB31A', text: '#ad5f00', display: isPainelGovernanca ? 'Devolvida' : 'Devolvida' };
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

  // Mapear status para descrição
  const getStatusDescription = (status: string) => {
    switch (status) {
      case 'Nova':
        return 'Solicitação enviada aguardando análise da governança';
      case 'Em análise':
        return 'Solicitação sendo analisada pela equipe de governança';
      case 'Correção':
        return 'Solicitação devolvida e precisa de correções antes de prosseguir';
      case 'Aprovada':
        return 'Solicitação aprovada com sucesso!';
      case 'Implementada':
        return 'Jornada implementada e ativa no catálogo';
      case 'Excluída':
        return 'Solicitação foi excluída';
      default:
        return '';
    }
  };

  const statusInfo = getStatusInfo(jornada.status);

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="content-stretch flex h-[20px] items-center relative shrink-0 w-full mb-8">
        <div className="relative shrink-0">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
            {/* Arrow Left */}
            <button
              onClick={onVoltar}
              className="content-stretch flex items-center py-[10px] relative shrink-0 w-[28px] hover:opacity-70 transition-opacity"
            >
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p10a4c80} fill="#2D37F5" />
                </svg>
              </div>
            </button>
            {/* Breadcrumb */}
            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
              {/* Item Voltar */}
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d37f5] text-[14px] tracking-[0.07px]">
                  <p className="css-ew64yg leading-[1.125]">Voltar</p>
                </div>
              </div>
              {/* Breadcrumb Item - / RME */}
              <div className="content-stretch flex font-['BancoDoBrasil_Textos:Medium',sans-serif] gap-[8px] items-center leading-[0] not-italic relative shrink-0 text-[#6c7077] text-[14px] tracking-[0.07px]">
                <div className="css-g0mm18 flex flex-col justify-center relative shrink-0">
                  <p className="css-ew64yg leading-[1.125]">/</p>
                </div>
                <div className="css-g0mm18 flex flex-col justify-center relative shrink-0">
                  <p className="css-ew64yg leading-[1.125]">{jornada.rme}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Título e Descrição */}
      <div className="flex flex-col gap-[16px] mb-[32px]">
        <h1 className="font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-[#111214] text-[22px] leading-[1.25]">
          {jornada.tituloFluxo}
        </h1>
        <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#686c73] text-[16px] tracking-[0.08px] leading-[1.125]">
          {jornada.descricaoFluxo}
        </p>

        {/* Status Badge com mensagem */}
        <div className="flex gap-[8px] items-center">
          <div
            className="bg-[#f0f2f4] flex gap-[2px] h-[24px] items-center justify-center pl-[4px] pr-[8px] py-[4px] rounded-[999px] border border-[#d4d8dd]"
          >
            <svg className="size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <circle cx="8" cy="8" fill={statusInfo.bullet} r="2.66667" />
            </svg>
            <span
              className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[14px] tracking-[0.07px] leading-[1.125]"
              style={{ color: statusInfo.text }}
            >
              {statusInfo.display}
            </span>
          </div>
          
          <p
            className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[12px] tracking-[0.168px] leading-[1.125]"
            style={{ color: statusInfo.text }}
          >
            {getStatusDescription(jornada.status)}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[37px] mb-[24px]">
        <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1241 37">
          <line stroke="#E5E7EB" x2="1241" y1="2.5" y2="2.5" />
        </svg>
      </div>

      {/* Comentário da Governança - mostrar apenas quando status é "Correção" */}
      {jornada.status === 'Correção' && jornada.comentarioGovernanca && (
        <ComentarioGovernanca comentario={jornada.comentarioGovernanca} />
      )}

      {/* Seção Dados da Jornada - Collapsible */}
      <div className="mb-[24px]">
        <div className="bg-[#ebf2ff] rounded-tl-[4px] rounded-tr-[4px] h-[40px] w-full flex items-center justify-between px-[16px]">
          <div className="flex items-center gap-[12px]">
            <span className="font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-[#2d37f5] text-[16px] leading-[24px]">
              Dados da Jornada
            </span>
            
            {/* Ícone de lápis para status "Nova" ou "Correção" */}
            {(jornada.status === 'Nova' || jornada.status === 'Correção') && onEditar && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onEditar();
                }}
                className="flex items-center justify-center size-[24px] shrink-0 rounded-[4px] hover:bg-[rgba(255,255,255,0.3)] transition-colors cursor-pointer"
                title="Editar jornada"
              >
                <div className="size-[24px]">
                  <Edit />
                </div>
              </button>
            )}
          </div>
          
          <svg className="size-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p3053c630} fill="#2D37F5" />
          </svg>
        </div>

        {/* Grid de dados em 2 colunas */}
        <div className="bg-white border border-[#ebf2ff] rounded-bl-[4px] rounded-br-[4px] p-[32px]">
          {/* Seção 1: Informações Básicas */}
          <div className="mb-[32px]">
            <div className="mb-[24px] pb-[16px] border-b border-[#e5e7eb]">
              <h3 className="font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-[#111214] text-[18px] leading-[24px]">
                1. Informações Básicas
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[32px]">
              {/* Número da História */}
              <div className="flex flex-col gap-[12px]">
                <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#111214] text-[14px] leading-[18px] uppercase tracking-[0.5px]">
                  Número da História
                </p>
                <a
                  href={`#${jornada.numeroHistoria}`}
                  className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#2d37f5] text-[16px] leading-[24px] hover:text-[#1e28d5] hover:underline transition-colors cursor-pointer"
                >
                  {jornada.numeroHistoria}
                </a>
              </div>

              {/* Tipo de Inclusão */}
              <div className="flex flex-col gap-[12px]">
                <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#111214] text-[14px] leading-[18px] uppercase tracking-[0.5px]">
                  Tipo de Inclusão
                </p>
                <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px]">
                  {jornada.tipoInclusao || '—'}
                </p>
              </div>

              {/* Data de Implementação */}
              <div className="flex flex-col gap-[12px]">
                <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#111214] text-[14px] leading-[18px] uppercase tracking-[0.5px]">
                  Data de Implementação
                </p>
                <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px]">
                  {jornada.dataImplementacao || '—'}
                </p>
              </div>

              {/* Utiliza IA Generativa */}
              <div className="flex flex-col gap-[12px]">
                <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#111214] text-[14px] leading-[18px] uppercase tracking-[0.5px]">
                  Utiliza IA Generativa
                </p>
                <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px]">
                  {jornada.utilizaIAGenerativa ? 'Sim' : 'Não'}
                </p>
              </div>

              {/* Cadastrado por */}
              <div className="flex flex-col gap-[12px]">
                <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#111214] text-[14px] leading-[18px] uppercase tracking-[0.5px]">
                  Demandante
                </p>
                <div className="flex flex-col gap-[4px]">
                  <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px]">
                    {jornada.cadastradoPor || '—'}
                  </p>
                  {jornada.chaveUsuario && (
                    <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#9ca3af] text-[14px] leading-[20px]">
                      {jornada.chaveUsuario}
                    </p>
                  )}
                </div>
              </div>

              {/* Diretoria */}
              <div className="flex flex-col gap-[12px]">
                <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#111214] text-[14px] leading-[18px] uppercase tracking-[0.5px]">
                  Diretoria
                </p>
                <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px]">
                  {jornada.diretoria}
                </p>
              </div>

              {/* Tipo HU */}
              <div className="flex flex-col gap-[12px]">
                <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#111214] text-[14px] leading-[18px] uppercase tracking-[0.5px]">
                  Tipo HU
                </p>
                <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px]">
                  {jornada.tipoHU}
                </p>
              </div>
            </div>
          </div>

          {/* Seção 2: Sistema e Periodicidade */}
          <div className="mb-[32px]">
            <div className="mb-[24px] pb-[16px] border-b border-[#e5e7eb]">
              <h3 className="font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-[#111214] text-[18px] leading-[24px]">
                2. Sistema e Periodicidade
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[32px]">
              {/* RME */}
              <div className="flex flex-col gap-[12px]">
                <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#111214] text-[14px] leading-[18px] uppercase tracking-[0.5px]">
                  RME
                </p>
                <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px]">
                  {jornada.rme}
                </p>
              </div>

              {/* Sistema Responsável */}
              <div className="flex flex-col gap-[12px]">
                <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#111214] text-[14px] leading-[18px] uppercase tracking-[0.5px]">
                  Sistema Responsável
                </p>
                <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px]">
                  {jornada.sistemaResponsavel}
                </p>
              </div>

              {/* Periodicidade */}
              <div className="flex flex-col gap-[12px]">
                <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#111214] text-[14px] leading-[18px] uppercase tracking-[0.5px]">
                  Periodicidade
                </p>
                <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px]">
                  {jornada.periodicidade}
                </p>
              </div>

              {/* Template Meta */}
              <div className="flex flex-col gap-[12px]">
                <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#111214] text-[14px] leading-[18px] uppercase tracking-[0.5px]">
                  Template Meta
                </p>
                <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px]">
                  {jornada.templateMeta}
                </p>
              </div>
            </div>
          </div>

          {/* Seção 3: Categoria e Tema */}
          <div className="mb-[32px]">
            <div className="mb-[24px] pb-[16px] border-b border-[#e5e7eb]">
              <h3 className="font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-[#111214] text-[18px] leading-[24px]">
                3. Categoria e Tema
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[32px]">
              {/* Categoria do Ativo */}
              {jornada.categoriaAtivo && (
                <div className="flex flex-col gap-[12px]">
                  <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#111214] text-[14px] leading-[18px] uppercase tracking-[0.5px]">
                    Categoria do Ativo
                  </p>
                  <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px]">
                    {jornada.categoriaAtivo}
                  </p>
                </div>
              )}

              {/* Tema */}
              <div className="flex flex-col gap-[12px]">
                <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#111214] text-[14px] leading-[18px] uppercase tracking-[0.5px]">
                  Tema
                </p>
                <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px]">
                  {jornada.tema}
                </p>
              </div>

              {/* Nome Hash Inicial */}
              <div className="flex flex-col gap-[12px]">
                <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#111214] text-[14px] leading-[18px] uppercase tracking-[0.5px]">
                  Nome Hash Inicial
                </p>
                <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px]">
                  {jornada.nomeHashInicial}
                </p>
              </div>

              {/* Hash de Início */}
              <div className="flex flex-col gap-[12px]">
                <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#111214] text-[14px] leading-[18px] uppercase tracking-[0.5px]">
                  Hash de Início
                </p>
                <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px]">
                  {jornada.hashInicio}
                </p>
              </div>
            </div>
          </div>

          {/* Seção 4: Título e Descrição */}
          <div className="mb-[32px]">
            <div className="mb-[24px] pb-[16px] border-b border-[#e5e7eb]">
              <h3 className="font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-[#111214] text-[18px] leading-[24px]">
                4. Título e Descrição
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-y-[32px]">
              {/* Título do Fluxo */}
              <div className="flex flex-col gap-[12px]">
                <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#111214] text-[14px] leading-[18px] uppercase tracking-[0.5px]">
                  Título do Fluxo
                </p>
                <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px]">
                  {jornada.tituloFluxo}
                </p>
              </div>

              {/* Descrição do Fluxo */}
              <div className="flex flex-col gap-[12px]">
                <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#111214] text-[14px] leading-[18px] uppercase tracking-[0.5px]">
                  Descrição do Fluxo
                </p>
                <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px]">
                  {jornada.descricaoFluxo}
                </p>
              </div>
            </div>
          </div>

          {/* Seção 5: Canal e Gatilho */}
          <div>
            <div className="mb-[24px] pb-[16px] border-b border-[#e5e7eb]">
              <h3 className="font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-[#111214] text-[18px] leading-[24px]">
                5. Canal e Gatilho
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-y-[32px]">
              {/* Input/Gatilho */}
              <div className="flex flex-col gap-[12px]">
                <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#111214] text-[14px] leading-[18px] uppercase tracking-[0.5px]">
                  Input/Gatilho
                </p>
                <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px]">
                  {jornada.inputGatilho}
                </p>
              </div>

              {/* Canais */}
              <div className="flex flex-col gap-[12px]">
                <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#111214] text-[14px] leading-[18px] uppercase tracking-[0.5px]">
                  Canais
                </p>
                <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px]">
                  {jornada.canais && Array.isArray(jornada.canais) ? jornada.canais.join(', ') : jornada.canais || '-'}
                </p>
              </div>

              {/* Link do Figma - com ícone */}
              <div className="flex flex-col gap-[12px]">
                <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#111214] text-[14px] leading-[18px] uppercase tracking-[0.5px]">
                  Link do Figma
                </p>
                <div className="flex items-center gap-[12px]">
                  <div className="size-[24px] shrink-0">
                    <Figma />
                  </div>
                  <a
                    href={jornada.linkFigma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#2d37f5] text-[16px] leading-[24px] underline hover:text-[#1e28d5] transition-colors break-all"
                  >
                    {jornada.linkFigma}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}