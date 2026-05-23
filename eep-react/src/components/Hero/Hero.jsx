import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const SLIDES = ['/testeep.jpg', '/back.jpg', '/3.jpg'];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.sliderContainer}>
        {SLIDES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`${styles.slide} ${i === current ? styles.active : ''}`}
          />
        ))}
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>English Exchange Program</h1>
        <p className={styles.subtitle}>
          We are a group of high school volunteers committed to bringing
          opportunities to Taiwanese elementary school students.
        </p>
        <a href="#lessons" className={styles.cta}>
          View Lessons
        </a>
      </div>

      <div className={styles.dots}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
