import { useState } from "react";
import styles from "./WeeklySchedule.module.css";

const scheduleData = {
  morning: {
    label: "Morning",
    time: "06:00 - 11:30",
    rows: [
      ["06:00", "Yoga Flow", "Cycle Cardio", "Strength 101", "Yoga Flow", "CrossFit", "Open Gym"],
      ["07:30", "Strength 101", "Boxing", "Mobility", "Forge HIIT", "Olympic Lift", "CrossFit"],
      ["09:00", "Mum & Baby", "Open Gym", "Yoga Flow", "Strength 101", "Cycle Cardio", "Yoga Flow"],
      ["10:30", "Open Gym", "Strength 101", "Boxing", "Mum & Baby", "Mobility", "Open Gym"],
    ],
  },

  midday: {
    label: "Midday",
    time: "12:00 - 16:00",
    rows: [
      ["12:00", "Strength 101", "Yoga Flow", "Cycle Cardio", "Mobility", "Open Gym", "CrossFit"],
      ["13:30", "Open Gym", "Boxing", "Strength 101", "Cycle Cardio", "Yoga Flow", "Open Gym"],
      ["15:00", "Mobility", "Forge HIIT", "Olympic Lift", "Strength 101", "Boxing", "Mum & Baby"],
    ],
  },

  evening: {
    label: "Evening",
    time: "16:30 - 21:00",
    rows: [
      ["16:30", "Cycle Cardio", "CrossFit", "Yoga Flow", "Boxing", "Strength 101", "Open Gym"],
      ["18:00", "CrossFit", "Strength 101", "Forge HIIT", "Cycle Cardio", "Boxing", "-"],
      ["19:30", "Yoga Flow", "Mobility", "Open Gym", "CrossFit", "Cycle Cardio", "-"],
      ["20:30", "Open Gym", "Forge HIIT", "Mobility", "Open Gym", "Yoga Flow", "-"],
    ],
  },
};

const coaches = {
  "Yoga Flow": "Sarah · 60m",
  "Cycle Cardio": "Patricia · 45m",
  "Strength 101": "Sergiy · 60m",
  CrossFit: "Jack · 60m",
  Boxing: "Bartek · 50m",
  Mobility: "Sarah · 30m",
  "Forge HIIT": "Chloe · 45m",
  "Olympic Lift": "Aziz · 60m",
  "Mum & Baby": "Chloe · 45m",
  "Open Gym": "No coach",
  "—": "",
};

function WeeklySchedule() {
  const [activePeriod, setActivePeriod] = useState("morning");
  const currentSchedule = scheduleData[activePeriod];

  return (
    <section className={styles.schedule}>
      <div className={styles.heading}>
        <div>
          <h2>Weekly Schedule</h2>
          <p>Choose a time period and find the class that fits your day.</p>
        </div>

        <span>All times shown in 24h format</span>
      </div>

      <div className={styles.tabs}>
        {Object.entries(scheduleData).map(([key, period]) => (
          <button
            key={key}
            className={activePeriod === key ? styles.activeTab : ""}
            onClick={() => setActivePeriod(key)}
          >
            {period.label} <span>{period.time}</span>
          </button>
        ))}
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.scheduleTable}>
          <thead>
            <tr>
              <th>Time</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>

          <tbody>
            {currentSchedule.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, index) => (
                  <td key={`${row[0]}-${index}`}>
                    {index === 0 ? (
                      cell
                    ) : (
                      <>
                        <strong>{cell}</strong>
                        {coaches[cell] && <span>{coaches[cell]}</span>}
                      </>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default WeeklySchedule;
