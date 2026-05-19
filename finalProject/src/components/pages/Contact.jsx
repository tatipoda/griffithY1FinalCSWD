import {useState} from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import emailjs from '@emailjs/browser';
import {BiUser, BiEnvelope, BiPhone, BiMessageDetail} from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import styles from './Contact.module.css';

function Contact() {
  const [phone, setPhone] = useState('');
  const [formData, setFormData] = useState({
    firstName: '', 
    secondName: '', 
    email: '',
    message: ''
  })
  function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  function handleSubmit(e){
    e.preventDefault();
    const fullData = ({...formData, phone: phone})
    emailjs.send('service_k5p8lok','template_6dzqxfe', fullData)
    .then(() => {
      emailjs.send('service_k5p8lok','template_54t49gp', fullData)})
    .then(()=>{
      alert('Message sent successfully!');
      e.target.reset();
      setPhone('');
    }).catch((error) => {
      console.error(error);
      alert('Something went wrong, please try again');
    })
  }


 
  return (
    <main>
      <section className={`${styles.previewContact} preview`}>
            <div className="container">
              <div className="previewInner">
                <h1>Contact us </h1>
                <p className="description">We'd love to hear from you</p>
                <div className="dividerLine">
                  <span className="diamond"></span>
                </div>
                <p className="motivation">Ready to start your fitness journey? Reach out and a member of our team will be in touch soon.. </p>
              </div>
            </div>
          </section>

      <div className={styles.content}>
      <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formInner}> 
        <h2 className={styles.title}> Send us a message</h2>
        <div className={styles.groupInput}>
       <div className={styles.inputContainer}>
        <BiUser className={styles.inputIcon} size={30}></BiUser>
        <input type="text" placeholder='First Name' name='firstName' onChange={handleChange} required/>
        </div>

        <div className={styles.inputContainer}>
        <BiUser className={styles.inputIcon} size={30}></BiUser>
        <input type="text" placeholder='Second Name' name='secondName' onChange={handleChange} required/>
        </div>
        </div>

        <div className={styles.inputContainer}>
        <BiEnvelope className={styles.inputIcon} size={30}></BiEnvelope>
        <input type="email" placeholder='Email Adress' name='email' onChange={handleChange} required/>
        </div>

        <div className={styles.inputContainer}>
          <PhoneInput
            defaultCountry={'ie'}
            value={phone}
            onChange={setPhone}
            />
            {/* <BiPhone className={styles.inputIcon} size={30}></BiPhone> */}
        </div>
        
        <div className={`${styles.inputContainer} ${styles.message}`}>
          <BiMessageDetail className={styles.inputIcon} size={30}></BiMessageDetail>
        <textarea placeholder='Message' name='message' rows='4' onChange={handleChange} required/>
        </div>

        <button type='submit' className={styles.submitButton}>
          Get In Touch
          <FaArrowRight className={styles.submitIcon} size={25}></FaArrowRight>
          </button>
        </div>
      </form>

      <div className={styles.contact}>
        <div className={styles.contactInner}>
          <h2 className={styles.title}> Contact Information</h2>
          <div className={styles.info}>
            <div className={styles.infoElement}>
             <FaMapMarkerAlt className={styles.infoIcon} size={40}></FaMapMarkerAlt>
             <div className={styles.infoText}>
              <h3>Location</h3>
              <p>Titan Lab Gym</p> 
              <p>Unit 7B, Northwest Business Park</p>
              <p>Ballycoolin, Dublin 15, Ireland</p> 
             </div>
             </div>

             <div className={styles.infoElement}>
              <FaPhoneAlt className={styles.infoIcon} size={35}></FaPhoneAlt>
             <div className={styles.infoText}>
              <h3>Phone</h3>
              <p>+353 (85) 807 6628</p>
             </div>
             </div>

             <div className={styles.infoElement}>
              <FaEnvelope className={styles.infoIcon} size={35}></FaEnvelope>
             <div className={styles.infoText}>
              <h3>Email</h3>
              <p>titanlab675@gmail.com</p>
             </div>
             </div>

             <div className={`${styles.infoElement} ${styles.lastElement}`}>
               <FaRegClock className={styles.infoIcon} size={40}></FaRegClock>
              <div className={styles.infoText}>
              <h3>Opening Hours</h3>
              <p> Mon - Fri: 6:00 AM - 10:00 PM</p>
              <p>Sat-Sun: 8:00 AM - 6:00 PM</p>
             </div>
             </div>
            

            
          </div>


        </div>
      </div>
      </div>  
    </main>
  );
}

export default Contact;
