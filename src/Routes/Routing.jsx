import React from "react";
import { Routes, Route } from "react-router";
import { Home } from "../Pages/Home/Home";
import { Courses } from "../Pages/Courses/Courses";
import { Reactt } from "../Pages/React/React";
import { JavaScript } from "../Pages/JavaScript/JavaScript";


export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} /> 
            <Route path="/courses/react" element={<Reactt />} />
            <Route path="/courses/javascript" element={<JavaScript />} />
        </Routes>
    )
}