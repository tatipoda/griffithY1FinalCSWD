import Card from './Card';
import Trainers from './Trainers';
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styles from "./HomePage.module.css";
import yoga from '../../../assets/classes/homeYoga.jpeg';
import strength from '../../../assets/classes/strength.jpg';
import cardio from '../../../assets/classes/homeCardio.jpg';
import crossfit from '../../../assets/classes/homeCrossfit.jpg';
import jack from '../../../assets/trainers/JackOConnor.jpg';
import patricia from '../../../assets/trainers/PatriciaLeanBeefPatty.jpg';
import sarah from '../../../assets/trainers/SarahColins.jpg';
import sergiy from '../../../assets/trainers/SergiyDukhota.jpg';

function HomePage() {
  const cards = [
    {id: 0, imageLink: yoga, cardName:"Yoga", cardDetail:"Improve flexibility and reduce stress"},
    {id: 1, imageLink: strength, cardName:"Strength", cardDetail:"Build muscle and increase power"},
    {id: 2, imageLink: cardio, cardName:"Cardio", cardDetail:"Boost endurance and burn calories"},
    {id: 3, imageLink: crossfit, cardName:"Crossfit", cardDetail:"High intensity functional training"}
  ]
  const trainers = [
    {id:0, imageLink: jack, trainerName: "Jack O'Connor", trainerDetail:"Bodybuilding/Crossfit"},
    {id:1, imageLink: patricia, trainerName: "Sarah Colins", trainerDetail:"Pilatess/Bodybuilding"},
    {id:2, imageLink: sarah, trainerName: "Sergiy Dukhota", trainerDetail:"Fitness/Crossfit"},
    {id:3, imageLink: sergiy, trainerName: "Patricia LeanBeefPatty", trainerDetail:"Cardio/Fitness"}
  ]

    
  return (
    <main>
<section className={styles.hero}>
  <div className={styles.heroContent}>
    <h1>Titan Lab</h1>
    <p>Train harder. Get stronger. Build discipline.</p>
    <button>Join Now</button>
  </div>
</section>

      <section className={styles.section}>
        <h2>Our Classes</h2>

     <p className={styles.sectionIntro}>Explore our most popular group training options, then check the full weekly schedule.</p>

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
        <h2>Meet Our Coaches</h2>
        <div className={styles.trainers}>
        <Splide options={{
              type   : 'loop',
              perPage: 3,
              focus  : 'center',
              padding: '5%',  
              gap: '1.5rem',
              pagination: true,
              arrows: true, 
        }}>
          {trainers.map(trainer => 
            <SplideSlide key={trainer.id}>
              <div className={styles.slideContainer}>
              <img src={trainer.imageLink} className={styles.slideImage}/>
              <div className={styles.slideInfo}>
                <h3>{trainer.trainerName}</h3>
                <p>{trainer.trainerDetail}</p>
                <Link to="/trainers"><button className={styles.viewButton}>View more</button></Link>
              </div>
              </div>

            </SplideSlide>
          )}


          </Splide>


        </div>
      </section>

      <section className={styles.cta}>
        <h2>Start your journey today!</h2>
        <button>Join Now</button>
      </section>
    </main>
  );
}

export default HomePage;
