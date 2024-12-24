 function mostrarImagem(num) {
    var img = document.getElementById("imagem");
    var imgContainer = document.getElementById("imagem-container");

    // Especifica as imagens de acordo com o número clicado
    if (num === 1) {
        img.src = "foto1.jpg"; // Troque pelo caminho da sua foto
    } else if (num === 2) {
        img.src = "foto2.jpg"; // Troque pelo caminho da sua foto
    } else if (num === 3) {
        img.src = "foto3.jpg"; // Troque pelo caminho da sua foto
    } else if (num === 4) {
        img.src = "foto4.jpg"; // Troque pelo caminho da sua foto
    }

    img.style.opacity = 0;  // Inicia com a imagem invisível
    imgContainer.style.display = "block";  // Torna o container da imagem visível

    // Transição para a imagem aparecer suavemente
    setTimeout(function() {
        img.style.opacity = 1;  // A imagem vai aparecer
    }, 100);

}
