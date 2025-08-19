import styles from "./skills.module.css";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { TbSql } from "react-icons/tb";


export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2>Minhas Habilidades</h2>
      <div className={styles.skillsContainer}>
        <ul>
          <h3>Front-End</h3>
          <li>
            <p>HTML</p>
            <IoLogoHtml5 />
          </li>
          <li>
            <p>CSS</p>
            <IoLogoCss3 />
          </li>
          <li>
            <p>JavaScript</p>
            <RiJavascriptFill />
          </li>
          <li>
            <p>Next.js</p>
            <RiNextjsFill />
          </li>
          <li>
            <p>React</p>
            <FaReact />
          </li>
        </ul>
        <ul>
          <h3>Back-End</h3>
          <li>
            <p>Node.js</p>
            <RiNodejsLine />
          </li>
          <li>
            <p>Express.js</p>
            <SiExpress />
          </li>
          <li>
            <p>SQL</p>
            <TbSql />
          </li>
          <li>
            <p>Next.js</p>
            <RiNextjsFill />
          </li>
        </ul>
        <ul>
          <h3>Ferramentas</h3>
          <li>
            <p>MySQL</p>
            <SiMysql />
          </li>
          <li>
           <p> Git</p>
            <FaGitAlt />
          </li>
          <li>
            <p>GitHub</p>
            <FaGithub />
          </li>
          <li>
            <p>Vercel</p>
            <IoLogoVercel />
          </li>
        </ul>
      </div>
    </section>
  );
}
