let I
I=prompt("Qual é o índice de poluição atual?")
if(I==0.3){
    alert("Industrias do grupo 1º, vocês estão intimadas a encerrarem suas atividades")
}
else if(I==0.4){
    alert("Industrias do grupo 1º e 2º, vocês estão intimadas a encerrarem suas atividades")
}
else if(I >=0.5){
    alert("Industrias do grupo 1º, 2º e 3º, vocês estão intimadas a encerrarem suas atividades")
}

// I=índice

/*
A Secretaria de Meio Ambiente que controla o índice de poluição mantém 3 grupos de
indústrias que são altamente poluentes do meio ambiente. O índice de poluição aceitável
varia de 0,05 até 0,25. Se o índice sobe para 0,3 as indústrias do 1º grupo são intimadas a
suspenderem suas atividades, se o índice crescer para 0,4 as industrias do 1º e 2º grupo são
intimadas a suspenderem suas atividades, se o índice atingir 0,5 todos os grupos devem ser
notificados a paralisarem suas atividades. Faça um sistema que leia o índice de poluição
medido e emita a notificação adequada aos diferentes grupos de empresas.*/