import Card from './Card';
import Trainers from './Trainers';
import styles from "./HomePage.module.css";

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
  imageLink="/classes/homeYoga.jpeg"
  cardName="Yoga"
  cardDetail="Improve flexibility and reduce stress"
/>

         <Card
  imageLink="/classes/homeStrength.webp"
  cardName="Strength"
  cardDetail="Build muscle and increase power"
/>

          <Card
  imageLink="/classes/homeCardio.jpg"
  cardName="Cardio"
  cardDetail="Boost endurance and burn calories"
/>

          <Card
  imageLink="/classes/homeCrossfit.jpg"
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
          trainerName ="Tonny Parker"
          trainerDetail ='Fitness/Crossfit'/>

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
