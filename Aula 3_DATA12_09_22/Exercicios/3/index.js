let N1, N2, N3, N4, R1, R2, R3, R4//, teste
N1=prompt("Digite o primeiro número");
N2=prompt("Digite o segundo número");
N3=prompt("Digite o terceiro número");
N4=prompt("Digite o quarto número");

R1=N1*N1
R2=N2*N2
R3=N3*N3
R4=N4*N4

if(R3>=1000){
     alert("O resultado do terceiro número é: " + R3)
 }

else{
    alert("\nRaiz do primeiro: " + R1 + "\nRaiz do segundo: " + R2 + "\nRaiz do terceiro: " + R3 + "\nRaiz do primeiro: " + R4)
}


/*
N=Numero
R=Raiz
teste= Math.pow(N1, 2)
alert(teste)
nesse caso a raiz está armazenando em teste

Desenvolva um sistema em que:
Leia 4 (quatro) números;
Calcule o quadrado de cada um;
Se o valor resultante do quadrado do terceiro for >= 1000, imprima-o e finalize;
Caso contrário, imprima os valores lidos e seus respectivos quadrados.*/