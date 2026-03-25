import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowLeft, Send, CheckCircle, MessageSquare, Upload, X } from 'lucide-react';

interface SugestoesExternasProps {
  onBack: () => void;
}

interface SugestaoForm {
  jornadaId: string;
  tipo: 'melhoria' | 'inconsistencia';
  titulo: string;
  descricao: string;
  email: string;
  nome: string;
}

export function SugestoesExternas({ onBack }: SugestoesExternasProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<SugestaoForm>();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
  };

  const onSubmit = async (data: SugestaoForm) => {
    setIsSubmitting(true);
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Sugestão enviada:', data, 'Imagem:', selectedImage);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    setTimeout(() => {
      setSubmitSuccess(false);
      reset();
      setSelectedImage(null);
      setImagePreview(null);
    }, 3000);
  };

  if (submitSuccess) {
    return (
      <div className="w-[1357px] bg-white rounded-[30px] shadow-lg p-12">
        <div className="text-center">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-gray-800 mb-4">
            Sugestão Enviada com Sucesso!
          </h2>
          <p className="text-gray-600 text-lg mb-4 font-['BancoDoBrasil_Textos:Regular',sans-serif]">
            Agradecemos sua contribuição para melhorar o Catálogo de Jornadas.
          </p>
          <p className="text-gray-500 font-['BancoDoBrasil_Textos:Light',sans-serif]">
            Nossa equipe irá analisar sua sugestão em breve.
          </p>
          <button
            onClick={onBack}
            className="mt-6 px-6 py-3 bg-[#4162BE] text-white rounded-lg font-['BancoDoBrasil_Titulos:Medium',sans-serif] hover:bg-[#2d4594] transition-colors"
          >
            Voltar ao Formulário
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[1357px]">
      {/* Header */}
      <div className="bg-white rounded-t-[30px] shadow-xl p-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#4162BE] hover:text-[#2d4594] mb-6 transition-colors font-['BancoDoBrasil_Titulos:Medium',sans-serif]"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar ao Formulário</span>
        </button>
        
        <div className="flex items-start gap-4">
          <MessageSquare className="w-12 h-12 text-[#4162BE] flex-shrink-0" />
          <div>
            <h1 className="text-3xl font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-gray-800 mb-2">
              Sugestões e Relato de Erros
            </h1>
            <p className="text-gray-600 font-['BancoDoBrasil_Textos:Regular',sans-serif]">
              Contribua com melhorias ou informe inconsistências encontradas no Catálogo de Jornadas
            </p>
          </div>
        </div>
      </div>

      {/* Formulário */}
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-b-[30px] shadow-xl p-8 space-y-6">
        {/* Informações do Usuário */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-['BancoDoBrasil_Titulos:Medium',sans-serif] text-gray-700 mb-2">
              Seu Nome *
            </label>
            <input
              type="text"
              {...register('nome', { required: 'Campo obrigatório' })}
              placeholder="Digite seu nome completo"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4162BE] font-['BancoDoBrasil_Textos:Regular',sans-serif]"
            />
            {errors.nome && (
              <p className="text-red-500 text-sm mt-1 font-['BancoDoBrasil_Textos:Regular',sans-serif]">{errors.nome.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-['BancoDoBrasil_Titulos:Medium',sans-serif] text-gray-700 mb-2">
              Seu E-mail *
            </label>
            <input
              type="email"
              {...register('email', { 
                required: 'Campo obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'E-mail inválido'
                }
              })}
              placeholder="seu.email@exemplo.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4162BE] font-['BancoDoBrasil_Textos:Regular',sans-serif]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 font-['BancoDoBrasil_Textos:Regular',sans-serif]">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Tipo de Sugestão */}
        <div>
          <label className="block text-sm font-['BancoDoBrasil_Titulos:Medium',sans-serif] text-gray-700 mb-3">
            Tipo de Sugestão *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-start gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#4162BE] transition-colors">
              <input
                type="radio"
                value="melhoria"
                {...register('tipo', { required: 'Campo obrigatório' })}
                className="mt-1"
              />
              <div>
                <div className="font-['BancoDoBrasil_Titulos:Medium',sans-serif] text-gray-800">💡 Sugestão de Melhoria</div>
                <div className="text-sm text-gray-600 font-['BancoDoBrasil_Textos:Regular',sans-serif]">
                  Proponha melhorias para tornar a jornada mais eficiente
                </div>
              </div>
            </label>
            
            <label className="flex items-start gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#4162BE] transition-colors">
              <input
                type="radio"
                value="inconsistencia"
                {...register('tipo', { required: 'Campo obrigatório' })}
                className="mt-1"
              />
              <div>
                <div className="font-['BancoDoBrasil_Titulos:Medium',sans-serif] text-gray-800">🐛 Relatar Inconsistência</div>
                <div className="text-sm text-gray-600 font-['BancoDoBrasil_Textos:Regular',sans-serif]">
                  Informe erros ou problemas encontrados
                </div>
              </div>
            </label>
          </div>
          {errors.tipo && (
            <p className="text-red-500 text-sm mt-1 font-['BancoDoBrasil_Textos:Regular',sans-serif]">{errors.tipo.message}</p>
          )}
        </div>

        {/* Jornada Relacionada */}
        <div>
          <label className="block text-sm font-['BancoDoBrasil_Titulos:Medium',sans-serif] text-gray-700 mb-2">
            Jornada Relacionada (Opcional)
          </label>
          <select
            {...register('jornadaId')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4162BE] font-['BancoDoBrasil_Textos:Regular',sans-serif]"
          >
            <option value="">Selecione a jornada (se aplicável)</option>
            <option value="1">Ativo PF – Abertura de Conta Digital</option>
            <option value="2">Transação – Pagamento de Boletos</option>
            <option value="3">Indução Saudação – Boas-vindas Novo Cliente</option>
            <option value="4">Ativo PJ – Cadastro de Empresa</option>
          </select>
        </div>

        {/* Título */}
        <div>
          <label className="block text-sm font-['BancoDoBrasil_Titulos:Medium',sans-serif] text-gray-700 mb-2">
            Título da Sugestão *
          </label>
          <input
            type="text"
            {...register('titulo', { required: 'Campo obrigatório' })}
            placeholder="Resuma sua sugestão em poucas palavras"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4162BE] font-['BancoDoBrasil_Textos:Regular',sans-serif]"
          />
          {errors.titulo && (
            <p className="text-red-500 text-sm mt-1 font-['BancoDoBrasil_Textos:Regular',sans-serif]">{errors.titulo.message}</p>
          )}
        </div>

        {/* Descrição */}
        <div>
          <label className="block text-sm font-['BancoDoBrasil_Titulos:Medium',sans-serif] text-gray-700 mb-2">
            Descrição Detalhada *
          </label>
          <textarea
            {...register('descricao', { required: 'Campo obrigatório' })}
            placeholder="Descreva detalhadamente sua sugestão ou o problema encontrado"
            rows={8}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4162BE] font-['BancoDoBrasil_Textos:Regular',sans-serif]"
          />
          {errors.descricao && (
            <p className="text-red-500 text-sm mt-1 font-['BancoDoBrasil_Textos:Regular',sans-serif]">{errors.descricao.message}</p>
          )}
        </div>

        {/* Upload de Imagem */}
        <div>
          <label className="block text-sm font-['BancoDoBrasil_Titulos:Medium',sans-serif] text-gray-700 mb-2">
            Anexar Imagem (Opcional)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-[#4162BE] transition-colors">
            {!imagePreview ? (
              <label className="flex flex-col items-center justify-center cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mb-2" />
                <span className="text-sm text-gray-600 font-['BancoDoBrasil_Textos:Regular',sans-serif] mb-1">
                  Clique para selecionar uma imagem
                </span>
                <span className="text-xs text-gray-500 font-['BancoDoBrasil_Textos:Light',sans-serif]">
                  PNG, JPG ou JPEG até 5MB
                </span>
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/jpg"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            ) : (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-h-64 mx-auto rounded-lg"
                />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <p className="text-center mt-2 text-sm text-gray-600 font-['BancoDoBrasil_Textos:Regular',sans-serif]">
                  {selectedImage?.name}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Informativo */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-['BancoDoBrasil_Titulos:Medium',sans-serif] text-blue-800 mb-2">📋 Como sua sugestão será tratada</h3>
          <ul className="text-sm text-blue-700 space-y-1 font-['BancoDoBrasil_Textos:Regular',sans-serif]">
            <li>• Todas as sugestões são analisadas pela equipe de Governança</li>
            <li>• Você receberá um retorno por e-mail sobre o status da sua sugestão</li>
            <li>• Sugestões aprovadas serão implementadas em futuras atualizações</li>
          </ul>
        </div>

        {/* Botões */}
        <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-['BancoDoBrasil_Titulos:Medium',sans-serif] hover:bg-gray-300 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#4162BE] to-[#4E9BF3] text-white rounded-lg font-['BancoDoBrasil_Titulos:Medium',sans-serif] hover:shadow-lg transition-shadow disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Enviar Sugestão
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}