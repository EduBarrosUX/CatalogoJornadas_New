import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowLeft, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { InputField } from '@/app/components/InputField';
import { TextAreaField } from '@/app/components/TextAreaField';

interface FormularioJornadasProps {
  onBack: () => void;
}

type TipoInclusao = 'novo' | 'alteracao' | 'alteracao-trn';
type TipoJornada = 'Transação' | 'Ativo' | 'Indução';
type Periodicidade = 'unico' | 'recorrente';

interface FormData {
  // Passo 1: Tipo de Inclusão
  numeroHistoria: string;
  tipoInclusao: TipoInclusao;
  dataImplementacao: string;
  
  // Passo 2: Informações Básicas
  diretoria: string;
  tipoJornada: TipoJornada;
  rme: string;
  sistemaResponsavel: string;
  
  // Passo 3: Configuração da Jornada
  periodicidade: Periodicidade;
  templateMeta: string;
  categoriaAtivo?: string;
  tema: string;
  
  // Passo 4: Detalhes Técnicos
  nomeHashInicial: string;
  hashInicio: string;
  tituloFluxo: string;
  descricaoFluxo: string;
  
  // Passo 5: Publicação
  inputGatilho: string;
  canais: string[];
  linkFigma: string;
}

const TOTAL_STEPS = 5;

export function FormularioJornadas({ onBack }: FormularioJornadasProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const { register, watch, handleSubmit, formState: { errors } } = useForm<FormData>();
  
  const tipoInclusao = watch('tipoInclusao');
  const tipoJornada = watch('tipoJornada');
  const periodicidade = watch('periodicidade');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Dados do formulário:', data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    setTimeout(() => {
      onBack();
    }, 3000);
  };

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#4E9BF3] to-white flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full text-center">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Jornada Registrada com Sucesso!
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Sua solicitação foi enviada para validação da equipe de Governança.
          </p>
          <p className="text-gray-500">
            Você receberá uma notificação quando o processo for concluído.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4E9BF3] to-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header do Formulário */}
        <div className="bg-white rounded-t-2xl shadow-xl p-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#4162BE] hover:text-[#2d4594] mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Voltar ao Catálogo</span>
          </button>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Registrar Nova Jornada
          </h1>
          <p className="text-gray-600 mb-6">
            Preencha os dados da jornada para validação pela Governança
          </p>
          
          {/* Progress Bar */}
          <div className="relative">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                      step === currentStep
                        ? 'bg-[#4162BE] text-white scale-110'
                        : step < currentStep
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step < currentStep ? '✓' : step}
                  </div>
                  <span className="text-xs text-gray-600 mt-1 text-center">
                    {step === 1 && 'Tipo'}
                    {step === 2 && 'Info Básicas'}
                    {step === 3 && 'Configuração'}
                    {step === 4 && 'Detalhes'}
                    {step === 5 && 'Publicação'}
                  </span>
                </div>
              ))}
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#4162BE] to-[#4E9BF3] transition-all duration-500"
                style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-b-2xl shadow-xl p-8">
          {/* Passo 1: Tipo de Inclusão */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Passo 1: Tipo de Inclusão
              </h2>
              
              <InputField
                label="Número da História no GENTI *"
                placeholder="Ex: HU-12345"
                {...register('numeroHistoria', { required: 'Campo obrigatório' })}
                error={errors.numeroHistoria?.message}
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Sua inclusão é referente a: *
                </label>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#4162BE] transition-colors">
                    <input
                      type="radio"
                      value="novo"
                      {...register('tipoInclusao', { required: 'Campo obrigatório' })}
                      className="mt-1"
                    />
                    <div>
                      <div className="font-medium text-gray-800">Novo fluxo</div>
                      <div className="text-sm text-gray-600">Nunca esteve no catálogo</div>
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#4162BE] transition-colors">
                    <input
                      type="radio"
                      value="alteracao"
                      {...register('tipoInclusao', { required: 'Campo obrigatório' })}
                      className="mt-1"
                    />
                    <div>
                      <div className="font-medium text-gray-800">Alteração de fluxo existente</div>
                      <div className="text-sm text-gray-600">Já está no catálogo e será atualizado</div>
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#4162BE] transition-colors">
                    <input
                      type="radio"
                      value="alteracao-trn"
                      {...register('tipoInclusao', { required: 'Campo obrigatório' })}
                      className="mt-1"
                    />
                    <div>
                      <div className="font-medium text-gray-800">Alteração de TRN</div>
                      <div className="text-sm text-gray-600">Incluir novo plano de requisitos</div>
                    </div>
                  </label>
                </div>
                {errors.tipoInclusao && (
                  <p className="text-red-500 text-sm mt-1">{errors.tipoInclusao.message}</p>
                )}
              </div>

              <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
                <p className="font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
                  Data de implementação em Produção no NIA *
                </p>
                <div className="content-stretch flex flex-col items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
                  <div className="bg-[#f0f2f4] h-[39px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center pb-[7px] pl-[12px] pr-[4px] pt-[8px] relative size-full">
                        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
                          <input
                            type="date"
                            {...register('dataImplementacao', { required: 'Campo obrigatório' })}
                            className="flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.25] min-h-px min-w-px not-italic text-[16px] text-[#111214] tracking-[0.08px] bg-transparent border-none outline-none placeholder:text-[rgba(108,112,119,0.5)]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
                </div>
                {errors.dataImplementacao && (
                  <p className="text-red-500 text-sm mt-1">{errors.dataImplementacao.message}</p>
                )}
              </div>
            </div>
          )}

          {/* Passo 2: Informações Básicas */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Passo 2: Informações Básicas
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Diretoria demandante da HU *
                </label>
                <select
                  {...register('diretoria', { required: 'Campo obrigatório' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4162BE]"
                >
                  <option value="">Selecione a diretoria</option>
                  <option value="DITEC">DITEC - Diretoria de Tecnologia</option>
                  <option value="DILOG">DILOG - Diretoria de Logística</option>
                  <option value="DIMKT">DIMKT - Diretoria de Marketing</option>
                  <option value="DIPRO">DIPRO - Diretoria de Produtos</option>
                  <option value="DICOM">DICOM - Diretoria Comercial</option>
                </select>
                {errors.diretoria && (
                  <p className="text-red-500 text-sm mt-1">{errors.diretoria.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Sua HU é referente à: *
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <label className="flex flex-col items-center gap-2 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#4162BE] transition-colors">
                    <input
                      type="radio"
                      value="Transação"
                      {...register('tipoJornada', { required: 'Campo obrigatório' })}
                    />
                    <span className="font-medium">Transação</span>
                  </label>
                  <label className="flex flex-col items-center gap-2 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#4162BE] transition-colors">
                    <input
                      type="radio"
                      value="Ativo"
                      {...register('tipoJornada', { required: 'Campo obrigatório' })}
                    />
                    <span className="font-medium">Ativo</span>
                  </label>
                  <label className="flex flex-col items-center gap-2 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#4162BE] transition-colors">
                    <input
                      type="radio"
                      value="Indução"
                      {...register('tipoJornada', { required: 'Campo obrigatório' })}
                    />
                    <span className="font-medium">Indução</span>
                  </label>
                </div>
                {errors.tipoJornada && (
                  <p className="text-red-500 text-sm mt-1">{errors.tipoJornada.message}</p>
                )}
              </div>

              <InputField
                label="Qual o RME? *"
                placeholder="Ex: RME-2026-001"
                {...register('rme', { required: 'Campo obrigatório' })}
                error={errors.rme?.message}
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sistema Responsável *
                </label>
                <select
                  {...register('sistemaResponsavel', { required: 'Campo obrigatório' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4162BE]"
                >
                  <option value="">Selecione o sistema</option>
                  <option value="NIA">NIA</option>
                  <option value="META">META</option>
                  <option value="SAC">SAC</option>
                  <option value="CRM">CRM</option>
                </select>
                {errors.sistemaResponsavel && (
                  <p className="text-red-500 text-sm mt-1">{errors.sistemaResponsavel.message}</p>
                )}
              </div>
            </div>
          )}

          {/* Passo 3: Configuração da Jornada */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Passo 3: Configuração da Jornada
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Qual a periodicidade de envio? *
                </label>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#4162BE] transition-colors">
                    <input
                      type="radio"
                      value="unico"
                      {...register('periodicidade', { required: 'Campo obrigatório' })}
                      className="mt-1"
                    />
                    <div>
                      <div className="font-medium text-gray-800">Disparo único</div>
                      <div className="text-sm text-gray-600">Realizado em data ou período específico</div>
                    </div>
                  </label>
                  
                  <label className="flex items-start gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#4162BE] transition-colors">
                    <input
                      type="radio"
                      value="recorrente"
                      {...register('periodicidade', { required: 'Campo obrigatório' })}
                      className="mt-1"
                    />
                    <div>
                      <div className="font-medium text-gray-800">Disparo recorrente</div>
                      <div className="text-sm text-gray-600">Realizado sem interrupção</div>
                    </div>
                  </label>
                </div>
                {errors.periodicidade && (
                  <p className="text-red-500 text-sm mt-1">{errors.periodicidade.message}</p>
                )}
              </div>

              <InputField
                label="Nome do template na META *"
                placeholder="Ex: template_boas_vindas"
                {...register('templateMeta', { required: 'Campo obrigatório' })}
                error={errors.templateMeta?.message}
              />

              {tipoJornada === 'Ativo' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Categoria do Ativo na Meta *
                  </label>
                  <select
                    {...register('categoriaAtivo', { required: tipoJornada === 'Ativo' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4162BE]"
                  >
                    <option value="">Selecione a categoria</option>
                    <option value="Autenticação">Autenticação</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Utilidade">Utilidade</option>
                  </select>
                  {errors.categoriaAtivo && (
                    <p className="text-red-500 text-sm mt-1">{errors.categoriaAtivo.message}</p>
                  )}
                </div>
              )}

              <InputField
                label="Tema do fluxo *"
                placeholder="Ex: Agronegócio, Investimentos, Crédito..."
                {...register('tema', { required: 'Campo obrigatório' })}
                error={errors.tema?.message}
              />
            </div>
          )}

          {/* Passo 4: Detalhes Técnicos */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Passo 4: Detalhes Técnicos
              </h2>
              
              <InputField
                label="Nome da Hash Inicial *"
                placeholder="Para ativos e induções, se a jornada estiver em uma múltipla resposta, informe a hash da múltipla"
                {...register('nomeHashInicial', { required: 'Campo obrigatório' })}
                error={errors.nomeHashInicial?.message}
              />

              <InputField
                label="Hash de início (UUID/Hash) *"
                placeholder="Ex: d823ab05-639c-11ea-bff3-005056924583"
                {...register('hashInicio', { required: 'Campo obrigatório' })}
                error={errors.hashInicio?.message}
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Título do Fluxo *
                </label>
                <div className="mb-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Formato:</strong> Inicie com Tipo de jornada + Público
                  </p>
                  <ul className="text-xs text-blue-700 mt-2 space-y-1 ml-4">
                    <li>• Ativo PF → "Ativo PF – Título"</li>
                    <li>• Transação → "Transação – Título"</li>
                    <li>• Indução Saudação → "Indução Saudação – Título"</li>
                  </ul>
                </div>
                <InputField
                  placeholder="Ex: Ativo PF – Abertura de Conta Digital"
                  {...register('tituloFluxo', { required: 'Campo obrigatório' })}
                  error={errors.tituloFluxo?.message}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descrição do Fluxo *
                </label>
                <div className="mb-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    💡 <strong>Dica:</strong> Utilize o agente 'Descreve Aí' para auxiliá-lo na descrição
                  </p>
                </div>
                <textarea
                  {...register('descricaoFluxo', { required: 'Campo obrigatório' })}
                  placeholder="Descreva detalhadamente o que o fluxo aborda, incluindo funcionalidades e escopo do trabalho"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4162BE]"
                />
                {errors.descricaoFluxo && (
                  <p className="text-red-500 text-sm mt-1">{errors.descricaoFluxo.message}</p>
                )}
              </div>
            </div>
          )}

          {/* Passo 5: Publicação */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Passo 5: Publicação e Canais
              </h2>
              
              <InputField
                label="Input ou gatilho para acessar este fluxo *"
                placeholder="Ex: Palavra-chave, comando, botão..."
                {...register('inputGatilho', { required: 'Campo obrigatório' })}
                error={errors.inputGatilho?.message}
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Canais onde o fluxo será disponibilizado *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      value="WhatsApp PF"
                      {...register('canais', { required: 'Selecione pelo menos um canal' })}
                    />
                    <span>📱 WhatsApp PF</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      value="WhatsApp PJ"
                      {...register('canais')}
                    />
                    <span>💼 WhatsApp PJ</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      value="App BB"
                      {...register('canais')}
                    />
                    <span>📲 App BB</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      value="Outros"
                      {...register('canais')}
                    />
                    <span>🌐 Outros</span>
                  </label>
                </div>
                {errors.canais && (
                  <p className="text-red-500 text-sm mt-1">{errors.canais.message}</p>
                )}
              </div>

              <InputField
                label="Link do Figma"
                type="url"
                placeholder="https://www.figma.com/file/..."
                {...register('linkFigma')}
              />

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-yellow-800 mb-1">
                      Atenção: Revisão antes do envio
                    </h3>
                    <p className="text-sm text-yellow-700">
                      Após o envio, sua solicitação será analisada pela equipe de Governança. 
                      Caso necessário, a jornada poderá ser devolvida para correções.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Botões de Navegação */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              Anterior
            </button>

            {currentStep < TOTAL_STEPS ? (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#4162BE] to-[#4E9BF3] text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
              >
                Próximo
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-medium hover:shadow-lg transition-shadow disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Enviar para Validação
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}