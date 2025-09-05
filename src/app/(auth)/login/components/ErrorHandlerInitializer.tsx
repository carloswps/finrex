import { useEffect } from 'react';
import { registerErrorHandler } from '@/api/services/errorHandler';
import { useAlertError } from '@/app/(realApp)/insights/contexts/AlertErrorContext';

const ErrorHandlerInitializer = () => {
  const { setError } = useAlertError();

  useEffect(() => {
    registerErrorHandler(setError);
  }, [setError]);

  return null;
};

export default ErrorHandlerInitializer;
