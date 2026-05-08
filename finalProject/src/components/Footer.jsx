import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import facebookBlack from '../assets/icons/facebookBlack.png';
import fecebookWhite from '../assets/icons/facebookWhite.png';
import instagramBlack from '../assets/icons/instagramBlack.png';
import instagramWhite from '../assets/icons/instagramWhite.png';
import tikTokBlack from '../assets/icons/tikTokBlack.png';
import tikTokWhite from '../assets/icons/tikTokWhite.png';

function Footer({theme}) {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerDetail}>
      <div className={styles.gymName}>
        <h2>Titan Lab</h2>
        <p>Modern fitness club for strength, health and discipline.</p>
      </div>

      <div className={styles.footerColumns}>
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
      </div>
      </div>
      <div className={styles.copyRight}>
        <p>© 2026 Titan Lab. All rights reserved.</p>
        <div className={styles.icons}>
            <a href="https://www.facebook.com/"><img src={theme === 'dark'? fecebookWhite: facebookBlack} className={styles.socialLogo}/></a>
            <a href="https://www.instagram.com/"><img src={theme === 'dark'? instagramWhite: instagramBlack} className={styles.socialLogo}/></a>
            <a href="https://www.tiktok.com/"><img src={theme === 'dark'? tikTokWhite: tikTokBlack} className={styles.socialLogo}/></a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
