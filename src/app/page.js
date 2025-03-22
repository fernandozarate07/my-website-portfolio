import styles from "./page.module.css";
import Primary_btn from "../app/button/primary_btn";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home__logo_container}>
        <Image
          src="/avatar.svg"
          alt="imagen de avatar de perfil"
          className={styles.home__avatar}
          width={150}
          height={150}
        />
        <Primary_btn
          type="link"
          link="https://www.linkedin.com/in/fernandozaratedev/"
          content="Disponible para trabjar"
        />
      </div>
      <div className={styles.home__content}>
        <h1 className={styles.home__title}>Hola, Soy Fernando.</h1>
        <h2 className={styles.home__subtitle}>
          Desarrollador Web Fullstack <i className="fa-solid fa-hand-peace"></i>
        </h2>
        <p className={styles.home__para}>¿Qué te trae por aquí?</p>
      </div>
      <div className={styles.home__btns_container}>
        <Primary_btn type="navlink" section="project" content="Ver proyectos" />
        <Primary_btn type="navlink" section="about" content="Descargar CV" />
        <Primary_btn type="link" link="mailto:fernandozarate.dev@gmail.com?subject=Hola Fer!" content="Contáctame" />
      </div>
    </div>
  );
}
