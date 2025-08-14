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
            <p>Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto em mente, e quer saber como a tecnologia pode te ajudar, entre em contato!</p>
            <a className={styles.contactButton} href="tel:+5511988844661">Entre em contato</a>
        </section>
        <section className={styles.contactDetails}>
            <h3>Detalhes de Contato</h3>
            <a href="mailto:andremonteiro225@gmail.com"><MdOutlineEmail />andremonteiro225@gmail.com</a>
            <a href="tel:+5511988844661"><FaWhatsapp />11 98884-4661</a>
            <a href="https://github.com/AndreMonteiro225/"><FaGithub />Meu Github</a>
            <a href="https://www.linkedin.com/in/andr%C3%A9-monteiro-rachel-3a0429240/"><FaLinkedin />Meu Linkedin</a>
        </section>
    </>
);
}