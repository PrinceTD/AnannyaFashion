import React, { createContext } from 'react'
import useFirebase from '../../hooks/useFirebase';

export const AuthContxt = createContext(null)

export default function AuthProvider({ children }) {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    )
}
