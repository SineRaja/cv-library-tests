/**
 * JobList Component
 * 
 * Displays job listings based on selected category.
 * 
 * @component
 * @prop {"location" | "industry"} type - Specifies whether jobs are filtered by location or industry.
 * @prop {Array<{id: string; name: string}>} items - Array of job items.
 * 
 * @example
 * return (
 *   <JobList type="location" items={[{ id: "aberdeen", name: "Aberdeen" }]} />
 * )
 */


import React, { useMemo } from 'react';
import styles from '../styles/JobList.module.scss';
import Link from 'next/link';

interface JobItem {
  id: string;
  name: string;
}

interface JobListProps {
  type: 'location' | 'industry';
  items: JobItem[];
}

const JobList: React.FC<JobListProps> = ({ type, items }) => {
 
  const [leftColumn, rightColumn] = useMemo(() => {
    const midpoint = Math.ceil(items.length / 2);
    return [items.slice(0, midpoint), items.slice(midpoint)];
  }, [items]);

  return (
    <div className={styles.jobListContainer} aria-label="Job Listings">
      <div className={styles.jobListContent}>
        {/* Left Column */}
        <div className={styles.column} aria-label="Job Listings Left Column">
          {leftColumn.map(({ id, name }) => (
            <Link key={id} href={`/jobs/${type}/${id}`} className={styles.jobItem}>
              {name}
            </Link>
          ))}
        </div>

        {/* Right Column */}
        <div className={styles.column} aria-label="Job Listings Right Column">
          {rightColumn.map(({ id, name }) => (
            <Link key={id} href={`/jobs/${type}/${id}`} className={styles.jobItem}>
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobList;
