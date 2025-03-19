import { useRef, useState } from 'react';
import './App.css';

function App() {
const [resu,setResultado]=useState(null)
const dolar=1.09;
const eurosref=useRef();
const resultado=useRef()

const calcular=()=>{
const eurosValor=parseFloat(eurosref.current.value);//recojo lo puesto en el input
const dolares=eurosValor*dolar;
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
