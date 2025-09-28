"use client";
import { useState } from "react";
import styles from "./page.module.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import { projects } from "./components/data/data.js";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <>
      <section className={styles.homeSection}>
        <h2 className={styles.title}>Olá, meu nome é</h2>
        <h2 className={`${styles.title} ${styles.line}`}>
          André Monteiro Rachel
        </h2>
        <div className={styles.backImg}>
          <h1>Sites e Sistemas feitos para você.</h1>

          <div className={styles.sliderHero}>
            <HeroSection />
          </div>
        </div>
      </section>
      <div className={styles.aboutSection}>
        <About />
        <div className={styles.aboutParallax}>
          <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
              <li className={styles.navbarItem}>
                <a href="mailto:andremonteiro225@gmail.com">
                  <MdOutlineEmail />
                </a>
              </li>
              <li className={styles.navbarItem}>
                <a
                  target="_blank"
                  href={`https://wa.me/5511988844661?text=${encodeURIComponent(
                    "Olá, gostaria de mais informações sobre como a tecnologia pode me ajudar a lucrar mais."
                  )}`}
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className={styles.navbarItem}>
                <a target="_blank" href="https://github.com/AndreMonteiro225/">
                  <FaGithub />
                </a>
              </li>
              <li className={styles.navbarItem}>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/andr%C3%A9-monteiro-rachel-3a0429240/"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.sliderSection}>
        <h2>Meus Projetos</h2>
        <section
          className={styles.slider}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects.map((project, id) => (
            <div key={project.id} className={styles.slide}>
              <Projects key={project.id} project={projects[id]} />
            </div>
          ))}
        </section>
        <div className={styles.slideIndicators}>
          {projects.map((project, id) => (
            <div
              key={id}
              className={`${styles.projectsNav} ${
                current === id ? styles.active : ""
              }`}
              onClick={() => setCurrent(id)}
            ></div>
          ))}
        </div>
        <button className={styles.previousBtn} onClick={previousSlide}>
          <GrPrevious />
        </button>
        <button className={styles.nextBtn} onClick={nextSlide}>
          <GrNext />
        </button>
      </div>
      <Skills />
      <Contact />
    </>
  );
}
