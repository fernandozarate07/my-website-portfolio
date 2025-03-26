import Link from "next/link";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { FaHome, FaCode, FaSlackHash } from "react-icons/fa";

export const metadata = {
  title: "Fernando Zárate portfolio",
  description: "Bienvenido a mi portfolio",
};
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={grotesk.className}>
      <body>
        <nav>
          <div className="nav_bar">
            <Link href="#home" className="link">
              <FaHome className="icon" />
            </Link>
            <Link href="#project" className="link">
              <FaCode className="icon" />
            </Link>
            <Link href="#about" className="link">
              <FaSlackHash className="icon" />
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
