'use client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { ReactNode } from 'react';
import { queryClient } from '@/app/(auth)/login/utils/queryClient';
import { ProfilePicProvider } from '@/app/contexts/ProfilePicContext';

type Props = { children: ReactNode };
export const Providers = ({ children }: Props) => {
	return (
		<ProfilePicProvider>
			<QueryClientProvider client={queryClient}>
				{children}
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</ProfilePicProvider>
	);
};
