import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h2>Titan Lab</h2>
        <p>Modern fitness club for strength, health and discipline.</p>
      </div>

      <div>
        <h3>Quick Links</h3>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/classes">Classes</Link>
        <Link to="/trainers">Trainers</Link>
      </div>

      <div>
        <h3>Membership</h3>
        <Link to="/membership">Pricing</Link>
        <Link to="/membership">Plans</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div>
        <h3>Project</h3>
        <Link to="/gallery">Gallery</Link>
        <Link to="/developers">Developers</Link>
      </div>
    </footer>
  );
}

export default Footer;
