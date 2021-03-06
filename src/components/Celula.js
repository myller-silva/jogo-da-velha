import { useState } from "react";


function Celula({texto, aoClicarNaCelula}) {
  const [text, setText] = useState(texto);

  return(
    <div className="celula"
      onClick={()=>{
        if(text===""){
          setText(texto);
          aoClicarNaCelula();
        }
      }}
    >
      <span className="conteudo-celula">{text}</span>
    </div>
  )
}

export default Celula;