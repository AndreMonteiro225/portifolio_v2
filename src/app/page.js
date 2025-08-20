"use client";
import { useState } from "react";
import Image from "next/image";
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
        <section className={styles.sectionHero}>
        <h1>Código limpo, sites rápidos. Soluções web full-stack que ajudam empresas a crescer.</h1>
        <div className={styles.containerHero}>
          <div className={styles.heroBox}>
            <Image
              style={{filter: `blur(1.5px)`}}
              src={"/restaurante_portifolio.png"}
              width={600}
              height={300}
              alt="xyz"
            />
          </div>
          <div className={styles.heroBox}>
            <Image
              style={{filter: `blur(1.5px)`}}
              src={"/agencia_design_portifolio.png"}
              width={600}
              height={300}
              alt="asd"
            />
          </div>
          </div>
          <div className={styles.containerHero}>
            <Image
             style={{filter: `blur(1.5px)`}}
              src={"/foto_site_uidi.png"}
              width={600}
              height={300}
              alt="asd"
            />
        </div>
        </section>
         
      </section>
      <div className={styles.aboutSection}>
      <About />
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
