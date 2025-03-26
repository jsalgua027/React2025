
import './App.css';
import { MiBoton } from './components/styled';
import { MiBotonLargo } from './components/styled2';

function App() {
  return (
    <div className="App">
  <MiBoton entrar={true}>Entrar</MiBoton>
  <MiBoton entrar={false}>Consulta</MiBoton>

  <MiBotonLargo>Salir(boton herencia)</MiBotonLargo>
    </div>
  );
}

export default App;
