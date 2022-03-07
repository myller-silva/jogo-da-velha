import Cabecalho from "./Cabecalho";
import Linha from "./Linha";

function Tabulerio({texto, aoClicarNaCelula, nomePlayer1, nomePlayer2}) {
  
  return(
    <div className="tabuleiro">
      <Cabecalho nomePlayer1={nomePlayer1} nomePlayer2={nomePlayer2}/>
      <Linha texto={texto} aoClicarNaCelula={aoClicarNaCelula}/>
      <Linha texto={texto} aoClicarNaCelula={aoClicarNaCelula}/>
      <Linha texto={texto} aoClicarNaCelula={aoClicarNaCelula}/>
    </div>
  )
}

export default Tabulerio;