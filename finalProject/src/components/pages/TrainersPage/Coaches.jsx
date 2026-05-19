import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from "./Coaches.module.css";

import JackOConnorPhoto from "../../../assets/trainers/JackOConnor.jpg";
import SarahColinsPhoto from "../../../assets/trainers/SarahColins.jpg";
import SergiyDukhotaPhoto from "../../../assets/trainers/SergiyDukhota.jpg";
import PatriciaLeanBeefPattyPhoto from "../../../assets/trainers/PatriciaLeanBeefPatty.jpg";
import MarcusReillyPhoto from "../../../assets/trainers/trainer1.jpg";
import DevonCarterPhoto from "../../../assets/trainers/trainer2.png";
import MeiTanakaPhoto from "../../../assets/trainers/trainer3.png";

function Coaches() {
  const coaches = [
    {
      id: 1,
      name: "Jack O'Connor",
      role: "Head Coach — Bodybuilding & CrossFit",
      photo: JackOConnorPhoto,
      quote: "Form first. Weight is just a number — control is what builds strength.",
      description:
        "12 years of competitive bodybuilding and an EQF Level 4 Personal Training certification. Jack runs our most demanding CrossFit sessions and writes individual hypertrophy programs for advanced members. National-level powerlifter outside the gym.",
    },
    {
      id: 2,
      name: "Sarah Colins",
      role: "Pilates & Strength Coach",
      photo: SarahColinsPhoto,
      quote: "Pilates isn't 'easy yoga'. Done right, it'll humble anyone who lifts heavy.",
      description:
        "8 years of coaching, with a background in professional dance and rehabilitation. Specialises in pilates, mobility, and structured strength work for women, beginners, and members returning from injury. Patient, technical, impossible to fool with bad form.",
    },
    {
      id: 3,
      name: "Sergiy Dukhota",
      role: "Rehabilitation & Strength Foundations",
      photo: SergiyDukhotaPhoto,
      quote: "I don't care what you lift on day one. I care that on day 300 you're still here, progressing.",
      description:
        "Licensed physiotherapist turned strength coach with 10 years of experience. Sergiy bridges the gap between rehab and real training, working one-on-one with members recovering from back, knee, and shoulder injuries.",
    },
    {
      id: 4,
      name: "Patricia LeanBeefPatty",
      role: "Cardio & Group Fitness",
      photo: PatriciaLeanBeefPattyPhoto,
      quote: "Energy is contagious. Train loud, train hard, leave smiling.",
      description:
        "6 years coaching group fitness. Marathon finisher and Titan Lab's most energetic coach. Patricia runs our Cycle Cardio and HIIT classes — high volume, loud music, zero patience for sitting on a bench between sets.",
    },
    {
      id: 5,
      name: "Marcus Reilly",
      role: "Powerlifting & Strength Specialist",
      photo: MarcusReillyPhoto,
      quote: "Strong is not a look. It's a habit you build over years.",
      description:
        "Former competitive powerlifter with a 720kg total. Marcus coaches our Strength Foundations and Olympic Lifting classes. Known for obsessive attention to bar path, bracing technique, and programming that actually progresses week over week.",
    },
    {
      id: 6,
      name: "Devon Carter",
      role: "Boxing & Athletic Conditioning",
      photo: DevonCarterPhoto,
      quote: "Footwork before fists. Conditioning before chaos.",
      description:
        "Ex-amateur boxer and certified S&C coach. Devon leads our Boxing and high-intensity conditioning sessions. His sessions blend pad work, footwork drills, and explosive conditioning — built for athletes and beginners who want to move like one.",
    },
    {
      id: 7,
      name: "Mei Tanaka",
      role: "Mobility & HIIT Coach",
      photo: MeiTanakaPhoto,
      quote: "You can't train hard if you can't move well. Mobility comes first.",
      description:
        "Former competitive gymnast, now 5 years coaching. Mei runs our Mobility sessions and morning HIIT classes. Specialises in joint health, prehab routines, and helping desk-bound members move like humans again.",
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
            <SplideSlide key={coach.id}>
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