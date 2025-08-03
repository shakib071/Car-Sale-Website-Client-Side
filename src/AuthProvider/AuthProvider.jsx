import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import {auth} from '../Firebase/firebase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


const AuthProvider = ({children}) => {

    const [loading , setLoading] = useState(false);
    const [user , setUser] = useState(null);

    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth,provider);
    }

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const login = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    },[]);

    const AuthData = {
        loading,
        setLoading,
        user,
        setUser,
        handleGoogleLogin,
        createUser,
        login,
        logOut,

    }

    return (
        <AuthContext value={AuthData}>{children}</AuthContext>
    );
};

export default AuthProvider;