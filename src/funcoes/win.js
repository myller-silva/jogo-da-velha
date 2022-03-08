
function win() {
  const array = [];

  document.querySelectorAll(".conteudo-celula").forEach( (celula) =>{
    array.push( celula.innerHTML );
  });

  // linhas:
  for(let i=0; i<=6; i+=3){
    if(array[i]===array[i+1] && array[i]===array[i+2] && array[i]!==""){
      return {
        haVencedor:true,
        vencedor: array[i]
      }
    }
  }
  // colunas:
  for(let i=0; i<3; i++){
    if(array[i]===array[i+3] && array[i]===array[i+6] && array[i]!==""){
      return {
        haVencedor:true,
        vencedor: array[i]
      }
    }
  }
  // diagonais:
  if(array[0]===array[4] && array[0]===array[8] && array[0]!==""){
    return {
      haVencedor:true,
      vencedor: array[0]
    }
  }
  if(array[2]===array[4] && array[2]===array[6] && array[2]!==""){
    return {
      haVencedor:true,
      vencedor: array[0]
    }
  }
  
  return {
    haVencedor:false,
    vencedor: ""
  }
}

// 0 1 2
// 3 4 5
// 6 7 8

export default win;