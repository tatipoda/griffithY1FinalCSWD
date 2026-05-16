import { useState } from "react";
import styles from "./ClassesFaq.module.css";

const faqData = [
  {
    question: "Do I need to book classes in advance?",
    answer:
      "Most classes can be joined directly, but high-demand sessions like CrossFit and Olympic Lift are recommended to book in advance."
  },

  {
    question: "What if I have never trained before?",
    answer:
      "No problem. We have beginner-friendly sessions and our coaches adapt exercises to your level."
  },

  {
    question: "Can I attend with an injury or after recovery?",
    answer:
      "Yes. Sergiy Dukhota leads rehabilitation-focused training and can help adapt workouts safely."
  },

  {
    question: "Do I need my own equipment?",
    answer:
      "No. Titan Lab provides all required training equipment during classes."
  },

  {
    question: "Can I try one class before buying membership?",
    answer:
      "Yes. Single sessions are available. Contact reception to arrange a visit."
  }
];

function ClassesFaq() {
  const [active, setActive] = useState(null);

  function handleToggle(index) {
    setActive(active === index ? null : index);
  }

  return (
    <section className={styles.faq}>
      <h2>Frequently Asked Questions</h2>

      <div className={styles.questions}>
        {faqData.map((item, index) => (
          <article
            key={item.question}
            className={styles.item}
          >
            <button
              onClick={() => handleToggle(index)}
              className={styles.question}
            >
              <span>{item.question}</span>

              <span>
                {active === index ? "−" : "+"}
              </span>
            </button>

            {active === index && (
              <div className={styles.answer}>
                {item.answer}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default ClassesFaq;
