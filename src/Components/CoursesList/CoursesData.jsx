import imgReact from '../../assets/img/react.png'
import imgAngular from '../../assets/img/angular.png'
import imgJavaScript from '../../assets/img/JS.png'
const CoursesData = [
    {id: 1, titulo: 'Curso de JavaScript',descripcion:'Domina el lenguaje de programación más utilizado en la web. Aprende desde los conceptos básicos hasta técnicas avanzadas para desarrollar aplicaciones interactivas.', img: imgJavaScript, link: '/courses/javascript', hay: true},
    {id: 2, titulo: 'Curso de React',descripcion:'Aprende a crear interfaces de usuario dinámicas y reutilizables con React. Descubre cómo construir aplicaciones modernas con un enfoque de componentes y estado.', img: imgReact, link: '/courses/react', hay: true},
    {id: 3, titulo: 'Curso de Angular',descripcion:'Sumérgete en el mundo de Angular, el framework potente y escalable de Google. Aprende a desarrollar aplicaciones web de alto rendimiento con sus herramientas y arquitectura', img: imgAngular, link: '/courses/angular', hay:false},
]

export default CoursesData