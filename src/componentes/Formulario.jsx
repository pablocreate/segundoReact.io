import React from "react";
import { useState } from "react";
import Login from "./Login";

const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    password: "",
    confirm_password:"",
  });

  const actualizarFormulario = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };
  const enviarFormulario =(e)=>{
    e.preventDefault()
    alert(`Te has registrado con exito : ${datos.nombre} email: ${datos.email}`

    );
    setDatos({
      nombre: "",
      password: "",
      confirm_password:"",
    });

  };

  const validate=()=>{
    return datos.password !== datos.confirm_password
  }

  return (
    <div className="registrar">
      <h4>Registrar</h4>
      <form onSubmit={enviarFormulario}>
        <h6>Email</h6>
        <input
          type="email"
          name="email"
          value={datos.email}
          placeholder="Ingrese su mail"
          onChange={actualizarFormulario}
        />
       <h6>Contraseña</h6>
        
        <input
          type="password"
          name="password"
          value={datos.password}
          placeholder="crea contraseña"
          onChange={actualizarFormulario}
        />

<h6> Confirma Contraseña</h6>
<input
          type="password"
          name="confirm_password"
          value={datos.confirm_password}
          placeholder="confimar contraseña"
          onChange={actualizarFormulario}
        />
        <br />
        <button className="btn btn-primary" type="submit" disabled={datos.password !==datos.confirm_password}>Registrar</button>
      </form>
    </div>
  );
};

export default Formulario;
