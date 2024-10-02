// components/ClientWrapper.tsx (Client Component)
"use client";

import { useSelectedLayoutSegment } from 'next/navigation';
import Footer from '@/components/Footer';

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const segment = useSelectedLayoutSegment();

  // Si estamos en '/dashboard', no renderizamos el Footer
  const shouldRenderFooter = segment !== "dashboard";

  return (
    <>
      {children}
      {shouldRenderFooter && <Footer />}
    </>
  );
}
