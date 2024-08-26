import "./Header.css";
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    const reloj = document.querySelector("#hora");

    function mostrarHora() {
      const fechaActual = new Date();
      const hora = fechaActual.getHours();
      const minutos = fechaActual.getMinutes();
      const segundos = fechaActual.getSeconds();

      const horaFormateada = `${hora.toString().padStart(2, "0")}:${minutos
        .toString()
        .padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;

      if (reloj) {
        reloj.textContent = horaFormateada;
      }
    }

    const intervalo = setInterval(mostrarHora, 1000);

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalo);
  }, []);

  return (
    <header id="header">
      <div className="logo">
        <img src="#" alt="app-logo" />
        <h2 className="nombre-empresa">MueblesFAST</h2>
      </div>

      <nav>
        <a href="#" className="nav-link" id="hora">
          Fecha:
        </a>
        <a href="#" className="nav-link">
          Tienda
        </a>
        <a href="#" className="nav-link">
          Servicios
        </a>
        <a href="#" className="nav-link">
          Ofertas
        </a>
      </nav>
    </header>
  );
}

export default Header;
