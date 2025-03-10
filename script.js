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
