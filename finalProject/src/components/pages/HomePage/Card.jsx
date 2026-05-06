import styles from './HomePage.module.css';

function Card({imageLink, cardName, cardDetail}){
    return(
    <article className={styles.card}>
        <img src={imageLink} className={styles.cardImage} alt='image of a class'/>
        <h3>{cardName}</h3>
        <p>{cardDetail}</p>
        <button>Learn More</button>
    </article>
    );
}
export default Card;