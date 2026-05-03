import {useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './Header.module.css';
function DropDownMenu({navItem, dropDownMenuItems}){
    const[dropDownOpen, setDropDownOpen] = useState(false);
    return(
        <div 
        className={styles.navItem}
        onMouseEnter={(()=> setDropDownOpen(true))}
        onMouseLeave={(()=> setDropDownOpen(false))}>
        <span>
        {navItem}
        <span className={`${styles.arrow} ${dropDownOpen ? styles.open : ''}`}></span>
        </span>
        <div className={`${styles.dropdownMenu} ${dropDownOpen ? styles.visible: ''}`}>
        <ul>
            {dropDownMenuItems.map((item) => <li key={item.id}><Link to={item.link}> {item.name}</Link></li>)}
        </ul>
        </div>
        </div>
                );
}
export default DropDownMenu;