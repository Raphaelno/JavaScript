let P, E, M;
P=prompt("Digite Quantos quilos de tomate você trouxe");
if(P>50){
E=P-50
M=E*4.00
alert("Tua multa é de: " + M)
}
else if(P<=50){
    alert("Você está dentro do peso limite")
}







/*
João, homem de bem, comprou um microcomputador para controlar o rendimento diário
de seu trabalho. Toda vez que ele traz um peso de tomate maior que o estabelecido pelo
regulamento do estado de São Paulo (50 quilos) deve pagar um multa de R$ 4,00 por quilo
excedente. João precisa que você faça um sistema que leia a variável P (peso de tomates) e
verifique se há excesso. Se houver, gravar na variável E (Excesso) e na variável M o valor
da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúdo
ZERO.*/