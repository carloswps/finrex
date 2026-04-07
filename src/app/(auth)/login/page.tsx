'use client';
import ErrorAlert from '@/app/(auth)/login/components/ErrorAlert';
import ErrorHandlerInitializer from '@/app/(auth)/login/components/ErrorHandlerInitializer';
import LoginForm from '@/app/(auth)/login/components/LoginForm';
import { ErrorProvider } from '@/app/(realApp)/insights/contexts/AlertErrorContext';

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
