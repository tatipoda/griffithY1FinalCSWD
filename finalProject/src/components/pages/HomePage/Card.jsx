import { Link } from "react-router-dom";
import styles from './HomePage.module.css';
import { FaArrowRight } from 'react-icons/fa';

function Card({imageLink, cardName, cardDetail}){
    return(
    <Link to="/classes" className={styles.cardButton}>
    <article className={styles.card}>
        <img src={imageLink} className={styles.cardImage} alt='image of a class'/>
        <div className={styles.cardInfo}>
        <div className={styles.text}>
        <h3 className={styles.title}>{cardName}</h3>
        <p className={styles.description}>{cardDetail}</p>
        </div>
        
        <FaArrowRight className={styles.cardIcon} size={30}> </FaArrowRight>
      
        </div>

    </article>
    </Link>
    );
}
export default Card;