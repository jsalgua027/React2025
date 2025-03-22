import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

function App() {

  const[totalReseva,setTotalReserva]=useState(null);
  const[dias,setDias]=useState(null);
  const hotel=useRef(null);
  const coche=useRef(null);
 

  const precioDiaHotel=25.5;
  const precioDiaCoche=15;

  const calcular=(event)=>{
   
    setDias(event.target.value);
    const numDias=parseInt(dias,10);
    setTotalReserva(numDias*precioDiaCoche);

  }


  return (
    <div className='container'>
      <h1>Reservas</h1>
      <select className='desplegable' value="">
        <option ref={hotel}>HOTEL</option>
        <option ref={coche}>COCHE</option>
      </select>

      <input  type="text" onChange={calcular}  placeholder='Introduce los dias '></input>
      {totalReseva && (<p>El precio de la reserva es: {totalReseva} $</p>)}

      
    </div>
  );
}

export default App;
