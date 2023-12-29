import LoginModalComponent from "./LoginModalComponent"

const LoginModal = ({ handleCloseModal, handleOpenModal, email, handleChangeEmail, password, handleChangePassword, handleLogin }) => {
    return <LoginModalComponent
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
        email={email}
        password={password}
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
        handleLogin={handleLogin}
    />;
};

export default LoginModal;