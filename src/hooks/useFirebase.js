import { useEffect, useState } from "react";
import initializeFirebase from "../Componets/Pages/Login/Fairbase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const loginUser = (email, password, location, history) => {
      
      
        signInWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history?.replace(destination);
                setAuthError("");
                setUser(userCredential.user);

            })
            .catch((error) => {
                setAuthError(error.message);
            })
          

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user)
            } else {
                setUser({})
            }
        });
        return () => unSubscribe;
    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }


    return {
        user,
        registerUser,
        logOut,
        loginUser,


    }


}
export default useFirebase;