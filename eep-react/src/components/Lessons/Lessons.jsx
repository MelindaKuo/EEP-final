import { lessons } from '../../data/lessons';
import LessonCard from './LessonCard';
import styles from './Lessons.module.css';

export default function Lessons() {
  return (
    <div className={styles.lessonsSection}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Lessons</h2>
        <p className={styles.subheading}>
          Click a level button to open the lesson slides
        </p>
        <div className={styles.disclaimer}>
          <span className={styles.level}>B = Beginner</span>
          <span className={styles.divider}>·</span>
          <span className={styles.level}>I = Intermediate</span>
          <span className={styles.divider}>·</span>
          <span className={styles.level}>A = Advanced</span>
        </div>
      </div>

      <div className={styles.lessonGrid}>
        {lessons.map(lesson => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}
