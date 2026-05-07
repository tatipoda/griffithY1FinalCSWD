import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";

function Header() {
   const [theme, setTheme] = useState("dark");

function toggleTheme() {
  const newTheme = theme === "dark" ? "light" : "dark";
  setTheme(newTheme);
  document.documentElement.setAttribute("data-theme", newTheme);
} 
  return (
    <header className={styles.header}>
<Link to="/" className={styles.logo}>
  <img src="/titanLogo.png" alt="Titan Lab Logo" />
</Link>

      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/classes">Classes</Link>
        <Link to="/trainers">Trainers</Link>
        <Link to="/membership">Membership</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/developers">Developers</Link>
      </nav>

<div className={styles.headerActions}>

    <div className={styles.themeSwitchContainer}>
    <label className={styles.themeSwitch}>
        <input type="checkbox" className={styles.themeToggle} onChange={toggleTheme}></input>
        <span className={styles.slider}></span>
    </label>
    <span className={styles.switchName}>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
    </div>


  <Link to="/membership" className={styles.joinButton}>
    Join Now
  </Link>
</div>
    </header>
  );
}

export default Header;
