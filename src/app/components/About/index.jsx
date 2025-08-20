import styles from './about.module.css';
import { FaWhatsapp } from "react-icons/fa";

export default function About() {
  return (
    <div id="about" className={styles.aboutSection}>
      <h2 >Sobre Mim</h2>
      <p>
        Sou um desenvolvedor de software e gosto transformar ideias complexas em experiências digitais elegantes e intuitivas. Especializado em criar aplicações web modernas, responsivas e focadas no usuário.
        </p>
       <a className={styles.contactButton} href={`https://wa.me/5511988844661?text=${encodeURIComponent("Olá, gostaria de mais informações sobre como a tecnologia pode me ajudar a lucrar mais.")}`}><FaWhatsapp/><p>Entre em contato</p></a>
    </div>
  );
}
