import React, { useState, useEffect } from "react";

function ComponenteFecha() {
  const [fechaActual, setFechaActual] = useState(new Date());

  useEffect(() => {
    const temporizador = setInterval(() => setFechaActual(new Date()), 1000);
    return () => clearInterval(temporizador);
  }, []);

  return <div className="fecha">{fechaActual.toLocaleDateString()}</div>;
}

export default ComponenteFecha;
