import { useRef, useState, useEffect } from 'react';
import './App.css';

function App() {
//lamadas apis, solicitudes, para localStorage, manejar tokes de autenticacion  useEffect
const [valorCambio,setValorCambio]=useState(null)   
const [resu,setResultado]=useState(null)
const dolar=1.09;
const eurosref=useRef();
const resultado=useRef()
//vamos a llamar a una api para obtener el valor en tiempo real del dolar
useEffect(()=>{
  const llamaApiCambio=async()=>{ // creo la función asincrona 
    try {
      const respuesta= await fetch("https://v6.exchangerate-api.com/v6/daa2f38b262a4c9f0ad16178/latest/EUR");
      
      const datos=await respuesta.json(); // almaceno la respuesta
      console.log(datos)
      setValorCambio(datos.conversion_rates.USD);//accedo al valor del dolar como esta en el JSON
    } catch (error) {
      console.error("error al acceder a la API: ", error);
    }
  };
llamaApiCambio(); //llamamos al método dentro del useEffet

},[]

);

const calcular=()=>{
const eurosValor=parseFloat(eurosref.current.value);//recojo lo puesto en el input
//const dolares=eurosValor*dolar; // con el valor sin api
const dolares=eurosValor*valorCambio;
setResultado(dolares.toFixed(2));//con el useSate
resultado.current.innerHTML=dolares.toFixed(2)+" $";//con el useRef
}


  return (
    <div className='contenedor'>
        <h1>Conversor Euro-Dólar</h1>
        <div>
           <input ref={eurosref} type='text'></input>
        </div>

        <div>
           <button onClick={calcular}>Convertir </button>
        </div>

      <div>
           <h2> {resu !=null && resu +' $'}</h2>
           <h2 ref={resultado}></h2>
      </div>
     
    </div>
  );
}

export default App;
