"use client"
import { IUserSession } from "@/interface/types"
import { useState, useEffect, createContext, useContext } from "react"

export interface AuthContextProps {
    userData: IUserSession | null;
    setUserData: (userData: IUserSession | null) => void
}


export const AuthContext = createContext({
    userData: null,
    setUserData: () => {}    
})

export interface AuthProviderProps {
    children: React.ReactNode
}

// export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
//     const [ userData, setUserData ] = useState<IUserSession | null>(null)  

//     useEffect(() => {

//     }, [])
// }
