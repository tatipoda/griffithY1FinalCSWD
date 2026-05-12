import styles from "./About.module.css";

import { FaDumbbell } from "react-icons/fa";
import { RiUserCommunityFill } from "react-icons/ri";
import { GiProgression } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";

import weightlifting from "../../assets/about/weightlifting.jpg";
import oldGym from "../../assets/about/oldGym.jpg";

function About() {
  return (
    <main>
      <section className={styles.preview}>
        <div className="container">
          <div className={styles.previewInner}>
            <h1 className={styles.previewTitle}>About Titan Lab</h1>
            <h3 className={styles.previewSubtitle}>
              Strength, confidence, and progress that lasts.
            </h3>
            <p className={styles.previewParagraph}>
              Titan Lab is a modern Dublin gym built around one simple idea —
              training should make you stronger, not just tired. We combine
              professional coaching, a welcoming community and a clean,
              well-equipped facility so every member, from total beginner to
              competitive athlete, has a place to grow.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.ourHistory}>
        <div className="container">
          <div className={styles.ourHistoryInner}>
            <div className={styles.ourHistoryText}>
              <h2>Our Story</h2>
              <p>
                Titan Lab opened its doors in 2019 with a small team of coaches
                and a big ambition: to build the kind of gym they themselves
                wanted to train in. No intimidating atmosphere, no pushy sales,
                just honest coaching and equipment that works.
              </p>
              <p>
                Six years later, we've grown into a community of over 800
                members. We still believe in the same thing — that long-term
                results come from consistency, smart programming, and people who
                actually care about your progress.
              </p>
            </div>

            <img className={styles.oldGym} src={oldGym} alt="our old gym" />
          </div>
        </div>
      </section>

      <section className={styles.principles}>
        <div className="container">
          <div className={styles.principlesInner}>
            <h2>What We Stand For</h2>

            <div className={styles.cardsWrapper}>
              <div className={styles.card}>
                <FaDumbbell className={styles.valueIcon} size={120} />
                <h3>Real Coaching</h3>
                <p>
                  Every class is led by a qualified coach. We focus on technique
                  first, intensity second.
                </p>
              </div>

              <div className={styles.card}>
                <RiUserCommunityFill className={styles.valueIcon} size={120} />
                <h3>Inclusive Community</h3>
                <p>
                  All ages, all levels, all backgrounds. Titan Lab is a space
                  where everyone trains together and supports each other.
                </p>
              </div>

              <div className={styles.card}>
                <GiProgression className={styles.valueIcon} size={120} />
                <h3>Long-Term Progress</h3>
                <p>
                  We're not interested in quick fixes. Our programs are built so
                  you can keep improving for years, not weeks.
                </p>
              </div>
              <div className={styles.card}>
                <MdOutlineSecurity className={styles.valueIcon} size={120} />
                <h3>Safe Training</h3>
                <p>
                  Clean equipment, structured warm-ups, and coaches trained in
                  injury prevention and rehab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.insideGym}>
        <div className="container">
          <div className={styles.insideGymInner}>
            <div className={styles.insideGymInfo}>
              <h2 className={styles.insideGymTitle}>Inside the Gym</h2>
              <p className={styles.insideGymText}>
                Our 1,200 m² facility in Dublin is fully equipped for strength,
                conditioning, and recovery. From competition-grade barbells and
                racks to a dedicated cardio zone, mobility area, and group class
                studio — there's room for every type of training.
              </p>
            </div>
            <div className={styles.slider}>
              {" "}
              <strong>Slider</strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
