"use client"
import React, { useEffect, useState } from "react"
import styles from "../styles/Register.module.css"
import { IRegisterProps, IRegisterErrorsProps } from "@/interface/types"
import { validateRegister } from "@/helpers/validateRegister"
import { registerProps } from "@/helpers/outhHelpers"
import Swal from "sweetalert2"
import { useRouter } from "next/navigation"


export const RegisterView: React.FC = ( ) => {
    const router = useRouter();
    const initialState = {
        name: "",
        // lastName: "",
        email: "",
        phone: "",
        address: "",
        password: "",
        // country: "",
    }
    const [ userData, setUserData ] = useState<IRegisterProps>(initialState);
    const [ error, setError ] = useState<IRegisterErrorsProps>(initialState)
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        await registerProps(userData)
        Swal.fire({
            icon: "success",
            title: "Register succesfully",
            width: 400,
            padding: "3rem",
            customClass: {
              popup: 'custom-swal-popup' // Clase personalizada
          }
        });
        router.push("/")
    }
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    useEffect(() => {
        const errors = validateRegister(userData)
        setError(errors);
    }, [userData])

    return(
        <div className={styles.divContent}>  
            <form action="" onSubmit={handleSubmit} className={styles.FormContent}>
                <h1 className={styles.Titleh}>Sign Up to e-tech</h1>
                <input 
                id="name"
                type="text" 
                name="name"
                value={userData.name}
                onChange={handleChange}
                placeholder="Your name"/>
                { userData.name && error.name && (
                    <p className={styles.Error} > {error.name} </p>
                )} 
                
                {/* <input 
                type="text"
                id="lastName"
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
                placeholder="Your lasthname"/> */}

                <input 
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleChange} 
                placeholder="Your email" />
                { userData.email && error.email && (
                    <p className={styles.Error} > {error.email} </p>
                )}
               
               <input 
                type="text"
                id="phone"
                name="phone"
                value={userData.phone}
                onChange={handleChange} 
                placeholder="Your phone" />
                { userData.phone && error.phone && (
                    <p className={styles.Error} > {error.phone} </p>
                )}

                <input 
                type="text"
                id="address"
                name="address"
                value={userData.address}
                onChange={handleChange} 
                placeholder="Your address" />
                { userData.address && error.address && (
                    <p className={styles.Error} > {error.address} </p>
                )}

                <input 
                type="password"
                id="password"
                name="password"
                value={userData.password} 
                onChange={handleChange}
                placeholder="Your password" />
                { userData.password && error.password && (
                  <p className={styles.Error}> {error.password} </p>  
                )}

                {/* <input 
                type="select" 
                id="country"
                name="country"
                value={userData.country}
                onChange={handleChange}
                placeholder="Choose your country" /> */}
                {/* <div className={styles.checkboxOne}>
                    <input type="checkbox" />
                    <p> I want to recive more news </p>
                </div>
                <div className={styles.checkboxTwo}>
                    <input type="checkbox" />
                    <p> I have read and accept the Legal Note and Policy Privacy </p>
                </div> */}
                <button> Sign Up </button>
            </form>     
        </div>
    )
}

export default RegisterView;