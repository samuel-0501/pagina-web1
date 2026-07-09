// Seleciona o botão pelo ID
const botao = document.getElementById('botao-tema');

// Escuta o clique do usuário no botão
botao.addEventListener('click', () => {
    // Adiciona ou remove a classe 'dark-mode' do corpo da página
    document.body.classList.toggle('dark-mode');
});
