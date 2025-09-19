'use client';
import LoginForm from '@/app/(auth)/login/components/LoginForm';
import { ErrorProvider } from '@/app/(realApp)/insights/contexts/AlertErrorContext';
import ErrorHandlerInitializer from '@/app/(auth)/login/components/ErrorHandlerInitializer';
import ErrorAlert from '@/app/(auth)/login/components/ErrorAlert';

const Page = () => {
  return (
    <ErrorProvider>
      <ErrorHandlerInitializer />
      <ErrorAlert />
      <LoginForm />
    </ErrorProvider>
  );
};

export default Page;
