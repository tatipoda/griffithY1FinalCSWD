// import {useState} from 'react';
import DropDownMenu from './DropDownMenu';
import {Link} from 'react-router-dom';
import styles from './Header.module.css';
function Header(){
    const workoutsItems = [
        {id:0, name:'Cardio zone', link:'/cardio'}, 
        {id:1, name:'Machines', link:'/'}, 
        {id:2, name:'Streching area', link:'/'}, 
        {id:3, name:'Recover', link:'/'}
    ]
    const servicesItems = [
        {id:0, name:'Yoga', link:'/'}, 
        {id:1, name:'Physiotherapy', link:'/'}, 
        {id:2, name:'Personal training', link:'/'}, 
        {id:3, name:'Recover', link:'/'}
    ]
    
    return(
    <header className={styles.pcHeader}>
        <h2 className="logo">Gym name</h2>
        <nav className={styles.navContainer}>
            <div className ={styles.navItem}><Link to ='/'>Home</Link></div>
            <DropDownMenu navItem = 'Workouts' dropDownMenuItems = {workoutsItems}/>
            <DropDownMenu navItem = 'Services' dropDownMenuItems={servicesItems}/>
            <div className ={styles.navItem}> Coaches</div>
            <div className ={styles.navItem}> Pricing</div>
        </nav>
    </header>
    );

}
export default Header;