import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import firestore from "./firestoreConfig"

export const getProductCategory = async () => {
    const db = getFirestore(firestore);
    const querySnapshot = await getDocs(collection(db, "product_category"));
    const categories = querySnapshot.docs.map((doc) => (
        {
            ...doc.data()
        }
    ));

    return categories;
};

export const getProductCategoryImg = async (imageName) => {
    const storage = getStorage(firestore);
    const imageRef = ref(storage, `categories/${imageName}`);
    const url = await getDownloadURL(imageRef);

    return url;
}