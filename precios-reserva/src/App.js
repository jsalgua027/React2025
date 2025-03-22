import ComponenteMultiple from "./componets/ComponenteMultiple";
import './App.css';
import { useRef, useState } from 'react';

function App() {
  /**
   * En este ejercicio trabajo de dos maneras diferentes la gestión de envento
   * 1)con una función fuera del return
   * 2)dentro del input
   */

  const[dias,setDias]=useState(0);
  const [opcion,setOpcion]=useState("Hotel");

  const selectorHotelCoche=(e)=>{
    setOpcion(e.target.value);

  }


  return (
    <div className='container'>
     
     <select className='desplegable' onChange={selectorHotelCoche}>
        <option value="Hotel">Hotel</option>
        <option  value="Coche">Coche</option>
      </select>
      <input type="text" onChange={e=>setDias(e.target.value)} placeholder="Introduce el número de días"></input>
      {opcion==="Hotel"&& <ComponenteMultiple opcion={1} dias={dias}/>}
      {opcion==="Coche"&& <ComponenteMultiple opcion={2} dias={dias}/>}
    </div>
  );
}

export default App;
