import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bipothung Humtsoe | Software & AI',
  description: 'Portfolio of Bipothung Humtsoe, software engineer and AI evaluation specialist.',
  metadataBase: new URL('https://example.com'),
  openGraph: { title: 'Bipothung Humtsoe — Software & AI', description: 'Building useful software. Evaluating AI with intent.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
