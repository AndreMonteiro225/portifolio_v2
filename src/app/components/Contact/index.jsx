import styles from "./contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <section id="contact" className={styles.contactSection}>
        <h2>Qual o Próximo Passo?</h2>
        <h3>Vamos Conversar</h3>
        <p>
          Estou sempre aberto a novas oportunidades e colaborações. Se você tem
          um projeto em mente, e quer saber como a tecnologia pode te ajudar,
          entre em contato!
        </p>
        <a className={styles.contactButton} href={`https://wa.me/5511988844661?text=${encodeURIComponent("Olá, gostaria de mais informações sobre como a tecnologia pode me ajudar a lucrar mais.")}`}><FaWhatsapp/>Entre em contato</a>
      </section>
      <div className={styles.containerTittle}>
        <h3>Detalhes de Contato</h3>
      </div>
      <section className={styles.contactDetails}>
        <div className={styles.cardBigScreen}>
          <a className={styles.link} href="mailto:andremonteiro225@gmail.com">
            <MdOutlineEmail />
            <p>andremonteiro225@gmail.com</p>
          </a>
        </div>
        <div className={styles.cardBigScreen}>
          <a href={`https://wa.me/5511988844661?text=${encodeURIComponent("Olá, gostaria de mais informações sobre como a tecnologia pode me ajudar a lucrar mais.")}`}><FaWhatsapp/><p>(11) 9 8884-4661 </p></a>
        </div>
        <div className={styles.cardBigScreen}>
          <a href="https://github.com/AndreMonteiro225/">
            <FaGithub />
            <p>Meu Github</p>
          </a>
        </div>
        <div className={styles.cardBigScreen}>
          <a href="https://www.linkedin.com/in/andr%C3%A9-monteiro-rachel-3a0429240/">
            <FaLinkedin />
            <p>Meu Linkedin</p>
          </a>
        </div>
      </section>
    </>
  );
}
