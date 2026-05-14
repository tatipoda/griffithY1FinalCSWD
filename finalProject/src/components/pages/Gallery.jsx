import {useState} from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styles from './Gallerry.module.css';

import floor1 from '../../assets/gallerry/gym-floor-1.png';
import floor2 from '../../assets/gallerry/gym-floor-2.png';
import floor3 from '../../assets/gallerry/gym-floor-3.png';
import floor4 from '../../assets/gallerry/gym-floor-4.png';
import floor5 from '../../assets/gallerry/gym-floor-5.png';
import floor6 from '../../assets/gallerry/gym-floor-6.png';

import classes1 from '../../assets/gallerry/classes-1.png';
import classes2 from '../../assets/gallerry/classes-2.png';
import classes3 from '../../assets/gallerry/classes-3.png';
import classes4 from '../../assets/gallerry/classes-4.png';
import classes5 from '../../assets/gallerry/classes-5.png';
// import classes6 from '../../assets/gallerry/classes-6.png';

// import trainers1 from '../../assets/gallerry/trainers-1.png';
// import trainers2 from '../../assets/gallerry/trainers-2.png';
// import trainers3 from '../../assets/gallerry/classes-3.png';
// import trainers4 from '../../assets/gallerry/classes-4.png';
// import trainers5 from '../../assets/gallerry/classes-5.png';
// import trainers6 from '../../assets/gallerry/classes-6.png';


function Gallery() {
  const[activeTab, setActiveTab] = useState('All');

 const photos = [
   
    { id: 0, src: floor1, category: 'Gym floor', alt: 'Main gym floor with free weights area' },
    { id: 1, src: floor2, category: 'Gym floor', alt: 'Cardio machines section' },
    { id: 2, src: floor3, category: 'Gym floor', alt: 'Squat racks and barbells' },
    { id: 3, src: floor4, category: 'Gym floor', alt: 'Stretching and mat area' },
    { id: 4, src: floor5, category: 'Gym floor', alt: 'Resistance machines section' },
    { id: 5, src: floor6, category: 'Gym floor', alt: 'Dumbbells rack' },

    { id: 6, src: classes1, category: 'Classes', alt: 'HIIT class in session' },
    { id: 7, src: classes2, category: 'Classes', alt: 'Yoga class morning session' },
    { id: 8, src: classes3, category: 'Classes', alt: 'Spinning class' },
    { id: 9, src: classes4, category: 'Classes', alt: 'Boxing class with pads' },
    { id: 10, src: classes5, category: 'Classes', alt: 'Pilates class' },
    { id: 11, src: classes5, category: 'Classes', alt: 'Group fitness session' },

    { id: 12, src: classes1, category: 'Trainers', alt: 'Personal trainer coaching a client' },
    { id: 13, src: classes1, category: 'Trainers', alt: 'Trainer demonstrating proper form' },
    { id: 14, src: classes1, category: 'Trainers', alt: 'One on one training session' },
    { id: 15, src: classes1, category: 'Trainers', alt: 'Trainer assisting with stretching' },
    { id: 16, src: classes1, category: 'Trainers', alt: 'Trainer team photo' },
    { id: 17, src: classes1, category: 'Trainers', alt: 'Trainer running a group warmup' },
];

const filteredPhotos = (activeTab === 'All' ? photos : photos.filter(photo => photo.category === activeTab));
const sliderPhotos = (activeTab === 'All' ? filteredPhotos : filteredPhotos.slice(0,6));

  return (
     <main>
            <section className={styles.preview}>
                <div className="container">
                    <div className={styles.previewInner}>
                        <h1>Our Gallery </h1>
                        <p>A look inside Titan Lab</p>
                    </div>
                </div>
            </section>
    
            <section className={styles.content}>
                <div className="container">
                    <div className={styles.contentInner}>
    
                <div className={styles.tabsContainer}>
                    <button className={`${styles.tab} ${activeTab === 'All' ? styles.active : ''}`} onClick={() => setActiveTab('All')}> 
                    All</button>
                    <button className={`${styles.tab} ${activeTab === 'Gym floor' ? styles.active : ''}`} onClick={() => setActiveTab('Gym floor')}>
                    Gym floor</button>
                    <button className={`${styles.tab} ${activeTab === 'Classes' ? styles.active : ''}`} onClick={() => setActiveTab('Classes')}> 
                    Classes</button>
                    <button className={`${styles.tab} ${activeTab === 'Trainers' ? styles.active : ''}`} onClick={() => setActiveTab('Trainers')}> 
                    Trainers</button>
                </div>

                <div className={styles.sliderContainer}>

                  <Splide options={{
                  type: 'loop',
                  perPage: 1,
                  padding: '10%',  
                  gap: '1rem',
                  pagination: true,
                  arrows: true,
                  }}>
                  {sliderPhotos.map((photo) => (
                      <SplideSlide key={photo.id}>
                      <img src={photo.src} alt={photo.alt} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                      </SplideSlide>
                      ))}
                  </Splide>
                </div>


                </div>
                </div>
            </section>

            
            
          
       
        </main>
  );
}

export default Gallery;
