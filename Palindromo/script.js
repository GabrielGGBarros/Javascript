document.getElementById("verifica").addEventListener('click', function() { 
    let palindromo = "";
    let palavra = document.getElementById("palpite").value;
    for(let i = palavra.length -1; i >= 0; i--){
        palindromo += palavra.charAt(i);
    }
    if(palindromo==palavra) {
        alert('"' + palavra + '"' + " É um palíndromo!");
    }
    else {
        alert('"' + palavra + '"' + " Não é um palíndromo!");
    }
    console.log(palavra);
});