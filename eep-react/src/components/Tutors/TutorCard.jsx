import { motion } from 'framer-motion';
import styles from './Tutors.module.css';

export default function TutorCard({ tutor, roleColor, onSelect }) {
  return (
    <motion.div
      className={styles.card}
      onClick={() => onSelect(tutor.id)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5 }}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onSelect(tutor.id)}
      aria-label={`View ${tutor.name}'s profile`}
    >
      <img src={tutor.photo} alt={tutor.name} className={styles.photo} />
      <p className={styles.name} style={{ color: roleColor }}>{tutor.name}</p>
    </motion.div>
  );
}
