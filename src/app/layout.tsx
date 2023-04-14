import './globals.css'

export const metadata = {
  title: 'Portfolio - Chetan Tiwari',
  description: 'Portfolio by Chetan Tiwari, for Chetan Tiwari',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
