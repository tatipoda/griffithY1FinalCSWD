import Card from './Card';
import Trainers from './Trainers';
import styles from "./HomePage.module.css";
import yoga from '../../../assets/classes/homeYoga.jpeg';
import strength from '../../../assets/classes/strength.jpg';
import cardio from '../../../assets/classes/homeCardio.jpg';
import crossfit from '../../../assets/classes/homeCrossfit.jpg';

function HomePage() {
    
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

        <div className={styles.cards}>
         <Card
       imageLink={yoga}
  cardName="Yoga"
  cardDetail="Improve flexibility and reduce stress"
/>

         <Card
  imageLink={strength}
  cardName="Strength"
  cardDetail="Build muscle and increase power"
/>

          <Card
  imageLink={cardio}
  cardName="Cardio"
  cardDetail="Boost endurance and burn calories"
/>

          <Card
  imageLink={crossfit}
  cardName="Crossfit"
  cardDetail="High intensity functional training"
/>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Meet Our Coaches</h2>
        <div className={styles.trainers}>

          <Trainers imageLink='./src/assets/trainer.png'
          trainerName ="Jack O'Connor"
          trainerDetail ='Bodybuilding/Crossfit'/>

          <Trainers imageLink='./src/assets/trainer.png'
          trainerName ="Sarah Colins"
          trainerDetail ='Pilatess/Bodybuilding'/>

          <Trainers imageLink='./src/assets/trainer.png'
          trainerName ="Sergiy Dukhota"
          trainerDetail ='Fitness/Crossfit'/>

            <Trainers imageLink='./src/assets/trainer.png'
          trainerName ="Patricia LeanBeefPatty"
          trainerDetail ='Cardio/Fitness'/>

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
