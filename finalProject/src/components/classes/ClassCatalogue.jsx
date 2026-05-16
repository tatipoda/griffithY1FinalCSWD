import {
  FaBolt,
  FaDumbbell,
  FaBicycle,
  FaBaby,
} from "react-icons/fa";
import {
  GiLotus,
  GiWeightLiftingUp,
  GiBodyBalance,
  GiBoxingGlove,
} from "react-icons/gi";
import styles from "./ClassCatalogue.module.css";

const classes = [
  {
    title: "Forge HIIT",
    level: "High",
    time: "45m",
    audience: "All levels",
    icon: <FaBolt />,
    description: "High-intensity interval training. Challenge your strength and cardio"
  },
  {
    title: "Strength 101",
    level: "Moderate",
    time: "60m",
    audience: "All levels",
    icon: <FaDumbbell />,
    description: "Foundational strength class for beginners and returning members"
  },
  {
    title: "Yoga Flow",
    level: "Low",
    time: "60m",
    audience: "All levels",
    icon: <GiLotus />,
    description: "Slow yoga, mobility, breath work and recovery"
  },
  {
    title: "Cycle Cardio",
    level: "High",
    time: "45m",
    audience: "All levels",
    icon: <FaBicycle />,
    description: "Loud music, group energy and endurance training"
  },
  {
    title: "Boxing",
    level: "High",
    time: "50m",
    audience: "All levels",
  icon: <GiBoxingGlove />,
    description: "Pad work, footwork and conditioning. No experience required"
  },
  {
    title: "Olympic Lift",
    level: "Moderate",
    time: "60m",
    audience: "Intermediate",
    icon: <GiWeightLiftingUp />,
    description: "Snatch and clean technique under coach supervision"
  },
  {
    title: "CrossFit",
    level: "High",
    time: "60m",
    audience: "All levels",
    icon: <FaDumbbell />,
    description: "Functional circuit training for real power and endurance"
  },
  {
    title: "Mobility",
    level: "Low",
    time: "30m",
    audience: "All levels",
    icon: <GiBodyBalance />,
    description: "Targeted mobility work, perfect as a recovery day"
  },
  {
    title: "Mum & Baby",
    level: "Low",
    time: "45m",
    audience: "All levels",
    icon: <FaBaby />,
    description: "Postnatal-friendly strength and conditioning"
  },
  {
    title: "Open Gym",
    level: "Open",
    time: "-",
    audience: "Experienced",
    icon: <FaDumbbell />,
    description: "No coaching, full access to equipment for experienced members."
  },
];

function ClassCatalogue() {
  return (
    <section className={styles.catalogue}>
      <h2>Class Catalogue</h2>

      <div className={styles.grid}>
        {classes.map((item) => (
          <article className={styles.card} key={item.title}>
            <div className={styles.icon}>{item.icon}</div>

            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <div className={styles.tags}>
              <span>{item.level}</span>
              <span>{item.time}</span>
              <span>{item.audience}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ClassCatalogue;