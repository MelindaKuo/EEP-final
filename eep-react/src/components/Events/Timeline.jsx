import { lessons } from '../../data/lessons';
import { events } from '../../data/events';
import styles from './Timeline.module.css';

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function parseDate(dateStr) {
  const parts = dateStr.replace(/\s*US\s*/g, '').split('/');
  const month = parseInt(parts[0], 10);
  const day = parseInt(parts[1], 10);
  const year = parts[2] ? (parseInt(parts[2], 10) + 2000) : 2025;
  return { month, day, year, timestamp: new Date(year, month - 1, day).getTime() };
}

function buildColumns() {
  const lessonEntries = lessons.map(l => ({
    id: l.id, type: 'lesson', title: l.title, ...parseDate(l.date),
  }));
  const eventEntries = events.map(e => ({
    id: e.id, type: 'event', title: e.title, ...parseDate(e.date),
  }));
  const sorted = [...lessonEntries, ...eventEntries].sort((a, b) => a.timestamp - b.timestamp);

  // Interleave month separators and assign top/bottom positions
  const columns = [];
  let currentMonth = null;
  let entryIndex = 0;

  sorted.forEach(entry => {
    const monthKey = `${entry.month}-${entry.year}`;
    if (monthKey !== currentMonth) {
      currentMonth = monthKey;
      columns.push({ type: 'month', label: `${MONTH_NAMES[entry.month - 1]} ${entry.year}`, key: monthKey });
    }
    columns.push({ ...entry, position: entryIndex % 2 === 0 ? 'top' : 'bottom' });
    entryIndex++;
  });

  return columns;
}

export default function Timeline() {
  const columns = buildColumns();

  return (
    <div className={styles.timelineOuter}>
      <h3 className={styles.timelineHeading}>Academic Year Schedule</h3>
      <div className={styles.scrollWrapper}>
        <div className={styles.track}>
          {columns.map(item => {
            if (item.type === 'month') {
              return (
                <div key={item.key} className={styles.monthCol}>
                  <div className={styles.monthTop} />
                  <div className={styles.monthDot}>
                    <span className={styles.monthPill}>{item.label}</span>
                  </div>
                  <div className={styles.monthBottom} />
                </div>
              );
            }

            return (
              <div key={item.id} className={styles.entryCol}>
                <div className={styles.topSlot}>
                  {item.position === 'top' && (
                    <div className={`${styles.card} ${item.type === 'event' ? styles.cardEvent : ''}`}>
                      <span className={`${styles.typeBadge} ${item.type === 'event' ? styles.badgeEvent : styles.badgeLesson}`}>
                        {item.type === 'lesson' ? 'Lesson' : 'Event'}
                      </span>
                      <p className={styles.entryTitle}>{item.title}</p>
                      <p className={styles.entryDate}>
                        {MONTH_NAMES[item.month - 1]} {item.day}
                      </p>
                    </div>
                  )}
                </div>

                <div className={styles.dotRow}>
                  <div className={`${styles.dot} ${item.type === 'event' ? styles.dotEvent : styles.dotLesson}`} />
                </div>

                <div className={styles.bottomSlot}>
                  {item.position === 'bottom' && (
                    <div className={`${styles.card} ${item.type === 'event' ? styles.cardEvent : ''}`}>
                      <span className={`${styles.typeBadge} ${item.type === 'event' ? styles.badgeEvent : styles.badgeLesson}`}>
                        {item.type === 'lesson' ? 'Lesson' : 'Event'}
                      </span>
                      <p className={styles.entryTitle}>{item.title}</p>
                      <p className={styles.entryDate}>
                        {MONTH_NAMES[item.month - 1]} {item.day}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
