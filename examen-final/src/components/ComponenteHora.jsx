import React, { useState, useEffect } from "react";

function ComponenteHora() {
  const [horaActual, setHoraActual] = useState(new Date());

  useEffect(() => {
    const temporizador = setInterval(() => setHoraActual(new Date()), 1000);
    return () => clearInterval(temporizador);
  }, []);

  return <div className="hora">{horaActual.toLocaleTimeString()}</div>;
}

export default ComponenteHora;
