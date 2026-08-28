import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mateus Oliver — Growth Marketing',
  description: 'Crescimento de receita e diferenciação para marcas que não querem competir por preço ou serem ignoradas.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
