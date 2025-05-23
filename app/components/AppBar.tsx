"use client"

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const styles = {
  navLinks: "text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white transition-colors"
}

export default function AppBar() {

  const [navBg, setNavBg] = useState(false);
  
  const changeNavBg = () => {
    window.scrollY >= 60 ? setNavBg(true) : setNavBg(false);
   }
 
   useEffect(() => {
     window.addEventListener('scroll', changeNavBg);
     return () => {
       window.removeEventListener('scroll', changeNavBg);
     }
   }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${ navBg && "bg-black"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            Magic Moments
          </Link>

          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className={styles.navLinks}
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className={styles.navLinks}
            >
              Gallery
            </Link>
            <Link
              href="/blog"
              className={styles.navLinks}
            >
              Blog
            </Link>
            <Link
              href="/tutorials"
              className={styles.navLinks}
            >
              Tutorials
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
