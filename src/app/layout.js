import Link from "next/link";
import "./globals.css";
import { Geist } from "next/font/google";
import Image from "next/image";
import { FaHome, FaCode, FaSlackHash } from "react-icons/fa";

export const metadata = {
  title: "Fernando Zárate portfolio",
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
              <FaHome className="icon" />
              <span className="link_name">Inicio</span>
            </Link>
            <Link href="#project" className="link">
              <FaCode className="icon" />
              <span className="link_name">Proyectos</span>
            </Link>
            <Link href="#about" className="link">
              <FaSlackHash className="icon" />
              <span className="link_name">Sobre Mí</span>
            </Link>
          </div>
        </nav>
        {children}
        <footer>
          <div className="footer">
            <p>© 2025. Casi todos los derechos reservados</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
