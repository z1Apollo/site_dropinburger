import { Outlet } from "react-router-dom"
import { AllDisplay } from "../Components/AllDisplay"
import { Footer, TextFooter } from "./style"

export const Layout = () => {
    return (
        <AllDisplay>
            <Outlet />
            <Footer>
                <TextFooter>© {new Date().getFullYear()} Drop In Burger - Todos os direitos reservados.</TextFooter>
            </Footer>
        </AllDisplay>
    )
}