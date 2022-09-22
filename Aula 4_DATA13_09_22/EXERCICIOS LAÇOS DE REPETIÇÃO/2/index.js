let num = 0.0;

for(i = 0; i <= 500; i++){
    if(i % 2 != 0 && i % 3 == 0){
        alert(num);
        num = num + i 
    }

}

alert("A soma de todos os numeros impares e divisiveis por 3\nde 1 a 500 é: " + num);
