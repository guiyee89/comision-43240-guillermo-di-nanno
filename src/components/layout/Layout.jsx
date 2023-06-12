import { Outlet } from "react-router"
import { Navbar } from "./navBar/Navbar"
import { Footer } from "./footer/Footer"


export const Layout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}
