import { Link } from "react-router-dom";
import {useState} from 'react';
import FaqsComponent from "./FaqsComponent";
import { FaDumbbell } from "react-icons/fa";
import { MdFitnessCenter } from "react-icons/md";
import { MdCardMembership } from "react-icons/md";
import styles from './Faqs.module.css';

function Faqs() {
const[activeSection, setActiveSection] = useState('Classes & Training');




  return (
    <main>
        <section className={styles.preview}>
            <div className="container">
                <div className={styles.previewInner}>
                    <h1>Frequently asked questions</h1>
                    <p>Can't find what you're looking for? Browse our most frequently asked questions below. 
                    If you still need help, don't hesitate to reach out through <Link to='/contact'>contact</Link></p>
                </div>
            </div>
        </section>

        <section className={styles.faqs}>
            <div className="container">
                <div className={styles.faqsInner}>

            <div className={styles.buttonsContainer}>
                <button className={`${styles.sectionButton} ${activeSection === 'Classes & Training' ? styles.active : ''}`} onClick={() => setActiveSection('Classes & Training')}> 
                <FaDumbbell size={40}/>Classes & Training</button>
                <button className={`${styles.sectionButton} ${activeSection === 'Membership & Pricing' ? styles.active : ''}`} onClick={() => setActiveSection('Membership & Pricing')}>
                <MdCardMembership size={40}/> Membership & Pricing</button>
                <button className={`${styles.sectionButton} ${activeSection === 'Facilities & General' ? styles.active : ''}`} onClick={() => setActiveSection('Facilities & General')}> 
                <MdFitnessCenter size={40}/>Facilities & General</button>
            </div>

            <FaqsComponent activeSection ={activeSection}/>
            </div>
            </div>
        </section>
        
      
   
    </main>
  );
}

export default Faqs;