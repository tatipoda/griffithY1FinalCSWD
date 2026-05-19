import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from "./Coaches.module.css";

import JackOConnorPhoto from "../../../assets/trainers/JackOConnor.jpg";
import SarahColinsPhoto from "../../../assets/trainers/SarahColins.jpg";
import SergiyDukhotaPhoto from "../../../assets/trainers/SergiyDukhota.jpg";
import PatriciaLeanBeefPattyPhoto from "../../../assets/trainers/PatriciaLeanBeefPatty.jpg";

function Coaches() {
  const coaches = [
    {
      id: 1,
      name: "Jack O'Connor",
      role: "Head Coach — Bodybuilding & CrossFit",
      photo: JackOConnorPhoto,
      quote: "Form first. Weight is just a number — control is what builds strength.",
      description:
        "12 years of competitive experience. EQF Level 4 Personal Training. Specialises in hypertrophy programming and high-intensity training.",
    },
    {
      id: 2,
      name: "Sarah Colins",
      role: "Pilates & Strength Coach",
      photo: SarahColinsPhoto,
      quote: "Pilates isn't 'easy yoga'. Done right, it'll humble anyone who lifts heavy.",
      description:
        "8 years of coaching. Background in professional dance and rehabilitation. Specialises in pilates, mobility, and women's strength programming.",
    },
    {
      id: 3,
      name: "Sergiy Dukhota",
      role: "Rehabilitation & Strength Foundations",
      photo: SergiyDukhotaPhoto,
      quote: "I don't care what you lift on day one. I care that on day 300 you're still here, progressing.",
      description:
        "10 years of experience. Licensed physiotherapist turned strength coach. Bridges rehab and real training for returners and beginners.",
    },
    {
      id: 4,
      name: "Patricia LeanBeefPatty",
      role: "Cardio & Group Fitness",
      photo: PatriciaLeanBeefPattyPhoto,
      quote: "Energy is contagious. Train loud, train hard, leave smiling.",
      description:
        "6 years coaching group fitness. Marathon finisher and Titan Lab's most energetic coach. Runs Cycle Cardio and HIIT classes.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>In Their Words</h2>

        <div className={styles.sliderWrap}>
        <Splide
          options={{
            type: "loop",
            perPage: 1,
            gap: "50px",
            pagination: true,
            arrows: true,
            speed: 1000,
            classes: {
              arrows: `splide__arrows ${styles.arrows}`,
              arrow: `splide__arrow ${styles.arrow}`,
              prev: `splide__arrow--prev ${styles.arrowPrev}`,
              next: `splide__arrow--next ${styles.arrowNext}`,
              pagination: `splide__pagination ${styles.pagination}`,
              page: `splide__pagination__page ${styles.paginationPage}`,
            },
          }}
         
        >
          {coaches.map((coach) => (
            <SplideSlide>
              <div className={styles.slide}>
                <div className={styles.photoWrap}>
                  <img src={coach.photo} alt={coach.name} className={styles.photo} />
                </div>

                <div className={styles.info}>
                  <h3 className={styles.name}>{coach.name}</h3>
                  <p className={styles.role}>{coach.role}</p>

                  <blockquote className={styles.quoteBox}>
                    <p className={styles.quote}>{coach.quote}</p>
                  </blockquote>

                  <p className={styles.description}>{coach.description}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
        </div>
      </div>
    </section>
  );
}

export default Coaches;