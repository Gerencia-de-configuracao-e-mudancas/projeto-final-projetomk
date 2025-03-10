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

// Seleciona todos os cartões de personagem e os blocos de detalhes
const cartoesPersonagem = document.querySelectorAll('.cartao-personagem');
const detalhesPersonagem = document.querySelectorAll('.detalhes-personagem');

// Adiciona evento de clique em cada cartão de personagem
cartoesPersonagem.forEach(cartao => {
    cartao.addEventListener('click', () => {
        // Remove a classe "selecionado" de todos os cartões
        cartoesPersonagem.forEach(c => c.classList.remove('selecionado'));

        // Remove a classe "ativo" de todos os blocos de detalhes
        detalhesPersonagem.forEach(detalhe => detalhe.classList.remove('ativo'));

        // Adiciona a classe "selecionado" ao cartão clicado
        cartao.classList.add('selecionado');

        // Exibe o bloco de detalhes correspondente ao cartão clicado
        const idDetalhes = cartao.id.replace('-cartao', '-detalhes');
        document.getElementById(idDetalhes).classList.add('ativo');

        // Centraliza o cartão selecionado no carrossel
        cartao.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    });
});
