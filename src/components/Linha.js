import Celula from "./Celula";

function Linha({texto, aoClicarNaCelula}) {
  
  return(
    <div className="linha">
      <Celula texto={texto} aoClicarNaCelula={aoClicarNaCelula}/>
      <Celula texto={texto} aoClicarNaCelula={aoClicarNaCelula}/>
      <Celula texto={texto} aoClicarNaCelula={aoClicarNaCelula}/>
    </div>
  )
}

export default Linha;