import { FaInstagram, FaStore, FaUtensils, FaWhatsapp } from "react-icons/fa"
import Button, { CardBox } from "../../Components/CardsButtons"
import logo from "../../Images/Logo.jpg"

export default function Home() {
    return (
        <>
           <img src={logo} alt="Logo Drop In Burger" />

            <CardBox>
                <Button text="Cardápio" link="#" icon={<FaUtensils />}></Button>
                <Button text="Pedidos Ifood" link="#" icon={<FaStore />}></Button>
                <Button text="WhatsApp" link="#" icon={<FaWhatsapp />}></Button>
                <Button text="Instagram" link="#" icon={<FaInstagram />}></Button>
            </CardBox>
        </>
    )
}