import styles from "./Trainers.module.css";

import JackOConnorPhoto from "../../../assets/trainers/JackOConnor.jpg";
import PatriciaLeanBeefPattyPhoto from "../../../assets/trainers/PatriciaLeanBeefPatty.jpg";
import SarahColinsPhoto from "../../../assets/trainers/SarahColins.jpg";
import SergiyDukhotaPhoto from "../../../assets/trainers/SergiyDukhota.jpg";

function Coaches() {
  return (
    <main>
      <section className={styles.coaches}>
        <div className="container">
          <div className={styles.coachesInner}>
            <h2 className={styles.coachesTitle}>Our Coaches</h2>
            <div className={styles.coachesContainer}>
              <div className={styles.coachesCard}>
                <img src={JackOConnorPhoto} alt="Jack O'Connor Photo" />
                <div className={styles.coachesCardText}>
                     <h3>Jack O'Connor</h3>
                <h4>Head Coach — Bodybuilding & CrossFit</h4>
                <p>Jack has 12 years of competitive bodybuilding behind him and an EQF Level 4 Personal Training certification. He runs our most intense CrossFit sessions and writes individual hypertrophy programs for advanced members. Outside the gym he's a national-level powerlifter.</p>
                <strong>12 years</strong>
                </div>
             
              </div>

               <div className={styles.coachesCard}>
                <img src={SarahColinsPhoto} alt="Sarah Colins Photo" />
                <div className={styles.coachesCardText}>
                   <h3>Sarah Colins</h3>
                <h4>Pilates & Strength Coach</h4>
                <p>Sarah came to coaching from a background in professional dance and rehabilitation. She specialises in pilates, mobility, and structured strength work for women, beginners, and people returning to training after injury. Patient, technical, and impossible to fool with bad form.</p>
                <strong>8 years</strong>
                </div>
               
              </div>

               <div className={styles.coachesCard}>
                <img src={SergiyDukhotaPhoto} alt="Sergiy Dukhota Photo" />
                <div className={styles.coachesCardText}>
                  <h3>Sergiy Dukhota</h3>
                <h4>Rehabilitation & Strength Foundations</h4>
                <p>A licensed physiotherapist turned strength coach, Sergiy bridges the gap between rehab and real training. If you've ever been told "stop lifting because of your back/knee/shoulder" — talk to Sergiy first. He coaches our Strength Foundations classes and works one-on-one with members recovering from injuries.</p>
                <strong>10 years</strong>
                </div>
                
              </div>

               <div className={styles.coachesCard}>
                <img src={PatriciaLeanBeefPattyPhoto} alt="Patricia LeanBeefPatty Photo" />
                <div className={styles.coachesCardText}>
                  <h3>Patricia LeanBeefPatty</h3>
                <h4>Cardio & Group Fitness</h4>
                <p>Fitness influencer, marathon finisher, and Titan Lab's most energetic coach. Patricia runs our Cycle Cardio and HIIT classes — high volume, loud music, and zero patience for sitting on a bench between sets. Perfect if you train better in a group.</p>
                <strong>6 years</strong>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Coaches;
