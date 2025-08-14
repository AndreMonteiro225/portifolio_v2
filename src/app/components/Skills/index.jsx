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
            <IoLogoHtml5 />
            HTML
          </li>
          <li>
            <IoLogoCss3 />
            CSS
          </li>
          <li>
            <RiJavascriptFill />
            JavaScript
          </li>
          <li>
            <RiNextjsFill />
            Next.js
          </li>
          <li>
            <FaReact />
            React
          </li>
        </ul>
        <ul>
          <h3>Back-End</h3>
          <li>
            <RiNodejsLine />
            Node.js
          </li>
          <li>
            <SiExpress />
            Express.js
          </li>
          <li>
            <TbSql />
            SQL
          </li>
          <li>
            <RiNextjsFill />
            Next.js
          </li>
        </ul>
        <ul>
          <h3>Ferramentas</h3>
          <li>
            <SiMysql />
            MySQL
          </li>
          <li>
            <FaGitAlt />
            Git
          </li>
          <li>
            <FaGithub />
            GitHub
          </li>
          <li>
            <IoLogoVercel />
            Vercel
          </li>
        </ul>
      </div>
    </section>
  );
}
