import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';
import {auth} from '../Firebase/firebase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


const AuthProvider = ({children}) => {

    const [loading , setLoading] = useState(true);
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

    const updateUserData = (updatedData) => {
        setLoading(true);
        return updateProfile(auth.currentUser,updatedData);
    }

    const login = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=> {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            
            setUser(currentUser);
            setLoading(false);
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
        updateUserData,

    }

    return (
        <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;