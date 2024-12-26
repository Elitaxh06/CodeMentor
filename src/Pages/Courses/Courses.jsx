import React, {useState, useEffect} from "react";
import CoursesData from "../../Components/CoursesList/CoursesData";
import { Button } from "../../Components/Button/Button";
import { NavLink } from "react-router";

function Courses() {

  return (
    <section className="mt-20">
      <h2 className="font-bold text-4xl text-center">El Conocimiento a un Click</h2>
      <p className="text-center mt-1">Accede a recursos de alta calidad y comienza a dominar las herramientas esenciales del desarrollo.</p>
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto max-w-full p-4">
        {CoursesData.map((course) => (
          <div key={course.id} className="bg-slate-200 border border-gray-200 rounded-lg flex flex-col justify-center items-center shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-bold text-2xl">
              {course.titulo}
              </h3>
              <NavLink to={course.link}>
                  <img 
                    className="w-32 h-32 object-cover mt-4"
                    src={course.img} alt={`Imagen del logo de ${course.titulo}`} 
                  />
                </NavLink>
                <p className="mt-5 text-center">{course.descripcion}</p>
                {course.hay ? (
                  <Button 
                  text={`Ver Curso de ${course.titulo}`}
                  url={course.link}
                  />
                    
                ):(
                    <Button 
                      text="Próximamente"
                      onClick={() => alert("Este curso estará disponible muy pronto")}
                      />
                  )
                }
            
          </div>
        ))}
      </div>
    </section>
  );
}   

export { Courses }