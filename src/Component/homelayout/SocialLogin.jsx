import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const SocialLogin = () => {

    //integrating the google to login in the website
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const [loaging, setLoading] = useState()
    const googleLogin =()=> {
         setLoading(true)
         return  signInWithPopup(auth, googleProvider)
    }

  // for sign out ------>
    // const logout = () => {
    //     return signOut(auth)
    // }


    //useEffect use
    // useEffect(()=> {
    //     const unsubscribe = onAuthStateChanged(auth, currentUser => {
    //         set
    //     })
    // })

   

    const handleGoogleLogin = (e)=> {
        e.preventDefault();
        googleLogin()
        .then(result => {
           // console.log(result.user)
        })
        .catch(error => {
           // console.log(error)
        });
    }
  return (
    <div>
       
      <div className="space-y-3">
        <button onClick={handleGoogleLogin} className="btn btn-secondary btn-outline w-full">
          <FcGoogle size={24} /> Login with Google
        </button>
        
      </div>

    </div>   
  );
};

export default SocialLogin;
