import styles from "./Gallerry.module.css";

import GallerySlider from "./GallerySlider";

function Gallery() {
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
      <GallerySlider />
    </main>
  );
}

export default Gallery;
