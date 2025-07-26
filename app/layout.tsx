import './ui/global.css';
import { montserrat } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <footer className="py-10 text-center bg-blue-500 text-white">
          <p>
            <strong>Hecho con <span className="text-pink-500">&hearts;</span> por la gente de Vercel</strong>
          </p>
        </footer>
      </body>
    </html>
  );
}
