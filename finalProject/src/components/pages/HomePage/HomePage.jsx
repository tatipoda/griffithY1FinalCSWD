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
import marcus from '../../../assets/trainers/trainer1.jpg';
import devon from '../../../assets/trainers/trainer2.png';
import mei from '../../../assets/trainers/trainer3.png';

function HomePage() {
  const cards = [
    {id: 0, imageLink: yoga, cardName:"Yoga", cardDetail:"Improve flexibility and reduce stress"},
    {id: 1, imageLink: strength, cardName:"Strength", cardDetail:"Build muscle and increase power"},
    {id: 2, imageLink: cardio, cardName:"Cardio", cardDetail:"Boost endurance and burn calories"},
    {id: 3, imageLink: crossfit, cardName:"Crossfit", cardDetail:"High intensity functional training"}
  ]
  const trainers = [
    {id:0, imageLink: jack,     trainerName: "Jack O'Connor",          trainerDetail: "Bodybuilding / CrossFit"},
    {id:1, imageLink: sarah,    trainerName: "Sarah Colins",           trainerDetail: "Pilates / Strength"},
    {id:2, imageLink: sergiy,   trainerName: "Sergiy Dukhota",         trainerDetail: "Rehab / Strength"},
    {id:3, imageLink: patricia, trainerName: "Patricia LeanBeefPatty", trainerDetail: "Cardio / Group Fitness"},
    {id:4, imageLink: marcus,   trainerName: "Marcus Reilly",          trainerDetail: "Powerlifting / Strength"},
    {id:5, imageLink: devon,    trainerName: "Devon Carter",           trainerDetail: "Boxing / Conditioning"},
    {id:6, imageLink: mei,      trainerName: "Mei Tanaka",             trainerDetail: "Mobility / HIIT"}
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
