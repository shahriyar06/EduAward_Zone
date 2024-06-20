import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../../Firebase/firebase.config';




export const AuthContext = createContext(null)

const FirebaseProvider = ({children}) => {

    const [user, setuser] = useState(null)
    const [ loading, setloading ] = useState(true)

    // Create New User
    const signup = (email, password) =>{
        setloading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }


    // Obserber
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
              setuser(user)
              setloading(false)
          });
          return () => unsubscribe();
    },[user])


    const alluser = {
        user,
        loading,
        signup
    }


    return (
        <div>
            <AuthContext.Provider value={alluser}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default FirebaseProvider;