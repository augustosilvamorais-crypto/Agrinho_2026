function calcularSelo() {
    // 1. Capturar os valores inseridos no formulário
    const valorAgua = parseInt(document.getElementById('agua').value);
    const valorDefensivos = parseInt(document.getElementById('defensivos').value);
    const valorSolo = parseInt(document.getElementById('solo').value);

    // 2. Lógica de cálculo (Pontuação de 3 a 9)
    const pontuacaoTotal = valorAgua + valorDefensivos + valorSolo;

    // 3. Capturar os elementos onde a resposta será exibida
    const boxResultado = document.getElementById('resultado-box');
    const titulo = document.getElementById('titulo-resultado');
    const texto = document.getElementById('texto-resultado');

    // 4. Limpar classes de cores antigas
    boxResultado.className = '';

    // 5. Diagnóstico Dinâmico baseado nos pontos
    if (pontuacaoTotal <= 4) {
        // Nível Baixo
        titulo.innerText = "Alerta: Práticas Tradicionais";
        texto.innerText = "Sua propriedade precisa de atenção imediata. Os métodos atuais consomem muitos recursos e geram impacto ambiental. Procure a assistência técnica do SENAR para adotar práticas mais seguras.";
        boxResultado.classList.add('nivel-baixo');
    }
    else if (pontuacaoTotal > 4 && pontuacaoTotal <= 7) {
        // Nível Médio
        titulo.innerText = "A Caminho da Sustentabilidade";
        texto.innerText = "Você está no caminho certo! Já existem boas práticas na sua propriedade, mas ainda há espaço para melhorar, especialmente na gestão de água e solo. Continue inovando.";
        boxResultado.classList.add('nivel-medio');
    }
    else {
        // Nível Alto (Selo Verde)
        titulo.innerText = "Parabéns! Você tem o SELO VERDE 🌱";
        texto.innerText = "Sua fazenda é um exemplo de sustentabilidade para o Agrinho 2026. O uso eficiente da água, solo e manejo de pragas garantem um futuro promissor para o agronegócio e para o meio ambiente.";
        boxResultado.classList.add('nivel-alto');
    }

    // Exibir a caixa de resultado
    boxResultado.style.display = 'block';
}
