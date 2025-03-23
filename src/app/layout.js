import Link from "next/link";
import "./globals.css";
import { Geist } from "next/font/google";
import Image from "next/image";

export const metadata = {
  title: "Mi Portfolio",
  description: "Bienvenido a mi portfolio",
};
const geist = Geist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={geist.className}>
      <body>
        <nav>
          <div className="nav_bar">
            <Link href="#home" className="link">
              Inicio
            </Link>
            <Link href="#project" className="link">
              Proyectos
            </Link>
            <Link href="#about" className="link">
              Sobre Mí
            </Link>
            <div className="logo_container">
              <Image src="/image/logo.svg" alt="imagen del logo" className="logo" width={20} height={20} />
            </div>
          </div>
        </nav>
        {children}
        <footer>
          <div className="footer">
            <p>© Fernando Zárate 2025 ~ Casi todos los derechos reservados</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
