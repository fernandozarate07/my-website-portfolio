import styles from "./home.module.css";
import Primary_btn from "../../button/primary_btn";
import Secondary_btn from "../../button/secondary_btn";
import Image from "next/image";
import { FaAt, FaFilePdf } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.home__logo_container}>
        <Image
          src="/image/avatar.svg"
          alt="imagen de avatar de perfil"
          className={styles.home__avatar}
          width={200}
          height={200}
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
          Desarrollador Web <span style={{ color: "var(--secondary)" }}>Fullstack</span>
          <i className="fa-solid fa-hand-peace"></i>
        </h2>
        <div className={styles.home__btn_container}>
          <p className={styles.home__para}>¿Qué te trae por aquí?</p>
          <Secondary_btn
            type="navlink"
            section="about"
            content={
              <>
                Descargar cv
                <FaFilePdf />
              </>
            }
          />
          <Secondary_btn
            type="link"
            link="mailto:fernandozarate.dev@gmail.com?subject=Hola Fer!"
            content={
              <>
                Contáctame <FaAt />
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}
