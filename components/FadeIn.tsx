import { ReactNode } from 'react';

// Removed animation wrapper — renders children directly to fix mobile visibility
export default function FadeIn({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <>{children}</>;
}
