'use client';
import { ErrorProvider } from '@/app/(realApp)/insights/contexts/AlertErrorContext';
import ErrorHandlerInitializer from '../features/login/components/ErrorHandlerInitializer';
import LoginForm from '../features/login/components/LoginForm';

const Page = () => {
  return (
    <ErrorProvider>
      <ErrorHandlerInitializer />
      <LoginForm />
    </ErrorProvider>
  );
};

export default Page;
