import styles from "./Classes.module.css";
import schedule from '../../assets/classes/schedule.png';
import yoga from '../../assets/classes/homeYoga.jpeg';
import strength from '../../assets/classes/strength.jpg';
import cardio from '../../assets/classes/homeCardio.jpg';
import crossfit from '../../assets/classes/homeCrossfit.jpg';

function Classes() {
  return (
    <main className="page">
      <h1>Classes</h1>
      <p>
        Explore our group training options. Every class is coached, structured
        and designed to help you progress safely.
      </p>

      <section className={styles.scheduleSection}>
        <h2>Weekly Schedule</h2>
        <img src={schedule} alt="Schedule photo" />
      </section>

      <section className={styles.classesGrid}>
        <article className={styles.classCard}>
          <img src={yoga} alt="Yoga class" />
          <div className={styles.classContent}>
            <h2>Yoga & Mobility</h2>
            <p>
              A friendly and inclusive class for all genders, ages and skill
              levels. Train with Sarah Colins and improve flexibility, balance
              and confidence at your own pace.
            </p>
          </div>
        </article>

        <article className={styles.classCard}>
          <img src={strength} alt="Strength class" />
          <div className={styles.classContent}>
            <h2>Strength Foundations</h2>
            <p>
              Perfect for people who want to build their first real strength
              base. Led by rehabilitation professional Sergiy Dukhota, this
              class is useful for beginners, people returning after injuries and
              anyone who wants stronger movement habits.
            </p>
          </div>
        </article>

        <article className={styles.classCard}>
          <img src={cardio} alt="Crossfit class" />
          <div className={styles.classContent}>
            <h2>Crossfit</h2>
            <p>
              High-intensity circuit training that will test your power,
              endurance and mental toughness. This class is challenging, but
              Jack O'Connor adapts the workout so confident beginners and
              advanced athletes can both push their limits safely.
            </p>
          </div>
        </article>

        <article className={styles.classCard}>
          <img src={crossfit} alt="Cardio cycling class" />
          <div className={styles.classContent}>
            <h2>Cycle Cardio</h2>
            <p>
              A loud, energetic cycling class with fitness influencer Patricia
              LeanBeefPatty. Improve endurance, burn calories and chase that
              six-pack while training in a fun group atmosphere.
            </p>
          </div>
        </article>
      </section>

      <section className={styles.classesCta}>
        <h2>Not sure which class fits you?</h2>
        <p>
          Contact our team and we will help you choose the best training option
          for your goals.
        </p>
        <a href="/contact">Contact Us</a>
      </section>
    </main>
  );
}

export default Classes;