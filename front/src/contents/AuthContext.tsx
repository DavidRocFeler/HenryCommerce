"use client"
import { IUserSession } from "@/interface/types"
import { createContext} from "react"

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
