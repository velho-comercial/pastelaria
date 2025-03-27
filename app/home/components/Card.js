import styles from './Card.module.css';

export default function Card(props) {
    const grayscaleStyle = props.disponivel ? {} : { filter: 'grayscale(100%)' };

    return (
        <div className={styles.card} style={grayscaleStyle}>
            <div className={ props.disponivel ? styles.txt : styles.txtLine }>{ props.sabor }</div> 
             <img className={styles.img} src="pasteis.jpg"></img>
            <div className={styles.txtSmall}>{props.preco}</div> 
        </div>
    )
}