const container = document.getElementById('step-container');
let currentStep = 1;

const steps = [
    {
        id: 1,
        title: "Etapa 1: Nome de Usuário",
        content: `
            <p>Escolha um nome de usuário que não contenha vogais e tenha exatamente 13 caracteres.</p>
            <input type="text" id="username" placeholder="">
            <div class="button-area">
                <button id="btn-1" onclick="validateStep1()">Próximo</button>
            </div>
        `
    },
    {
        id: 2,
        title: "Etapa 2: O Botão Fujão",
        content: `
            <p>Clique no botão para confirmar que você não é um robô (se conseguir).</p>
            <div class="button-area" id="area-2" style="height: 300px; border: 1px solid #333;">
                <button id="btn-runaway" onmouseover="moveButton()" onclick="nextStep(3)">CLIQUE AQUI</button>
            </div>
        `
    },
    {
        id: 3,
        title: "Etapa 3: Captcha de Memória",
        content: `
            <p>Selecione apenas os quadrados que piscam em verde (eles piscam apenas uma vez a cada 10 segundos).</p>
            <div class="captcha-box" id="captcha-3"></div>
            <button onclick="validateStep3()">Validar</button>
        `
    },
    {
        id: 4,
        title: "Etapa 4: Pedidos Inúteis",
        content: `
            <p>Precisamos saber a cor favorita do seu primeiro animal de estimação para fins de marketing.</p>
            <input type="color" id="useless-color">
            <p>E o número do seu calçado em polegadas romanas.</p>
            <input type="number" id="useless-number">
            <button onclick="nextStep(5)">Continuar</button>
        `
    },
    {
        id: 5,
        title: "Etapa 5: Senha Impossível",
        content: `
            <p>Sua senha deve conter: 1 emoji de fruta, 2 números primos, 1 letra cirílica e o resultado de 152 * 43.</p>
            <input type="text" id="password" placeholder="Sua senha complexa...">
            <button onclick="validateStep5()">Verificar</button>
        `
    },
    {
        id: 6,
        title: "Etapa 6: Termos de Uso Infinitos",
        content: `
            <p>Leia nossos termos de uso (Role até o fim para aceitar).</p>
            <div id="terms" style="height: 100px; overflow-y: scroll; background: #222; padding: 10px; font-size: 0.5rem; color: #555;">
                ${"ESTE CONTRATO É UMA ARMADILHA. ".repeat(2000)} FIM DOS TERMOS.
            </div>
            <div style="margin-top: 10px;">
                <label><input type="checkbox" id="check-terms" disabled> Eu aceito vender minha alma</label>
            </div>
            <button id="btn-6" onclick="nextStep(7)" disabled style="margin-top: 10px;">Próximo</button>
        `
    },
    {
        id: 7,
        title: "Etapa 7: Verificação de Áudio Inversa",
        content: `
            <p>Grite "EU AMO BUROCRACIA" no seu microfone (Simulação: digite em CAIXA ALTA).</p>
            <input type="text" id="audio-sim" placeholder="Grite aqui...">
            <button onclick="validateStep7()">Gritar</button>
        `
    },
    {
        id: 8,
        title: "Etapa 8: Confirmação por Fax",
        content: `
            <p>Para finalizar, digite o número do seu Fax para enviarmos o código de ativação.</p>
            <input type="text" id="fax" placeholder="0800-FAX-UX">
            <button onclick="finish()">FINALIZAR CADASTRO</button>
        `
    }
];

function renderStep(stepIndex) {
    const step = steps[stepIndex - 1];
    container.innerHTML = `
        <div class="step active">
            <h2>${step.title}</h2>
            ${step.content}
        </div>
    `;

    if (stepIndex === 3) initCaptcha();
    if (stepIndex === 6) initTerms();
}

function nextStep(step) {
    currentStep = step;
    if (currentStep <= steps.length) {
        renderStep(currentStep);
    }
}

function validateStep1() {
    const val = document.getElementById('username').value;
    const hasVowels = /[aeiouAEIOU]/.test(val);
    if (!hasVowels && val.length === 13) {
        nextStep(2);
    } else {
        alert("ERRO: Nome de usuário inválido. O sistema irá reiniciar para sua segurança.");
        location.reload();
    }
}

function moveButton() {
    const btn = document.getElementById('btn-runaway');
    btn.classList.add('runaway');
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
    
    // Pequena chance de parar para o usuário conseguir clicar
    if (Math.random() > 0.95) {
        btn.onmouseover = null;
    }
}

function initCaptcha() {
    const box = document.getElementById('captcha-3');
    for (let i = 0; i < 25; i++) {
        const p = document.createElement('div');
        p.className = 'captcha-pixel';
        p.onclick = () => p.classList.toggle('selected');
        box.appendChild(p);
    }
}

function validateStep3() {
    const selected = document.querySelectorAll('.captcha-pixel.selected');
    if (selected.length >= 3) {
        alert("Sincronia aceitável detectada.");
        nextStep(4);
    } else {
        alert("Erro de sincronia temporal. Selecione pelo menos 3 quadrados da sorte.");
    }
}

function validateStep5() {
    const pass = document.getElementById('password').value;
    const hasApple = pass.includes('🍎');
    const hasPrime = pass.includes('7') && pass.includes('13');
    const hasCyrillic = /[а-яА-Я]/.test(pass);
    const hasMath = pass.includes('6536');

    if (hasApple && hasPrime && hasCyrillic && hasMath) {
        nextStep(6);
    } else {
        alert("Senha inválida! Falta: " + 
            (!hasApple ? "🍎 " : "") + 
            (!hasPrime ? "Números primos (7 e 13) " : "") + 
            (!hasCyrillic ? "Letra Cirílica " : "") + 
            (!hasMath ? "Resultado de 152*43" : ""));
    }
}

function initTerms() {
    const terms = document.getElementById('terms');
    const check = document.getElementById('check-terms');
    const btn = document.getElementById('btn-6');
    terms.addEventListener('scroll', () => {
        if (terms.scrollTop + terms.clientHeight >= terms.scrollHeight - 5) {
            check.disabled = false;
        }
    });
    check.addEventListener('change', () => {
        btn.disabled = !check.checked;
    });
}

function validateStep7() {
    const val = document.getElementById('audio-sim').value;
    if (val === "EU AMO BUROCRACIA") {
        nextStep(8);
    } else {
        alert("Sua voz soou robótica demais. Tente novamente.");
    }
}

function finish() {
    // Adicionar um efeito de "confete" piscante no fundo
    document.body.style.animation = "party 0.1s infinite";
    
    container.innerHTML = `
        <div class="step active celebration">
            <h1 class="blink">🎉 PARABÉNS! 🎉</h1>
            <div class="trophy">🏆</div>
            <h2>VOCÊ VENCEU O SISTEMA!</h2>
            <p>Após 3 horas de esforço, você finalmente conseguiu se cadastrar em nossa lista de SPAM prioritário.</p>
            <div class="rewards">
                <h3>Suas Recompensas:</h3>
                <ul>
                    <li>100 chamadas de telemarketing por dia</li>
                    <li>Venda dos seus dados para 15 países diferentes</li>
                    <li>Um selo de "Usuário mais Paciente do Mundo"</li>
                </ul>
            </div>
            <p>Um código de confirmação foi enviado para o seu Fax (se ele ainda existir).</p>
            <button class="rainbow-btn" onclick="location.reload()">RECOMEÇAR O PESADELO</button>
        </div>
    `;
}

renderStep(1);
