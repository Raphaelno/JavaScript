/*se = if
senao se = else if
senao = else
caso = case
para = break
escolha = switch*/

let idade;
idade=prompt("Qual é sua idade? ")

if(idade <= 15){
    alert("Já pode planejar a festa de 15 anos")
} /*chave pra indicar que é um bloco de comando*/
else if(idade >= 18){
    alert("Já pode ser preso")
}
else{
    alert("Tá quase lá!")
} /*não precisa de condição porque ele é o retorno final de sua função*/
