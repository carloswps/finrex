import { useAlertError } from '@/app/(realApp)/insights/contexts/AlertErrorContext';
import { useEffect } from 'react';

const ErrorAlert = ({ message }: { message?: string }) => {
  const { error, setError, formatError } = useAlertError();
  const displayError = message || (error ? formatError(error) : null);

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => {
      setError(undefined);
    }, 3000);
    return () => clearTimeout(timer);
  }, [error, setError]);

  if (!message) return null;

  return (
    <div
      className={
        'top-100 left-160 absolute h-12 w-auto min-w-[200px] bg-[var(--red-theme)]' +
        ' flex items-center justify-center text-nowrap rounded-md border px-4 py-2 text-center'
      }
    >
      {message}
    </div>
  );
};

export default ErrorAlert;
