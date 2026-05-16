import styles from "./Classes.module.css";
import WeeklySchedule from "../classes/WeeklySchedule";
import ClassCatalogue from "../classes/ClassCatalogue";
import ClassesFaq from "../classes/ClassesFaq";

function Classes() {
  return (
    <main className="page">
      <section className={styles.hero}>
        <div>
          <p className={styles.label}>Classes</p>

          <h1>Group Training Schedule</h1>

          <p>
            Coached, structured and designed to help every member train with
            confidence.
          </p>
        </div>

        <div className={styles.stats}>
          <div>
            <strong>10</strong>
            <span>class types</span>
          </div>

          <div>
            <strong>7</strong>
            <span>coaches</span>
          </div>

          <div>
            <strong>60+</strong>
            <span>members per week</span>
          </div>
        </div>
      </section>

      <WeeklySchedule />

      <ClassCatalogue />

      <ClassesFaq />

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
