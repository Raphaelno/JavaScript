let C, N, E, SE, S, T;
C=prompt("Digite o seu código")
N=prompt("Quantas horas você trabalhou na semana?")
if(N>50){
    E=N-50
    SE= E*20
    S=N*10
    T=S+SE
    alert("Seu salário excedente é de: " + SE + " e seu salário total é de: " + T)

}
else if(N<=50){
    S=N*10
    alert("Seu salário é de: " + S)
}
/*
C=Codigo
N=Numeros de horas trabalhadas
EH=Excesso de horas
ES=Excesso salario
HT=Hora trabalhadas

/*
Elabore um sistema que leia as variáveis C e N, respectivamente código e número de
horas trabalhadas de um operário. E calcule o salário sabendo-se que ele ganha R$ 10,00
por hora. Quando o número de horas exceder a 50 calcule o excesso de pagamento
armazenando-o na variável E, caso contrário zerar tal variável. A hora excedente de
trabalho vale R$ 20,00. No final do processamento imprimir o salário total e o salário
excedente.*/