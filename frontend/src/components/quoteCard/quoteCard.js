import React from "react";
import styles from './quoteCard.module.css'

const QuoteCard = ({ author, genres, quote }) => {

    return (
        <div className={styles.card}>
            <p id={styles.list}><b>Genres:</b> {genres}</p>
            <p id={styles.quote}>"{quote}"</p>
            <h1 id={styles.name}>- {author}</h1>
        </div>
    );
};
export default QuoteCard;