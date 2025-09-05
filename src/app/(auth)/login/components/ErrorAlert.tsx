import { useEffect } from 'react';
import { useAlertError } from '@/app/(realApp)/insights/contexts/AlertErrorContext';

const ErrorAlert = () => {
  const { error, setError, formatError } = useAlertError();

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => {
      setError(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [error, setError]);

  if (!error) return null;

  const errorMessage = formatError(error);

  return (
    <div
      className={
        'top-100 left-160 absolute h-12 w-auto min-w-[200px] bg-[var(--red-theme)]' +
        ' flex items-center justify-center text-nowrap rounded-md border px-4 py-2 text-center'
      }
    >
      {errorMessage}
    </div>
  );
};

export default ErrorAlert;
