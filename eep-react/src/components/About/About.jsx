import { motion } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.missionBanner}>
        <div className={styles.bannerOverlay} />
        <div className={styles.bannerContent}>
          <h2 className={styles.missionTitle}>Our Mission</h2>
          <p className={styles.missionSub}>Enriching lives through teaching English</p>
        </div>
      </div>

      <div className={styles.contentSection}>
        <motion.img
          src={`${import.meta.env.BASE_URL}EEP Group.jpg`}
          alt="EEP Group Photo"
          className={styles.groupPhoto}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />

        <div className={styles.qaSection}>
          <motion.div
            className={styles.qaBlock}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className={styles.question}>Who Are We?</h3>
            <p className={styles.answer}>
              We are a group of passionate high school volunteers who are committed to
              helping Taiwanese elementary school students improve their English. Our
              team brings enthusiasm, creativity, and care to every lesson.
            </p>
          </motion.div>

          <motion.div
            className={styles.qaBlock}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className={styles.question}>What Do We Do?</h3>
            <p className={styles.answer}>
              Each week, our tutors hold one-on-one online lessons with students in
              Taiwan. We focus on real-life conversations and share aspects of
              American culture — making English both practical and fun for every
              student we work with.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
