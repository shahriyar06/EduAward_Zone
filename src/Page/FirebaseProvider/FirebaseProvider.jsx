import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './../../Firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/web-extension";
import useAxiosPublic from "../../Hook/useAxiosPublic";


// social auth provider
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null)

const FirebaseProvider = ({children}) => {

    const [user, setuser] = useState(null)
    const [ loading, setloading ] = useState(true)
    const axiosPublic = useAxiosPublic();

    // Create New User
    const signup = (email, password) =>{
        setloading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // SignIn User
    const signin = (email, password) =>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google login
    const googlelogin = () =>{
        setloading(true)
        return signInWithPopup(auth, GoogleProvider)
    }

    // Github login
    const githublogin = () =>{
        setloading(true)
        return signInWithPopup(auth, GithubProvider)
    }


    // Sign out
    const signout = () =>{
        setloading(true)
        setuser(null)
        return signOut(auth)
    }

    // Updateuser
    const updateuserprofile = (name, image) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image,
          })
    }


    // Obserber
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
              setuser(user)
              if(user){
                const userinfo = {email: user.email}
                axiosPublic.post('/jwt', userinfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                        // setloading(false)
                    }
                })
              }
              else{
                // TODO : Remove token
                localStorage.removeItem('access-token');
                // setloading(false)
              }
              setloading(false)

          });
          return () => unsubscribe();
    },[user, axiosPublic])


    const alluser = {
        user,
        loading,
        signup,
        updateuserprofile,
        signin,
        googlelogin,
        githublogin,
        signout
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