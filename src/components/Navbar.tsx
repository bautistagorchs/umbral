"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./Navbar.module.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${s.navbar} ${isVisible ? s.visible : ""}`}>
      <ul className={s.navList}>
        <li>
          <Link
            href="/"
            className={`${s.navLink} ${pathname === "/" ? s.active : ""}`}
          >
            Umbral
          </Link>
        </li>
        <li>
          <Link
            href="/experiencia"
            className={`${s.navLink} ${
              pathname === "/experiencia" ? s.active : ""
            }`}
          >
            Experiencia
          </Link>
        </li>
        {/* <li>
          <Link
            href="/el-lugar"
            className={`${s.navLink} ${
              pathname === "/el-lugar" ? s.active : ""
            }`}
          >
            El lugar
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
