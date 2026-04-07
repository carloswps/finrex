'use client';
import ErrorHandlerInitializer from '@/app/(auth)/login/components/ErrorHandlerInitializer';
import LoginForm from '@/app/(auth)/login/components/LoginForm';
import { ErrorProvider } from '@/app/(realApp)/insights/contexts/AlertErrorContext';

const Page = () => {
	return (
		<ErrorProvider>
			<ErrorHandlerInitializer />
			<LoginForm />
		</ErrorProvider>
	);
};

export default Page;
