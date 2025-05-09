// app/layout.tsx
export const metadata = {
  title: 'Ejemplo Vercel',
  description: 'Página con 3 selects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
