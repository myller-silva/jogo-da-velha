import { useEffect, useState } from "react";
import Tabuleiro from "./components/Tabuleiro";
import win from "./funcoes/win";

function App() {  
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState("");
  const [haVencedor, setHaVencedor] = useState(false); 
  const [vencedor, setVencedor] = useState(""); 
  
  useEffect(()=>{
    contador%2 ? setTexto("O") : setTexto("X")
    if(win().haVencedor){
      setHaVencedor(true);
    }
  }, [contador, texto] );  
  
  useEffect(()=>{
    console.log(win());
    setVencedor(win().vencedor);
  }, [haVencedor]);
  
  function aoClicarNaCelula() {
    setContador(contador+1);
  }
  function reiniciar() {
    window.location.reload();
    // return false;
  }
  
  return (
    <div className="app" >
      {vencedor? <div className="cabecalho">"{ vencedor }" venceu!</div> : <></> }
      <Tabuleiro texto={texto} aoClicarNaCelula = { aoClicarNaCelula } />
      <button className="botao" onClick={reiniciar}>reiniciar</button>
    </div>
  );
}

export default App;
