import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { createContext } from "react";
import auth from '../Firebase/firebase.int';
import { useEffect } from 'react';

export const AuthContexts= createContext();
const AuthContext = ({ children }) => {
const [users,setuser]=useState(null);
const [loding,setloding]= useState(true)
const provider = new GoogleAuthProvider()

const createResistance = (email,password)=>{
    setloding(true)
    return createUserWithEmailAndPassword(auth,email,password)
}


const createsing = (email,password)=>{
    setloding(true)
    return signInWithEmailAndPassword(auth,email,password)
}


const singout = ()=>{
    return signOut(auth);
}



const google =()=>{
  setloding(true) 
  signInWithPopup(auth,provider)


}


useEffect(()=>{
const unsubcrib= onAuthStateChanged(auth,currentuser=>{
      setloding(false) 
       
      setuser(currentuser);
    })
    return ()=>{
        unsubcrib()
    }
},[])





    const authinfo = {
        users,
        loding,
        createResistance,
        createsing,singout,google
    }
    return (
      <AuthContexts.Provider value={authinfo}>
        { children }
      </AuthContexts.Provider>
    );
};

export default AuthContext;