import styles from './about.module.css';

export default function About() {
  return (
    <div id="about" className={styles.aboutSection}>
      <h2 >Sobre Mim</h2>
      <p>
        Sou um desenvolvedor de software apaixonado por transformar ideias complexas em experiências digitais elegantes e intuitivas. Especializado em criar aplicações web modernas, responsivas e focadas no usuário. 
      </p>
      <p>
        Minha jornada no desenvolvimento de software começou com a curiosidade de entender como a web funcionava e rapidamente se tornou uma paixão por construir aplicações que não são apenas funcionais, mas também agradáveis de usar.
      </p>
    </div>
  );
}
