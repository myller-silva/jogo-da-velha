import { TextField } from "@material-ui/core";

function InputText({ usePlayer1, usePlayer2}) {
  const [nomePlayer1, setNomePlayer1] = usePlayer1;
  const [nomePlayer2, setNomePlayer2] = usePlayer2;
    
  return(    
    <div className="camposDeTexto">
      <TextField value={nomePlayer1} label="Jogador 1" variant="outlined" 
      onChange={(e)=>{
        setNomePlayer1(e.target.value);
      }}/>
      <TextField value={nomePlayer2}  label="Jogador 2" variant="filled"
      onChange={(e)=>{
        setNomePlayer2(e.target.value);        
      }}/>
    </div >
  )
}

export default InputText;