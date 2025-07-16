// components/Layout.js
import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }) {
  
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer className="site-footer">
        <p>Victor Wong © {new Date().getFullYear()}. All rights reserved.</p>
        <p>
          Built with ❤️ for young minds. |
          <a href="/about" className="footer-link"> About</a> |
          <a href="/contact" className="footer-link"> Contact</a>
        </p>
      </footer>
    </>
  );
}