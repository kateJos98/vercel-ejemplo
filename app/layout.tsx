import './globals.css';


export const metadata = {
  title: 'Ejemplo Vercel',
  description: 'Página_descripcion de Vercel',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}