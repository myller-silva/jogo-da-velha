import { useState } from "react";
import CamposDeTexto from "./components/CamposdeTexto";
import Tabuleiro from "./components/Tabuleiro";

function App() {  
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState("");

  function aoClicarNaCelula() {
    setContador(contador+1);
    (contador%2) ? setTexto("O") : setTexto("X");
    console.log(contador, texto);
  }

  const usePlayer1= useState("");
  const usePlayer2= useState("");
  
  return (
    <div className="app" >
      <CamposDeTexto usePlayer1={usePlayer1} usePlayer2={usePlayer2} />
      <Tabuleiro
        nomePlayer1={usePlayer1[0]}
        nomePlayer2={usePlayer2[0]}
        texto={texto}
        aoClicarNaCelula={ aoClicarNaCelula }
      />
    </div>
  );
}

export default App;
