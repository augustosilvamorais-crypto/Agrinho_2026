<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BioPortal 360 - O Elo do Campo</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <nav>
            <div class="logo">BioPortal <span>360</span></div>
            <ul class="nav-links">
                <li><a href="#home">Início</a></li>
                <li><a href="#simulador">Simulador de Equilíbrio</a></li>
                <li><a href="#agrinho">O Concurso</a></li>
                <li><a href="#sobre">Sobre Mim</a></li>
            </ul>
        </nav>
    </header>

    <section id="home" class="hero">
        <div class="hero-content">
            <h1>Agro Forte, Futuro Sustentável</h1>
            <p>Transformando a produção rural através do equilíbrio e da tecnologia inteligente.</p>
            <a href="#simulador" class="btn">Testar Simulador</a>
        </div>
    </section>

    <section id="simulador" class="section">
        <div class="container">
            <h2>Simulador de Equilíbrio</h2>
            <p>Insira os dados da sua propriedade para calcular o seu índice de sustentabilidade.</p>
            <div class="simulator-box">
                <form id="sim-form">
                    <div class="input-group">
                        <label>Área Total (Hectares):</label>
                        <input type="number" id="area" placeholder="Ex: 50" required>
                    </div>
                    <div class="input-group">
                        <label>Uso de Água (Litros/Dia):</label>
                        <input type="number" id="agua" placeholder="Ex: 5000" required>
                    </div>
                    <div class="input-group">
                        <label>Área de Preservação (Hectares):</label>
                        <input type="number" id="preservacao" placeholder="Ex: 10" required>
                    </div>
                    <button type="button" onclick="calcularEquilibrio()" class="btn-calc">Calcular Diagnóstico</button>
                </form>
                <div id="resultado" class="result-area" style="display:none;">
                    <h3>Seu Diagnóstico:</h3>
                    <p id="feedback-text"></p>
                    <div class="score-bar"><div id="score-fill"></div></div>
                    <div id="recomendacao" class="alert-box"></div>
                </div>
            </div>
        </div>
    </section>

    <section id="agrinho" class="section bg-light">
        <div class="container">
            <h2>Concurso Agrinho 2026</h2>
            <div class="content-flex">
                <div class="text">
                    <p>O Programa Agrinho é o maior programa de responsabilidade social do Sistema FAEP/SENAR-PR. Em 2026, o tema foca no <strong>"Agro Forte, Futuro Sustentável"</strong>.</p>
                    <p>O objetivo é conscientizar a nova geração de produtores e estudantes sobre como a tecnologia pode ser usada para aumentar a produtividade sem esgotar os recursos naturais, garantindo o equilíbrio perfeito entre o campo e o meio ambiente.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="sobre" class="section">
        <div class="container">
            <h2>Sobre Mim</h2>
            <div class="profile-card">
                <p>Olá! Sou aluno do <strong>1º ano do Ensino Médio</strong> e idealizador do BioPortal 360. Acredito que a tecnologia é a ponte necessária para que a experiência dos nossos produtores se encontre com as exigências de preservação do mundo moderno. Este projeto é minha contribuição para um futuro onde a terra continue fértil e o produtor continue próspero.</p>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2024 BioPortal 360 - Projeto Educativo Agrinho 2026</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f9fbf9;
}

header {
    background: #1b4332;
    color: white;
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
}

.logo span {
    color: #74c69d;
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
    font-size: 0.9rem;
    transition: 0.3s;
}

.nav-links li a:hover {
    color: #74c69d;
}

.hero {
    height: 80vh;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3') center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    padding-top: 60px;
}

.hero-content h1 {
    font-size: 3rem;
    margin-bottom: 10px;
}

.section {
    padding: 80px 20px;
}

.container {
    max-width: 900px;
    margin: 0 auto;
}

.bg-light {
    background: #e9f5ed;
}

h2 {
    text-align: center;
    color: #1b4332;
    margin-bottom: 30px;
}

.simulator-box {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.input-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.btn, .btn-calc {
    background: #2d6a4f;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    transition: 0.3s;
}

.btn-calc {
    width: 100%;
    font-size: 1.1rem;
}

.btn:hover, .btn-calc:hover {
    background: #1b4332;
}

.result-area {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 2px solid #eee;
}

.score-bar {
    width: 100%;
    height: 20px;
    background: #eee;
    border-radius: 10px;
    margin: 15px 0;
    overflow: hidden;
}

#score-fill {
    height: 100%;
    width: 0%;
    transition: 1s ease-in-out;
}

.alert-box {
    padding: 15px;
    border-radius: 5px;
    margin-top: 15px;
}

.profile-card {
    background: white;
    padding: 30px;
    border-radius: 10px;
    border-left: 5px solid #2d6a4f;
}

footer {
    background: #1b4332;
    color: white;
    text-align: center;
    padding: 20px;
}
function calcularEquilibrio() {
    const area = parseFloat(document.getElementById('area').value);
    const agua = parseFloat(document.getElementById('agua').value);
    const preservacao = parseFloat(document.getElementById('preservacao').value);
    const resultadoDiv = document.getElementById('resultado');
    const feedbackText = document.getElementById('feedback-text');
    const scoreFill = document.getElementById('score-fill');
    const recomendacao = document.getElementById('recomendacao');

    if(!area || !agua || !preservacao) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Lógica simples de cálculo para o exemplo
    let score = 0;
    
    // Proporção de preservação (Meta ideal 20% ou mais)
    const propPreservacao = (preservacao / area) * 100;
    if(propPreservacao >= 20) score += 50;
    else score += (propPreservacao * 2.5);

    // Uso de água por hectare (Valor fictício para simulação)
    const usoAguaHectare = agua / area;
    if(usoAguaHectare < 100) score += 50;
    else if(usoAguaHectare < 300) score += 30;
    else score += 10;

    resultadoDiv.style.display = 'block';
    scoreFill.style.width = score + '%';

    if(score >= 80) {
        scoreFill.style.backgroundColor = '#2d6a4f';
        feedbackText.innerText = "Excelente! Sua propriedade é um modelo de Agro Sustentável.";
        recomendacao.innerHTML = "<strong>Sugestão:</strong> Você já pode solicitar o seu Selo de Crédito de Preservação!";
        recomendacao.style.backgroundColor = "#d8f3dc";
    } else if(score >= 50) {
        scoreFill.style.backgroundColor = '#ffb703';
        feedbackText.innerText = "Bom caminho, mas há espaço para melhorias.";
        recomendacao.innerHTML = "<strong>Sugestão:</strong> Considere implementar sistemas de irrigação inteligente e aumentar sua área de mata ciliar.";
        recomendacao.style.backgroundColor = "#fff3cd";
    } else {
        scoreFill.style.backgroundColor = '#ae2012';
        feedbackText.innerText = "Alerta: O equilíbrio da sua produção está em risco.";
        recomendacao.innerHTML = "<strong>Sugestão:</strong> Procure nossa Consultoria de Bioinsumos para reduzir químicos e recuperar seu solo.";
        recomendacao.style.backgroundColor = "#f8d7da";
    }
}
