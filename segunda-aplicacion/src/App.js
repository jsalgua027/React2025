import './App.css';
import React, { useState } from 'react';


function App() {
 //Definir el estado para almacenar el resultado de la suma

 const [resultado,setResultado]=useState(null);

const elemento=<h1 className='centrar-titulo'>Hola mundo</h1>

  const botonPulsado=()=>{
    const result=suma(7,5);
    setResultado(result);
   }



  return <div>
    <button  onClick={botonPulsado} style={{marginTop:"10px",marginLeft:"10px"}}>Pulsame</button>
        <div>{elemento}</div>
   
        <div>{resultado != null && <h2>El resultado es: {resultado}</h2> }</div>
      
  </div>


}



/*función*/
function suma(a,b){
  return a+b
}

 
export default App;
