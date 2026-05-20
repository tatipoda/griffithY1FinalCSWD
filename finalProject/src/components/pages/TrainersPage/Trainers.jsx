import styles from "./Trainers.module.css";

import Coaches from "./Coaches";

function Trainers() {
  return (
    <main>
      <section className={styles.trainersTeam}>
        <div className="container">
          <div className={styles.trainersTeamInner}>
            <div className={styles.trainersTeamInfo}>
              <h1 className={styles.trainersTeamTitle}>Meet the Coaches</h1>
              <h3 className={styles.trainersTeamSubtitle}>
                The people behind every set, every form check, every personal
                best.
              </h3>
              <p className={styles.trainersTeamText}>
                Every coach at Titan Lab is qualified, experienced, and
                genuinely invested in your progress. Whether you're chasing your
                first pull-up or your next competition, there's someone here
                who's been exactly where you are — and knows how to take you
                further.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.benefits}>
        <div className="container">
          <div className={styles.benefitsInner}>
            <h2 className={styles.benefitsTitle}>Why Train With Us</h2>
            <div className={styles.benefitsContainer}>
              <div className={styles.benefitsCard}>
                <h3 className={styles.benefitsCardTitle}>
                  Continuous Learning{" "}
                </h3>
                <p className={styles.benefitsCardText}>
                  Our team attends seminars and certifications every year to
                  stay sharp.
                </p>
              </div>
              <div className={styles.benefitsCard}>
                <h3 className={styles.benefitsCardTitle}>
                  Certified Professionals{" "}
                </h3>
                <p className={styles.benefitsCardText}>
                  Every coach holds recognized fitness, strength, or
                  rehabilitation qualifications.
                </p>
              </div>
              <div className={styles.benefitsCard}>
                <h3 className={styles.benefitsCardTitle}>
                  Real Specialisations
                </h3>
                <p className={styles.benefitsCardText}>
                  No "generalist" coaching. Each trainer has a clear area:
                  powerlifting, mobility, rehab, conditioning.
                </p>
              </div>
              <div className={styles.benefitsCard}>
                <h3 className={styles.benefitsCardTitle}>Personal Approach</h3>
                <p className={styles.benefitsCardText}>
                  Coaches remember your goals, your injuries, your progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
        <section className={styles.sectionSlider}>
            <div className="container">
              <h2 className={styles.title}>In Their Words</h2>
              <Coaches />
            </div>
        </section>

      <section className={styles.howToTrain}>
        <div className="container">
          <div className={styles.howToTrainInner}>
            <h2 className={styles.howToTrainTitle}> Working With a Coach</h2>
            <div className={styles.howToTrainContainer}>
              <div className={styles.howToTrainCard}>
                <h3> Free Intro Call</h3>
                <p>
                  Tell us your goals, training history, and any injuries. 15
                  minutes, in person or by phone.
                </p>
              </div>

              <div className={styles.howToTrainCard}>
                <h3> Match With a Coach</h3>
                <p>
                  We pair you with the trainer whose specialisation fits your
                  goals.
                </p>
              </div>

              <div className={styles.howToTrainCard}>
                <h3>Start Training </h3>
                <p>
                  One-on-one sessions, small group, or class-based — your
                  choice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Trainers;
