import { Link } from "react-router-dom";
import styles from './HomePage.module.css';

function Card({imageLink, cardName, cardDetail}){
    return(
    <article className={styles.card}>
        <img src={imageLink} className={styles.cardImage} alt='image of a class'/>
        <h3>{cardName}</h3>
        <p>{cardDetail}</p>
        <Link to="/classes" className={styles.cardButton}>Learn More</Link>
    </article>
    );
}
export default Card;