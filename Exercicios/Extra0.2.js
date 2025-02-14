let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let palpite = parseInt(prompt("Adivinhe um número entre 1 e 10:"));
if (palpite === numeroAleatorio) {
    console.log("Você acertou!");
} else {
    console.log(`Você errou! O número era ${numeroAleatorio}`);
}

// jogo da adivinhação