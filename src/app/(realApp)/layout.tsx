import { ReactNode } from 'react';
import Header from '@/shared/components/Header';

export default function RealAppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen">
      <div className="px-15 flex-1 overflow-auto">
        <Header />
        {children}
      </div>
    </div>
  );
}
