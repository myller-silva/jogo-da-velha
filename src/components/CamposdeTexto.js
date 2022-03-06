import { TextField } from "@material-ui/core";

function CamposDeTexto({ usePlayer1, usePlayer2}) {
  
  return(
    <div className="camposDeTexto">
      <TextField value={usePlayer1[0]} label="Jogador 1" variant="outlined" 
      onChange={(e)=>{
        usePlayer1[1](e.target.value);
      }}/>
      <TextField value={usePlayer2[0]}  label="Jogador 2" variant="filled"
      onChange={(e)=>{
        usePlayer2[1](e.target.value);        
      }}/>
    </div >
  )
}

export default CamposDeTexto;