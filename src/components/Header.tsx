/**
 * Header Component
 * 
 * Displays the CV Library logo in the header.
 * 
 * @component
 * @example
 * return (
 *   <Header />
 * )
 */


import React from 'react';
import Image from 'next/image';
import styles from '../styles/Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
        <Image 
          src="/Logowhite.svg" 
          alt="CV Library Logo" 
          width={350} 
          height={133} 
          className={styles.logo} 
          priority 
          loading='eager'
        />
    </header>
  );
};

export default Header;
