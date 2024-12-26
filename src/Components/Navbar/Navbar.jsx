import React, {useState, useEffect} from "react";
import { NavLink } from "react-router";
import "./Navbar.css";
function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <header className={`flex justify-center items-center bg-gray-800 fixed top-0 w-full`}>
            <nav className="bg-gray-800 text-white p-3">
                <ul className="nav flex rounded bg-slate-900 justify-center space-x-4 mt-3">
                    <li><NavLink to="/" end>Inicio</NavLink></li>
                    <li><NavLink to="/courses" end>Cursos</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export { Navbar }