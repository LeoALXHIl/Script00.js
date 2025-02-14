function mediaNotas(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    if (media >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}
console.log(mediaNotas(7, 8, 9));

// medias de notas 