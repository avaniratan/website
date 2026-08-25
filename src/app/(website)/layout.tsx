import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-soft-ivory">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
