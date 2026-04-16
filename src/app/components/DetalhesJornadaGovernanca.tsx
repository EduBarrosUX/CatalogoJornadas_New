import { JornadaCadastrada } from '@/app/App';
import { AvisoRepresentacaoDetalheJornada } from '@/app/components/AvisoRepresentacaoDetalheJornada';
import svgPaths from '@/imports/svg-r15mp4gs3v';
import Figma from '@/imports/Figma';
import { ComentarioGovernanca } from '@/app/components/ComentarioGovernanca';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SelectField } from '@/app/components/SelectField';
import { ToastNotification } from '@/app/components/ToastNotification';
import { DateInput } from '@/app/components/DateInput';
import Edit from '@/imports/Edit';

type StatusNIAValor = 'Produção' | 'Inativa' | 'Sanitizada' | 'Excluída';

function getTodayIso() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function getTodayBr() {
  const d = new Date();
  const day = String(d.getDate()).padStart(2, '0');
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const y = d.getFullYear();
  return `${day}/${m}/${y}`;
}

function getCurrentTime() {
  const d = new Date();
  const h = String(d.getHours()).padStart(2, '0');
  const min = String(d.getMinutes()).padStart(2, '0');
  return `${h}:${min}`;
}

const STATUS_NIA_COM_DATA: StatusNIAValor[] = ['Inativa', 'Sanitizada', 'Excluída'];

interface DetalhesJornadaGovernancaProps {
  jornada: JornadaCadastrada;
  onVoltar: () => void;
  onSalvar?: (jornadaAtualizada: Partial<JornadaCadastrada>) => void;
  onAbrirFormulario?: (jornada: JornadaCadastrada) => void;
}

export function DetalhesJornadaGovernanca({ jornada, onVoltar, onSalvar, onAbrirFormulario }: DetalhesJornadaGovernancaProps) {
  const getStatusDisplayGestao = (status: string) => {
    if (status === 'Nova') return 'Novo';
    if (status === 'Correção') return 'Devolvido';
    if (status === 'Aprovada') return 'Aprovado';
    if (status === 'Implementada') return 'Publicado';
    if (status === 'Excluída') return 'Invalidado';
    return status;
  };

  // Estado do status que aparece no badge (só muda ao clicar em Salvar)
  const [statusAtual, setStatusAtual] = useState(jornada.status);
  
  // Estado do select (muda conforme o usuário seleciona)
  const [statusSelecionado, setStatusSelecionado] = useState(jornada.status);
  const [statusNIA, setStatusNIA] = useState<StatusNIAValor>(jornada.statusNIA ?? 'Produção');
  const { register, setValue, getValues } = useForm<{ dataStatusNIA: string }>({
    defaultValues: { dataStatusNIA: jornada.dataStatusNIA ?? '' }
  });
  const [comentario, setComentario] = useState('');
  const [charsRestantes, setCharsRestantes] = useState(500);
  const [observacao, setObservacao] = useState('');
  const [charsRestantesObservacao, setCharsRestantesObservacao] = useState(500);
  const [observacoesSalvas, setObservacoesSalvas] = useState(jornada.observacoesGovernanca ?? []);
  const [abaAtiva, setAbaAtiva] = useState<'dados' | 'historico'>('dados');
  
  // Estado do Toast
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    if (STATUS_NIA_COM_DATA.includes(statusNIA)) {
      const atual = getValues('dataStatusNIA');
      if (!atual) setValue('dataStatusNIA', getTodayIso());
    }
  }, [statusNIA, setValue, getValues]);

  // Dados mockados do histórico de atualizações
  const historicoBase = [
    {
      id: 1,
      tipo: 'status',
      alteracao: 'Status alterado de "Em análise" para "Devolvido"',
      usuario: 'C123450 - Danilo Ramos',
      data: '04/02/2026',
      horario: '14:30'
    },
    {
      id: 2,
      tipo: 'comentario',
      alteracao: 'Comentário adicionado: "Favor revisar a descrição do fluxo conforme orientações do template Meta."',
      usuario: 'C123450 - Danilo Ramos',
      data: '04/02/2026',
      horario: '14:30'
    },
    {
      id: 3,
      tipo: 'status',
      alteracao: 'Status alterado de "Nova" para "Em análise"',
      usuario: 'C987654 - Maria Silva',
      data: '03/02/2026',
      horario: '09:15'
    },
    {
      id: 4,
      tipo: 'statusNIA',
      alteracao: 'Status NIA alterado de "Sanitizado" para "Produção"',
      usuario: 'C987654 - Maria Silva',
      data: '03/02/2026',
      horario: '09:10'
    },
    {
      id: 5,
      tipo: 'status',
      alteracao: 'Jornada criada com status "Nova"',
      usuario: 'C456789 - João Santos',
      data: '01/02/2026',
      horario: '16:45'
    }
  ];

  const historicoAtualizacoes = [
    ...observacoesSalvas.map((obs, index) => ({
      id: 1000 + index,
      tipo: 'observacao',
      alteracao: `Observação adicionada: "${obs.texto}"`,
      usuario: obs.usuario || 'Governança',
      data: obs.data,
      horario: obs.horario
    })),
    ...historicoBase
  ];

  const handleComentarioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const texto = e.target.value;
    if (texto.length <= 500) {
      setComentario(texto);
      setCharsRestantes(500 - texto.length);
    }
  };

  const handleObservacaoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const texto = e.target.value;
    if (texto.length <= 500) {
      setObservacao(texto);
      setCharsRestantesObservacao(500 - texto.length);
    }
  };

  const handleSalvar = () => {
    const observacaoLimpa = observacao.trim();
    const novaObservacao = observacaoLimpa
      ? {
          texto: observacaoLimpa,
          data: getTodayBr(),
          horario: getCurrentTime(),
          usuario: 'Governança'
        }
      : null;
    const proximaListaObservacoes = novaObservacao ? [novaObservacao, ...observacoesSalvas] : observacoesSalvas;

    // Atualizar o status atual (que aparece no badge)
    setStatusAtual(statusSelecionado);
    setObservacoesSalvas(proximaListaObservacoes);
    if (novaObservacao) {
      setObservacao('');
      setCharsRestantesObservacao(500);
    }
    
    if (onSalvar) {
      const base: Partial<JornadaCadastrada> = {
        status: statusSelecionado,
        comentarioGovernanca: comentario || jornada.comentarioGovernanca,
        observacoesGovernanca: proximaListaObservacoes,
        statusNIA
      };
      if (statusNIA === 'Produção') {
        base.dataStatusNIA = undefined;
      } else {
        base.dataStatusNIA = getValues('dataStatusNIA') || getTodayIso();
      }
      onSalvar(base);
    }
    
    // Mostrar toast de sucesso
    setToastMessage('Alterações salvas com sucesso!');
    setShowToast(true);
  };

  // Mapear status para cores
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Nova':
        return { bullet: '#4668FF', text: '#4668FF' };
      case 'Em análise':
        return { bullet: '#FF6F20', text: '#FF6F20' };
      case 'Correção':
        return { bullet: '#FFB31A', text: '#ad5f00' };
      case 'Aprovada':
        return { bullet: '#0C8A00', text: '#0C8A00' };
      case 'Implementada':
        return { bullet: '#5A059C', text: '#5A059C' };
      case 'Excluída':
        return { bullet: '#E3111F', text: '#E3111F' };
      default:
        return { bullet: '#4668FF', text: '#4668FF' };
    }
  };

  // Mapear status para descrição
  const getStatusDescription = (status: string) => {
    switch (status) {
      case 'Nova':
        return 'Solicitação aguardando análise';
      case 'Em análise':
        return 'Solicitação sendo analisada';
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

  const statusColor = getStatusColor(statusAtual);

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
              <circle cx="8" cy="8" fill={statusColor.bullet} r="2.66667" />
            </svg>
            <span
              className="font-['BancoDoBrasil_Textos:Medium',sans-serif] text-[14px] tracking-[0.07px] leading-[1.125]"
              style={{ color: statusColor.text }}
            >
              {getStatusDisplayGestao(statusAtual)}
            </span>
          </div>
          <p
            className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[12px] tracking-[0.168px] leading-[1.125]"
            style={{ color: statusColor.text }}
          >
            {getStatusDescription(statusAtual)}
          </p>
        </div>
        {(statusAtual === 'Correção' || statusAtual === 'Excluída') && (jornada.comentarioGovernanca || comentario) && (
          <div className="bg-[#fff7e8] border border-[#ffb31a] rounded-[8px] p-[12px]">
            <p className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#ad5f00] text-[13px] leading-[1.2] mb-[6px]">
              Comentário da Governança
            </p>
            <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[14px] leading-[1.4]">
              {comentario || jornada.comentarioGovernanca}
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

      {/* Container Principal com Botão Salvar e Conteúdo */}
      <div className="content-stretch flex flex-col gap-[10px] items-end w-[1235px]">
        {/* Botão Salvar */}
        <button className="bg-[#fcfc30] content-stretch flex items-center px-[16px] py-[12px] relative rounded-[4px] shrink-0 hover:bg-[#eded20] transition-colors cursor-pointer" onClick={handleSalvar}>
          <div className="css-g0mm18 flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#465eff] text-[14px] text-center tracking-[0.07px] uppercase">
            <p className="css-ew64yg leading-[1.125]">SALVAR</p>
          </div>
        </button>

        {/* Conteúdo - alinhado à direita como o botão */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">

          {/* Select de Status */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[860px]">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[328px]">
              <SelectField
                label="Status da jornada"
                value={statusSelecionado}
                onChange={setStatusSelecionado}
                options={[
                  { value: 'Nova', label: 'Novo' },
                  { value: 'Em análise', label: 'Em análise' },
                  { value: 'Correção', label: 'Devolvido' },
                  { value: 'Aprovada', label: 'Aprovado' },
                  { value: 'Implementada', label: 'Publicado' },
                  { value: 'Excluída', label: 'Invalidado' }
                ]}
                placeholder="Selecione o status"
              />
            </div>
          </div>

          {/* Select de Status NIA */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[860px]">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[328px]">
              <SelectField
                label="Status NIA"
                value={statusNIA}
                onChange={(value) => setStatusNIA(value as 'Produção' | 'Inativa' | 'Sanitizada' | 'Excluída')}
                options={[
                  { value: 'Produção', label: 'Produção' },
                  { value: 'Inativa', label: 'Inativo' },
                  { value: 'Sanitizada', label: 'Sanitizado' },
                  { value: 'Excluída', label: 'Excluído' }
                ]}
                placeholder="Selecione o status NIA"
              />
            </div>
          </div>

          {STATUS_NIA_COM_DATA.includes(statusNIA) && (
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[860px]">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[328px]">
                <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Medium',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">
                  Data do status NIA
                </p>
                <DateInput register={register} name="dataStatusNIA" />
              </div>
            </div>
          )}

          {/* Campo de Observações */}
          <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8px] h-[227px] items-start relative shrink-0 w-full">
              <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">Observações</p>
              <div className="bg-[#f0f2f4] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-tl-[4px] rounded-tr-[4px] w-full">
                <div className="bg-[#f0f2f4] flex-[1_0_0] min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] w-full">
                  <div className="content-stretch flex items-start pt-[8px] px-[16px] relative size-full">
                    <textarea
                      placeholder="Mensagem..."
                      className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#6c7077] text-[14px] bg-transparent border-none outline-none w-full resize-none"
                      rows={8}
                      value={observacao}
                      onChange={handleObservacaoChange}
                    />
                  </div>
                </div>
                <div className="h-[11px] relative shrink-0 w-full">
                  <div className="absolute bg-[#f0f2f4] inset-0" />
                </div>
                <div className="bg-[#f0f2f4] h-[4px] shrink-0 w-full" />
                <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
              </div>
              <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#6c7077] text-[14px] tracking-[0.196px] w-full">{charsRestantesObservacao} caracteres restantes</p>
            </div>
          </div>

          {/* Campo de Comentário do validador */}
          <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8px] h-[227px] items-start relative shrink-0 w-full">
              <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#111214] text-[14px] tracking-[0.07px] w-full">Comentário do validador</p>
              <div className="bg-[#f0f2f4] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-tl-[4px] rounded-tr-[4px] w-full">
                <div className="bg-[#f0f2f4] flex-[1_0_0] min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] w-full">
                  <div className="content-stretch flex items-start pt-[8px] px-[16px] relative size-full">
                    <textarea 
                      placeholder="Mensagem..."
                      className="css-4hzbpn flex-[1_0_0] font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#6c7077] text-[14px] bg-transparent border-none outline-none w-full resize-none"
                      rows={8}
                      value={comentario}
                      onChange={handleComentarioChange}
                    />
                  </div>
                </div>
                <div className="h-[11px] relative shrink-0 w-full">
                  <div className="absolute bg-[#f0f2f4] inset-0" />
                </div>
                <div className="bg-[#f0f2f4] h-[4px] shrink-0 w-full" />
                <div className="bg-[#b4b9c1] h-px shrink-0 w-full" />
              </div>
              <p className="css-4hzbpn font-['BancoDoBrasil_Textos:Regular',sans-serif] leading-[1.125] not-italic relative shrink-0 text-[#6c7077] text-[14px] tracking-[0.196px] w-full">{charsRestantes} caracteres restantes</p>
            </div>
          </div>

          {/* Tabs e Conteúdo */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            {/* Tab Header */}
            <div className="bg-[#fefefe] content-stretch flex h-[48px] items-end relative shrink-0 w-[512.7px]">
              <div className="content-stretch flex flex-[1_0_0] h-full items-end min-h-px min-w-px overflow-clip relative">
                <div className="content-stretch flex items-end relative shrink-0">
                  {/* Tab Dados da Jornada */}
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
                    <div className="relative shrink-0">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center px-[32px] relative">
                        <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0">
                          <div className={`css-g0mm18 flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center tracking-[0.07px] uppercase ${abaAtiva === 'dados' ? 'text-[#2d37f5]' : 'text-[#111214]'}`}>
                            <p className="css-ew64yg leading-[1.125]">Dados da Jornada</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Tab Histórico de Comentários */}
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
                    <div className="relative shrink-0">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center px-[32px] relative">
                        <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0">
                          <div className={`css-g0mm18 flex flex-col font-['BancoDoBrasil_Titulos:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center tracking-[0.07px] uppercase ${abaAtiva === 'historico' ? 'text-[#2d37f5]' : 'text-[#111214]'}`}>
                            <p className="css-ew64yg leading-[1.125]">Histórico de Atualização</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
                  <div aria-hidden="true" className="absolute border-[#b4b9c1] border-b border-solid inset-0 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Conteúdo das Abas */}
            {abaAtiva === 'dados' ? (
              /* Conteúdo da Tab - Dados da Jornada */
              <div className="bg-white border border-[#ebf2ff] rounded-[4px] p-[32px] shrink-0 w-full">
                <AvisoRepresentacaoDetalheJornada />
                {/* Seção 1: Informações Básicas */}
                <div className="mb-[32px]">
                  <div className="mb-[24px] pb-[16px] border-b border-[#e5e7eb] flex items-center justify-between">
                    <h3 className="font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-[#111214] text-[18px] leading-[24px]">
                      1. Informações Básicas
                    </h3>
                    <button
                      className="size-[24px] hover:opacity-60 transition-opacity cursor-pointer"
                      title="Editar"
                      onClick={() => onAbrirFormulario && onAbrirFormulario(jornada)}
                    >
                      <Edit />
                    </button>
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
                        {jornada.canais?.join(', ')}
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
            ) : (
              /* Conteúdo da Tab - Histórico de Atualização */
              <div className="bg-white border border-[#ebf2ff] rounded-[4px] p-[32px] shrink-0 w-full">
                <div className="flex flex-col gap-[24px]">
                  {historicoAtualizacoes.length > 0 ? (
                    historicoAtualizacoes.map((item) => (
                      <div key={item.id} className="flex flex-col gap-[12px] pb-[24px] border-b border-[#e5e7eb] last:border-0 last:pb-0">
                        {/* Alteração */}
                        <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#111214] text-[16px] leading-[24px]">
                          {item.alteracao}
                        </p>
                        
                        {/* Usuário e Data/Horário */}
                        <div className="flex items-center gap-[16px]">
                          <span className="font-['BancoDoBrasil_Textos:Bold',sans-serif] text-[#686c73] text-[14px] leading-[18px]">
                            {item.usuario}
                          </span>
                          <span className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#888D95] text-[14px] leading-[18px]">
                            {item.data} às {item.horario}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="font-['BancoDoBrasil_Textos:Regular',sans-serif] text-[#686c73] text-[16px] leading-[24px]">
                      Nenhuma atualização registrada ainda.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Toast Notification */}
      {showToast && (
        <ToastNotification
          message={toastMessage}
          onClose={() => setShowToast(false)}
          type="success"
        />
      )}
    </div>
  );
}