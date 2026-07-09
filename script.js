// Seleciona os elementos da página
const botaoTema = document.getElementById('botao-tema');
const botaoFonte = document.getElementById('botao-fonte');
const texto = document.querySelector('.texto-pagina'); // Seleciona o parágrafo

// Variável para controlar o tamanho inicial da fonte
let tamanhoAtual = 16; 

// FUNÇÃO PARA AUMENTAR O TAMANHO DA LETRA
function aumentarLetra() {
    // Aumenta o tamanho em 2 pixels a cada clique
    tamanhoAtual = tamanhoAtual + 2; 
    
    // Limita o tamanho máximo em 26px para não quebrar o layout
    if (tamanhoAtual <= 26) {
        texto.style.fontSize = tamanhoAtual + 'px';
    } else {
        // Se passar de 26px, volta para o tamanho padrão (16px)
        tamanhoAtual = 16;
        texto.style.fontSize = tamanhoAtual + 'px';
    }
}

// Escuta o clique do botão de fonte e chama a função
botaoFonte.addEventListener('click', aumentarLetra);

// Mantém o funcionamento do botão de tema escuro
botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
// === 1. CONTADOR DE VISITAS PERSISTENTE === function inicializarContador() { const elementoContador = document.getElementById('contador-visitas'); let visitas = localStorage.getItem('visitasSimuladas'); if (!visitas) { visitas = Math.floor(Math.random() * 2000) + 500; } visitas = parseInt(visitas) + 1; localStorage.setItem('visitasSimuladas', visitas); elementoContador.textContent = String(visitas).padStart(6, '0'); } // === 2. SISTEMA DE CURTIDAS PERSISTENTE === const btnCurtir = document.getElementById('btn-curtir'); const totalCurtidasTxt = document.getElementById('total-curtidas'); let curtidas = parseInt(localStorage.getItem('totalCurtidas')) || 12; totalCurtidasTxt.textContent = curtidas; if (localStorage.getItem('jaCurtiu') === 'true') { bloquearBotao(); } btnCurtir.addEventListener('click', () => { curtidas++; totalCurtidasTxt.textContent = curtidas; localStorage.setItem('totalCurtidas', curtida...