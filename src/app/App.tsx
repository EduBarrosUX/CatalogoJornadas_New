import { useState, type ReactNode } from 'react';
import { FormularioJornadasMultiStep } from '@/app/components/FormularioJornadasMultiStep';
import { SugestoesExternas } from '@/app/components/SugestoesExternas';
import { ToastNotification } from '@/app/components/ToastNotification';
import { ModalSugestoes } from '@/app/components/ModalSugestoes';
import { ModalConsultaFeedbacks, type FeedbackRegistro } from '@/app/components/ModalConsultaFeedbacks';
import { PainelVisaoCAD } from '@/app/components/PainelVisaoCAD';
import { PainelGovernanca } from '@/app/components/PainelGovernanca';
import { DetalhesJornadaGovernanca } from '@/app/components/DetalhesJornadaGovernanca';
import { DetalhesJornada } from '@/app/components/DetalhesJornada';
import ROdape from '@/imports/ROdape';
import svgPaths from "@/imports/svg-febtv0h7z9";
import buttonSvgPaths from "@/imports/svg-t1s27fykl1";
import imgGlobalColor from "@/assets/668f04ff5a2cd888561e1394b63e14be814be181.png";
import imgBase from "@/assets/ceb12fdfe351567eda98f7386fc6eb68c9bf01a0.png";
import imgSpec from "@/assets/c9d9589d347ebdcef7638fe4f17a58fef6f56d0c.png";
import Group165 from "@/imports/Group165-84-16";

export interface JornadaCadastrada {
  tipoHU: string;
  tema: string;
  numeroHistoria: string;
  tituloFluxo: string;
  descricaoFluxo: string;
  segmento: string[];
  canais: string[];
  personas: string[];
  iniciativas: string;
  rme: string;
  linkFigma: string;
  dataAbertura: string;
  status: string;
  publico: string;
  solicitante?: string;
  tipoInclusao?: string;
  dataImplementacao?: string;
  diretoria?: string;
  sistemaResponsavel?: string;
  periodicidade?: string;
  templateMeta?: string;
  linkPlanoRequisitos?: string;
  ausenciaPlanoRequisitos?: string;
  categoriaAtivo?: string;
  nomeHashInicial?: string;
  hashInicio?: string;
  inputGatilho?: string;
  comentarioGovernanca?: string;
  cadastradoPor?: string;
  chaveUsuario?: string;
  utilizaIAGenerativa?: boolean;
  iaGenerativaRespondeCliente?: boolean;
  formularioID?: string;
  /** Status NIA na governança (Produção, Inativa, Sanitizada, Excluída) */
  statusNIA?: 'Produção' | 'Inativa' | 'Sanitizada' | 'Excluída';
  /** Data associada ao status NIA (yyyy-mm-dd), quando aplicável */
  dataStatusNIA?: string;
}

type View = 'formulario' | 'sugestoes' | 'acompanhamento' | 'governanca';
type AcompanhamentoSubView = 'painel' | 'formulario' | 'detalhes';

// Componentes do banner simplificado
function Group12() {
  return (
    <div className="absolute inset-[132.04%_89.39%_-41.26%_7.15%]" data-name="Group">
      <div className="absolute inset-[-0.65%_-0.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.0371 58.8909">
          <g id="Group">
            <path d={svgPaths.p3106f80} id="Vector" stroke="var(--stroke-0, #F8F0E4)" strokeMiterlimit="10" />
            <path d={svgPaths.p1b642140} id="Vector_2" stroke="var(--stroke-0, #F8F0E4)" strokeMiterlimit="10" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[132.04%_84.69%_-41.26%_11.85%]" data-name="Group">
      <div className="absolute inset-[-0.65%_-0.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.06 58.891">
          <g id="Group">
            <path d={svgPaths.p21f2ae80} id="Vector" stroke="var(--stroke-0, #F8F0E4)" strokeMiterlimit="10" />
            <path d={svgPaths.p27768400} id="Vector_2" stroke="var(--stroke-0, #F8F0E4)" strokeMiterlimit="10" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[132.04%_79.99%_-41.26%_16.55%]" data-name="Group">
      <div className="absolute inset-[-0.65%_-0.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.0601 58.891">
          <g id="Group">
            <path d={svgPaths.p26e53c10} id="Vector" stroke="var(--stroke-0, #F8F0E4)" strokeMiterlimit="10" />
            <path d={svgPaths.p1df7a880} id="Vector_2" stroke="var(--stroke-0, #F8F0E4)" strokeMiterlimit="10" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[132.04%_79.99%_-41.26%_7.15%]" data-name="Group">
      <Group12 />
      <Group13 />
      <Group14 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[-72.4%_27.31%_-41.26%_7.15%]" data-name="Group">
      <div className="absolute inset-[-72.4%_27.31%_53.69%_28.13%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector"></g>
        </svg>
      </div>
      <Group15 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[-72.4%_27.31%_-41.26%_7.15%]" data-name="Group">
      <Group16 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[-72.4%_0_-41.26%_0]">
      <div className="absolute inset-[-12.85%_0_-11.97%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 787.639">
          <path d="M1920 0H0V787.639H1920V0Z" fill="var(--fill-0, #4541BE)" id="Vector" />
        </svg>
      </div>
      <Group17 />
    </div>
  );
}

function GlobalColor2() {
  return (
    <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[25.094px_24.475px] mask-size-[115.718px_115.963px] relative size-[122.305px]" data-name="Global Color" style={{ maskImage: `url('${imgGlobalColor}')` }}>
      <div className="absolute inset-0 rounded-[1783.125px]" data-name="Color" style={{ backgroundImage: "linear-gradient(124.404deg, rgb(249, 142, 255) 10.803%, rgb(2, 112, 238) 87.34%)" }} />
    </div>
  );
}

function Color6() {
  return (
    <div className="absolute contents h-[115.963px] left-[1406px] top-[284.04px] w-[115.718px]" data-name="Color">
      <div className="absolute flex items-center justify-center left-[1380.91px] size-[172.357px] top-[259.56px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[49.81deg]">
          <GlobalColor2 />
        </div>
      </div>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents h-[115.998px] left-[1406px] top-[284px] w-[115.76px]">
      <div className="absolute flex h-[115.963px] items-center justify-center left-[1406px] top-[284.04px] w-[115.718px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[49.81deg]">
          <div className="h-[81.169px] relative w-[83.233px]" data-name="base">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBase} />
          </div>
        </div>
      </div>
      <Color6 />
      <div className="absolute flex h-[115.963px] items-center justify-center left-[1406.04px] mix-blend-screen top-[284px] w-[115.718px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[49.81deg]">
          <div className="h-[81.169px] relative w-[83.233px]" data-name="spec">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSpec} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute h-[660px] left-[550px] top-[-46px] w-[1173px]">
      <Group165 />
    </div>
  );
}

export default function App() {
  const [currentView, setCurrentView] = useState<View>('formulario');
  const [jornadas, setJornadas] = useState<JornadaCadastrada[]>([
    {
      tipoHU: 'Ativo',
      tema: 'Cadastro',
      numeroHistoria: '10203040',
      tituloFluxo: 'Abertura de Conta Digital',
      descricaoFluxo: 'Fluxo completo para abertura de conta digital para novos clientes pessoa física',
      segmento: ['Varejo', 'Digital'],
      canais: ['App', 'Internet Banking'],
      personas: ['Cliente PF', 'Novo Cliente'],
      iniciativas: 'Transformação Digital',
      rme: 'RME-0001',
      linkFigma: 'https://www.figma.com/file/exemplo-abertura-conta',
      dataAbertura: '15/01/2026',
      status: 'Aprovada',
      publico: 'Interno',
      tipoInclusao: 'Nova Jornada',
      diretoria: 'DIR-01',
      sistemaResponsavel: 'Sistema de Cadastro',
      cadastradoPor: 'Maria Silva Santos',
      chaveUsuario: 'F1234567',
      utilizaIAGenerativa: false,
      iaGenerativaRespondeCliente: false,
      inputGatilho: 'Cliente acessa o app e seleciona "Abrir Conta"',
      nomeHashInicial: '#inicio-cadastro',
      hashInicio: '#inicio'
    },
    {
      tipoHU: 'Transação',
      tema: 'Pagamentos',
      numeroHistoria: '10203041',
      tituloFluxo: 'Transferência PIX',
      descricaoFluxo: 'Fluxo de transferência via PIX para diferentes tipos de chave',
      segmento: ['Varejo', 'Empresas'],
      canais: ['App', 'Internet Banking', 'Agência'],
      personas: ['Cliente PF', 'Cliente PJ'],
      iniciativas: 'Pagamentos Instantâneos',
      rme: 'TRN-0001',
      linkFigma: 'https://www.figma.com/file/exemplo-pix',
      dataAbertura: '20/01/2026',
      status: 'Em análise',
      publico: 'Interno',
      tipoInclusao: 'Nova Jornada',
      diretoria: 'DIR-02',
      sistemaResponsavel: 'Sistema de Pagamentos',
      cadastradoPor: 'João Pedro Lima',
      chaveUsuario: 'F2345678',
      utilizaIAGenerativa: true,
      iaGenerativaRespondeCliente: false,
      inputGatilho: 'Cliente seleciona PIX no menu principal',
      nomeHashInicial: '#pix-inicio',
      hashInicio: '#pix'
    },
    {
      tipoHU: 'Indução',
      tema: 'Onboarding',
      numeroHistoria: '10203042',
      tituloFluxo: 'Tutorial Primeiro Acesso',
      descricaoFluxo: 'Jornada de indução para novos usuários do aplicativo',
      segmento: ['Varejo'],
      canais: ['App'],
      personas: ['Novo Cliente'],
      iniciativas: 'Experiência do Cliente',
      rme: 'IND-0001',
      linkFigma: 'https://www.figma.com/file/exemplo-tutorial',
      dataAbertura: '25/01/2026',
      status: 'Correção',
      publico: 'Interno',
      tipoInclusao: 'Nova Jornada',
      diretoria: 'DIR-03',
      sistemaResponsavel: 'App Mobile',
      cadastradoPor: 'Ana Carolina Souza',
      chaveUsuario: 'F3456789',
      utilizaIAGenerativa: false,
      iaGenerativaRespondeCliente: false,
      inputGatilho: 'Primeiro login do cliente no app',
      nomeHashInicial: '#tutorial-inicio',
      hashInicio: '#tutorial',
      comentarioGovernanca: 'Necessário ajustar os textos das telas 3 e 4 conforme diretrizes de UX Writing'
    },
    {
      tipoHU: 'Informacional',
      tema: 'Produtos',
      numeroHistoria: '10203043',
      tituloFluxo: 'Consulta Saldo e Extrato',
      descricaoFluxo: 'Fluxo informacional para consulta de saldo e extrato de conta corrente',
      segmento: ['Varejo', 'Empresas', 'Private'],
      canais: ['App', 'Internet Banking', 'Atendimento Telefônico'],
      personas: ['Cliente PF', 'Cliente PJ', 'Private'],
      iniciativas: 'Self-Service',
      rme: 'INF-0001',
      linkFigma: 'https://www.figma.com/file/exemplo-extrato',
      dataAbertura: '30/01/2026',
      status: 'Nova',
      publico: 'Interno',
      tipoInclusao: 'Nova Jornada',
      diretoria: 'DIR-01',
      sistemaResponsavel: 'Sistema de Contas',
      cadastradoPor: 'Carlos Eduardo Matos',
      chaveUsuario: 'F4567890',
      utilizaIAGenerativa: true,
      iaGenerativaRespondeCliente: true,
      inputGatilho: 'Cliente acessa menu "Minha Conta"',
      nomeHashInicial: '#consulta-saldo',
      hashInicio: '#saldo'
    }
  ]);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [successToastMessage, setSuccessToastMessage] = useState<ReactNode>('Jornada cadastrada com sucesso!');
  const [showModalSugestoes, setShowModalSugestoes] = useState(false);
  const [showModalConsultaFeedbacks, setShowModalConsultaFeedbacks] = useState(false);
  const [jornadaSelecionadaAcompanhamento, setJornadaSelecionadaAcompanhamento] = useState<JornadaCadastrada | null>(null);
  const [jornadaParaEditarAcompanhamento, setJornadaParaEditarAcompanhamento] = useState<JornadaCadastrada | null>(null);
  const [jornadaSelecionadaGovernanca, setJornadaSelecionadaGovernanca] = useState<JornadaCadastrada | null>(null);
  const [acompanhamentoSubView, setAcompanhamentoSubView] = useState<AcompanhamentoSubView>('painel');
  const [jornadaParaEditarGovernanca, setJornadaParaEditarGovernanca] = useState<JornadaCadastrada | null>(null);
  const [registrosFeedback, setRegistrosFeedback] = useState<FeedbackRegistro[]>([
    {
      id: 'fb-1',
      tipo: 'problema',
      descricao: 'Campo de data aceitava texto livre na visão de acompanhamento.',
      codigoFluxo: 'RME-0001',
      anexoNome: 'print-data-campo.png',
      dataEnvio: '31/03/2026 14:22',
      origem: 'Catálogo',
    },
    {
      id: 'fb-2',
      tipo: 'sugestao',
      descricao: 'Adicionar filtro por presença de Plano de Requisitos no painel.',
      dataEnvio: '31/03/2026 14:45',
      origem: 'Catálogo',
    },
    {
      id: 'fb-3',
      tipo: 'problema',
      descricao: 'Descrição da jornada não estava quebrando linha no detalhe.',
      codigoFluxo: 'TRN-0007',
      anexoNome: 'evidencia-quebra-linha.jpg',
      dataEnvio: '31/03/2026 15:02',
      origem: 'Catálogo',
    },
    {
      id: 'fb-4',
      tipo: 'sugestao',
      descricao: 'Incluir filtro por diretoria no topo da visão acompanhamento.',
      dataEnvio: '31/03/2026 15:10',
      origem: 'Catálogo',
    },
    {
      id: 'fb-5',
      tipo: 'problema',
      descricao: 'Campo de código do fluxo aceita caracteres especiais indevidos.',
      codigoFluxo: 'INF-0012',
      anexoNome: 'validacao-codigo-fluxo.pdf',
      dataEnvio: '31/03/2026 15:18',
      origem: 'Catálogo',
    },
    {
      id: 'fb-6',
      tipo: 'sugestao',
      descricao: 'Padronizar textos de ajuda do Plano de Requisitos em todos os fluxos.',
      dataEnvio: '31/03/2026 15:24',
      origem: 'Catálogo',
    },
    {
      id: 'fb-7',
      tipo: 'problema',
      descricao: 'Botão de voltar no detalhe de governança não preserva filtro aplicado.',
      codigoFluxo: 'RME-0021',
      anexoNome: 'passos-reproducao.docx',
      dataEnvio: '31/03/2026 15:33',
      origem: 'Catálogo',
    },
    {
      id: 'fb-8',
      tipo: 'sugestao',
      descricao: 'Adicionar contador de registros encontrados na tabela de consulta.',
      dataEnvio: '31/03/2026 15:37',
      origem: 'Catálogo',
    },
    {
      id: 'fb-9',
      tipo: 'problema',
      descricao: 'Canal "Outros" não exibe texto salvo em alguns detalhes.',
      codigoFluxo: 'IND-0009',
      anexoNome: 'captura-canal-outros.png',
      dataEnvio: '31/03/2026 15:42',
      origem: 'Catálogo',
    },
    {
      id: 'fb-10',
      tipo: 'sugestao',
      descricao: 'Permitir exportar a lista de consultas em CSV.',
      dataEnvio: '31/03/2026 15:48',
      origem: 'Catálogo',
    },
    {
      id: 'fb-11',
      tipo: 'problema',
      descricao: 'Status NIA não atualiza no card após salvar em governança.',
      codigoFluxo: 'TRN-0014',
      anexoNome: 'video-status-nia.mp4',
      dataEnvio: '31/03/2026 15:54',
      origem: 'Catálogo',
    },
    {
      id: 'fb-12',
      tipo: 'sugestao',
      descricao: 'Exibir destaque para jornadas sem Plano de Requisitos.',
      dataEnvio: '31/03/2026 16:01',
      origem: 'Catálogo',
    },
  ]);

  const handleNovaJornada = (data: Omit<JornadaCadastrada, 'dataAbertura' | 'status'>) => {
    console.log('Dados recebidos do formulário:', data);
    
    // Gerar RME automaticamente se for "Novo fluxo"
    let rmeGerado = data.rme;
    
    if (data.tipoInclusao === 'Nova Jornada' || data.tipoInclusao === 'novo' || !data.rme) {
      // Determinar o prefixo baseado no tipo HU
      let prefixo = '';
      switch (data.tipoHU) {
        case 'Ativo':
          prefixo = 'RME';
          break;
        case 'Transação':
          prefixo = 'TRN';
          break;
        case 'Indução':
          prefixo = 'IND';
          break;
        case 'Informacional':
          prefixo = 'INF';
          break;
        default:
          prefixo = 'RME';
      }
      
      // Encontrar o último número usado para este tipo
      const jornadasDoTipo = jornadas.filter(j => j.rme.startsWith(prefixo));
      const ultimoNumero = jornadasDoTipo.reduce((max, j) => {
        const match = j.rme.match(new RegExp(`${prefixo}-(\\d+)`));
        if (match) {
          const num = parseInt(match[1], 10);
          return num > max ? num : max;
        }
        return max;
      }, 0);
      
      // Gerar o próximo número em sequência
      const proximoNumero = ultimoNumero + 1;
      rmeGerado = `${prefixo}-${String(proximoNumero).padStart(4, '0')}`;
    }
    
    // Mapear tipoInclusao do formulário para o formato esperado
    let tipoInclusaoMapeado = data.tipoInclusao || 'Nova Jornada';
    if (data.tipoInclusao === 'novo') {
      tipoInclusaoMapeado = 'Nova Jornada';
    } else if (data.tipoInclusao === 'alteracao' || data.tipoInclusao === 'alteracao-trn') {
      tipoInclusaoMapeado = 'Alteração';
    }
    
    const novaJornada: JornadaCadastrada = {
      tipoHU: data.tipoHU || '',
      tema: data.tema || '',
      numeroHistoria: (data.numeroHistoria || '').replace(/\D/g, ''),
      tituloFluxo: data.tituloFluxo || '',
      descricaoFluxo: data.descricaoFluxo || '',
      segmento: data.segmento || [],
      canais: Array.isArray(data.canais) ? data.canais : (data.canais ? [data.canais] : []),
      personas: data.personas || [],
      iniciativas: data.iniciativas || '',
      rme: rmeGerado,
      linkFigma: data.linkFigma || '',
      dataAbertura: new Date().toLocaleDateString('pt-BR'),
      status: 'Nova',
      publico: data.publico || 'Interno',
      cadastradoPor: 'Albert Ferreira Rosa',
      chaveUsuario: 'F3244433',
      tipoInclusao: tipoInclusaoMapeado,
      dataImplementacao: data.dataImplementacao,
      diretoria: data.diretoria,
      sistemaResponsavel: data.sistemaResponsavel,
      periodicidade: data.periodicidade,
      templateMeta: data.templateMeta,
      linkPlanoRequisitos: data.linkPlanoRequisitos,
      ausenciaPlanoRequisitos: data.ausenciaPlanoRequisitos,
      categoriaAtivo: data.categoriaAtivo,
      nomeHashInicial: data.nomeHashInicial,
      hashInicio: data.hashInicio,
      inputGatilho: data.inputGatilho,
      utilizaIAGenerativa: data.utilizaIAGenerativa || false,
      iaGenerativaRespondeCliente: data.iaGenerativaRespondeCliente || false
    };
    
    console.log('Nova jornada criada com todos os campos:', novaJornada);
    
    setJornadas([novaJornada, ...jornadas]);
    const isFluxoNovo = data.tipoInclusao === 'Nova Jornada' || data.tipoInclusao === 'novo' || !data.tipoInclusao;
    const isExcecaoAtivo = (data.tipoHU || '').trim() === 'Ativo';
    if (isFluxoNovo && !isExcecaoAtivo) {
      setSuccessToastMessage(
        <>
          Jornada cadastrada com sucesso!
          <br />
          O código da jornada é:{' '}
          <span className="text-[#2d37f5] font-['BancoDoBrasil_Textos:Bold',sans-serif] tracking-[0.07px]">
            {rmeGerado}
          </span>
        </>
      );
    } else {
      setSuccessToastMessage('Jornada cadastrada com sucesso!');
    }
    setShowSuccessToast(true);
    
    // Redirecionar para acompanhamento após cadastro
    setTimeout(() => {
      setCurrentView('acompanhamento');
    }, 1500);
  };

  const handleEditarJornada = (jornadaAtualizada: JornadaCadastrada) => {
    setJornadas(prev => prev.map(j =>
      j.rme === jornadaAtualizada.rme ? jornadaAtualizada : j
    ));
  };

  const handleSugestaoSubmit = (tipo: 'sugestao' | 'problema', descricao: string, codigoFluxo?: string, arquivo?: File) => {
    console.log('Tipo:', tipo);
    console.log('Descrição:', descricao);
    if (tipo === 'problema') {
      console.log('Código do Fluxo:', codigoFluxo);
      console.log('Arquivo:', arquivo?.name);
    }
    const agora = new Date();
    const dataEnvio = agora.toLocaleDateString('pt-BR') + ' ' + agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    setRegistrosFeedback((prev) => [
      {
        id: `fb-${Date.now()}`,
        tipo,
        descricao,
        codigoFluxo,
        anexoNome: arquivo?.name,
        dataEnvio,
        origem: 'Catálogo',
      },
      ...prev,
    ]);
    setShowSuccessToast(true);
  };

  return (
    <div className="min-h-screen bg-[#f0f0f0]">
      {/* Banner Header */}
      <div className="relative h-[631px] w-full overflow-clip">
        <Group20 />
        <Group24 />
        <Group22 />
        
        {/* Título */}
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[379px] items-start justify-center left-[calc(50%-257.5px)] top-[calc(50%+16px)]">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-end leading-[0] not-italic relative shrink-0 text-white">
            {currentView === 'governanca' ? (
              <>
                <div className="flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center relative shrink-0 text-[64px] w-[769px]" style={{ letterSpacing: '-2px' }}>
                  <p className="css-4hzbpn leading-[normal]">Gestão</p>
                  <p className="css-4hzbpn leading-[normal]">Formulário de Jornadas</p>
                </div>
                <div className="flex flex-col font-['BancoDoBrasil_Textos:Light',sans-serif] justify-center relative shrink-0 text-[20px] w-[700px]">
                  <p className="css-4hzbpn leading-[normal]">Faça o gerenciamento das jornadas incluídas e alteradas</p>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center relative shrink-0 text-[64px] w-[769px]" style={{ letterSpacing: '-2px' }}>
                  <p className="css-4hzbpn leading-[normal]">{currentView === 'formulario' ? 'Formulário de Jornadas' : 'Acompanhamento'}</p>
                </div>
                <div className="flex flex-col font-['BancoDoBrasil_Textos:Light',sans-serif] justify-center relative shrink-0 text-[20px] w-[700px]">
                  <p className="css-4hzbpn leading-[normal]">Consulte o catálogo de jornadas, inclua novas informações, altere dados existentes, reporte erros e envie sugestões para aprimorar continuamente o conteúdo.</p>
                </div>
              </>
            )}
            
            {/* Botões de Ação */}
            {currentView !== 'sugestoes' && (
              <div className="flex gap-[32px] mt-[24px]">
                <a
                  href="https://app.powerbi.com/reportEmbed?reportId=d8a196bc-b7bc-4f47-af44-a950dc54bbd5&autoAuth=true&ctid=ea0c2907-38d2-4181-8750-b0b190b60443"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#e0e9ff] flex gap-[10px] items-center justify-center px-[16px] py-[12px] rounded-[4px] hover:bg-[#d0dcff] hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  <div className="flex flex-row items-center">
                    <div className="h-full relative shrink-0">
                      <div className="flex flex-col items-center size-full">
                        <div className="flex flex-col items-center pt-[2px] relative">
                          <div className="overflow-clip relative shrink-0 size-[18px]">
                            <div className="absolute inset-[8.33%]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                                <g>
                                  <path d={buttonSvgPaths.p529da00} fill="var(--fill-0, #465EFF)" />
                                  <path d={buttonSvgPaths.p1d7fb570} fill="var(--fill-0, #465EFF)" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#465eff] text-[14px] text-center tracking-[0.07px] uppercase whitespace-nowrap">
                    <p className="leading-[1.125]">ABRIR CATÁLOGO</p>
                  </div>
                </a>
                
                {currentView === 'formulario' ? (
                  <button
                    onClick={() => setShowModalSugestoes(true)}
                    className="bg-[#e0e9ff] flex gap-[10px] items-center justify-center px-[16px] py-[12px] rounded-[4px] hover:bg-[#d0dcff] hover:scale-105 transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex flex-row items-center">
                      <div className="h-full relative shrink-0">
                        <div className="flex flex-col items-center size-full">
                          <div className="flex flex-col items-center pt-[2px] relative">
                            <div className="overflow-clip relative shrink-0 size-[18px]">
                              <div className="-translate-y-1/2 absolute aspect-[22.000995635986328/22] left-[4.17%] right-[4.16%] top-1/2">
                                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5007 16.5">
                                  <g>
                                    <path d={buttonSvgPaths.p11ae4600} fill="var(--fill-0, #465EFF)" />
                                    <path d={buttonSvgPaths.p3859b380} fill="var(--fill-0, #465EFF)" />
                                    <path d={buttonSvgPaths.p1a74ce00} fill="var(--fill-0, #465EFF)" />
                                    <path d={buttonSvgPaths.pd942e38} fill="var(--fill-0, #465EFF)" />
                                    <path d={buttonSvgPaths.p34fb2400} fill="var(--fill-0, #465EFF)" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#465eff] text-[14px] text-center tracking-[0.07px] uppercase whitespace-nowrap">
                      <p className="leading-[1.125]">Enviar erro ou sugestão</p>
                    </div>
                  </button>
                ) : (
                  <button
                    onClick={() => setShowModalConsultaFeedbacks(true)}
                    className="bg-[#e0e9ff] flex gap-[10px] items-center justify-center px-[16px] py-[12px] rounded-[4px] hover:bg-[#d0dcff] hover:scale-105 transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#465eff] text-[14px] text-center tracking-[0.07px] uppercase whitespace-nowrap">
                      <p className="leading-[1.125]">Consultar erros e sugestões</p>
                    </div>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Abas de Navegação - Somente se não for view de sugestões */}
        {currentView !== 'sugestoes' && (
          <div className="absolute top-[16px] left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
            <div className="flex items-center gap-[2px] bg-[#00ffe0] rounded-[17px] px-[24px] py-[8px] shadow-lg">
              <button
                onClick={() => setCurrentView('formulario')}
                className={`px-[16px] py-[4px] rounded-[8px] font-['BancoDoBrasil_Titulos:Medium',sans-serif] text-[16px] transition-colors cursor-pointer ${
                  currentView === 'formulario'
                    ? 'bg-white text-[#465eff]'
                    : 'bg-transparent text-[#465eff] hover:bg-white/20'
                }`}
              >
                Formulário
              </button>
              <button
                onClick={() => setCurrentView('acompanhamento')}
                className={`px-[16px] py-[4px] rounded-[8px] font-['BancoDoBrasil_Titulos:Medium',sans-serif] text-[16px] transition-colors cursor-pointer ${
                  currentView === 'acompanhamento'
                    ? 'bg-white text-[#465eff]'
                    : 'bg-transparent text-[#465eff] hover:bg-white/20'
                }`}
              >
                Acompanhamento
              </button>
              <button
                onClick={() => setCurrentView('governanca')}
                className={`px-[16px] py-[4px] rounded-[8px] font-['BancoDoBrasil_Titulos:Medium',sans-serif] text-[16px] transition-colors cursor-pointer ${
                  currentView === 'governanca'
                    ? 'bg-white text-[#465eff]'
                    : 'bg-transparent text-[#465eff] hover:bg-white/20'
                }`}
              >
                Gestão
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Conteúdo Principal */}
      <div className="relative w-full flex flex-col items-center pb-8 z-10 -mt-[60px]">
        {currentView === 'formulario' && (
          <div className="relative w-[1357px]">
            <div className="bg-white rounded-[30px] shadow-lg">
              <div className="px-16 py-12">
                <FormularioJornadasMultiStep 
                  onSubmitSuccess={handleNovaJornada}
                  jornadaEditando={null}
                />
              </div>
            </div>
          </div>
        )}
        
        {currentView === 'acompanhamento' && (
          <div className="relative w-full max-w-[1440px] px-[41.5px]">
            <div className="bg-white rounded-[30px] shadow-lg">
              <div className="px-16 py-12">
                {acompanhamentoSubView === 'formulario' ? (
                  <>
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 mb-8">
                      <button
                        onClick={() => setAcompanhamentoSubView('painel')}
                        className="flex items-center gap-1 text-[#465eff] font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[16px] hover:underline transition-all"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#465eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Voltar
                      </button>
                      <span className="text-[#888D95] font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[16px]">/</span>
                      <span className="text-[#111214] font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[16px]">Formulário</span>
                    </div>
                    <FormularioJornadasMultiStep
                      key={jornadaParaEditarAcompanhamento?.rme ?? 'form-novo-acompanhamento'}
                      onSubmitSuccess={(data) => {
                        handleNovaJornada(data);
                        setJornadaParaEditarAcompanhamento(null);
                        setAcompanhamentoSubView('painel');
                      }}
                      jornadaEditando={jornadaParaEditarAcompanhamento}
                    />
                  </>
                ) : jornadaSelecionadaAcompanhamento ? (
                  <DetalhesJornada
                    jornada={jornadaSelecionadaAcompanhamento}
                    onVoltar={() => setJornadaSelecionadaAcompanhamento(null)}
                    onEditar={() => {
                      setJornadaParaEditarAcompanhamento(jornadaSelecionadaAcompanhamento);
                      setJornadaSelecionadaAcompanhamento(null);
                      setAcompanhamentoSubView('formulario');
                    }}
                  />
                ) : (
                  <PainelVisaoCAD
                    jornadas={jornadas}
                    onIncluirAlterar={() => setAcompanhamentoSubView('formulario')}
                    onVerDetalhes={(jornada) => {
                      if (jornada.jornadaOriginal) {
                        setJornadaSelecionadaAcompanhamento(jornada.jornadaOriginal);
                      }
                    }}
                    onEditarJornada={(jornada) => {
                      setJornadaParaEditarAcompanhamento(jornada);
                      setAcompanhamentoSubView('formulario');
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        )}
        
        {currentView === 'governanca' && (
          <div className="relative w-full max-w-[1440px] px-[41.5px]">
            <div className="bg-white rounded-[30px] shadow-lg">
              <div className="px-16 py-12">
                {jornadaParaEditarGovernanca ? (
                  <>
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 mb-8">
                      <button
                        onClick={() => setJornadaParaEditarGovernanca(null)}
                        className="flex items-center gap-1 text-[#465eff] font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[16px] hover:underline transition-all"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#465eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Voltar
                      </button>
                      <span className="text-[#888D95] font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[16px]">/</span>
                      <span className="text-[#111214] font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[16px]">Formulário</span>
                    </div>
                    <FormularioJornadasMultiStep
                      key={jornadaParaEditarGovernanca?.rme ?? 'form-novo-gestao'}
                      onSubmitSuccess={(data) => {
                        handleNovaJornada(data);
                        setJornadaParaEditarGovernanca(null);
                        setJornadaSelecionadaGovernanca(null);
                      }}
                      jornadaEditando={jornadaParaEditarGovernanca}
                    />
                  </>
                ) : jornadaSelecionadaGovernanca ? (
                  <DetalhesJornadaGovernanca
                    key={jornadaSelecionadaGovernanca.rme}
                    jornada={jornadaSelecionadaGovernanca}
                    onVoltar={() => setJornadaSelecionadaGovernanca(null)}
                    onSalvar={(partial) => {
                      const rme = jornadaSelecionadaGovernanca.rme;
                      setJornadas((prev) =>
                        prev.map((j) => (j.rme === rme ? { ...j, ...partial } : j))
                      );
                      setJornadaSelecionadaGovernanca((prev) =>
                        prev && prev.rme === rme ? { ...prev, ...partial } : prev
                      );
                    }}
                    onAbrirFormulario={(j) => setJornadaParaEditarGovernanca(j)}
                  />
                ) : (
                  <PainelGovernanca
                    jornadas={jornadas}
                    onVerDetalhes={(jornada) => {
                      if (jornada.jornadaOriginal) {
                        setJornadaSelecionadaGovernanca(jornada.jornadaOriginal);
                      }
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        )}
        
        {currentView === 'sugestoes' && (
          <SugestoesExternas onBack={() => setCurrentView('formulario')} />
        )}
      </div>

      {/* Footer */}
      <ROdape />

      {/* Toast Notification */}
      {showSuccessToast && (
        <ToastNotification
          message={successToastMessage}
          onClose={() => setShowSuccessToast(false)}
        />
      )}

      {/* Modal de Sugestões */}
      {showModalSugestoes && (
        <ModalSugestoes
          onClose={() => setShowModalSugestoes(false)}
          onSubmit={handleSugestaoSubmit}
        />
      )}

      {showModalConsultaFeedbacks && (
        <ModalConsultaFeedbacks
          onClose={() => setShowModalConsultaFeedbacks(false)}
          registros={registrosFeedback}
        />
      )}
    </div>
  );
}