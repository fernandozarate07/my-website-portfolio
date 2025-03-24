import styles from "./project_item.module.css";
import Image from "next/image";
import Seconday_btn from "../../../button/secondary_btn";
import { FaGithub, FaPaperPlane, FaCheck, FaArrowRight } from "react-icons/fa";

export default function Project({ project }) {
  return (
    <div className={styles.project}>
      <div className={styles.project__container_content}>
        <h3 className={styles.project__title}>{project.title}</h3>
        <p className={styles.project__description}>{project.description}</p>
        <div className={styles.project__characteristics}>
          {project.characteristics.map((item, index) => (
            <p key={index}>
              {" "}
              <FaCheck style={{ color: "var(--secondary)" }} /> {item}
            </p>
          ))}
        </div>
        <div className={styles.project__technology}>
          <FaArrowRight /> <p className={styles.project__technology_p}>{project.technology}</p>
        </div>
        <div className={styles.progress_bar_container}>
          <div className={styles.progress_bar} style={{ width: `${project.percentage}` }}>
            {project.status} : {project.percentage}
          </div>
        </div>
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
      </div>
      <div className={styles.project__img_container}>
        <Image
          src={project.img} // Usa el valor de la prop 'project.img'
          alt="imagen de proyecto"
          className={styles.project__img}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
