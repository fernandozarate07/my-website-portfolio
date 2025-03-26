"use client";
import Link from "next/link";
import styles from "./btn_style.module.css";
import { FaGithub, FaPaperPlane, FaCheck, FaArrowRight, FaAt, FaFilePdf } from "react-icons/fa";

export default function Secondary_btn({ type, content, section, link }) {
  const handle_click = (e) => {
    if (type === "link" && link && link.includes("mailto:")) {
      e.preventDefault();
      const width = 600;
      const height = 600;
      const left = (window.innerWidth - width) / 2;
      const top = (window.innerHeight - height) / 2;
      window.open(link, "_blank", `width=${width},height=${height},top=${top},left=${left}`);
    }
  };

  const handle_download_pdf = () => {
    const pdfUrl = "/resume/curriculum_vitae_fz.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "curriculum_vitae_fz.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  <button class="button"></button>;

  const buttonContent = (
    <>
      <span>{content}</span>
      <div className={styles.hover_effect}>
        <div></div>
      </div>
    </>
  );

  if (type === "navlink") {
    return (
      <Link href={`/#${section}`} className={styles.button_two}>
        {buttonContent}
      </Link>
    );
  }

  if (type === "link") {
    return (
      <Link
        href={link || "#"}
        className={styles.button_two}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handle_click}>
        {buttonContent}
      </Link>
    );
  }

  if (type === "button") {
    return (
      <button className={styles.button_two} onClick={handle_download_pdf}>
        {buttonContent}
      </button>
    );
  }

  return null;
}
