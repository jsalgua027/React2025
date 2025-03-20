import logo from "./logo.svg";
import "./App.css";

function App() {
  const miArray = () => {
    const numerosArray = [15, 37, 26, 95, 81]; // array simple

    const numeroArray2 = [
      // lo hacemos asi para los keys único
      { id: 1, numero: 15 },
      { id: 2, numero: 37 },
      { id: 3, numero: 26 },
      { id: 4, numero: 95 },
      { id: 5, numero: 81 },
    ];

    return (
      <div>
        <p>
          {numerosArray.map((numero, indice) => {
            return (
              <span key={indice}>
                ({indice})&nbsp;{numero}&nbsp;
              </span>
            );
          })}
        </p>
        <p>
          {numeroArray2.map((item) => {
            return (
              <span key={item.id}>
                ({item.id})&nbsp;{item.numero}&nbsp;
              </span>
            );
          })}
        </p>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Números del Array</h1>
        {miArray()}
      </header>
    </div>
  );
}

export default App;
