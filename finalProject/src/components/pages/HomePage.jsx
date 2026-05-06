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
        <h2>Popular Classes</h2>

        <div className={styles.cards}>
          <article className={styles.card}>
            <div className={styles.cardImage}>IMAGE</div>
            <h3>Yoga</h3>
            <p>Improve flexibility and reduce stress</p>
            <button>Learn More</button>
          </article>

          <article className={styles.card}>
            <div className={styles.cardImage}>IMAGE</div>
            <h3>Strength</h3>
           <p>Build muscle and increase power</p>
            <button>Learn More</button>
          </article>

          <article className={styles.card}>
            <div className={styles.cardImage}>IMAGE</div>
            <h3>Cardio</h3>
           <p>Boost endurance and burn calories</p>
            <button>Learn More</button>
          </article>

          <article className={styles.card}>
            <div className={styles.cardImage}>IMAGE</div>
            <h3>Crossfit</h3>
            <p>High intensity functional training</p>
            <button>Learn More</button>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Meet Our Coaches</h2>

        <div className={styles.trainers}>
          <div className={styles.trainer}>
            <div className={styles.trainerImage}>IMAGE</div>
            <div>
              <h3>Jack O'Connor</h3>
              <p>Bodybuilding/Crossfit</p>
            </div>
          </div>

          <div className={styles.trainer}>
            <div className={styles.trainerImage}>IMAGE</div>
            <div>
              <h3>Sarah Colins</h3>
              <p>Pilatess/Bodybuilding</p>
            </div>
          </div>

          <div className={styles.trainer}>
            <div className={styles.trainerImage}>IMAGE</div>
            <div>
              <h3>Tonny Parker</h3>
              <p>Fitness/Crossfit</p>
            </div>
          </div>
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
