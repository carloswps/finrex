'use client';
import { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/app/(auth)/login/utils/queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
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
