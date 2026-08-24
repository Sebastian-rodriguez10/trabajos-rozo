import { Header } from "./components/header/Header";
import { Perfil } from "./components/perfil/Perfil";
import { Introduccion } from "./components/introduccion/Introduccion";
import { Proyectos } from "./components/proyectos/Proyectos";
import { Estudios } from "./components/estudios/Estudios";
import { Footer } from "./components/footer/Footer";
import { Contactenos } from "./components/contactos/Contactenos";
import "./App.css";
export const App = () => {
return (
<div className="app">
<Header />
<Perfil
imagen="/Perfil.jpg"
nombre="Juan Sebastian Rodriguez Giraldo"
rol="Desarrollador Fullstack"
/>
<Introduccion
  texto={`Soy un desarrollador de software en formación, enfocado en fortalecer constantemente mis conocimientos y adquirir nuevas habilidades en el área del desarrollo web. Me interesa especialmente el desarrollo de aplicaciones utilizando tecnologías como Java, Spring Boot, Angular, React y MySQL.

Me caracterizo por ser una persona responsable, comprometida y con disposición para aprender. Mi objetivo es seguir desarrollando mis capacidades técnicas y enfrentar nuevos retos que me permitan crecer tanto profesional como personalmente, aplicando buenas prácticas de programación y construyendo soluciones eficientes y funcionales.

Este portafolio reúne algunos de los proyectos y conocimientos que he adquirido durante mi proceso de formación, demostrando mi evolución y mi interés por continuar aprendiendo y mejorando como desarrollador.`}
/>
<Proyectos />
<Estudios />
<Contactenos />
<Footer />
</div>
);
};