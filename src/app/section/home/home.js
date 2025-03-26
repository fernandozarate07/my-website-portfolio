import styles from "./home.module.css";
import Primary_btn from "../../button/primary_btn";
import Secondary_btn from "../../button/secondary_btn";
import Image from "next/image";

export default function Home() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.home__logo_container}>
        <Image
          src="/image/logo.svg"
          alt="imagen de avatar de perfil"
          className={styles.home__avatar}
          width={300}
          height={150}
        />
        <Primary_btn
          type="link"
          link="https://www.linkedin.com/in/fernandozaratedev/"
          content="DISPONIBLE PARA TRABAJAR"
        />
      </div>
      <div className={styles.home__content_container}>
        <h1 className={styles.home__title}>Hola, Soy Fernando.</h1>
        <h2 className={styles.home__subtitle}>
          Desarrollador Web <span>Fullstack</span>
          <i className="fa-solid fa-hand-peace"></i>
        </h2>
        <div className={styles.home__btn_container}>
          <p className={styles.home__p}>¿Qué te trae por aquí?</p>
          <div className={styles.home__btns}>
            <Secondary_btn type="navlink" section="about" content={"DESCARGAR CV"} />
            <Secondary_btn
              type="link"
              link="mailto:fernandozarate.dev@gmail.com?subject=Hola Fer!"
              content={"CONTÁCTAME"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
