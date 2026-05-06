import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        Titan Lab
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

      <Link to="/membership" className={styles.joinButton}>
        Join Now
      </Link>
    </header>
  );
}

export default Header;
