import { useEffect, useState } from "react";
import InputText from "./components/InputText";
import Tabuleiro from "./components/Tabuleiro";


function App() {  
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState("");

  useEffect(()=>{
    contador%2 ? setTexto("O") : setTexto("X")
  }, [contador] );

  function aoClicarNaCelula() {
    setContador(contador+1);
    // console.log(contador, texto);
  }

  const usePlayer1 = useState("");
  const usePlayer2 = useState("");



  function win() {
    // return document.querySelectorAll(".conteudo-celula");
    console.log( document.querySelectorAll(".conteudo-celula")[0].innerHTML );
  }
  

  useEffect(()=>{
    win();
  }, [texto])
  
  
  return (
    <div className="app" >
      <InputText usePlayer1={usePlayer1} usePlayer2={usePlayer2} />
      <Tabuleiro
        nomePlayer1={usePlayer1[0]}
        nomePlayer2={usePlayer2[0]}
        texto={texto}
        aoClicarNaCelula={ aoClicarNaCelula }
      />


      <h1>se há vencedor:{ }</h1>
    </div>
  );
}

export default App;
