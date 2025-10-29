import styles from "./contactbtn.module.css";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactBtn() {
  return (
    <div className={styles.containerBtn}>
        <a
          className={styles.contactButton} target="_blank"
          href={`https://wa.me/5511988844661?text=${encodeURIComponent(
            "Olá, gostaria de mais informações sobre como a tecnologia pode me ajudar a lucrar mais."
          )}`}
        >
          <FaWhatsapp />
          <p>Entre em contato</p>
        </a>
      </div>
  );
}