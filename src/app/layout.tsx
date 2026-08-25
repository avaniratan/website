import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avani | Clinical Psychologist",
  description: "Evidence-based, compassion-led psychotherapy and psychological assessments with Dr. Avani.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}


