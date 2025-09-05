'use client';
import styles from "./heroSection.module.css";
import {heroSlides} from "../data/data.js";
import Image from "next/image";
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
        <div className={styles.sliderContainer}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {heroSlides.map((slide, id) => (
            <div className={styles.slide} key={id}>
              <Image width={200} height={200} src={slide.imageUrl} alt={slide.alt} />
            </div>
          ))}
        </div>
          <div className={styles.slideControls}>
            <button onClick={previousSlide}><GrPrevious/></button>
            <button onClick={nextSlide}><GrNext/></button>
          </div>
      </div>
    </section>
  );
}
