document.querySelectorAll('.animar').forEach((el) => {
    //Observador para detectar quando o elemento entra na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { //Quando visível
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    observer.observe(el); //Aplica o observador ao elemento
});

// Seleciona as imagens das desenvolvedoras e os detalhes correspondentes
const images = document.querySelectorAll('.dev-img');
const details = document.querySelectorAll('.dev-details');

// Adiciona evento de clique em cada imagem
images.forEach(image => {
    image.addEventListener('click', () => {
        // Remove a classe "selected" de todas as imagens
        images.forEach(img => img.classList.remove('selected'));

        // Oculta todos os blocos de detalhes
        details.forEach(detail => detail.style.display = 'none');

        // Adiciona a classe "selected" na imagem clicada
        image.classList.add('selected');

        // Mostra os detalhes correspondentes
        const detailId = `${image.id}-details`;
        document.getElementById(detailId).style.display = 'block';
    });
});
