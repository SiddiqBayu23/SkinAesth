import { useState } from "react";
import NavbarComponent from "./NavbarComponent"

const Navbar = ({ handleOpenModal, handleLogout, loggedIn }) => {
    const [navbarIsOpen, setNavbarIsOpen] = useState(false);

    const handleOpenNavbar = () => setNavbarIsOpen(!navbarIsOpen);

    return <NavbarComponent
        navbarIsOpen={navbarIsOpen}
        handleOpenNavbar={handleOpenNavbar}
        handleOpenModal={handleOpenModal}
        handleLogout={handleLogout}
        loggedIn={loggedIn}
    />;
};

export default Navbar;