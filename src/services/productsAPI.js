import { collection, getDocs, getFirestore, doc, getDoc } from "firebase/firestore";
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import firestore from "./firestoreConfig"

export const getProducts = async () => {
    const db = getFirestore(firestore);
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = querySnapshot.docs.map((doc) => (
        {
            id: doc.id,
            ...doc.data()
        }
    ));

    return products;
};

export const getProductById = async (id) => {
    const db = getFirestore(firestore);
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        console.log("No such document!");
        return null;
    }
};

export const getProductsImg = async (imageName) => {
    const storage = getStorage(firestore);
    const imageRef = ref(storage, `products/${imageName}`);
    const url = await getDownloadURL(imageRef);

    return url;
}