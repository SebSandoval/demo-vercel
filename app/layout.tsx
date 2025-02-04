import '@/app/ui/global.css'
import { montserrat } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
      <footer className='py-10 flex justify-center items-center'>
        Hecho con ❤️ por <a href="https://vercel.com">Vercel</a>
      </footer>
    </html>
  );
}
