import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import svgPaths from "@/imports/svg-a22losb1wy";
import svgPathsBreadcrumb from "@/imports/svg-st0q96v9y6";
import breadcrumbSvgPaths from "@/imports/svg-hp8nnqg3gp";
import { Button } from '@/app/components/Button';
import { CheckboxGroup } from '@/app/components/Checkbox';
import { Passo1Formulario } from '@/app/components/Passo1Formulario';
import { Passo2Formulario } from '@/app/components/Passo2Formulario';
import { Passo3Formulario } from '@/app/components/Passo3Formulario';
import { Passo4Formulario } from '@/app/components/Passo4Formulario';
import { Passo5Formulario } from '@/app/components/Passo5Formulario';
import { Passo2TransacaoInducao } from '@/app/components/Passo2TransacaoInducao';
import { Passo3TransacaoInducao } from '@/app/components/Passo3TransacaoInducao';
import { Passo4CanalGatilho } from '@/app/components/Passo4CanalGatilho';
import { PassoCodigoFluxo } from '@/app/components/PassoCodigoFluxo';
import { FormularioAlteracao } from '@/app/components/FormularioAlteracao';
import { PassoAlteracaoCompleto } from '@/app/components/PassoAlteracaoCompleto';
import type { JornadaCadastrada } from '@/app/App';

interface FormData {
  // Passo 1: Informações Básicas
  numeroHistoria: string;
  tipoInclusao: 'novo' | 'alteracao' | 'alteracao-trn';
  dataImplementacao: string;
  diretoria: string;
  tipoHU: 'Transação' | 'Ativo' | 'Indução' | 'Informacional';
  
  // Passo 2: Sistema e Periodicidade  
  rme: string;
  sistemaResponsavel: string;
  periodicidade: 'unico' | 'recorrente';
  templateMeta: string;
  linkPlanoRequisitos?: string; // Para Transação
  ausenciaPlanoRequisitos?: string; // Para Transação sem plano
  
  // Passo 3: Categoria e Tema (ou Canal e Gatilho para alteração)
  categoriaAtivo?: 'Autenticação' | 'Marketing' | 'Utilidade';
  contextoInducao?: 'Saudação' | 'Feedback' | 'QR Code / Link' | 'Outro'; // Para Indução
  /** Resposta para "É check-in de evento?" (sim = check-in, nao = QR padrão). */
  inducaoQrModo?: 'nao' | 'sim' | 'padrao' | 'checkin';
  jornadaInducao?: string; // Para Indução
  tema: string;
  nomeHashInicial: string;
  hashInicio: string;
  
  // Passo 4: Título e Descrição (ou Código do Fluxo para alteração)
  tituloFluxo: string;
  descricaoFluxo: string;
  codigoFluxoCatalogo?: string; // Para alteração
  
  // Passo 5: Canal e Gatilho (ou Hash Inicial para alteração)
  inputGatilho: string;
  canais: string[];
  linkFigma: string;
  utilizaIAGenerativa: boolean; // Utiliza IA Generativa
  iaGenerativaRespondeCliente?: boolean; // Se a IA Generativa responde ao cliente
  
  // Campos específicos para alteração
  hashPermanece?: 'sim' | 'nao';
  novaHashNome?: string;
  novaHashCodigo?: string;
  dataAlteracao?: string;
  detalhesAlteracao?: string;
  linkFigmaAlteracao?: string;
  alteracaoReferenteTRN?: 'sim' | 'nao';
  canalOutro?: string;
}

interface FormularioJornadasMultiStepProps {
  onSubmitSuccess: (data: FormData) => void;
  jornadaEditando?: JornadaCadastrada | null;
}

const TOTAL_STEPS = 5;

const STEP_LABELS = [
  'Informações Básicas',
  'Sistema e Periodicidade',
  'Categoria e Tema',
  'Título e Descrição',
  'Gatilho e Link'
];

// Labels específicos para Transação/Indução (3 passos)
const STEP_LABELS_SIMPLIFICADO = [
  'Informações Básicas',
  'Tema e Hash',
  'Título e Canal'
];

/** Valores persistidos em JornadaCadastrada vs valores internos do formulário (react-hook-form). */
function normalizeTipoInclusaoForForm(raw: string | undefined): 'novo' | 'alteracao' | 'alteracao-trn' {
  if (!raw) return 'novo';
  const r = String(raw).trim();
  if (r === 'Nova Jornada' || r === 'novo') return 'novo';
  if (r === 'Alteração' || r === 'alteracao') return 'alteracao';
  if (r === 'alteracao-trn') return 'alteracao-trn';
  return 'novo';
}

function normalizePeriodicidadeForForm(raw: string | undefined): 'unico' | 'recorrente' {
  if (!raw) return 'unico';
  const r = String(raw).trim().toLowerCase();
  if (r === 'recorrente') return 'recorrente';
  if (r === 'unico' || r === 'único') return 'unico';
  return 'unico';
}

/** Número da história (GENTI): apenas dígitos. */
export function normalizeNumeroHistoria(raw: string | undefined): string {
  return String(raw ?? '').replace(/\D/g, '');
}

export function FormularioJornadasMultiStep({ onSubmitSuccess, jornadaEditando }: FormularioJornadasMultiStepProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [canalSelecionado, setCanalSelecionado] = useState<string>(jornadaEditando?.canais?.[0] || '');
  
  // Determinar valores iniciais baseados na jornada sendo editada
  const defaultValues = jornadaEditando ? {
    numeroHistoria: normalizeNumeroHistoria(jornadaEditando.numeroHistoria),
    tipoInclusao: normalizeTipoInclusaoForForm(jornadaEditando.tipoInclusao),
    dataImplementacao: jornadaEditando.dataImplementacao || '',
    diretoria: jornadaEditando.diretoria || '',
    tipoHU: jornadaEditando.tipoHU as 'Transação' | 'Ativo' | 'Indução' | 'Informacional',
    rme: jornadaEditando.rme || '',
    sistemaResponsavel: jornadaEditando.sistemaResponsavel || '',
    periodicidade: normalizePeriodicidadeForForm(jornadaEditando.periodicidade),
    templateMeta: jornadaEditando.templateMeta || '',
    categoriaAtivo: jornadaEditando.categoriaAtivo as 'Autenticação' | 'Marketing' | 'Utilidade' | undefined,
    contextoInducao: jornadaEditando.contextoInducao as 'Saudação' | 'Feedback' | 'QR Code / Link' | 'Outro' | undefined,
    inducaoQrModo: (jornadaEditando as { inducaoQrModo?: 'nao' | 'sim' | 'padrao' | 'checkin' }).inducaoQrModo || 'nao',
    jornadaInducao: jornadaEditando.jornadaInducao || '',
    tema: jornadaEditando.tema || '',
    nomeHashInicial: jornadaEditando.nomeHashInicial || '',
    hashInicio: jornadaEditando.hashInicio || '',
    tituloFluxo: jornadaEditando.tituloFluxo || '',
    descricaoFluxo: jornadaEditando.descricaoFluxo || '',
    inputGatilho: jornadaEditando.inputGatilho || '',
    canais: jornadaEditando.canais || [],
    linkFigma: jornadaEditando.linkFigma || '',
    utilizaIAGenerativa: jornadaEditando.utilizaIAGenerativa || false,
    iaGenerativaRespondeCliente: jornadaEditando.iaGenerativaRespondeCliente || false,
    hashPermanece: jornadaEditando.hashPermanece as 'sim' | 'nao' | undefined,
    novaHashNome: jornadaEditando.novaHashNome || '',
    novaHashCodigo: jornadaEditando.novaHashCodigo || '',
    dataAlteracao: jornadaEditando.dataAlteracao || '',
    detalhesAlteracao: jornadaEditando.detalhesAlteracao || '',
    linkFigmaAlteracao: jornadaEditando.linkFigmaAlteracao || '',
    codigoFluxoCatalogo: jornadaEditando.codigoFluxoCatalogo || '',
    linkPlanoRequisitos: jornadaEditando.linkPlanoRequisitos || '',
    ausenciaPlanoRequisitos: jornadaEditando.ausenciaPlanoRequisitos || '',
    canalOutro: '',
    alteracaoReferenteTRN: 'nao'
  } : undefined;
  
  const { register, watch, handleSubmit, setValue, control, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      inducaoQrModo: 'nao',
      ...defaultValues,
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const tipoInclusao = watch('tipoInclusao');
  const tipoHU = watch('tipoHU');
  const periodicidade = watch('periodicidade');
  const contextoInducao = watch('contextoInducao');
  const inducaoQrModo = watch('inducaoQrModo');

  useEffect(() => {
    if (contextoInducao !== 'QR Code / Link') {
      setValue('inducaoQrModo', 'nao');
    }
  }, [contextoInducao, setValue]);

  // Watch all form fields to calculate progress
  const formValues = watch();
  
  // Determinar o número total de passos baseado no tipo de inclusão
  const totalSteps = (tipoInclusao === 'alteracao' || tipoInclusao === 'alteracao-trn') 
    ? 2 
    : (tipoHU === 'Transação' || tipoHU === 'Indução' || tipoHU === 'Informacional') && tipoInclusao === 'novo'
    ? 4
    : 5;

  // Atualizar o valor de canais no formulário quando canalSelecionado mudar
  const handleCanaisChange = (values: string[]) => {
    const canal = values[0] || '';
    setCanalSelecionado(canal);
    setValue('canais', [canal]); // Manter como array para compatibilidade com a interface
  };

  // Calculate completion percentage for each step
  const calculateStepCompletion = (step: number): number => {
    let total = 0;
    let filled = 0;

    switch (step) {
      case 1: // Informações Básicas
        total = 5;
        if (formValues.numeroHistoria) filled++;
        if (formValues.tipoInclusao) filled++;
        if (formValues.dataImplementacao) filled++;
        if (formValues.diretoria) filled++;
        if (formValues.tipoHU) filled++;
        break;

      case 2: // Sistema e Periodicidade
        total = tipoInclusao === 'novo' ? 3 : 4; // Se for novo, não conta RME
        if (tipoInclusao !== 'novo' && formValues.rme) filled++;
        if (formValues.sistemaResponsavel) filled++;
        if (formValues.periodicidade) filled++;
        if (formValues.templateMeta) filled++;
        break;

      case 3: // Categoria e Tema
        total = tipoHU === 'Ativo' ? 4 : 3;
        if (tipoHU === 'Ativo' && formValues.categoriaAtivo) filled++;
        if (tipoHU === 'Indução' && formValues.contextoInducao) filled++;
        if (tipoHU === 'Indução' && formValues.jornadaInducao) filled++;
        if (formValues.tema) filled++;
        if (formValues.nomeHashInicial) filled++;
        if (formValues.hashInicio) filled++;
        break;

      case 4: // Título e Descrição
        total = 2;
        if (formValues.tituloFluxo) filled++;
        if (formValues.descricaoFluxo) filled++;
        break;

      case 5: // Canal e Gatilho
        total = 2;
        if (formValues.inputGatilho) filled++;
        if (canalSelecionado) filled++;
        break;
    }

    return total > 0 ? (filled / total) * 100 : 0;
  };

  const onSubmit = (data: FormData) => {
    const canalFinal = canalSelecionado === 'Outros'
      ? (data.canalOutro?.trim() || 'Outros')
      : canalSelecionado;
    const formData = {
      ...data,
      canais: canalFinal ? [canalFinal] : [],
      numeroHistoria: normalizeNumeroHistoria(data.numeroHistoria),
    };
    console.log('=== DEBUG FORMULÁRIO ===');
    console.log('1. Dados brutos do formulário (data):', data);
    console.log('2. Canal selecionado:', canalSelecionado);
    console.log('3. FormData completo a ser enviado:', formData);
    console.log('4. Campos específicos:');
    console.log('   - numeroHistoria:', formData.numeroHistoria);
    console.log('   - dataImplementacao:', formData.dataImplementacao);
    console.log('   - diretoria:', formData.diretoria);
    console.log('   - tipoHU:', formData.tipoHU);
    console.log('   - sistemaResponsavel:', formData.sistemaResponsavel);
    console.log('   - periodicidade:', formData.periodicidade);
    console.log('   - templateMeta:', formData.templateMeta);
    console.log('   - tema:', formData.tema);
    console.log('   - nomeHashInicial:', formData.nomeHashInicial);
    console.log('   - hashInicio:', formData.hashInicio);
    console.log('   - tituloFluxo:', formData.tituloFluxo);
    console.log('   - descricaoFluxo:', formData.descricaoFluxo);
    console.log('   - inputGatilho:', formData.inputGatilho);
    console.log('========================');
    onSubmitSuccess(formData);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    nextStep();
  };

  const handlePrevClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    prevStep();
  };

  // Função para voltar ao início
  const voltarParaInicio = () => {
    setCurrentStep(1);
  };

  // Função para formatar o texto do breadcrumb
  const getBreadcrumbText = () => {
    const tipoTexto = tipoInclusao === 'novo' ? 'Novo Fluxo' : 
                      tipoInclusao === 'alteracao' ? 'Alteração de Fluxo Existente' : 
                      'Alteração de TRN';
    return `${tipoTexto} / ${tipoHU}`;
  };

  return (
    <div className="w-full">
      {/* Label acima da timeline */}
      <div className="content-stretch flex flex-col items-start relative mb-6">
        <p className="css-ew64yg font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[18px]">Preencha as informações abaixo:</p>
      </div>

      {/* Breadcrumb - aparece apenas quando a timeline está visível (currentStep > 1) */}
      {currentStep > 1 && (
        <div className="mb-4">
          <button 
            onClick={voltarParaInicio}
            className="content-stretch flex items-center relative h-[20px] cursor-pointer bg-transparent border-none p-0 hover:opacity-80 transition-opacity"
            type="button"
          >
            <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
              <div className="flex flex-row items-center self-stretch">
                <div className="content-stretch flex flex-col h-full items-start relative shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <div className="absolute inset-[12.5%_12.5%_16.67%_12.5%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11.3333">
                        <path d={breadcrumbSvgPaths.p3c9e7b00} fill="var(--fill-0, #2D37F5)"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
                <div className="flex flex-col font-['BancoDoBrasil_Textos:Medium',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#4668ff] text-[14px] text-ellipsis tracking-[0.07px] whitespace-nowrap">
                  <p className="leading-[1.125] overflow-hidden">{getBreadcrumbText()}</p>
                </div>
              </div>
            </div>
          </button>
        </div>
      )}

      {/* Timeline */}
      <div className="mb-12">
        <div className="content-stretch flex gap-[19px] items-start relative">
          {/* Steps */}
          {Array.from({ length: currentStep === 1 ? 1 : totalSteps }).map((_, index) => {
            const step = index + 1;
            const completion = calculateStepCompletion(step);
            const isComplete = completion === 100;
            const hasProgress = completion > 0 && completion < 100;
            const isActive = step === currentStep;
            
            // Labels específicos para cada fluxo
            const stepLabelsNovo = [
              'Informações Básicas',
              'Sistema e Periodicidade',
              'Categoria e Tema',
              'Título e Descrição',
              'Gatilho e Link'
            ];
            
            const stepLabelsTransacao = [
              'Informações Básicas',
              'Tema e Hash',
              'Título e Descrição',
              'Gatilho e Link'
            ];

            const stepLabelsInducao = [
              'Informações Básicas',
              'Categoria e Tema',
              'Título e Descrição',
              'Gatilho e Link'
            ];

            const stepLabelsInformacional = [
              'Informações Básicas',
              'Categoria e Tema',
              'Título e Descrição',
              'Gatilho e Link'
            ];
            
            const stepLabelsAlteracao = [
              'Informações Básicas',
              'Hash e Alterações'
            ];
            
            const labels = (tipoInclusao === 'alteracao' || tipoInclusao === 'alteracao-trn') 
              ? stepLabelsAlteracao 
              : tipoHU === 'Transação' && tipoInclusao === 'novo'
              ? stepLabelsTransacao
              : tipoHU === 'Indução' && tipoInclusao === 'novo'
              ? stepLabelsInducao
              : tipoHU === 'Informacional' && tipoInclusao === 'novo'
              ? stepLabelsInformacional
              : stepLabelsNovo;
            
            return (
              <div key={step} className="h-[61px] relative shrink-0 w-[152.181px]">
                {/* Botão invisível para tornar clicável */}
                <button
                  type="button"
                  onClick={() => setCurrentStep(step)}
                  className="absolute inset-0 w-full h-full bg-transparent border-none cursor-pointer p-0 m-0 z-10"
                  style={{ WebkitAppearance: 'none', appearance: 'none' }}
                />
                
                {/* Progress Bar Background */}
                <div className="absolute bg-[#eff0f6] inset-[22.13%_0_68.03%_35.54%] rounded-[40px] pointer-events-none" />
                
                {/* Progress Bar Fill */}
                {(hasProgress || isComplete) && (
                  <div 
                    className="absolute inset-[22.13%_0_68.03%_35.54%] rounded-[40px] transition-all duration-300 pointer-events-none"
                    style={{
                      background: isComplete ? '#22C55E' : '#4a3aff',
                      width: `${completion * 0.6446}%`,
                      left: '35.54%'
                    }}
                  />
                )}

                {/* Content Container */}
                <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[2px] top-0 w-[152px] pointer-events-none">
                  {/* Circle with Number */}
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
                    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1">
                      <div className="col-1 ml-0 mt-0 relative row-1 size-[34px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
                          <circle 
                            cx="17" 
                            cy="17" 
                            fill={isActive ? '#4A3AFF' : isComplete ? '#22C55E' : '#EFF0F6'} 
                            r="17" 
                          />
                        </svg>
                      </div>
                      <p 
                        className={`col-1 css-ew64yg font-['DM_Sans:Regular',sans-serif] font-normal leading-[23px] ml-[16.5px] mt-[4.53px] relative row-1 text-[16px] text-center translate-x-[-50%] ${
                          isActive || isComplete ? 'text-white' : 'text-[#6f6c90]'
                        }`}
                        style={{ fontVariationSettings: "'opsz' 14" }}
                      >
                        {step}
                      </p>
                    </div>
                  </div>

                  {/* Label */}
                  <div className="content-stretch flex flex-col h-[24px] items-start justify-center px-0 py-[3px] relative shrink-0 w-full">
                    <div className={`flex flex-col font-['BancoDoBrasil_Textos:Regular',sans-serif] justify-center leading-[1.125] not-italic relative shrink-0 text-[12px] tracking-[0.168px] w-full ${
                      isActive ? 'text-[#191e76]' : 'text-[#b4b9c1]'
                    }`}>
                      {labels[index].includes(' ') ? (
                        <>
                          <p className="css-4hzbpn mb-0">{labels[index].split(' ')[0]}</p>
                          <p className="css-4hzbpn">{labels[index].split(' ').slice(1).join(' ')}</p>
                        </>
                      ) : (
                        <p className="css-4hzbpn">{labels[index]}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Informação sobre passos dinâmicos - aparece apenas no passo 1 */}
      {currentStep === 1 && (
        <div className="mb-8 bg-[#e8f2ff] flex flex-col items-start justify-center p-[12px] relative rounded-[8px] max-w-[720px]">
          <div aria-hidden="true" className="absolute border border-[#4a90e2] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="relative w-full">
            <div className="flex items-start gap-[8px]">
              <div className="relative shrink-0 size-[20px] mt-[1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="8" stroke="#2D37F5" strokeWidth="1.5" fill="none"/>
                  <path d="M10 6.5v4.5M10 13.5h.01" stroke="#2D37F5" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[14px] leading-[1.4]">O número de etapas pode variar dependendo do tipo de inclusão selecionada</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Formulário */}
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="space-y-8"
        onKeyDown={(e) => {
          // Prevenir submit ao pressionar Enter, exceto na última etapa
          if (e.key === 'Enter' && currentStep < totalSteps && e.target instanceof HTMLInputElement) {
            e.preventDefault();
            nextStep();
          }
        }}
      >
        {/* Passo 0: Tela de Boas-Vindas/Direcionamento */}
        {currentStep === 0 && (
          <div className="space-y-6 max-w-3xl">
            {/* Título Principal */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#191E76] mb-4">
                Bem-vindo ao Cadastro de Jornadas
              </h1>
              <p className="text-lg text-[#6F6C90]">
                Portal CAD - Catálogo de Jornadas do Banco do Brasil
              </p>
            </div>

            {/* Cartão de Introdução */}
            <div className="bg-[#F0F2FF] border border-[#4A3AFF] rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-[#191E76] mb-4">
                📋 Sobre este Formulário
              </h2>
              <p className="text-[#6F6C90] mb-4">
                Este é o formulário oficial para registro e atualização de jornadas no Catálogo do Portal CAD. 
                Aqui você pode cadastrar <strong>novas jornadas</strong>, solicitar <strong>alterações em fluxos existentes</strong> ou incluir <strong>novos planos de requisitos (TRN)</strong>.
              </p>
              <p className="text-[#6F6C90]">
                O formulário possui <strong>18 perguntas</strong> organizadas em <strong>6 etapas</strong> para facilitar o preenchimento.
              </p>
            </div>

            {/* Fluxo do Processo */}
            <div className="bg-white border border-[#B4B9C1] rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-[#191E76] mb-4">
                🔄 Como Funciona o Processo
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#4A3AFF] text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111214] mb-1">Preenchimento do Formulário</h3>
                    <p className="text-sm text-[#6F6C90]">
                      Preencha todas as informações solicitadas nas 6 etapas. Campos marcados com * são obrigatórios.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#4A3AFF] text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111214] mb-1">Envio para Validação</h3>
                    <p className="text-sm text-[#6F6C90]">
                      Ao concluir, sua jornada será enviada automaticamente para a equipe de <strong>Governança</strong> com status <strong>"Em Análise"</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#4A3AFF] text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111214] mb-1">Análise pela Governança</h3>
                    <p className="text-sm text-[#6F6C90]">
                      A equipe de Governança irá revisar as informações. O status pode mudar para: <strong>Aprovado</strong>, <strong>Pendente Correção</strong> ou <strong>Rejeitado</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#4A3AFF] text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111214] mb-1">Atualização no Catálogo</h3>
                    <p className="text-sm text-[#6F6C90]">
                      Após aprovação, a jornada será incluída ou atualizada automaticamente na <strong>base única de dados</strong> do Catálogo de Jornadas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Avisos Importantes */}
            <div className="bg-[#ffdf9f] flex flex-col items-start justify-center p-[16px] relative rounded-[10px]">
              <div aria-hidden="true" className="absolute border border-[#ffb31a] border-solid inset-0 pointer-events-none rounded-[10px]" />
              <div className="relative w-full text-[#686c73] text-[14px]">
                <p className="mb-0 font-bold text-base">
                  ⚠️ Pontos Importantes
                </p>
                <br />
                <ul className="space-y-2 ml-4">
                  <li><strong>• Base Única:</strong> Todos os registros são armazenados em uma base centralizada para garantir consistência.</li>
                  <li><strong>• Devolução para Correção:</strong> Se houver inconsistências, você será notificado e poderá fazer as correções necessárias.</li>
                  <li><strong>• Acompanhamento:</strong> Você pode acompanhar o status da sua solicitação na aba "Acompanhamento de Jornadas".</li>
                  <li><strong>• Tempo de Análise:</strong> A equipe de Governança analisa as solicitações em até 3 dias úteis.</li>
                </ul>
              </div>
            </div>

            {/* Informação sobre os Passos */}
            <div className="bg-[#F0F2F4] border border-[#B4B9C1] rounded-lg p-6">
              <h3 className="font-semibold text-[#111214] mb-3">
                📝 Etapas do Formulário
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="inline-block w-6 h-6 bg-[#4A3AFF] text-white rounded-full text-center mr-2 text-xs leading-6">1</span>
                  <span className="text-[#6F6C90]">Informações Básicas</span>
                </div>
                <div>
                  <span className="inline-block w-6 h-6 bg-[#4A3AFF] text-white rounded-full text-center mr-2 text-xs leading-6">2</span>
                  <span className="text-[#6F6C90]">Sistema e Periodicidade</span>
                </div>
                <div>
                  <span className="inline-block w-6 h-6 bg-[#4A3AFF] text-white rounded-full text-center mr-2 text-xs leading-6">3</span>
                  <span className="text-[#6F6C90]">Categoria e Tema</span>
                </div>
                <div>
                  <span className="inline-block w-6 h-6 bg-[#4A3AFF] text-white rounded-full text-center mr-2 text-xs leading-6">4</span>
                  <span className="text-[#6F6C90]">Título e Descrição</span>
                </div>
                <div>
                  <span className="inline-block w-6 h-6 bg-[#4A3AFF] text-white rounded-full text-center mr-2 text-xs leading-6">5</span>
                  <span className="text-[#6F6C90]">Canal e Gatilho</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Passo 1: Informações Básicas */}
        {currentStep === 1 && (
          <Passo1Formulario
            register={register}
            errors={errors}
            control={control}
            tipoInclusao={tipoInclusao}
            tipoHU={tipoHU}
            utilizaIAGenerativa={watch('utilizaIAGenerativa')}
            iaGenerativaRespondeCliente={watch('iaGenerativaRespondeCliente')}
          />
        )}

        {/* Passo 2: Tema e Hash - PARA TRANSAÇÃO (NOVO) */}
        {currentStep === 2 && tipoInclusao === 'novo' && (tipoHU === 'Transação') && (
          <Passo2TransacaoInducao
            register={register}
            errors={errors}
            control={control}
            tipoHU={tipoHU}
            contextoInducao={contextoInducao}
          />
        )}

        {/* Passo 2: Sistema e Periodicidade - SOMENTE PARA ATIVO (NOVO) */}
        {currentStep === 2 && tipoInclusao === 'novo' && tipoHU === 'Ativo' && (
          <Passo2Formulario
            register={register}
            errors={errors}
            control={control}
            periodicidade={periodicidade}
            tipoHU={tipoHU}
            tipoInclusao={tipoInclusao}
          />
        )}

        {/* Passo 2: Código do Fluxo e Hash e Alterações - SOMENTE PARA ALTERAÇÃO (TUDO EM UM PASSO) */}
        {currentStep === 2 && (tipoInclusao === 'alteracao' || tipoInclusao === 'alteracao-trn') && (
          <PassoAlteracaoCompleto
            register={register}
            errors={errors}
            watch={watch}
            setValue={setValue}
          />
        )}

        {/* Passo 3: Título e Canal - PARA TRANSAÇÃO (NOVO) */}
        {currentStep === 3 && tipoInclusao === 'novo' && (tipoHU === 'Transação') && (
          <Passo3TransacaoInducao
            register={register}
            errors={errors}
            canaisSelecionados={canalSelecionado}
            onCanaisChange={handleCanaisChange}
            tipoHU={tipoHU}
            watch={watch}
          />
        )}

        {/* Passo 2: Categoria e Tema - PARA INDUÇÃO e INFORMACIONAL (NOVO) */}
        {currentStep === 2 && tipoInclusao === 'novo' && (tipoHU === 'Indução' || tipoHU === 'Informacional') && (
          <Passo3Formulario
            register={register}
            errors={errors}
            tipoHU={tipoHU}
            contextoInducao={contextoInducao}
            inducaoQrModo={inducaoQrModo}
          />
        )}

        {/* Passo 3: Categoria e Tema - SOMENTE PARA ATIVO (NOVO) */}
        {currentStep === 3 && tipoInclusao === 'novo' && tipoHU === 'Ativo' && (
          <Passo3Formulario
            register={register}
            errors={errors}
            tipoHU={tipoHU}
            contextoInducao={contextoInducao}
            inducaoQrModo={inducaoQrModo}
          />
        )}

        {/* Passo 3: Título e Descrição - PARA INDUÇÃO e INFORMACIONAL (NOVO) */}
        {currentStep === 3 && tipoInclusao === 'novo' && (tipoHU === 'Indução' || tipoHU === 'Informacional') && (
          <Passo4Formulario
            register={register}
            errors={errors}
            watch={watch}
            setValue={setValue}
          />
        )}

        {/* Passo 4: Título e Descrição - SOMENTE PARA ATIVO (NOVO) */}
        {currentStep === 4 && tipoInclusao === 'novo' && tipoHU === 'Ativo' && (
          <Passo4Formulario
            register={register}
            errors={errors}
            watch={watch}
            setValue={setValue}
          />
        )}

        {/* Passo 4: Canal e Gatilho - PARA TRANSAÇÃO (NOVO) */}
        {currentStep === 4 && tipoInclusao === 'novo' && (tipoHU === 'Transação') && (
          <Passo4CanalGatilho
            register={register}
            errors={errors}
            canaisSelecionados={canalSelecionado}
            onCanaisChange={handleCanaisChange}
          />
        )}

        {/* Passo 4: Canal e Gatilho - PARA INDUÇÃO e INFORMACIONAL (NOVO) */}
        {currentStep === 4 && tipoInclusao === 'novo' && (tipoHU === 'Indução' || tipoHU === 'Informacional') && (
          <Passo5Formulario
            register={register}
            errors={errors}
            canaisSelecionados={canalSelecionado}
            onCanaisChange={handleCanaisChange}
          />
        )}

        {/* Passo 5: Canal e Gatilho - SOMENTE PARA ATIVO (NOVO) */}
        {currentStep === 5 && tipoInclusao === 'novo' && tipoHU === 'Ativo' && (
          <Passo5Formulario
            register={register}
            errors={errors}
            canaisSelecionados={canalSelecionado}
            onCanaisChange={handleCanaisChange}
          />
        )}

        {/* Botões de Navegação */}
        <div className="flex justify-end items-center pt-8 border-t">
          {/* Botões de navegação à direita */}
          <div className="flex gap-[7px]">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="secondary"
                onClick={handlePrevClick}
              >
                VOLTAR
              </Button>
            )}
            
            {currentStep < totalSteps ? (
              <Button
                type="button"
                variant="primary"
                onClick={handleNextClick}
              >
                PRÓXIMO
              </Button>
            ) : (
              <Button
                type="submit"
                variant="primary"
              >
                ENVIAR PARA VALIDAÇÃO
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}