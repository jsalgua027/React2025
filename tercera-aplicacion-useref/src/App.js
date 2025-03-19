import React, { useRef } from 'react';
import './App.css';
import video from './assets/surf.mp4';
function App() {
 /*
  cuando para cambiar el estado y necesita una nueva renderizacion usas useState
  cuando NO necesitamos que se renderice y queremos cambiar el estado usamos useRef
 */
  const videoRef=useRef(null);//creo una referencia

  const videoPlay=()=>{
      videoRef.current.play();
  }

  const videoPause=()=>{
    videoRef.current.pause();
}

  return(
    <div>
        <video ref={videoRef} width="600"> {/*referencio el elemento del DOM*/}
        <source src={video} type="video/mp4"></source>
        </video>
       
        <div>
          <button onClick={videoPlay}>Play</button>
          <button onClick={videoPause}>Pause</button>
        </div>


    </div>

  );

 
}

export default App;
