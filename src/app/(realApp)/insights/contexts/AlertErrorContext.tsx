import { createContext, ReactNode, useContext, useState } from 'react';

interface AlertErrorContextType {
  error: string | null;
  setError: (error: string | null) => void;
}

const errorContext = createContext<AlertErrorContextType | undefined>(undefined);

// Context responsible for storing the error and providing for the entire application
export const ErrorProvider = ({ children }: { children: ReactNode }) => {
  const [error, setError] = useState<string | null>(null);

  return <errorContext.Provider value={{ error, setError }}>{children}</errorContext.Provider>;
};

export const useAlertError = () => {
  const context = useContext(errorContext);
  if (!context) {
    throw new Error('useAlertError must be used within an AlertErrorProvider');
  }
  return context;
};
