import { useEffect, useState } from "react";
import initializeFirebase from "../Componets/Login/Fairbase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    // addmin
    const [admin, setAdmin] = useState(false);

    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();


    const registerUser = (name, email, Password, navigate) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, Password)
            .then((userCredential) => {
                const newUser = { email, displayName: name }
                setUser(newUser);
                saveuser(email, name, 'POST')
                // update user
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {
                });
                navigate('/myaccount');

                setAuthError('')
            })
            .catch((error) => {

                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (navigate) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                navigate('/myaccount');
                setAuthError('')
                saveuser(user.email, user.displayName, "PUT")

            }).catch((error) => {
                setAuthError(error.massage)
            })
            .finally(() => setIsLoading(false));
        ;
    }

    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {


                navigate('/myaccount');
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
        ;
    }

    // observer user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    // admin

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () => {
        signOut(auth).then(() => {


        }).catch((error) => {

        })
            .finally(() => setIsLoading(false));
    }


    const saveuser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch(`http://localhost:5000/users`, {
            method: method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        isLoading,
        authError,
        registerUser,
        logOut,
        loginUser,
        signInWithGoogle,
        admin

    }

}
export default useFirebase;