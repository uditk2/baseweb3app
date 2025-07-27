import React from 'react';
import styles from './Features.module.css';

const Features: React.FC = () => {
  return (
    <div className={styles.center}>
      <h2>Features</h2>
      <ul className={styles.featuresList}>
        <li>Next.js 14 with TypeScript</li>
        <li>Node.js runtime</li>
        <li>Python 3 support</li>
        <li>Docker containerization</li>
        <li>Docker Compose for development</li>
      </ul>
    </div>
  );
};

export default Features;
