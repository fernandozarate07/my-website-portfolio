import styles from "./page.module.css";

import Home from "./section/home/home";
import Project from "./section/project/project";
import About from "./section/about/about";

export default function App() {
  return (
    <div className={styles.app}>
      <Home />
      <Project />
      <About />
    </div>
  );
}
