import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import DropDownMenu from "./DropDownMenu";
import styles from "./Header.module.css";

function Header({toggleTheme,theme}) {
    const[burgerMenuOpen, setBurgerMenuOpen] = useState(false);
    function toggleBurgerMenu(){
        setBurgerMenuOpen(!burgerMenuOpen);
    }
    useEffect(() => {
        const handleResize = () =>{
            if(window.innerWidth > 1250){
                setBurgerMenuOpen(prev => {
                  if(prev == true) return false;
                  return prev;
                });
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const aboutUsItems = [
        {id:0, name:'About Titan Lab', link:'/about'}, 
        {id:1, name:'FAQS', link:'/faqs'}
    ]

  return (
    <header className={styles.header}>
    <Link to="/" className={styles.logo}>
    <img src="/titanLogo.png" alt="Titan Lab Logo" />
    </Link>
    <div className ={styles.mobileLogo}>
        <Link to="/">
        <h2>Titan Lab</h2>
        </Link>
    </div>

      <nav className={styles.navPc}>
        <Link to="/">Home</Link>
        <DropDownMenu navItem = 'About us' dropDownMenuItems = {aboutUsItems} isMobile = {false}/>
        <Link to="/classes">Classes</Link>
        <Link to="/trainers">Trainers</Link>
        <Link to="/membership">Membership</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/developers">Developers</Link>
      </nav>

      <nav className={`${styles.navMobile} ${burgerMenuOpen ? styles.open : ''}`}>
        <Link to="/">Home</Link>
        <DropDownMenu navItem = 'About us' dropDownMenuItems = {aboutUsItems}  isMobile = {true} />
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

  <button className={`${styles.burgerButton} ${burgerMenuOpen ? styles.open : ''}`} onClick = {toggleBurgerMenu}>
    <span className={styles.line1}></span>
    <span className={styles.line2}></span>
    <span className={styles.line3}></span>
  </button>

</div>
    </header>
  );
}

export default Header;