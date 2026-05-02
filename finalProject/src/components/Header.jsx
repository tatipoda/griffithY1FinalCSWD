import {Link} from 'react-router-dom';
import styles from './Header.module.css';
function Header(){
    return(
    <header className={styles.pcHeader}>
        <h2 className="logo">Gym name</h2>
        <nav className={styles.navContainer}>
        <ul>
            <li><Link to ='/'>Home</Link></li>
            <li>Workouts</li>
            <li>Classes</li>
            <li>Coaches</li>
            <li>Pricing</li>
        </ul>
        </nav>
    </header>
    );

}
export default Header;