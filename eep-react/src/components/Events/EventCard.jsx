import { motion } from 'framer-motion';
import styles from './Events.module.css';

export default function EventCard({ event }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -4 }}
    >
      <div className={styles.cardImageWrap}>
        <img src={event.photo} alt={event.title} className={styles.cardImage} />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{event.title}</h3>
        <div className={styles.cardMeta}>
          <span>📅 {event.date}</span>
          <span>🕐 {event.time}</span>
          <span>📍 {event.location}</span>
        </div>
        <span className={styles.badge}>{event.necessity}</span>
      </div>
    </motion.div>
  );
}
