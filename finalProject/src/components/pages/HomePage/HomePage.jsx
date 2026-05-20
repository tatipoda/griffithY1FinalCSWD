import Card from './Card';
import Coaches from "../TrainersPage/Coaches";
import { Link } from "react-router-dom";
import '@splidejs/react-splide/css';
import styles from "./HomePage.module.css";
import yoga from '../../../assets/classes/homeYoga.jpeg';
import strength from '../../../assets/classes/strength.jpg';
import cardio from '../../../assets/classes/homeCardio.jpg';
import crossfit from '../../../assets/classes/homeCrossfit.jpg';
import { FaArrowRight } from 'react-icons/fa';
import { Dumbbell, UserCheck, Users, Clock } from 'lucide-react';

function HomePage() {
  const cards = [
    {id: 0, imageLink: yoga, cardName:"Strength Training", cardDetail:"Build muscle and power with progressive training"},
    {id: 1, imageLink: strength, cardName:"Power Lifting", cardDetail:"Focus on maximum strength and performance.r"},
    {id: 2, imageLink: cardio, cardName:"HIIT & Conditioning", cardDetail:"High intensity workouts to burn fat and boost stamina"},
    {id: 3, imageLink: crossfit, cardName:"Personal Training", cardDetail:"One-on-one coaching tailored to your goals."}
  ]

    
  return (
    <main>
<section className={styles.hero}>
  <div className={styles.heroContent}>
    <h1>Titan Lab</h1>
    <p>Train harder. Get stronger. Build discipline.</p>
    <div className={styles.buttonsContainer}>
    <button type='submit' className={styles.getStartedButton}>
      Get started
      <FaArrowRight className={styles.submitIcon} size={25}></FaArrowRight>
    </button>
     <button type='submit' className={styles.exploreButton}>
      Explore classes
    </button>
    </div>
  </div>
</section>

   <section className={styles.benefitsContainer}>
    <div className={styles.benefit}>
      <Dumbbell className={styles.benefitIcon} size={45}></Dumbbell>

      <div className={styles.text}>
        <h2 className={styles.title}>Premium equipment</h2>
        <p className={styles.description}>Train with the best machines</p>
      </div>

    </div>

    <div className={styles.benefit}>
       <UserCheck className={styles.benefitIcon} size={45}></UserCheck>
      <div className={styles.text}>
         <h2 className={styles.title}>Expert trainers</h2>
         <p className={styles.description}>Certified coaches to guide you</p>
        
      </div>
      
    </div>

    <div className={styles.benefit}>
      <Users className={styles.benefitIcon} size={45}></Users>
      <div className={styles.text}>
         <h2 className={styles.title}>Community suport</h2>
         <p className={styles.description}>Train, grow. Achieve together</p>
        
      </div>
      
    </div>

     <div className={styles.benefit}>

      <Clock className={styles.benefitIcon} size={45}></Clock>
      <div className={styles.text}>
         <h2 className={styles.title}>Open 24/7</h2>
         <p className={styles.description}>Fitness on your schedule</p>
        
      </div>
      
    </div>

   </section>

    <section className={styles.section}>
        <h3 className={styles.groupName}>Our Classes</h3>
        <div className={styles.titleContainer}>
        <h2 className={styles.title}>Find your strength</h2>
        <button type='submit' className={styles.allClassesButton}>
        View all classes
        <FaArrowRight className={styles.allClassesIcon} size={25}></FaArrowRight>
        </button>
        </div>

      <div className={styles.cards}>
        {cards.map(card => <Card key={card.id} imageLink={card.imageLink} cardName={card.cardName} cardDetail={card.cardDetail}/>)}
      </div>

      <div className={styles.sectionAction}>
       <Link to="/classes" className={styles.sectionButton}> 
       View Full Schedule
       </Link>
       </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles.groupName}>Meet Our Coaches</h3>
        <div className={styles.titleContainerCoaches}>
        <h2 className={styles.title}>Real Stories. Real Transformations.</h2>
        </div>
       <Coaches/>
      </section>

      <section className={styles.cta}>
        <h2>Start your journey today!</h2>
        <button>Join Now</button>
      </section>
    </main>
  );
}

export default HomePage;
