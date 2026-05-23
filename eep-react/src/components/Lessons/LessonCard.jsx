import { motion } from 'framer-motion';
import styles from './Lessons.module.css';

export default function LessonCard({ lesson }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -5 }}
    >
      <div className={styles.cardImageWrap}>
        <img src={lesson.image} alt={lesson.title} className={styles.cardImage} />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.title}>{lesson.title}</h3>
        <span className={styles.date}>{lesson.date}</span>
        <div className={styles.levelButtons}>
          <a
            href={lesson.beginnerUrl}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.levelLink}
          >
            <button className={styles.levelBtn}>
              <span className={`${styles.circle} ${styles.circleB}`}>B</span>
            </button>
          </a>
          <a
            href={lesson.intermediateUrl}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.levelLink}
          >
            <button className={styles.levelBtn}>
              <span className={`${styles.circle} ${styles.circleI}`}>I</span>
            </button>
          </a>
          <a
            href={lesson.advancedUrl}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.levelLink}
          >
            <button className={styles.levelBtn}>
              <span className={`${styles.circle} ${styles.circleA}`}>A</span>
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
