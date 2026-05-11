import Navbar from '@/components/layout/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${cormorant.variable} ${inter.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
