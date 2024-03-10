import {GoogleAuthProvider,getAuth,signInWithPopup} from "firebase/auth";
import {getFirestore,query,getDocs,collection,where,addDoc} from "firebase/firestore";
import {getStorage,ref,uploadBytes,listAll} from "firebase/storage"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyANECKHT1yWv4CyL215_Y1am9oKLweycFM",
    authDomain: "student-portal-62677.firebaseapp.com",
    projectId: "student-portal-62677",
    storageBucket: "student-portal-62677.appspot.com",
    messagingSenderId: "186765222868",
    appId: "1:186765222868:web:50f624a2c3d5f1a5376c41",
    measurementId: "G-2EF0PZ6MGE"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const storage = getStorage()

export const fileUpload = async (file) => {
    const storageRef = ref(storage,`repository/${file.name}`)
    uploadBytes(storageRef,file).then((res) => {
        console.log('File Uploaded',res)
    })
}

export const fetchRepository = async () => {
    const listRef = ref(storage,'repository/')
    listAll(listRef)
        .then((res) => {

        }).catch((err)=>{
        console.log('Error', err)
    })
}


const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}
