import styles from "./Gallerry.module.css";
import { useContext } from 'react';
import {GalleryContext} from './GalleryProvider';

function GalleryGrid(){
  const{activeTab, setActiveTab, sliderPhotos, trainersPhotos} = useContext(GalleryContext);

  return(
    <main>
        <section className={styles.gridPhotos}>
        <div className={styles.gridPhotosInner}>
          <h3 className={styles.gridTitle}> Browse All Photos </h3>
          <div className={styles.grid}>
            {activeTab === "Trainers" ? (
            trainersPhotos.map(photo => 
            <img key = {photo.id} src={photo.src} alt={photo.alt} 
            className={`${styles.gridPhoto}  ${styles.gridPhotoVertical}`} />)
            ): 
            sliderPhotos.map(photo => 
            <img key = {photo.id} src={photo.src} alt={photo.alt} 
            className={`${styles.gridPhoto} ${photo.wide ? styles.gridPhotoWide : ''}`} />)}
          </div>
        </div>
      </section>
    </main>

  );


}
export default GalleryGrid;