import './App.css';
import PropTypes from 'prop-types'; // para la validación de props

function App() {

const usuario={
  nombre:"nacho",
  apellido:"salcedo",
  edad:35,
  genero:"Masculino",
  peso:12
}


  return (
    <div>
      <Saludo user={usuario}></Saludo>
    </div>
  );
}
//esto es un componente que por props recibe un objeto
function Saludo(props){
  return(
  <div>
     <h1>Hola {props.user.nombre} {props.user.apellido}</h1>
     <h2>tienes: {props.user.edad} años,  siendo de genero: {props.user.genero} </h2>
  </div>
  );
}
//validación de props (esto es una avertencia al desarrollador)
Saludo.propTypes={
  user:PropTypes.shape(
    {
      peso:PropTypes.string.isRequired,
      edad:PropTypes.number.isRequired
    }
  ).isRequired

}

export default App;
