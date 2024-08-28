import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <header className="encabezadoPrincipal">
        <Header />
        <Banner />
      </header>

      <Formulario />
      <Footer />
    </>
  );
}

export default App;
