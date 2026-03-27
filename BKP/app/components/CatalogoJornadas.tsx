import { useState } from 'react';
import { Search, Filter, Eye, Edit, AlertCircle } from 'lucide-react';
import imgBotBb3 from "@/assets/8b3523da08f6e37f29519d412d072f53a0eabe2a.png";

interface CatalogoJornadasProps {
  onNavigateToForm: () => void;
  isExternal: boolean;
}

interface Jornada {
  id: string;
  titulo: string;
  tipo: 'Transação' | 'Ativo' | 'Indução';
  sistema: string;
  diretoria: string;
  status: 'Ativa' | 'Em Validação' | 'Pendente Correção';
  dataImplementacao: string;
  canal: string[];
}

// Mock data
const mockJornadas: Jornada[] = [
  {
    id: '1',
    titulo: 'Ativo PF – Abertura de Conta Digital',
    tipo: 'Ativo',
    sistema: 'NIA',
    diretoria: 'DITEC',
    status: 'Ativa',
    dataImplementacao: '15/01/2026',
    canal: ['WhatsApp PF', 'App BB']
  },
  {
    id: '2',
    titulo: 'Transação – Pagamento de Boletos',
    tipo: 'Transação',
    sistema: 'NIA',
    diretoria: 'DILOG',
    status: 'Ativa',
    dataImplementacao: '10/01/2026',
    canal: ['WhatsApp PF', 'WhatsApp PJ']
  },
  {
    id: '3',
    titulo: 'Indução Saudação – Boas-vindas Novo Cliente',
    tipo: 'Indução',
    sistema: 'META',
    diretoria: 'DIMKT',
    status: 'Em Validação',
    dataImplementacao: '20/01/2026',
    canal: ['WhatsApp PF']
  },
  {
    id: '4',
    titulo: 'Ativo PJ – Cadastro de Empresa',
    tipo: 'Ativo',
    sistema: 'NIA',
    diretoria: 'DITEC',
    status: 'Pendente Correção',
    dataImplementacao: '05/01/2026',
    canal: ['WhatsApp PJ']
  }
];

export function CatalogoJornadas({ onNavigateToForm, isExternal }: CatalogoJornadasProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTipo, setFilterTipo] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filteredJornadas = mockJornadas.filter(jornada => {
    const matchesSearch = jornada.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         jornada.sistema.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTipo = filterTipo === 'all' || jornada.tipo === filterTipo;
    const matchesStatus = filterStatus === 'all' || jornada.status === filterStatus;
    return matchesSearch && matchesTipo && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ativa': return 'bg-green-100 text-green-800';
      case 'Em Validação': return 'bg-yellow-100 text-yellow-800';
      case 'Pendente Correção': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'Transação': return 'bg-blue-100 text-blue-800';
      case 'Ativo': return 'bg-purple-100 text-purple-800';
      case 'Indução': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4E9BF3] to-white">
      {/* Banner Hero */}
      <div className="bg-gradient-to-r from-[#4162BE] to-[#4E9BF3] text-white py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-6xl font-bold mb-4">Catálogo de Jornadas</h1>
              <p className="text-2xl opacity-90">Acompanhe e registre as entregas da sua squad</p>
            </div>
            <div className="w-80 h-80 relative">
              <img 
                src={imgBotBb3} 
                alt="Bot BB"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 pb-12">
        {/* Card de Busca e Filtros */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por título ou sistema..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4162BE]"
              />
            </div>
            
            <div className="flex gap-4">
              <select
                value={filterTipo}
                onChange={(e) => setFilterTipo(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4162BE]"
              >
                <option value="all">Todos os Tipos</option>
                <option value="Transação">Transação</option>
                <option value="Ativo">Ativo</option>
                <option value="Indução">Indução</option>
              </select>
              
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4162BE]"
              >
                <option value="all">Todos os Status</option>
                <option value="Ativa">Ativa</option>
                <option value="Em Validação">Em Validação</option>
                <option value="Pendente Correção">Pendente Correção</option>
              </select>
            </div>
          </div>

          {!isExternal && (
            <button
              onClick={onNavigateToForm}
              className="w-full bg-gradient-to-r from-[#4162BE] to-[#4E9BF3] text-white py-3 rounded-lg font-bold hover:shadow-lg transition-shadow"
            >
              ➕ Registrar Nova Jornada
            </button>
          )}
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="text-3xl font-bold text-[#4162BE]">{mockJornadas.length}</div>
            <div className="text-gray-600 text-sm">Total de Jornadas</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="text-3xl font-bold text-green-600">
              {mockJornadas.filter(j => j.status === 'Ativa').length}
            </div>
            <div className="text-gray-600 text-sm">Jornadas Ativas</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="text-3xl font-bold text-yellow-600">
              {mockJornadas.filter(j => j.status === 'Em Validação').length}
            </div>
            <div className="text-gray-600 text-sm">Em Validação</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="text-3xl font-bold text-red-600">
              {mockJornadas.filter(j => j.status === 'Pendente Correção').length}
            </div>
            <div className="text-gray-600 text-sm">Pendentes</div>
          </div>
        </div>

        {/* Lista de Jornadas */}
        <div className="space-y-4">
          {filteredJornadas.length === 0 ? (
            <div className="bg-white rounded-xl shadow p-12 text-center">
              <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Nenhuma jornada encontrada</p>
            </div>
          ) : (
            filteredJornadas.map((jornada) => (
              <div
                key={jornada.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-800">{jornada.titulo}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTipoColor(jornada.tipo)}`}>
                        {jornada.tipo}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(jornada.status)}`}>
                        {jornada.status}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Sistema:</span>
                        <p className="font-medium text-gray-800">{jornada.sistema}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Diretoria:</span>
                        <p className="font-medium text-gray-800">{jornada.diretoria}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Implementação:</span>
                        <p className="font-medium text-gray-800">{jornada.dataImplementacao}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Canais:</span>
                        <p className="font-medium text-gray-800">{jornada.canal.join(', ')}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    <button
                      className="p-2 text-[#4162BE] hover:bg-[#4162BE] hover:text-white rounded-lg transition-colors"
                      title="Visualizar"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    {!isExternal && (
                      <button
                        className="p-2 text-[#4162BE] hover:bg-[#4162BE] hover:text-white rounded-lg transition-colors"
                        title="Editar"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
