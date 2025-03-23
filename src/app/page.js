import styles from "./page.module.css";
import Primary_btn from "../app/button/primary_btn";
import Secondary_btn from "../app/button/secondary_btn";
import Image from "next/image";
import Project from "./project/project";
import projects from "./project/data_base";
import { FaCode, FaAt, FaSlackHash, FaFilePdf } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.app}>
      {/* Home */}
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
      {/* Project -------------------------------------*/}
      <section id="project" className={styles.project}>
        <h2 className={styles.project__title}>
          <FaCode />
          Proyectos
        </h2>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </section>
      {/* About -------------------------------------*/}
      <section id="about" className={styles.about}>
        <h2 className={styles.about__title}>
          <FaSlackHash />
          Sobre Mí
        </h2>
        <Image
          src="/image/logo.svg"
          alt="imagen de avatar de perfil"
          className={styles.about__resume}
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
            Más allá de la programación, soy <span style={{ color: "var(--secondary)" }}>músico y docente.</span>{" "}
            Siempre me han dicho que soy una persona creativa. Algo de cierto debe haber en eso, porque en los procesos
            creativos encuentro todo lo que me apasiona: desde componer una canción hasta desarrollar una aplicación.
          </p>
          <Primary_btn type="button" content={"Descargar CV"} />
        </div>
      </section>
    </div>
  );
}
