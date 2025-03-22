"use client";
import Link from "next/link";
import styles from "./primary_btn.module.css";

const Primary_btn = ({ type, content, section, link, action }) => {
  const handleClick = (e) => {
    if (type === "link" && link.includes("mailto:")) {
      e.preventDefault();
      const width = 600;
      const height = 600;
      const left = (window.innerWidth - width) / 2;
      const top = (window.innerHeight - height) / 2;
      window.open(link, "_blank", `width=${width},height=${height},top=${top},left=${left}`);
    }
  };

  if (type === "navlink") {
    return (
      <Link href={`/${section}`} className={styles.button}>
        <span>{content}</span>
      </Link>
    );
  }

  if (type === "link") {
    return (
      <Link href={link} className={styles.button} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
        {content}
      </Link>
    );
  }

  if (type === "button") {
    return (
      <button className={styles.button} onClick={action}>
        {content}
      </button>
    );
  }

  return null;
};

export default Primary_btn;
