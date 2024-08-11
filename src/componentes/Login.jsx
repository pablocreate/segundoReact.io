import React from 'react'
import { useState } from 'react'
import Formulario from './Formulario'




export function Login ({setUser}){
  const [nombre,SetNombre] = useState("")
  const [contraseña,SetContraseña] = useState("")
  const [error, setError] =useState(false)

  const handleSubmit=(e) => {
    e.preventDefault()

    if(nombre === "" || contraseña === "") {
      setError(true)

 

      return
    }

    setError(false)

    setUser([nombre])

   

  }



  return (
  <>
  <section className="usuario">
    <h4>LOGIN</h4>
    <form onSubmit={handleSubmit}>
      <h6>Nombre de usuario</h6>
      <input type="text"
      onChange={e =>SetNombre(e.target.value)} />
      <br />
      <h6>contraseña</h6>
      <input type="password" 
      onChange={e=>SetContraseña(e.target.value)}/>
      <br/> <br />
      
      <button>Iniciar seccion</button>
      <p></p>
    </form>
    {error && <p>Todos los campos son obligatorios</p>}
  </section>
  <br />
  <Formulario/>
  
  </>
  )
}

export default Login
