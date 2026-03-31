import { useMemo } from 'react';
import { SelectField } from '@/app/components/SelectField';

interface FiltroPeriodoHierarquicoProps {
  ano: string;
  trimestre: string;
  mes: string;
  onAnoChange: (value: string) => void;
  onTrimestreChange: (value: string) => void;
  onMesChange: (value: string) => void;
  onDataInicioChange?: (value: string) => void;
  onDataTerminoChange?: (value: string) => void;
}

export function FiltroPeriodoHierarquico({
  ano,
  trimestre,
  mes,
  onAnoChange,
  onTrimestreChange,
  onMesChange,
  onDataInicioChange,
  onDataTerminoChange,
}: FiltroPeriodoHierarquicoProps) {
  
  const anos = [
    { value: '2023', label: '2023' },
    { value: '2024', label: '2024' },
    { value: '2025', label: '2025' },
    { value: '2026', label: '2026' }
  ];

  const trimestres = [
    { value: '1', label: 'Trimestre 1' },
    { value: '2', label: 'Trimestre 2' },
    { value: '3', label: 'Trimestre 3' },
    { value: '4', label: 'Trimestre 4' }
  ];

  const meses = [
    { value: '01', label: 'Janeiro' },
    { value: '02', label: 'Fevereiro' },
    { value: '03', label: 'Março' },
    { value: '04', label: 'Abril' },
    { value: '05', label: 'Maio' },
    { value: '06', label: 'Junho' },
    { value: '07', label: 'Julho' },
    { value: '08', label: 'Agosto' },
    { value: '09', label: 'Setembro' },
    { value: '10', label: 'Outubro' },
    { value: '11', label: 'Novembro' },
    { value: '12', label: 'Dezembro' }
  ];

  // Função para obter o último dia de um mês
  const getUltimoDiaMes = (ano: number, mes: number): number => {
    return new Date(ano, mes, 0).getDate();
  };

  // Filtrar meses baseado no trimestre selecionado
  const mesesFiltrados = useMemo(() => {
    if (!trimestre) return meses;
    const trimNum = parseInt(trimestre);
    const inicioTrim = (trimNum - 1) * 3 + 1;
    const fimTrim = trimNum * 3;
    return meses.filter(m => {
      const mesNum = parseInt(m.value);
      return mesNum >= inicioTrim && mesNum <= fimTrim;
    });
  }, [trimestre]);

  const handleAnoChange = (value: string) => {
    // Se estiver limpando (value vazio), também limpar as datas
    if (!value && onDataInicioChange && onDataTerminoChange) {
      onDataInicioChange('');
      onDataTerminoChange('');
    }
    
    onAnoChange(value);
    // Reset campos dependentes
    onTrimestreChange('');
    onMesChange('');
    
    // Auto-preencher datas para o ano todo
    if (value && onDataInicioChange && onDataTerminoChange) {
      onDataInicioChange(`01/01/${value}`);
      onDataTerminoChange(`31/12/${value}`);
    }
  };

  const handleTrimestreChange = (value: string) => {
    // Se estiver limpando (value vazio), usar apenas o ano
    if (!value && ano && onDataInicioChange && onDataTerminoChange) {
      onDataInicioChange(`01/01/${ano}`);
      onDataTerminoChange(`31/12/${ano}`);
    }
    
    onTrimestreChange(value);
    // Reset campos dependentes
    onMesChange('');
    
    // Auto-preencher datas para o trimestre
    if (value && ano && onDataInicioChange && onDataTerminoChange) {
      const trimNum = parseInt(value);
      const mesInicio = (trimNum - 1) * 3 + 1;
      const mesFim = trimNum * 3;
      const ultimoDia = getUltimoDiaMes(parseInt(ano), mesFim);
      
      onDataInicioChange(`01/${String(mesInicio).padStart(2, '0')}/${ano}`);
      onDataTerminoChange(`${ultimoDia}/${String(mesFim).padStart(2, '0')}/${ano}`);
    }
  };

  const handleMesChange = (value: string) => {
    // Se estiver limpando (value vazio), voltar para o trimestre ou ano
    if (!value && ano && onDataInicioChange && onDataTerminoChange) {
      if (trimestre) {
        const trimNum = parseInt(trimestre);
        const mesInicio = (trimNum - 1) * 3 + 1;
        const mesFim = trimNum * 3;
        const ultimoDia = getUltimoDiaMes(parseInt(ano), mesFim);
        
        onDataInicioChange(`01/${String(mesInicio).padStart(2, '0')}/${ano}`);
        onDataTerminoChange(`${ultimoDia}/${String(mesFim).padStart(2, '0')}/${ano}`);
      } else {
        onDataInicioChange(`01/01/${ano}`);
        onDataTerminoChange(`31/12/${ano}`);
      }
    }
    
    onMesChange(value);
    
    // Auto-preencher datas para o mês
    if (value && ano && onDataInicioChange && onDataTerminoChange) {
      const mesNum = parseInt(value);
      const ultimoDia = getUltimoDiaMes(parseInt(ano), mesNum);
      
      onDataInicioChange(`01/${value}/${ano}`);
      onDataTerminoChange(`${ultimoDia}/${value}/${ano}`);
    }
  };

  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full flex-wrap">
      {/* Seletor de Ano (sempre visível) */}
      <div className="shrink-0 w-[140px]">
        <SelectField
          label="Ano"
          value={ano}
          onChange={handleAnoChange}
          options={anos}
          placeholder="Selecione"
        />
      </div>

      {/* Seletor de Trimestre (aparece se ano estiver selecionado) */}
      {ano && (
        <div className="shrink-0 w-[160px]">
          <SelectField
            label="Trimestre"
            value={trimestre}
            onChange={handleTrimestreChange}
            options={trimestres}
            placeholder="Selecione"
          />
        </div>
      )}

      {/* Seletor de Mês (aparece se ano estiver selecionado) */}
      {ano && (
        <div className="shrink-0 w-[140px]">
          <SelectField
            label="Mês"
            value={mes}
            onChange={handleMesChange}
            options={mesesFiltrados}
            placeholder="Selecione"
          />
        </div>
      )}
    </div>
  );
}