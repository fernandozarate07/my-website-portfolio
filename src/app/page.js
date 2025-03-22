// src/app/page.js
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenido a mi Portfolio</h1>
      <p className={styles.description}>Soy un desarrollador apasionado por la tecnología.</p>
    </div>
  );
}
