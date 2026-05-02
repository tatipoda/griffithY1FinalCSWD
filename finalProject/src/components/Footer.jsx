import styles from'./Footer.module.css';

function Footer(){
    return(
    <footer className={styles.footer}>
        <div className={styles.footerContext}>
        <h2 className="logo">Gym name</h2>
        <div className={styles.columnsContainer}>

        <div className={styles.footerColumn}>
        <h3 className={styles.sectionName}>Find out more</h3>
        <ul>
            <li>Programs</li>
            <li>Classes</li>
            <li>Memberships</li>
        </ul>
        </div>

        <div className={styles.footerColumn}>
        <h3 className={styles.sectionName}>Company</h3>
        <ul>
            <li>About us</li>
            <li>Coaches</li>
            <li>Careers</li>
        </ul>
        </div>

        <div className={styles.footerColumn}>
        <h3 className={styles.sectionName}>Support</h3>
        <ul>
            <li>FAQ</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
        </ul>
        </div>

        </div>
        </div>
        <div className={styles.copyright}>
        <p>© 2026 Gym name </p>
        </div>
    </footer>
    );

}
export default Footer;