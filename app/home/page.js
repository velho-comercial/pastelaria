import Card from "./components/Card";
import ContainerCards from "./components/containerCards";
import Header from "./components/header";

export default function Page(){

    return (

        <>
         <Header></Header>
         <ContainerCards>
            <Card sabor="carne" preco="R$10,00"></Card>
         </ContainerCards>
        </>
       
    )

}