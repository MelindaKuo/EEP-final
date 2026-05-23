import { useState } from 'react';
import { programLeads, scribes, curriculumLeads, tutors } from '../../data/tutors';
import TutorCard from './TutorCard';
import TutorModal from './TutorModal';
import styles from './Tutors.module.css';

const GROUPS = [
  {
    label: 'Program Leads',
    description: 'Students who oversee the program, plan events, and communicate with Taiwan schools.',
    members: programLeads,
    color: 'var(--color-lead-gold)',
  },
  {
    label: 'Scribes',
    description: 'Program leads in training.',
    members: scribes,
    color: 'var(--color-scribe-purple)',
  },
  {
    label: 'Curriculum Leads',
    description: 'Handle quality checks and lesson planning.',
    members: curriculumLeads,
    color: 'var(--color-curriculum-blue)',
  },
  {
    label: 'Tutors',
    description: 'Our dedicated tutors who teach weekly lessons.',
    members: tutors,
    color: '#555',
  },
];

export default function Tutors() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className={styles.tutorsSection}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Our Team</h2>
        <p className={styles.subheading}>Click on any tutor to learn more about them</p>
      </div>

      {GROUPS.map(group => (
        <div key={group.label} className={styles.group}>
          <h3 className={styles.groupLabel} style={{ color: group.color }}>
            {group.label}
          </h3>
          <p className={styles.groupDesc}>{group.description}</p>
          <div className={styles.memberRow}>
            {group.members.map(tutor => (
              <TutorCard
                key={tutor.id}
                tutor={tutor}
                roleColor={group.color}
                onSelect={setSelectedId}
              />
            ))}
          </div>
        </div>
      ))}

      {selectedId && (
        <TutorModal
          tutorId={selectedId}
          onClose={() => setSelectedId(null)}
          onNavigate={setSelectedId}
        />
      )}
    </div>
  );
}
