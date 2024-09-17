import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navItems}>
        <li className={styles.logo}>
          <Link href='/'>
            <Image
              src='https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.jpg'
              alt='Logo'
              className={styles.logoImage}
              width={100}
              height={100}
            />
          </Link>
        </li>
        <div className={styles.authLinks}>
          <li>
            <Link href='sign-in'>Sign In</Link>
          </li>
          <li>
            <Link href='sign-up'>Sign Up</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
