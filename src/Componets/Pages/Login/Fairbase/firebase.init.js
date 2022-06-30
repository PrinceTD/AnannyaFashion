import { initializeApp } from "firebase/app";
import firebaseConfig from "./fairbase.config";

const initializeFirebase =() =>{
    initializeApp(firebaseConfig);
    
}
export default initializeFirebase;