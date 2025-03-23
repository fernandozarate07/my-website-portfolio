import styles from "./about.module.css";
import Primary_btn from "../../button/primary_btn";
import Image from "next/image";
import { FaSlackHash } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.about__title}>
        <FaSlackHash />
        Sobre Mí
      </h2>
      <Image
        src="/image/logo.svg"
        alt="imagen de avatar de perfil"
        className={styles.about__logo}
        width={200}
        height={200}
      />
      <div className={styles.about__container_content}>
        <p>
          Comencé mi camino en la programación de forma autodidacta en 2023 y actualmente estoy cursando la{" "}
          <span style={{ color: "var(--secondary)" }}>
            Tecnicatura en Programación Web en la Universidad Nacional de San Juan.
          </span>
        </p>
        <p>
          Trabajo con un <span style={{ color: "var(--secondary)" }}>stack moderno</span> que incluye{" "}
          <span style={{ color: "var(--secondary)" }}>
            HTML, CSS, JavaScript, React, Next, Node, Express, MySQL y PostgreSQL.
          </span>
        </p>
        <p>
          Además, tengo experiencia en <span style={{ color: "var(--secondary)" }}>WordPress</span>, lo que me permite
          crear soluciones personalizadas cuando es necesario.
        </p>
        <p>
          Más allá de la programación, soy <span style={{ color: "var(--secondary)" }}>músico y docente.</span> Siempre
          me han dicho que soy una persona creativa. Algo de cierto debe haber en eso, porque en los procesos creativos
          encuentro todo lo que me apasiona: desde componer una canción hasta desarrollar una aplicación.
        </p>
        <Primary_btn type="button" content={"Descargar CV"} />
      </div>
    </section>
  );
}
