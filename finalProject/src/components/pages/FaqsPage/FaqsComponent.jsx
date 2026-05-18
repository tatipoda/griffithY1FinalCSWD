import {useState} from 'react';
import styles from './Faqs.module.css';

function FaqsComponent({activeSection}){
    const[faqOpen, setFaqOpen] = useState(0);

    const faqSections = [
    {
        id: 0,
        section: "Membership & Pricing",
        faqs: [
            {
                id: 0,
                question: "What membership plans do you offer?",
                answer: "We offer three plans: Basic, Premium, and Elite. Each plan includes different levels of access to gym facilities, classes, and personal training. Visit our Membership page for full details and pricing."
            },
            {
                id: 1,
                question: "Can I freeze or cancel my membership?",
                answer: "Yes, you can freeze your membership for up to 3 months per year. To cancel, simply give us 30 days notice by contacting us through the Contact page or visiting the front desk."
            },
            {
                id: 2,
                question: "Is there a joining fee?",
                answer: "There is a one-time joining fee of €20 for all new members. This covers your membership card and initial fitness assessment with one of our trainers."
            },
            {
                id: 3,
                question: "Do you offer student or family discounts?",
                answer: "Yes, we offer a 15% student discount with a valid student ID, and a family plan that covers up to 4 members at a reduced monthly rate. Contact us for more details."
            },
            {
                id: 4,
                question: "Can I upgrade or downgrade my membership plan?",
                answer: "Yes, you can change your plan at any time. Upgrades take effect immediately and downgrades take effect at the start of your next billing cycle. Just visit the front desk or contact us online."
            },
            {
                id: 5,
                question: "Is there a minimum contract length?",
                answer: "We offer both monthly rolling contracts and annual contracts. Annual contracts come with a discounted monthly rate. There is no penalty for cancelling a monthly contract with 30 days notice."
            },
            {
                id: 6,
                question: "What payment methods do you accept?",
                answer: "We accept all major credit and debit cards, direct debit, and cash payments at the front desk. Monthly memberships are billed automatically on the same date each month."
            },
            {
                id: 7,
                question: "Can I get a refund if I am unhappy?",
                answer: "We offer a 7-day satisfaction guarantee for new members. If you are not happy within your first week, contact us and we will issue a full refund, no questions asked."
            }
        ]
    },
    {
        id: 1,
        section: "Classes & Training",
        faqs: [
            {
                id: 0,
                question: "What classes do you offer?",
                answer: "We offer a wide range of classes including yoga, HIIT, spinning, boxing, and pilates. Check our Classes page for the full schedule and to book your spot."
            },
            {
                id: 1,
                question: "Do I need to book classes in advance?",
                answer: "Yes, we recommend booking classes at least 24 hours in advance as spots fill up quickly. You can book online through the Classes page or at the front desk."
            },
            {
                id: 2,
                question: "Do you offer personal training?",
                answer: "Yes, we have a team of certified personal trainers available for one-on-one sessions. You can view their profiles on our Trainers page and book a session directly."
            },
            {
                id: 3,
                question: "Are the classes suitable for beginners?",
                answer: "Absolutely. All our classes have beginner-friendly options and our trainers will always offer modifications to suit your fitness level. Just let the instructor know before the class starts."
            },
            {
                id: 4,
                question: "How long are the classes?",
                answer: "Most classes run for 45 to 60 minutes. Some specialist sessions such as yoga and pilates can run up to 75 minutes. Check the schedule on our Classes page for exact durations."
            },
            {
                id: 5,
                question: "What should I bring to a class?",
                answer: "We recommend wearing comfortable workout clothing and bringing a water bottle and a small towel. Yoga mats and equipment are provided for all classes."
            },
            {
                id: 6,
                question: "Can I cancel a class booking?",
                answer: "Yes, you can cancel a booking up to 2 hours before the class starts without any penalty. Late cancellations or no-shows may count against your booking credits depending on your plan."
            },
            {
                id: 7,
                question: "How many classes can I attend per week?",
                answer: "Basic members can attend up to 3 classes per week. Premium and Elite members have unlimited class access. Check our Membership page for a full breakdown."
            }
        ]
    },
    {
        id: 2,
        section: "Facilities & General",
        faqs: [
            {
                id: 0,
                question: "What are your opening hours?",
                answer: "We are open Monday to Friday from 6:00am to 10:00pm, Saturday from 8:00am to 8:00pm, and Sunday from 9:00am to 6:00pm."
            },
            {
                id: 1,
                question: "Is there parking available?",
                answer: "Yes, we have free parking available for all members directly outside the gym."
            },
            {
                id: 2,
                question: "Do you have changing rooms and showers?",
                answer: "Yes, we have fully equipped changing rooms with showers, lockers, and hairdryers available for all members."
            },
            {
                id: 3,
                question: "Can I bring a guest?",
                answer: "Yes, members on our Premium and Elite plans can bring one guest per visit free of charge. Basic plan members can purchase a guest pass at the front desk for €5."
            },
            {
                id: 4,
                question: "Is the gym accessible for people with disabilities?",
                answer: "Yes, Titan Lab is fully wheelchair accessible with ramp access, accessible changing rooms, and adapted equipment available on request. Please contact us in advance so we can ensure everything is ready for your visit."
            },
            {
                id: 5,
                question: "Do you have a cafe or nutrition bar?",
                answer: "Yes, we have a nutrition bar on site offering protein shakes, smoothies, and healthy snacks. It is open during all gym hours and available to both members and guests."
            },
            {
                id: 6,
                question: "Is there CCTV in the gym?",
                answer: "Yes, for the safety and security of all members and staff, CCTV is in operation throughout the gym, excluding changing rooms and shower areas."
            },
            {
                id: 7,
                question: "What should I do if I lose something at the gym?",
                answer: "Check with the front desk as all lost property is held there for 30 days. After 30 days unclaimed items are donated to charity. We recommend using a locker for your valuables during your visit."
            }
        ]
    }
];
return(
     <div className={styles.questionsContainer}>
     <div className={styles.leftColumn}>
        {faqSections
        .find(section => section.section === activeSection)
        .faqs.slice(0, Math.floor(faqSections.find(section => section.section === activeSection).faqs.length/2)).map((faq) => (
            <div className={styles.questionAnswerContainer} key={faq.key}>
                <button 
                className ={`${styles.question} ${faqOpen === faq.id ? styles.questionOpen : ''}`} 
                onClick={() => setFaqOpen(faqOpen ===faq.id ? null: faq.id)}>
                {faq.question}
                <div className={styles.closeOpenButton}>
                    <span className={styles.line1}></span>
                    <span className={styles.line2}></span>
                </div>
                </button>
               <p className={`${styles.answer} ${faq.id === faqOpen ? styles.open: ''}`}>{faq.answer}</p>
            </div>
        ))}
        </div>
        <div className={styles.rightColumn}>
        {faqSections
        .find(section => section.section === activeSection)
        .faqs.slice(Math.floor(faqSections.find(section => section.section === activeSection).faqs.length/2)).map((faq) => (
            <div className={styles.questionAnswerContainer} key={faq.key}>
                <button 
                className ={`${styles.question} ${faqOpen === faq.id ? styles.questionOpen : ''}`} 
                onClick={() => setFaqOpen(faqOpen ===faq.id ? null: faq.id)}>
                {faq.question}
                <div className={styles.closeOpenButton}>
                    <span className={styles.line1}></span>
                    <span className={styles.line2}></span>
                </div>
                </button>
               <p className={`${styles.answer} ${faq.id === faqOpen ? styles.open: ''}`}>{faq.answer}</p>
            </div>
        ))}
     </div>

        </div>
);

}

export default FaqsComponent;