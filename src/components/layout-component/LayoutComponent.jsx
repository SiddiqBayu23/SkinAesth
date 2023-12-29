import Footer from "../footer-component/Footer";
import ForgotModal from "../modal-component/forgot-modal/ForgotModal";
import LoginModal from "../modal-component/login-modal/LoginModal";
import RegisterModal from "../modal-component/register-modal/RegisterModal";
import Navbar from "../navbar-component/Navbar";

const LayoutComponent = ({ children, modal, isShowModal, handleOpenModal, handleCloseModal, email, handleChangeEmail, password, handleChangePassword, handleLogin, handleLogout, loggedIn }) => (
    <>
        <header>
            <Navbar
                handleOpenModal={handleOpenModal}
                handleLogout={handleLogout}
                loggedIn={loggedIn}
            />
        </header>

        <main>
            <div className={` ${ isShowModal === false ? '' : 'bg-gray-900 bg-opacity-50 w-full h-full fixed top-0 bottom-0' }`}></div>
            <div className={`${ isShowModal === false ? 'hidden' : 'block' }`}>
                { modal === 'login' ? <LoginModal handleCloseModal={handleCloseModal} handleOpenModal={handleOpenModal} email={email} handleChangeEmail={handleChangeEmail} password={password} handleChangePassword={handleChangePassword} handleLogin={handleLogin} /> : modal === 'register' ? <RegisterModal handleCloseModal={handleCloseModal} handleOpenModal={handleOpenModal} /> : modal === 'forgot' ? <ForgotModal handleCloseModal={handleCloseModal} handleOpenModal={handleOpenModal} /> : ''}
            </div>

            {children}
        </main>

        <footer>
            <Footer />
        </footer>
    </>
);

export default LayoutComponent;