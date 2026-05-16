import styles from "./Gallerry.module.css";
import GallerySlider from "./GallerySlider";
import GalleryGrid from "./GalleryGrid";
import  GalleryProvider  from './GalleryProvider';

function Gallery() {

  return (
    <main>
      <section className={styles.preview}>
        <div className="container">
          <div className={styles.previewInner}>
            <h1>Our Gallery </h1>
            <p className = {styles.description}>A look inside Titan Lab</p>
            <div className={styles.dividerLine}>
              <span className={styles.diamond}></span>
            </div>
            <p className={styles.motivation}>Step inside Titan Lab. Every corner built for performance. Real people. Real effor. Real result </p>
          </div>
        </div>
      </section>
      <GalleryProvider>
      <GallerySlider/>
      <GalleryGrid/>
      </GalleryProvider>
      
    </main>
  );
}

export default Gallery;
