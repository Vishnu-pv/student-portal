import React, { createContext, useContext, useEffect, useState } from "react";
import {
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    Auth,
    User,
} from 'firebase/auth';
import { auth, signInWithGoogle } from '../firebase';

interface UserAuthContextProps {
    user: User | null;
    logOut: () => Promise<void>;
    signIn: () => void;
}

const userAuthContext = createContext<UserAuthContextProps | undefined>(undefined);

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState<User | null>(null);

    async function logOut() {
        return await signOut(auth);
    }

    function signIn() {
        signInWithGoogle().then(() => console.log('Logged In'));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return <userAuthContext.Provider value={{ user, logOut, signIn }}>{children}</userAuthContext.Provider>;
}

export function useUserAuth() {
    return useContext(userAuthContext);
}
