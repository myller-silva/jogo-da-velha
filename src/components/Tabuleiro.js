import Linha from "./Linha";

function Tabulerio({texto, aoClicarNaCelula}) {
  
  return(
    <div className="tabuleiro">
      <Linha texto={texto} aoClicarNaCelula={aoClicarNaCelula}/>
      <Linha texto={texto} aoClicarNaCelula={aoClicarNaCelula}/>
      <Linha texto={texto} aoClicarNaCelula={aoClicarNaCelula}/>
    </div>
  )
}

export default Tabulerio;
