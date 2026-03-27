import { InputField } from '@/app/components/InputField';

export function TesteInputs() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold mb-8">Teste de Inputs</h1>
        
        <div>
          <h2 className="text-xl font-bold mb-4 text-blue-600">Campo com InputField (Estilo Novo)</h2>
          <InputField
            label="Número da História no GENTI *"
            placeholder="Ex: HU-12345"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 text-blue-600">Campo com InputField (Estilo Novo)</h2>
          <InputField
            label="Qual o RME? *"
            placeholder="Ex: RME-2026-001"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 text-blue-600">Campo com InputField (Estilo Novo)</h2>
          <InputField
            label="Link do Figma"
            type="url"
            placeholder="https://www.figma.com/file/..."
          />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 text-red-600">Campo Manual (Estilo Antigo - Exemplo)</h2>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Campo Antigo
          </label>
          <input
            type="text"
            placeholder="Exemplo de campo antigo"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4162BE]"
          />
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="font-bold mb-4">Características do InputField Novo:</h3>
          <ul className="space-y-2 text-sm">
            <li>✅ Fundo cinza claro: <code className="bg-white px-2 py-1 rounded">bg-[#f0f2f4]</code></li>
            <li>✅ Linha inferior cinza: <code className="bg-white px-2 py-1 rounded">bg-[#b4b9c1]</code></li>
            <li>✅ Placeholder em cinza: <code className="bg-white px-2 py-1 rounded">#686c73</code></li>
            <li>✅ Texto digitado em preto: <code className="bg-white px-2 py-1 rounded">#111214</code></li>
            <li>✅ Sem bordas laterais</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
