import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bite & Pick — Food Ordering',
  description: 'Modern bilingual food ordering website for pickup orders.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
