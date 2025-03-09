import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Marcela Samili - Full Stack Developer',
  description:
    'I am a Full Stack Developer specialized in React, Node.js, NextJs and Software Development. Check out my projects!',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
