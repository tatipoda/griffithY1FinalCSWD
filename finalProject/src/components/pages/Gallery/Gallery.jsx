import styles from "./Gallerry.module.css";
import GallerySlider from "./GallerySlider";
import GalleryGrid from "./GalleryGrid";
import  GalleryProvider  from './GalleryProvider';

function Gallery() {

  return (
    <main>
      <section className={`${styles.previewGallery} preview`}>
        <div className="container">
          <div className="previewInner">
            <h1>Our Gallery </h1>
            <p className = "description">A look inside Titan Lab</p>
            <div className="dividerLine">
              <span className="diamond"></span>
            </div>
            <p className="motivation">Step inside Titan Lab. Every corner built for performance. Real people. Real effor. Real result </p>
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
