import { ILoginProps } from "@/interface/types";
import Swal from "sweetalert2";

const API_URL =  process.env.NEXT_PUBLIC_API_URL

export async function loginProps(userData: ILoginProps) {
    try {
        const res = await fetch(`${API_URL}/users/login`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(res.ok) {
            return res.json()
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                width: 400,
                padding: "3rem",
                customClass: {
                    popup: 'custom-swal-popup' // Clase personalizada
                }
            })
            throw Error("Failled Login")
        }
    } catch (error: any) {
        throw new Error(error)
    }
}