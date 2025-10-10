"use client";
import styles from "./heroSection.module.css";
import Image from "next/image";
import { heroSlides } from "../data/data.js";
import { useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

export default function HeroSection() {
  const [currentSlide, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className={styles.sectionHero}>
      <div className={styles.sliderHero}>
        <div
          className={styles.sliderContainer}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, id) => (
            <div className={styles.slide} key={id}>
              <Image
                width={2000}
                height={2000}
                src={slide.imageUrl}
                alt={slide.alt}
              />
              <p className={styles.slideDescription}>{slide.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.slideIndicators}>
          {heroSlides.map((slide, id) => (
            <div
              key={id}
              className={`${styles.indicator} ${
                id === currentSlide ? styles.active : ""
              }`}
              onClick={() => setCurrent(id)}
            ></div>
          ))}
        </div>
        <div className={styles.slideControls}>
          <button onClick={previousSlide}>
            <GrPrevious />
          </button>
          <button onClick={nextSlide}>
            <GrNext />
          </button>
        </div>
      </div>
    </section>
  );
}
