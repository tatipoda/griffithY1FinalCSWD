import styles from './Header.module.css';
function Header(){
    return(
    <header className={styles.pcHeader}>
        <h2 className="logo">Gym name</h2>
        <nav className={styles.navContainer}>
        <ul>
            <li>Home</li>
            <li>Training</li>
            <li>Classes</li>
            <li>Coaches</li>
            <li>Pricing</li>
        </ul>
        </nav>
    </header>
    );

}
export default Header;