import './globals.css';
import type { ReactNode } from 'react';
import ClientSessionProvider from '@components/app/components/ClientSessionProvider';

const metadata = {
  title: 'My App',
  description: 'Using NextAuth',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body>
        <ClientSessionProvider>
          {children}
        </ClientSessionProvider>
      </body>
    </html>
  );
}