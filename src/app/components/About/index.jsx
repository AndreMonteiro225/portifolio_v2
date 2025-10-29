import styles from "./about.module.css";
// import { FaWhatsapp } from "react-icons/fa";
import ContactBtn from "../ContactBtn";

export default function About() {
  return (
    <div id="about" className={styles.aboutSection}>
      <h2>Sobre Mim</h2>
      <p>
        Sou um desenvolvedor de software e gosto transformar ideias complexas em
        experiências digitais elegantes e intuitivas. Especializado em criar
        aplicações web modernas, responsivas e focadas no usuário.
      </p>
      <ContactBtn />
    </div>
  );
}
