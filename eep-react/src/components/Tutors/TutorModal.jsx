import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { allTutorsById } from '../../data/tutors';
import styles from './TutorModal.module.css';

export default function TutorModal({ tutorId, onClose, onNavigate }) {
  const tutor = allTutorsById[tutorId];

  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!tutor) return null;

  return (
    <AnimatePresence>
      <motion.div
        className={styles.backdrop}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className={styles.panel}
          onClick={e => e.stopPropagation()}
          initial={{ scale: 0.88, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.88, opacity: 0, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <button className={styles.closeBtn} onClick={onClose} autoFocus aria-label="Close">
            ×
          </button>

          <img src={tutor.photo} alt={tutor.name} className={styles.photo} />
          <h2 className={styles.name}>{tutor.name}</h2>
          <h3 className={styles.role}>{tutor.role}</h3>
          <p className={styles.bio}>{tutor.bio}</p>

          <div className={styles.navRow}>
            {tutor.prev ? (
              <button
                className={styles.navBtn}
                onClick={() => onNavigate(tutor.prev)}
              >
                &#10094; {allTutorsById[tutor.prev]?.name}
              </button>
            ) : <span />}

            {tutor.next ? (
              <button
                className={styles.navBtn}
                onClick={() => onNavigate(tutor.next)}
              >
                {allTutorsById[tutor.next]?.name} &#10095;
              </button>
            ) : <span />}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
