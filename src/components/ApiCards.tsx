import React from 'react';
import styles from './ApiCards.module.css';

const ApiCards: React.FC = () => {
  return (
    <div className={styles.grid}>
      <a
        href="/api/hello"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          API Test <span>-&gt;</span>
        </h2>
        <p>Test the Next.js API endpoint</p>
      </a>

      <a
        href="https://nextjs.org/docs"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Next.js Docs <span>-&gt;</span>
        </h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>
    </div>
  );
};

export default ApiCards;
