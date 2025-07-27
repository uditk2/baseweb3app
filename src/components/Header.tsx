import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={styles.description}>
      <h1>Base Web3 App</h1>
      <p>
        Next.js application with Node.js and Python support running in Docker
      </p>
    </div>
  );
};

export default Header;
