import { useEffect } from 'react';
import { registerErrorHandler } from '@/shared/lib/api/services/errorHandler';
import { useQueryClient } from '@tanstack/react-query';

const ErrorHandlerInitializer = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    registerErrorHandler(message => {
      // Aqui você pode mostrar o erro para o usuário
      // Por exemplo, usando um toast, um modal, ou um estado global
      console.error('Erro global tratado:', message);
      // Exemplo de como você poderia armazenar o erro em um estado global
      // ou exibir um alerta. Isso depende da sua implementação de UI.
      // alert(message);
    });
  }, [queryClient]);

  return null; // Este componente não renderiza nada
};

export default ErrorHandlerInitializer;

