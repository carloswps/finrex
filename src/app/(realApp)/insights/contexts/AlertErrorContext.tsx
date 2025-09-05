import { createContext, ReactNode, useContext, useState } from 'react';

export type ErrorMessage = string | Array<{ campo: string; mensagem: string }> | null;

interface AlertErrorContextType {
  error: ErrorMessage;
  setError: (error: ErrorMessage) => void;
  formatError: (error: ErrorMessage) => string;
}

const errorContext = createContext<AlertErrorContextType | undefined>(undefined);

// Context responsible for storing the error and providing for the entire application
export const ErrorProvider = ({ children }: { children: ReactNode }) => {
  const [error, setError] = useState<ErrorMessage>(null);

  const formatError = (error: ErrorMessage): string => {
    if (!error) return 'Erro desconhecido';
    if (typeof error === 'string') return error;
    if (Array.isArray(error) && error.length > 0) {
      return error[0].mensagem || 'Erro de validação';
    }
    return 'Erro desconhecido';
  };

  return <errorContext.Provider value={{ error, setError, formatError }}>{children}</errorContext.Provider>;
};

export const useAlertError = () => {
  const context = useContext(errorContext);
  if (!context) {
    throw new Error('useAlertError must be used within an AlertErrorProvider');
  }
  return context;
};
