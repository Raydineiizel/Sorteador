// Define a função responsável por gerar o número aleatório
function generateNumber() { 
  // Captura o valor mínimo do HTML, converte em número e arredonda para cima
  const min = Math.ceil(Number(document.querySelector('.input-min').value)) 
  
  // Captura o valor máximo do HTML, converte em número e arredonda para baixo
  const max = Math.floor(Number(document.querySelector('.input-max').value)) 
  
  // Calcula o número aleatório dentro do intervalo determinado (inclusivo)
  const result = Math.floor(Math.random() * (max - min + 1)) + min 
  
  // Exibe um alerta na tela com o resultado final do sorteio
  alert(`Generated number: ${result}`) 
}
