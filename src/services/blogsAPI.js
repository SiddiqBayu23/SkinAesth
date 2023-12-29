import { collection, getDocs, getFirestore, doc, getDoc } from "firebase/firestore";
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import firestore from "./firestoreConfig"

export const getBlogs = async () => {
    const db = getFirestore(firestore);
    const querySnapshot = await getDocs(collection(db, "blogs"));
    const blogs = querySnapshot.docs.map((doc) => (
        {
            id: doc.id,
            ...doc.data()
        }
    ));

    return blogs;
};

export const getBlogById = async (id) => {
    const db = getFirestore(firestore);
    const docRef = doc(db, "blogs", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        console.log("No such document!");
        return null;
    }
};

export const getBlogImg = async (imageName) => {
    const storage = getStorage(firestore);
    const imageRef = ref(storage, `blogs/${imageName}`);
    const url = await getDownloadURL(imageRef);

    return url;
}

export const getBlogAuthorImg = async (imageName) => {
    const storage = getStorage(firestore);
    const imageRef = ref(storage, `blogs_author/${imageName}`);
    const url = await getDownloadURL(imageRef);

    return url;
}