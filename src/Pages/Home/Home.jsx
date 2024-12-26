import React from "react"
import { Button } from "../../Components/Button/Button"
import { NavLink } from "react-router"
function Home() {
    return (
        <main className="flex items-center justify-center flex-col">
            <h1 className="font-bold text-4xl mt-24">CodeMentor</h1>
            <p className="mt-3">Descubre el poder del desarrollo web paso a paso</p>

            <Button 
                text="Explora nuestros cursos"
                url="/courses"
            />
        </main>
    )
}   

export { Home }