import  styles from "./header.module.css"


export default function Header() {
    return (
        <div className={styles.header}>
          <div className={styles.headerInnerText}>Pastelaria do seu Zé <img className={styles.img} src="pastel_vector.avif"></img></div>  
        </div>
    )
}

//992 170