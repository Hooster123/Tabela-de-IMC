document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    let imc = peso / (altura * altura);

    let classificacao = "";

    if (imc < 18.6) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }

    // Exibindo o resultado
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Seu IMC é ${imc.toFixed(2)}. <br>Classificação: ${classificacao}`;
});
