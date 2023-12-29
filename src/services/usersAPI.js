import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import firestore from "./firestoreConfig";
import { getRandomId } from "../helper/getRandomId";

export const addUsers = async (firstName, lastName, jenisKelamin, password, username, email) => {
    const db = getFirestore(firestore);
    try {
        const docRef = await addDoc(collection(db, "users"), {
            user_id: getRandomId(),
            user_firstName: firstName,
            user_lastName: lastName,
            user_jenisKelamin: jenisKelamin,
            user_password: password,
            user_username: username,
            user_email: email, 
        });

        alert("Berhasil mendaftar akun baru!");
    } catch (error) {
        alert("Terjadi error saat register!");
    }
};

export const getUserByEmail = async (email) => {
    const db = getFirestore(firestore);
    const q = query(collection(db, "users"), where("user_email", "==", email));
    const querySnapshot = await getDocs(q);
    const users = querySnapshot.docs.map((doc) => (
        {
            id: doc.id,
            ...doc.data()
        }
    ));

    return users[0];
};