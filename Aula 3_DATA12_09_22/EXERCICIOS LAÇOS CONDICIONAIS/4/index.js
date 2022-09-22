let numero
    numero = prompt("Digite um número: ");

    if(numero < 0 && numero % 2!=0){
    alert("O número é negativo e é ímpar");

    }
    else if(numero > 0 && numero % 2==0){
        alert("O número é positivo e é par");

    }else if(numero < 0 && numero % 2==0){
        alert("O número é negativo e é par");

    }
    else if(numero > 0 && numero % 2!=0){
        alert("O número é positivo e é ímpar");

    }