import Formulario from "./Formulario"


export function Home ({user ,setUser}){
    const handleLogout = () =>{
        setUser([])
    }
    return(
<>
       

        <div>
            <h1>Bienvenido</h1>
            <h2>{user}</h2>
            <br />
            <h2 className="texto">Pizzeria Mamma mia</h2>
            <button onClick={handleLogout}>Cerrar sesion</button>
        </div>

        </>
     
      
    )
}