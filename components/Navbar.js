import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">🍋 Citrubrain</Link>
      </div>

      <div
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/games">Games</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
