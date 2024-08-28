import React, { useEffect, useRef } from "react";
import "./Header.css";
import ComponenteFecha from "./ComponenteFecha";
import ComponenteHora from "./ComponenteHora";
import logo from "../assets/logo.png";

function Header() {
  const botonRef = useRef(null);

  useEffect(() => {
    const boton = botonRef.current;

    const entrarMouse = () => {
      boton.style.transform = "scale(1.5)";
    };

    const sacarMouse = () => {
      boton.style.transform = "scale(1.0)";
    };

    if (boton) {
      boton.addEventListener("mouseover", entrarMouse);
      boton.addEventListener("mouseout", sacarMouse);
    }

    return () => {
      if (boton) {
        boton.removeEventListener("mouseover", entrarMouse);
        boton.removeEventListener("mouseout", sacarMouse);
      }
    };
  }, []);

  return (
    <header id="header">
      <div className="logo">
        <img src={logo} alt="app-logo" className="imagenLogo" ref={botonRef} />
        <h2 className="nombre-empresa">TRAVELING</h2>
      </div>

      <nav>
        <div className="fecha-container">
          <span className="fecha-texto">Fecha:</span>
          <ComponenteFecha />
        </div>
        <div className="fecha-container">
          <span className="fecha-texto">Hora:</span>
          <ComponenteHora />
        </div>
      </nav>
    </header>
  );
}

export default Header;
