import Link from "next/link";
import "./globals.css";
import { Geist } from "next/font/google";

export const metadata = {
  title: "Mi Portfolio",
  description: "Bienvenido a mi portfolio",
};
const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={geist.className}>
      <body>
        <nav>
          <div className="nav_bar">
            <Link className="link" href="/">
              Inicio
            </Link>
            <Link className="link" href="/about">
              Sobre Mí
            </Link>
            <Link className="link" href="/project">
              Proyectos
            </Link>
            <Link className="link" href="/contact">
              Contacto
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
