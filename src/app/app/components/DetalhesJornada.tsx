import { JornadaCadastrada } from '@/app/App';
import { AvisoRepresentacaoDetalheJornada } from '@/app/components/AvisoRepresentacaoDetalheJornada';
import { getStatusJornadaDisplayMasculino } from '@/app/lib/statusJornadaDisplay';
import svgPaths from '@/imports/svg-r15mp4gs3v';
import Figma from '@/imports/Figma';
import Edit from '@/imports/Edit-83-14391';
import { useState } from 'react';

interface DetalhesJornadaProps {
  jornada: JornadaCadastrada;
  onVoltar: () => void;
  onEditar?: () => void;
}

export function DetalhesJornada({ jornada, onVoltar, onEditar }: DetalhesJornadaProps) {
  const [abaAtiva, setAbaAtiva] = useState<'dados' | 'historico'>('dados');
  // Mapear status para cores e texto
  const getStatusInfo = (status: string) => {
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

  // Mapear status para descrição
  const getStatusDescription = (status: string) => {
    switch (status) {
      case 'Nova':
        return 'Solicitação enviada aguardando análise da governança';
      case 'Em análise':
        return 'Aguardando análise do validador';
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
                  <p className="css-ew64yg leading-[1.125]">{jornada.rme?.replace(/-/g, '')}</p>
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
        {(jornada.status === 'Correção' || jornada.status === 'Excluída') && jornada.comentarioGovernanca && (
          <div className="bg-[#fff7e8] border border-[#ffb31a] rounded-[8px] p-[12px]">
            <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#ad5f00] text-[13px] leading-[1.2] mb-[6px]">
              Comentário do validador
            </p>
            <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[14px] leading-[1.4]">
              {jornada.comentarioGovernanca}
            </p>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="h-[37px] mb-[24px]">
        <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1241 37">
          <line stroke="#E5E7EB" x2="1241" y1="2.5" y2="2.5" />
        </svg>
      </div>

      <div className="bg-[#fefefe] content-stretch flex h-[48px] items-end relative shrink-0 w-[512.7px] mb-[16px]">
        <div className="content-stretch flex flex-[1_0_0] h-full items-end min-h-px min-w-px overflow-clip relative">
          <div className="content-stretch flex items-end relative shrink-0">
            <button
              onClick={() => setAbaAtiva('dados')}
              className="bg-[#fefefe] content-stretch flex h-[48px] items-center justify-center relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
            >
              {abaAtiva === 'dados' && (
                <div className="absolute bottom-px h-0 left-0 right-0">
                  <div className="absolute inset-[-1px_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 211 2">
                      <path d="M0 1H211" stroke="#2D37F5" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              )}
              {abaAtiva === 'historico' && (
                <div className="absolute h-0 left-0 right-0 top-[48px]">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 211 1">
                      <line stroke="#B4B9C1" x2="211" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              )}
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center px-[32px] relative">
                <div className={`css-g0mm18 flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center text-[14px] text-center tracking-[0.07px] uppercase ${abaAtiva === 'dados' ? 'text-[#2d37f5]' : 'text-[#111214]'}`}>
                  <p className="css-ew64yg leading-[1.125]">Dados da Jornada</p>
                </div>
              </div>
            </button>
            <button
              onClick={() => setAbaAtiva('historico')}
              className="bg-[#fefefe] content-stretch flex h-[48px] items-center justify-center relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
            >
              {abaAtiva === 'historico' && (
                <div className="absolute bottom-px h-0 left-0 right-0">
                  <div className="absolute inset-[-1px_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 267 2">
                      <path d="M0 1H267" stroke="#2D37F5" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              )}
              {abaAtiva === 'dados' && (
                <div className="absolute h-0 left-0 right-0 top-[48px]">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 267 1">
                      <line stroke="#B4B9C1" x2="267" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              )}
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center px-[32px] relative">
                <div className={`css-g0mm18 flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center text-[14px] text-center tracking-[0.07px] uppercase ${abaAtiva === 'historico' ? 'text-[#2d37f5]' : 'text-[#111214]'}`}>
                  <p className="css-ew64yg leading-[1.125]">Histórico de Atualização</p>
                </div>
              </div>
            </button>
          </div>
          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
            <div aria-hidden="true" className="absolute border-[#b4b9c1] border-b border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>

      {abaAtiva === 'dados' ? (
      <div className="mb-[24px]">
        <div className="bg-white border border-[#ebf2ff] rounded-[4px] p-[32px]">
          <AvisoRepresentacaoDetalheJornada />
          {/* Seção 1: Informações Básicas */}
          <div className="mb-[32px]">
            <div className="mb-[24px] pb-[16px] border-b border-[#e5e7eb] flex items-center justify-between">
              <h3 className="font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-[#111214] text-[18px] leading-[24px]">
                1. Informações Básicas
              </h3>
              {(jornada.status === 'Nova' || jornada.status === 'Correção') && onEditar && (
                <button
                  className="size-[24px] hover:opacity-60 transition-opacity cursor-pointer"
                  title="Editar"
                  onClick={() => onEditar()}
                >
                  <Edit />
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[32px]">
              {/* Número da História */}
              <div className="flex flex-col gap-[12px]">
                <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#111214] text-[14px] leading-[18px] uppercase tracking-[0.5px]">
                  Número da História
                </p>
                <a
                  href={`#${jornada.numeroHistoria?.replace(/\D/g, '')}`}
                  className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[#2d37f5] text-[16px] leading-[24px] hover:text-[#1e28d5] hover:underline transition-colors cursor-pointer"
                >
                  {jornada.numeroHistoria?.replace(/\D/g, '')}
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
                  {jornada.rme?.replace(/-/g, '')}
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
      ) : (
        <div className="bg-white border border-[#ebf2ff] rounded-[4px] p-[32px] mb-[24px]">
          <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px]">
            Nenhuma atualização registrada ainda.
          </p>
        </div>
      )}
    </div>
  );
}