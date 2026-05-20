import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
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
      role: "Head Coach",
      photo: JackOConnorPhoto,
      experience: "12 years",
      rating: 4.9,
      stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></>,
      specialties: ["Bodybuilding", "CrossFit", "Powerlifting"],
      quote: "Form first. Weight is just a number — control is what builds strength.",
      description:
        "Jack has 12 years of competitive bodybuilding behind him and an EQF Level 4 Personal Training certification. He runs our most demanding CrossFit sessions and writes individual hypertrophy programs for advanced members.",
    },
    {
      id: 2,
      name: "Sarah Colins",
      role: "Pilates & Strength Coach",
      photo: SarahColinsPhoto,
      experience: "8 years",
      rating: 5.0,
      stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></>,
      specialties: ["Pilates", "Mobility", "Women's Strength"],
      quote: "Pilates isn't 'easy yoga'. Done right, it'll humble anyone who lifts heavy.",
      description:
        "Sarah came to coaching from a background in professional dance and rehabilitation. She specialises in structured strength work for women, beginners, and members returning from injury.",
    },
    {
      id: 3,
      name: "Sergiy Dukhota",
      role: "Rehabilitation Coach",
      photo: SergiyDukhotaPhoto,
      experience: "10 years",
      rating: 4.8,
      stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></>,
      specialties: ["Rehab", "Strength Foundations", "Injury Recovery"],
      quote: "I don't care what you lift on day one. I care that on day 300 you're still here, progressing.",
      description:
        "Licensed physiotherapist turned strength coach. Sergiy bridges the gap between rehab and real training, working one-on-one with members recovering from back, knee, and shoulder injuries.",
    },
    {
      id: 4,
      name: "Patricia LeanBeefPatty",
      role: "Cardio & Group Fitness",
      photo: PatriciaLeanBeefPattyPhoto,
      experience: "6 years",
      rating: 4.7,
      stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></>,
      specialties: ["Cycle Cardio", "HIIT", "Endurance"],
      quote: "Energy is contagious. Train loud, train hard, leave smiling.",
      description:
        "Marathon finisher and Titan Lab's most energetic coach. Patricia runs our Cycle Cardio and HIIT classes — high volume, loud music, zero patience for sitting between sets.",
    },
    {
      id: 5,
      name: "Marcus Reilly",
      role: "Powerlifting Specialist",
      photo: MarcusReillyPhoto,
      experience: "9 years",
      rating: 4.8,
      stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></>,
      specialties: ["Powerlifting", "Olympic Lifting", "Strength"],
      quote: "Strong is not a look. It's a habit you build over years.",
      description:
        "Former competitive powerlifter with a 720kg total. Marcus coaches Strength Foundations and Olympic Lifting. Obsessive about bar path, bracing technique, and programming that actually progresses week over week.",
    },
    {
      id: 6,
      name: "Devon Carter",
      role: "Boxing & Conditioning",
      photo: DevonCarterPhoto,
      experience: "7 years",
      rating: 4.9,
      stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></>,
      specialties: ["Boxing", "Conditioning", "S&C"],
      quote: "Footwork before fists. Conditioning before chaos.",
      description:
        "Ex-amateur boxer and certified S&C coach. Devon's sessions blend pad work, footwork drills, and explosive conditioning — built for athletes and beginners who want to move like one.",
    },
    {
      id: 7,
      name: "Mei Tanaka",
      role: "Mobility & HIIT Coach",
      photo: MeiTanakaPhoto,
      experience: "5 years",
      rating: 5.0,
      stars: <><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></>,
      specialties: ["Mobility", "HIIT", "Prehab"],
      quote: "You can't train hard if you can't move well. Mobility comes first.",
      description:
        "Former competitive gymnast turned coach. Mei runs our Mobility sessions and morning HIIT classes. Specialises in joint health, prehab routines, and helping desk-bound members move like humans again.",
    },
  ];

  return (
    <div className={styles.coachesInner}>
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          gap: "50px",
          pagination: true,
          arrows: true,
          speed: 1000,
          classes: {
            arrow: `splide__arrow ${styles.coachesArrow}`,
            prev: `splide__arrow--prev ${styles.coachesArrowPrev}`,
            next: `splide__arrow--next ${styles.coachesArrowNext}`,
            pagination: `splide__pagination ${styles.coachesPagination}`,
            page: `splide__pagination__page ${styles.coachesPaginationPage}`,
          },
        }}
      >
        {coaches.map((coach) => (
          <SplideSlide key={coach.id}>
            <div className={styles.coachesSlide}>
              <div className={styles.coachesPhotoWrap}>
                <img src={coach.photo} alt={coach.name} className={styles.coachesPhoto} />
              </div>

              <div className={styles.coachesInfo}>
                <span className={styles.coachesKicker}>Meet Your Coach</span>
                <h3 className={styles.coachesName}>{coach.name}</h3>
                <p className={styles.coachesRole}>{coach.role}</p>

                <blockquote className={styles.coachesQuoteBox}>
                  <p className={styles.coachesQuoteText}>{coach.quote}</p>
                </blockquote>

                <p className={styles.coachesDescription}>{coach.description}</p>

                <div className={styles.coachesStats}>
                  <div className={styles.coachesStatsRow}>
                    <div className={styles.coachesStat}>
                      <span className={styles.coachesStatValue}>{coach.experience}</span>
                      <span className={styles.coachesStatLabel}>Experience</span>
                    </div>

                    <div className={styles.coachesStatDivider}></div>

                    <div className={styles.coachesStat}>
                      <div className={styles.coachesRatingRow}>
                        <span className={styles.coachesStars}>
                          {coach.stars}
                        </span>
                        <span className={styles.coachesRatingValue}>{coach.rating}</span>
                      </div>
                      <span className={styles.coachesStatLabel}>Member Rating</span>
                    </div>
                  </div>

                  <div className={styles.coachesSpecialties}>
                    {coach.specialties.map((tag) => (
                      <span key={tag} className={styles.coachesSpecialty}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>

  );
}

export default Coaches;