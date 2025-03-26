import styles from "./project.module.css";
import Project_item from "./project_item/project_item";
import database from "./project_item/data_base";

export default function Project() {
  return (
    <section id="project" className={styles.project}>
      <h2 className={styles.project__title}>
        <span>PROYECTO</span>
      </h2>
      {database.map((project) => (
        <Project_item key={project.id} project={project} />
      ))}
    </section>
  );
}
