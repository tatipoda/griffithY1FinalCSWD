import styles from './HomePage.module.css';

function Trainers({imageLink, trainerName, trainerDetail}){
    return(
        <div className={styles.trainer}>
        <img src={imageLink} className={styles.trainerImage} alt='image of a trainer'/>
        <div>
            <h3>{trainerName}</h3>
            <p>{trainerDetail}</p>
        </div>
        </div>
    );
}
export default Trainers;