let pesoUsuario = parseFloat(prompt("Digite seu peso (kg):"));
let alturaUsuario = parseFloat(prompt("Digite sua altura (m):"));
let imc = pesoUsuario / (alturaUsuario * alturaUsuario);

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso normal");
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}

// Obrigado pelas dicas diogo!