/** Rótulos de status da jornada no masculino (valores internos inalterados). */
export function getStatusJornadaDisplayMasculino(status: string): string {
  switch (status) {
    case 'Nova':
    case 'nova':
      return 'Enviado';
    case 'Em análise':
      return 'Em análise';
    case 'Correção':
    case 'correção':
      return 'Devolvido';
    case 'Aprovada':
    case 'aprovada':
      return 'Aprovado';
    case 'Implementada':
    case 'implementada':
      return 'Publicado';
    case 'Excluída':
    case 'excluída':
      return 'Invalidado';
    default:
      return status;
  }
}
