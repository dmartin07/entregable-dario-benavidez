import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Error from "./components/Error";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

  const [codigo, setcodigo] = useState("");
  const [nombre, setNombre] = useState("");
  const [mostrarCard, setMostrarCard] = useState(false);
  const [mostrarError, setMostrarError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const codigoEsValido = validarCodigo(codigo);
    const nombreEsValido = validarNombre(nombre);

    if (!codigoEsValido || !nombreEsValido) {
      setMostrarError(true);
      setMostrarCard(false);
    } else {
      setMostrarError(false);
      setMostrarCard(true);
    }
  };

  const validarCodigo = (codigo) => {
    const sinEspaciosAlComienzo = codigo.trimLeft();

    if (sinEspaciosAlComienzo.length >= 3) {
      return true;
    } else {
      return false;
    }
  };

  const validarNombre = (nombre) => {
    
    if (nombre.length >= 6) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="App">
      <h1>Ingrese el Aeropuerto destino</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="codigo">Codigo Aeropuerto: </label>
        <input
          id="codigo"
          type="text"
          placeholder="Ingrese el codigo"
          value={codigo}
          onChange={(e) => setcodigo(e.target.value)}
        />

        <label htmlFor="nombre">Nombre Aeropuerto: </label>
        <input
          id="nombre"
          type="text"
          placeholder="Ingrese el nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input id="confirmar" type="submit" value="Confirmar" />
      </form>

      {mostrarError && <Error />}
      {mostrarCard && <Card codigo={codigo} nombre={nombre} />}
    </div>
  );
}

export default App;
