import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from "./Gallerry.module.css";
import { useContext } from 'react';
import {GalleryContext} from './GalleryProvider';

function GallerySlider() {
  const{activeTab, setActiveTab, sliderPhotos, trainersPhotos} = useContext(GalleryContext);

  return (
    <main>
      <section className={styles.content}>
          <div className={styles.contentInner}>
            <div className={styles.tabsContainer}>
              <button
                className={`${styles.tab} ${activeTab === "All" ? styles.active : ""}`}
                onClick={() => setActiveTab("All")}
              >
                All
              </button>
              <button
                className={`${styles.tab} ${activeTab === "Gym floor" ? styles.active : ""}`}
                onClick={() => setActiveTab("Gym floor")}
              >
                Gym floor
              </button>
              <button
                className={`${styles.tab} ${activeTab === "Classes" ? styles.active : ""}`}
                onClick={() => setActiveTab("Classes")}
              >
                Classes
              </button>
              <button
                className={`${styles.tab} ${activeTab === "Trainers" ? styles.active : ""}`}
                onClick={() => setActiveTab("Trainers")}
              >
                Trainers
              </button>
            </div>

            <div className="galleryContainer">
              <div className={styles.sliderInner}>
                {activeTab === "Trainers" ? (
                  <Splide
                  options={{
                type   : 'loop',
                perPage: 3,
                focus  : 'center',
                padding: '5%',  
                gap: '1.5rem',
                pagination: true,
                arrows: true, 
                 }}>
                   {trainersPhotos.map((photo) => (
                  <SplideSlide key={photo.id}>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                    />
                  </SplideSlide>
                ))}
                
                  </Splide>

                ):
                   <Splide
                options={{
                  type: "loop",
                  focus:'center',
                  perPage: 1,
                  gap:'1.5rem',
                  pagination: true,
                  arrows: true,
                  padding: '20%',
                 }}>
                {sliderPhotos.map((photo) => (
                  <SplideSlide key={photo.id}>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                    />
                  </SplideSlide>
                ))}
              </Splide>}
           


              </div>
            </div>
          </div>

      </section>
    </main>
  );
}

export default GallerySlider;
