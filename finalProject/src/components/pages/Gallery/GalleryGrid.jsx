import styles from "./Gallerry.module.css";
import { useContext } from 'react';
import {GalleryContext} from './GalleryProvider';

function GalleryGrid(){
  const{activeTab, setActiveTab, sliderPhotos} = useContext(GalleryContext);

  return(
    <main>
        <section className={styles.gridPhotos}>
        <div className={styles.gridPhotosInner}>
          <h3 className={styles.gridTitle}> Browse All Photos </h3>
          <div className={styles.grid}>
            {sliderPhotos.map(photo => 
            <img key = {photo.id} src={photo.src} alt={photo.alt} 
            className={`${styles.gridPhoto} ${photo.wide ? styles.gridPhotoWide : ''}`} />)}
          </div>
        </div>
      </section>
    </main>

  );


}
export default GalleryGrid;