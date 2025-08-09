import styles from "./skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2>Minhas Habilidades</h2>
      <div className={styles.skillsFlexRow}>
      <ul>
        <h3>Front-End</h3>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Next.js</li>
      </ul>
      <ul>
        <h3>Back-End</h3>
        <li>Node.js</li>
        <li>Express.js</li>
      </ul>
      <ul>
        <h3>Ferramentas</h3>
        <li>Git</li>
        <li>GitHub</li>
        <li>Vercel</li>
      </ul>
      </div>
    </section>
  );
}
