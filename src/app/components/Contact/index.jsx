import styles from "./contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ContactBtn from "../ContactBtn";

export default function Contact() {
  return (
    <>
      <section id="contact" className={styles.contactSection}>
        <h4>Qual o Próximo Passo?</h4>
        <h4>Vamos Conversar</h4>
        <p>
          sites e sistemas podem te fazer lucrar mais, entre em contato faça o orçamento do seu site ou aplicação web.
        </p>
        <p>solicite uma ferramenta personalizada para seu negócio, se você precisa de visibilidade, melhor gestão dos produtos ou vendas e gostaria de saber como a tecnologia faria isso por você? Entre em contato.</p>
      </section>
        <ContactBtn />
      <div className={styles.containerTittle}>
        <h3>Detalhes de Contato</h3>
      </div>
      <section className={styles.contactDetails}>
        <div className={styles.cardBigScreen}>
          <a className={styles.link} target="_blank" href="mailto:andremonteiro225@gmail.com">
            <MdOutlineEmail />
            <p>andremonteiro225@gmail.com</p>
          </a>
        </div>
        <div className={styles.cardBigScreen}>
          <a target="_blank" href={`https://wa.me/5511988844661?text=${encodeURIComponent("Olá, gostaria de mais informações sobre como a tecnologia pode me ajudar a lucrar mais.")}`}><FaWhatsapp/><p>(11) 9 8884-4661 </p></a>
        </div>
        <div className={styles.cardBigScreen}>
          <a target="_blank" href="https://github.com/AndreMonteiro225/">
            <FaGithub />
            <p>Meu Github</p>
          </a>
        </div>
        <div className={styles.cardBigScreen}>
          <a target="_blank" href="https://www.linkedin.com/in/andr%C3%A9-monteiro-rachel-3a0429240/">
            <FaLinkedin />
            <p>Meu Linkedin</p>
          </a>
        </div>
      </section>
    </>
  );
}
