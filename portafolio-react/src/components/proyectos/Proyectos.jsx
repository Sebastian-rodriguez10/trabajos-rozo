import "./Proyectos.css";
import { TarjetaProyecto } from "./TarjetaProyecto";
export const Proyectos = () => {
return (
<section id="proyectos" className="proyectos">
<h2>Proyectos</h2>
<div className="proyectos__grid">
{/* Cada TarjetaProyecto es la MISMA función-componente,
reutilizada con datos diferentes vía props */}
<TarjetaProyecto
imagen="/proyecto1.jpg"
titulo="Login reactive forms"
descripcion="Inicio se sesion."
/>
<TarjetaProyecto
imagen="/proyecto2.jpg"
titulo="consumo de api"
descripcion="Consumo de api para mostrar contenido de pokemon."
/>
</div>
</section>
);
};