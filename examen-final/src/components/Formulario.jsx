import { Fragment, useState } from "react";
import "./Formulario.css";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");

  const RegexNombre = /^[a-zA-ZÁÉÍÓÚ\s]+$/; // Elimina el espacio al final.
  const RegexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Elimina los espacios extra.
  const RegexContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // Cambia {8} por {8,} para permitir 8 o más caracteres.

  const validacion = (e) => {
    e.preventDefault();

    if (nombre === "" || apellido === "" || email === "" || contraseña === "") {
      alert("los datos no deben estar vacios");
    }
    if (
      (RegexNombre.test(nombre) === false && nombre != "") ||
      (RegexNombre.test(apellido) === false && apellido != "")
    ) {
      alert("Nombres y apellidos deben contener solo letras");
    }
    if (RegexEmail.test(email) === false) {
      alert("Por favor, introduce un email válido");
    }
    if (RegexContraseña.test(contraseña) === false) {
      alert(
        "La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas y números"
      );
    } else {
      alert("los datos se han ingresado con exito");
    }
  };

  const cambioNombre = (e) => setNombre(e.target.value);
  const cambioApellido = (e) => setApellido(e.target.value);
  const cambioEmail = (e) => setEmail(e.target.value);
  const cambioContraseña = (e) => setContraseña(e.target.value);
  return (
    <>
      <section className="formulario">
        <form onSubmit={validacion}>
          <div className="cuadros">
            <label>First Name</label>
            <input
              type="text"
              className="casillas"
              placeholder="Enter your first name"
              value={nombre}
              onChange={cambioNombre}
            />
          </div>

          <div className="cuadros">
            <label>Last Name</label>
            <input
              type="text"
              className="casillas"
              placeholder="Enter your last name"
              value={apellido}
              onChange={cambioApellido}
            />
          </div>

          <div className="cuadros">
            <label>Email</label>
            <input
              type="email"
              className="casillas"
              placeholder="Enter your email"
              value={email}
              onChange={cambioEmail}
            />
          </div>

          <div className="cuadros">
            <label>Password</label>
            <input
              type="password"
              className="casillas"
              placeholder="Enter your password"
              value={contraseña}
              onChange={cambioContraseña}
            />
          </div>
          <button type="sudmit">sudmit</button>
        </form>
      </section>
    </>
  );
}

export default Formulario;
