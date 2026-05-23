import { useState } from 'react';
import { events } from '../../data/events';
import EventCard from './EventCard';
import Timeline from './Timeline';
import styles from './Events.module.css';

function getMonths(evts) {
  const months = [...new Set(evts.map(e => e.date.split('/')[0]))];
  return months.sort((a, b) => parseInt(a) - parseInt(b));
}

const MONTH_MAP = {
  '1': 'Jan', '2': 'Feb', '3': 'Mar', '4': 'Apr',
  '5': 'May', '6': 'Jun', '7': 'Jul', '8': 'Aug',
  '9': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec',
};

export default function Events() {
  const [filter, setFilter] = useState('All');
  const months = getMonths(events);

  const visible = filter === 'All'
    ? events
    : events.filter(e => e.date.split('/')[0] === filter);

  return (
    <div className={styles.eventsSection}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Events</h2>
        <p className={styles.subheading}>Join us for these upcoming activities</p>
      </div>

      <div className={styles.filters}>
        <button
          className={`${styles.filterBtn} ${filter === 'All' ? styles.filterActive : ''}`}
          onClick={() => setFilter('All')}
        >
          All
        </button>
        {months.map(m => (
          <button
            key={m}
            className={`${styles.filterBtn} ${filter === m ? styles.filterActive : ''}`}
            onClick={() => setFilter(m)}
          >
            {MONTH_MAP[m] || m}
          </button>
        ))}
      </div>

      <div className={styles.eventGrid}>
        {visible.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <Timeline />
    </div>
  );
}
