import DataProvider from '@/provider/DataProvider';
import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'JS Dive Study',
  description:
    '🌊 Dive deep into JavaScript, one concept at a time, with hands-on learning and collaborative growth. 🐋',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <DataProvider>
        <body className="max-w-[80rem] mx-auto mt-16 px-16 sm:px-8 sm:mt-8">
          <nav>
            <Link href="/">
              <h1 className="text-lg sm:text-sm">🌊 JS Dive Study 🐋</h1>
            </Link>
          </nav>
          {children}
        </body>
      </DataProvider>
    </html>
  );
}
