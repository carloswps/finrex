import { useAlertError } from '@/app/(realApp)/insights/contexts/AlertErrorContext';
import { useEffect } from 'react';

const ErrorAlert = () => {
  const { error, setError } = useAlertError();

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => {
      setError(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [error, setError]);

  if (!error) return null;

  return (
    <div
      className={
        'top-100 left-160 absolute h-12 w-44 bg-[var(--red-theme)]' +
        ' flex items-center justify-center text-nowrap rounded-md border text-center'
      }
    >
      {error}
    </div>
  );
};

export default ErrorAlert;
