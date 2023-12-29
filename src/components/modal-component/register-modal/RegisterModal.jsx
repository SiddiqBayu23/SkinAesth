import { useState } from "react";
import RegisterModalComponent from "./RegisterModalComponent"
import { addUsers } from "../../../services/usersAPI";

const RegisterModal = ({ handleCloseModal, handleOpenModal }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [jenisKelamin, setJenisKelamin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleChangeFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const handleChangeLastName = (event) => {
        setLastName(event.target.value);
    }

    const handleChangeJenisKelamin = (event) => {
        setJenisKelamin(event.target.value);
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addUsers(firstName, lastName, jenisKelamin, password, username, email);
        setFirstName("");
        setLastName("");
        setJenisKelamin("");
        setEmail("");
        setPassword("");
        setUsername("");
    }

    return <RegisterModalComponent
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
        lastName={lastName}
        firstName={firstName}
        jenisKelamin={jenisKelamin}
        email={email}
        password={password}
        username={username}
        handleChangeFirstName={handleChangeFirstName}
        handleChangeLastName={handleChangeLastName}
        handleChangeJenisKelamin={handleChangeJenisKelamin}
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
        handleChangeUsername={handleChangeUsername}
        handleSubmit={handleSubmit}
    />
};

export default RegisterModal;