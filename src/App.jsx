import { useState } from "react";
import Formulario from "./componentes/Formulario";
import Login from "./componentes/Login";
import { Home } from "./componentes/Home";
import Navegador from "./componentes/Navegador";
import 'bootstrap/dist/css/bootstrap.min.css';



import "./App.css";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

function App() {
  const [user, setUser] = useState([]);
  const [count, setCount] = useState(0);

  


  return (
    
    <>
     <Header/>
     <div>
      
      {
        !user.length > 0
        ? <Login setUser={setUser}/>
        : <Home user={user} setUser={setUser}/>  

      }
    
      
      <br />
      
    <Footer/>
     </div>
     
      
    
      
    </>
  );
}

export default App;
