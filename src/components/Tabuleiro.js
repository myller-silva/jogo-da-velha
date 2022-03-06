import Linha from "./Linha";

function Tabulerio({texto, aoClicarNaCelula, nomePlayer1, nomePlayer2}) {
  
  return(
    <div className="tabuleiro">
      <div className="nomes">
        <span>{nomePlayer1}</span>
        <span>{nomePlayer2}</span>
      </div>
      <Linha texto={texto} aoClicarNaCelula={aoClicarNaCelula}/>
      <Linha texto={texto} aoClicarNaCelula={aoClicarNaCelula}/>
      <Linha texto={texto} aoClicarNaCelula={aoClicarNaCelula}/>
    </div>
  )
}

export default Tabulerio;