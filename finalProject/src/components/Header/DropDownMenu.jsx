import {useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './Header.module.css';

function DropDownMenu({navItem, dropDownMenuItems, isMobile}){
    const[dropDownOpen, setDropDownOpen] = useState(false);

    function handleMouseEnter(){
        if(!isMobile){
            setDropDownOpen(true);
        }
    }
    function handleMouseLeave(){
        if(!isMobile){
            setDropDownOpen(false);
        }
    }
    function handleToggle(){
         if(isMobile){
            console.log('fired', !dropDownOpen)
        setDropDownOpen(!dropDownOpen);
         }
    }
    
 return (
    <div 
        className={`${styles.navItem} ${isMobile ? styles.mobile :''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleToggle}>
        <div className={styles.navItemTrigger}>
            <span className={styles.navItemText}>{navItem}</span>
            <span className={`${styles.arrow} ${dropDownOpen ? styles.open : ''}`}></span>
        </div>
        <div className={`${isMobile ? styles.dropDownMenuMobile : styles.dropdownMenu}  ${dropDownOpen ? styles.visible : ''}`}>
            {dropDownMenuItems.map((item) => <Link to={item.link} key={item.id}>{item.name}</Link>)}
        </div>
    </div>
);
}
export default DropDownMenu;