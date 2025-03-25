import styles from "./project_item.module.css";
import Image from "next/image";
import Seconday_btn from "../../../button/secondary_btn";
import { FaGithub, FaPaperPlane, FaCheck, FaArrowRight } from "react-icons/fa";
import { Slide_up } from "../../../motion/slide_up";

export default function Project({ project }) {
  return (
    <div className={styles.project}>
      <div className={styles.project__container_content}>
        <Slide_up>
          <h3 className={styles.project__title}>{project.title}</h3>
        </Slide_up>
        <Slide_up>
          <p className={styles.project__description}>{project.description}</p>
        </Slide_up>
        <Slide_up>
          <div className={styles.project__characteristics}>
            {project.characteristics.map((item, index) => (
              <p key={index}>
                {" "}
                <FaCheck style={{ color: "var(--secondary)" }} /> {item}
              </p>
            ))}
          </div>
        </Slide_up>
        <Slide_up>
          <div className={styles.project__technology}>
            <FaArrowRight /> <p className={styles.project__technology_p}>{project.technology}</p>
          </div>
        </Slide_up>
        <Slide_up>
          <div className={styles.progress_bar_container}>
            <div
              className={project.status === "EN PROCESO" ? styles.progress_bar_inprocess : styles.progress_bar_finished}
              style={{ width: `${project.percentage}` }}>
              {project.status} : {project.percentage}
            </div>
          </div>
        </Slide_up>
        <Slide_up>
          <div className={styles.project__btn_container}>
            <Seconday_btn
              type="link"
              link={project.linkApp}
              content={
                <>
                  Ver App <FaPaperPlane />
                </>
              }
            />
            <Seconday_btn
              type="link"
              link={project.linkCode}
              content={
                <>
                  Ver Code <FaGithub />
                </>
              }
            />
          </div>
        </Slide_up>
      </div>
      <div className={styles.project__img_container}>
        <Slide_up>
          <Image
            src={project.img} // Usa el valor de la prop 'project.img'
            alt="imagen de proyecto"
            className={styles.project__img}
            width={300}
            height={300}
          />
        </Slide_up>
      </div>
    </div>
  );
}
