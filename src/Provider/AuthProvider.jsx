import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";

 export const AuthContext = createContext();
 const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createNewUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () => {
        return signOut(auth)
        .then(() => {
            setUser(null);
        })
    }

    const authinfo ={

        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
    };

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
    })
    return () => {
        unsubscribe();
    }
   }, [])
    return <AuthContext.Provider value={authinfo}>
    {children}
    </AuthContext.Provider>
};

export default AuthProvider;