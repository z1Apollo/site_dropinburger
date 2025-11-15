import { FaInstagram, FaStore, FaUtensils, FaWhatsapp } from "react-icons/fa"
import Button, { CardBox } from "../../Components/CardsButtons"
import logo from "../../Images/logo.png"
import { Logo } from "./style"

export default function Home() {
    return (
        <>
           <Logo src={logo} alt="Logo Drop In Burger" />

            <CardBox>
                <Button text="Cardápio" link="https://app.cardapioweb.com/drop_in_burguer" icon={<FaUtensils />}></Button>
                <Button text="Pedidos Ifood" link="https://www.ifood.com.br/delivery/fortaleza-ce/drop-in-burguer-cidade-2000/33737c60-5eef-4c35-8846-f6e5dc2d5a26" icon={<FaStore />}></Button>
                <Button text="WhatsApp" link="https://api.whatsapp.com/send/?phone=5585991080218&text&type=phone_number&app_absent=0" icon={<FaWhatsapp />}></Button>
                <Button text="Instagram" link="https://www.instagram.com/dropinburguer/" icon={<FaInstagram />}></Button>
            </CardBox>
        </>
    )
}