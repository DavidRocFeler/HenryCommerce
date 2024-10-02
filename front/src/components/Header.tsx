"use client"
import Link from "next/link"
import styles from "../styles/header.module.css"
import { useState, useEffect, useRef } from "react";
import LoginComponent from "./Loggin";
import Offers from "./HeaderOffers";
import { ShoppingCart, Search } from "lucide-react";
import LogoJpg from "@/images/Logo/Logo";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import categorieToPreload from "@/helpers/categorys";
import { Menu } from "lucide-react";

export const Header: React.FC = () => {
    const router = useRouter();
    const [cartItemCount, setCartItemCount] = useState<number>(0);
    const [showLogin, setShowLogin] = useState<boolean>(false);
    const loginRef = useRef<HTMLDivElement>(null);
    const [userSession, setUserSession] = useState<boolean>(false); 
    const [ isOpen, setIsOpen ] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    } 

    useEffect(() => {
        updateUserSession(); // Inicializa el estado

        const handleStorageChange = () => {
            updateUserSession(); // Actualiza el estado en caso de cambio
        };

        window.addEventListener("storage", handleStorageChange);
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    const updateUserSession = () => {
        const session = localStorage.getItem("userSession");
        setUserSession(!!session);
    };

    const handleDashboardClick = () => {
        if (userSession) {
            // Redirige a /dashboard
            router.push("/dashboard");
        } else {
            // Muestra el componente de inicio de sesión
            setShowLogin(true);
        }
    };

    const handleCarShopClick = () => {
        if (userSession) {
            // Redirige a /carshop
            router.push("/carshop");
        } else {
            // Muestra el componente de inicio de sesión
            setShowLogin(true);
        }
    };

    const handleWishListClick = () => {
        if (userSession) {
            // Redirige a /carshop
            router.push("/wishlist");
        } else {
            // Muestra el componente de inicio de sesión
            setShowLogin(true);
        }
    };

    const handleLogOutClick = () => {
        Swal.fire({
            title: '¿Are you sure?',
            text: "Do you want to log out?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("userSession");
                updateUserSession();
                Swal.fire({
                    icon: "success",
                    title: "Successful logout",
                    padding: "3rem",
                    customClass: {
                        popup: 'custom-swal-popup' // Clase personalizada
                    }
                }).then(() => {
                    // Redirige al usuario a la página de inicio después de la alerta
                    router.push("/");
                });
            }
        });
    };

    const handleLoginSuccess = () => {
        updateUserSession(); // Actualiza el estado después de iniciar sesión
        setShowLogin(false); // Cierra el componente de inicio de sesión
    };

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
            setShowLogin(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    const handleCloseLogin = () => {
        setShowLogin(false);
    };

    return(
        <>
        <Offers/>
        <header className="
        sticky top-0
        z-[2]
        flex flex-col 
        bg-[#FFFFFF] ">
            <nav className="
            flex-row
            ml-auto
            mr-[2rem]
            pt-[1rem]
            mb-[1rem]
            mt-0
            lg:mr-[7rem]
            ">
            <button onClick={handleDashboardClick} 
            className="
            text-[0.9rem]
            text-[#424242]
            font-bold
            ml-[1rem]
            mr-[1rem]
            pt-[0rem]
            ">Dashboard</button>
            |
            <Link href="/blog" className="
            text-[0.9rem]
            text-[#424242]
            p-[1rem]
            ">Blog</Link>
            <Link href="/store" className="
            text-[0.9rem]
            text-[#424242]
            ml-[1rem]
            mr-[1rem]
            ">Store</Link>
             {!userSession ? (
            <>
                <Link href="/register" className="text-[0.9rem] text-[#424242] mr-[1rem] ml-[1rem] pt-[0rem]"> Sign up </Link>
                |
                <button onClick={handleLoginClick} className="text-[0.9rem] ml-[1rem] pt-[0rem] text-[#424242]"> Log in </button>
            </>
            ) : (
                <>
                |
                <button onClick={handleLogOutClick} className="text-[0.9rem] ml-[1rem] pt-[0rem] text-[#424242] mr-[0.2rem]"> Log out </button>
                </>
            )}
            </nav>
            <div id="SearchCarLog" className="
            items-center
            flex flex-row
            justify-evenly
            w-[100%]
            m-auto     
            ">
                <LogoJpg/>
                <form action="" className={styles.formSearch}>
                    <input type="text" placeholder="Search"/>
                    <button> 
                        <Search className={styles.Search} />
                    </button>
                </form>
                <div className="relative">
                    <button onClick={handleCarShopClick}>
                        <ShoppingCart className={styles.CarShop} />
                    </button>
                    {cartItemCount > 0 && (
                        <span className="absolute -top-0 -right-5 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            {cartItemCount}
                        </span>
                    )}
                     <div className="lg:hidden">
                        <button onClick={handleToggle} className="bg-white lg: relative top-[-1rem] right-[1.5rem] " >
                            <Menu className="w-6 h-6 text-black" />
                        </button>
                    </div>
                </div>
            </div>
            {
                isOpen && (
                    <div className="lg:hidden mt-1.5">
                        <div className="flex flex-col border-[#FFEE58] border-2 border-solid p-2">
                            {
                                categorieToPreload && 
                                categorieToPreload.map((category) => {
                                    return(
                                        <Link
                                            key={category.id}
                                            aria-current="page"
                                            className={styles.menuButton}
                                            href={`/store/${category.id}`}
                                        >
                                            {category.name}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }
            <div className={styles.dropdown}>
                <div className="mt-1.5">
                    {
                        categorieToPreload && 
                        categorieToPreload.map((category) => {
                            return(
                                <Link 
                                    key={category.id}
                                    aria-current="page"
                                    className={styles.menuButton}
                                    href={`/store/${category.id}`}
                                >
                                    {category.name}
                                </Link>
                            )
                        })
                    }
                </div>
                <button onClick={handleWishListClick} className={styles.menuExtra}>Wishlist</button>
            </div>
        </header>

        {showLogin && (
                <div ref={loginRef} className={styles.loginOverlay}>
                    <LoginComponent onClose={handleCloseLogin} onSuccess={handleLoginSuccess}  />
                </div>
            )}
        </>
    )
}