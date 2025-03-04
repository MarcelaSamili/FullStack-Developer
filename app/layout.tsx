import type { Metadata } from 'next';
import { Theme } from '@radix-ui/themes';
import { Geist, Geist_Mono } from 'next/font/google';
import '@radix-ui/themes/styles.css';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Marcela Samili',
  description: 'This is my portifoil',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Theme>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </Theme>
    </html>
  );
}
