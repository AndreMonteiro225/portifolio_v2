import styles from "./projects.module.css";

export default function Projects({ project }) {


  return (
    <div id="projects" className={styles.projectsSection}>
      <section className={styles.projectsList}>
        <article key={project.id} className={styles.projectItem}>
          <h3 className={styles.projectTitle}>{project.titulo}</h3>
          <p className={styles.projectDescription}>{project.descricao}</p>
          <p className={styles.projectLink}>{project.url}</p>
          <div className={styles.containerTeachnologies}>
          <p className={styles.projectTechnologies}>{project.technologies}</p>
          </div>
        </article>
      </section>
      
    </div>
  );
}
