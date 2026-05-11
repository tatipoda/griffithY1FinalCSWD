import {useState} from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import emailjs from '@emailjs/browser';
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
    <main className="page">
      <h1>Contact</h1>
      <p>Ready to start your fitness journey? We'd love to hear from you. Reach out and a member of our team will be in touch soon..</p>
      
      <form className={styles.formContainer} onSubmit={handleSubmit}>
       <div className={styles.inputContainer}>
        <label>First Name</label>
        <input type="text" placeholder='First Name' name='firstName' onChange={handleChange} required/>
        </div>

        <div className={styles.inputContainer}>
        <label>Second Name</label>
        <input type="text" placeholder='Second Name' name='secondName' onChange={handleChange} required/>
        </div>

        <div className={styles.inputContainer}>
        <label>Email</label>
        <input type="email" placeholder='Email' name='email' onChange={handleChange} required/>
        </div>

        <div className={styles.inputContainer}>
        <label>Phone Number</label>
          <PhoneInput
            defaultCountry={'ie'}
            value={phone}
            onChange={setPhone}
            />
        </div>
        
        <div className={styles.inputContainer}>
        <label>Message</label>
        <textarea placeholder='Your message...' name='message' rows='4' onChange={handleChange} required/>
        </div>

        <button type='submit' className={styles.submitButton}>Get In Touch</button>
      
      </form>
    </main>
  );
}

export default Contact;
