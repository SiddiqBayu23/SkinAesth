import { useEffect, useState } from "react";
import LayoutComponent from "./LayoutComponent";
import { getUserByEmail } from "../../services/usersAPI";

const Layout = ({ children }) => {
    const [modal, setModal] = useState('login');
    const [isShowModal, setIsShowModal] = useState(false);

    const [loggedIn, setLoggedIn] = useState(false);
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

        useEffect(() => {
        if (localStorage.getItem("logged_in") === null) {
            localStorage.setItem("logged_in", JSON.stringify(false));
        } else {
            setLoggedIn(JSON.parse(localStorage.getItem("logged_in")));
        }
    }, []);

    const handleLogin = async (event) => {
        event.preventDefault();
        const user = await getUserByEmail(email);
    
        if (user === undefined || user.length === 0) {
            alert("Email atau password anda salah");
        } else {
            if (user.user_password === password) {
                alert("Login berhasil");
                setIsShowModal(false);
                setLoggedIn(true);
                localStorage.setItem("logged_in", JSON.stringify(true));
            } else {
                alert("Email atau password anda salah");
            }
        }
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleLogout = () => {
        localStorage.setItem("logged_in", JSON.stringify(false));
        setLoggedIn(false);
        alert("Logout berhasil");
    };

    const handleOpenModal = (modal) => {
        setModal(modal);
        setIsShowModal(true);
    }

    const handleCloseModal = () => {
        setModal('login');
        setIsShowModal(false);
    }

    return <LayoutComponent 
        children={children}
        modal={modal}
        isShowModal={isShowModal}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        loggedIn={loggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        email={email}
        password={password}
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
    />
};

export default Layout;