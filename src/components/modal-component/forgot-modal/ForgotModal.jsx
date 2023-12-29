import ForgotModalComponent from "./ForgotModalComponent"

const ForgotModal = ({ handleCloseModal, handleOpenModal }) => {
    return <ForgotModalComponent
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
    />;
};

export default ForgotModal;