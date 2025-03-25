import Card from './Card'
import styles from './containerCards.module.css'

export default function ContainerCards() {

    return (
        <div className={styles.container}>
            <Card disponivel={true} sabor={"carne"} preco={"R$ 10,00"}></Card>
            <Card disponivel={false} sabor={"queijo"} preco={"R$ 9,00"}></Card>
            <Card disponivel={true} sabor={"catupiry"} preco={"R$ 12,00"}></Card>
            <Card disponivel={true} sabor={"frango"} preco={"R$ 11,00"}></Card>
            <Card disponivel={true} sabor={"catupiry"} preco={"R$ 12,00"}></Card>
            <Card disponivel={true} sabor={"brócoli"} preco={"R$ 10,00"}></Card>
            <Card disponivel={true} sabor={"alho poró"} preco={"R$ 16,00"}></Card>
            <Card disponivel={false} sabor={"pizza"} preco={"R$ 12,00"}></Card>
           
        </div>
    )
}