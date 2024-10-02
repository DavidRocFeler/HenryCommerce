"use client"
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "../styles/Login.module.css"
import { ILoginProps, IErrorLoginProps } from "@/interface/types";
import { validateCredentials } from "@/helpers/validateCredentials";
import { loginProps } from "@/helpers/outhHelpersLogin";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

interface LoginComponentProps {
    onClose: () => void;
    onSuccess: () => void;
}

const LoginComponent: React.FC<LoginComponentProps> = ({ onClose, onSuccess }) => {
    const router = useRouter();
    const initialState: ILoginProps = {
        email: "",
        password: ""
    };

    const [ userData, setUserData ] = useState<ILoginProps>(initialState);
    const [ error, setError ] = useState<IErrorLoginProps>(initialState);
    const formRef = useRef<HTMLFormElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await loginProps(userData);
            const { token, user } = response;
    
            localStorage.setItem("userSession", JSON.stringify({ token, user }));
            onSuccess();
            onClose(); 
            Swal.fire({
                icon: "success",
                title: "User logged in",
                width: 400,
                padding: "3rem",
                customClass: {
                    popup: 'custom-swal-popup',
                },
            });
            router.push("/");
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    useEffect(() => {
        const errors = validateCredentials(userData)
        setError(errors)
    }, [userData])

    const handleLinkClick = () => {
        onClose();
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (formRef.current && !formRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return(
        <>
            <form ref={formRef} onSubmit={handleSubmit} className={styles.FormContent}>
                <h1>Log in for continue</h1>
                <label htmlFor="Tu email">Your email</label>
                <input 
                id="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                type="email" />

                <label htmlFor="">Your password</label>
                <input 
                id="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                type="password" />

                <a href="">You dont remember your password</a>
                <div className={styles.checkbox}>
                    <input type="checkbox" />
                    <p>Keep login session</p>
                </div>
                <button>Log in</button>
                <hr />
                <div className={styles.SignUp}>
                    <p>Do you not have acount?</p>
                    <Link href="/register" 
                    onClick={handleLinkClick}
                    > Sign Up</Link>
                </div>
            </form>
        </>
    )
}

export default LoginComponent;