'use client';
import LoginForm from '@/app/(auth)/login/components/LoginForm';
import { ErrorProvider } from '@/app/(realApp)/insights/contexts/AlertErrorContext';
import ErrorHandlerInitializer from '@/app/(auth)/login/components/ErrorHandlerInitializer';

const Page = () => {
  return (
    <ErrorProvider>
      <ErrorHandlerInitializer />
      <LoginForm />
    </ErrorProvider>
  );
};

export default Page;
