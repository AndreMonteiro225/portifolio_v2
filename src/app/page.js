"use client";
import { useState } from "react";
import styles from "./page.module.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { projects } from "./components/data/data.js";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const changeSlide = (nextIndex) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(nextIndex);
      setFade(true);
    }, 400);
  };

  const nextSlide = () => {
    changeSlide((current + 1) % projects.length);
  };

  const prevSlide = () => {
    changeSlide((current - 1 + projects.length) % projects.length);
  };

  return (
    <>
      <section className={styles.homeSection}>
        <h2 className={styles.title}>Olá, meu nome é</h2>
        <h2 className={`${styles.title} ${styles.line}`}>André Monteiro Rachel</h2>
        <h1>Eu construo coisas para a web.</h1>
        <p>
          Sou um desenvolvedor de software apaixonado por transformar ideias
          complexas em experiências digitais elegantes e intuitivas.
          Especializado em criar aplicações web modernas, responsivas e focadas
          no usuário.
        </p>
        <a className={styles.contactButton} href="mailto:andremonteiro225@gmail.com">Entre em contato</a>
      </section>
      <About />
      <div className={styles.sliderSection}>
        <h2>Meus Projetos</h2>
        <section className={styles.slider}>
          <div className={fade ? styles.fadeIn : styles.fadeOut}>
            <Projects project={projects[current]} />
          </div>
        </section>
        <button className={styles.previousBtn} onClick={prevSlide}>
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
