function atualizar(){
  let gorjeta = document.getElementById("gorjeta");
  let valorGorj = document.getElementById("valorGorj");
  valorGorj.value = gorjeta.value;
}
function calcular(){
  let valorC = Number(document.getElementById("valorC").value);
  console.log(valorC);
  let valorGorj = Number(document.getElementById("valorGorj").value);
  let quantPessoas = Number(document.getElementById("quantPessoas").value);
  if(valorC > 0 && quantPessoas > 0) {
     let total = valorC + (valorC * valorGorj / 100);
     let pPessoa = total / quantPessoas;
    document.getElementById("resposta").innerHTML = "valor total: "+total+" <br> "+ "Valor por pessoa:" +pPessoa;
  } else {
    document.getElementById("resposta").innerHTML = "ERRO, campos vázios. E/ou devem ser preenchidos com números!!";
  }
}