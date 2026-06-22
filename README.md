# Laboratório de Anti-UX: O Pior Cadastro do Mundo

[cite_start]Este projeto foi desenvolvido como um experimento acadêmico para demonstrar as piores práticas de User Experience (UX) e segurança da informação em interfaces web[cite: 158]. O objetivo é educar desenvolvedores e designers sobre o que **não fazer** ao projetar sistemas de login e cadastro.

## Como Executar o Projeto

1. Abra o arquivo `index.html` em qualquer navegador web moderno.
2. Tente sobreviver às 8 etapas do cadastro.

### Como "Vencer" o Formulário (Guia de Sobrevivência)

Para fins de teste e demonstração, aqui estão as "soluções" para cada etapa:

* **Etapa 1 (Nome de Usuário):** Digite um nome de usuário com exatamente 13 caracteres e sem vogais. Ex: `XPTZQRSLMNWKB`
* **Etapa 2 (Botão Fujão):** Mova o mouse sobre o botão repetidamente até que ele pare de se mover (há uma pequena chance aleatória de ele parar). Então, clique nele.
* **Etapa 3 (Captcha de Memória):** Clique em pelo menos 3 dos quadrados do captcha e depois clique em "Validar". (A validação é propositalmente falha para permitir o avanço).
* **Etapa 4 (Pedidos Inúteis):** Preencha os campos com qualquer valor e clique em "Continuar".
* **Etapa 5 (Senha Impossível):** A senha deve conter: o emoji de maçã (🍎), os números primos 7 e 13, uma letra cirílica (ex: `А`, `Б`, `В`, `Г`, `Д`, `Е`, `Ж`, `З`, `И`, `Й`, `К`, `Л`, `М`, `Н`, `О`, `П`, `Р`, `С`, `Т`, `У`, `Ф`, `Х`, `Ц`, `Ч`, `Ш`, `Щ`, `Ъ`, `Ы`, `Ь`, `Э`, `Ю`, `Я`) e o resultado de `152 * 43` (que é `6536`). Exemplo: `🍎713А6536`.
* **Etapa 6 (Termos de Uso Infinitos):** Role a caixa de texto dos termos de uso até o final. A caixa de seleção "Eu aceito vender minha alma" será habilitada. Marque-a e clique em "Próximo".
* **Etapa 7 (Verificação de Áudio Inversa):** Digite `EU AMO BUROCRACIA` (em CAIXA ALTA) no campo de texto e clique em "Gritar".
* **Etapa 8 (Confirmação por Fax):** Digite qualquer número no campo do Fax e clique em "FINALIZAR CADASTRO".

---

## Análise das Etapas e Más Práticas Implementadas

Abaixo, detalhamos cada etapa do sistema, explaining por que a técnica utilizada é prejudicial à experiência do usuário e como ela fere princípios de usabilidade e segurança.

### Etapa 1: Restrições Absurdas de Nome de Usuário
**O que acontece:** O sistema exige um nome de usuário com exatamente 13 caracteres e sem nenhuma vogal. Se o usuário errar, a página é recarregada, apagando todo o progresso.
**Por que é errado:** - **Falta de feedback construtivo:** O sistema pune o usuário com um *reload* em vez de validar o campo em tempo real e explicar o erro de forma amigável.
- **Carga cognitiva excessiva:** Exigir que o usuário conte caracteres e evite vogais mentalmente gera frustração imediata.

### Etapa 2: O Botão Fujão
**O que acontece:** O botão de "Próximo" foge do cursor do mouse quando o usuário tenta clicar.
**Por que é errado:**
- **Violação da Lei de Fitts:** A Lei de Fitts estabelece que o tempo para atingir um alvo depende da distância e do tamanho do alvo. Um alvo que se move ativamente destrói a previsibilidade da interface.
- **Acessibilidade nula:** Usuários com deficiências motoras ou que utilizam navegação por teclado ficam completamente impossibilitados de prosseguir.

### Etapa 3: Captcha de Memória
**O que acontece:** Um grid de pixels é apresentado com a instrução de que o usuário deve clicar nos que "piscam em verde a cada 10 segundos".
**Por que é errado:**
- **Fadiga do usuário:** Forçar o usuário a esperar longos períodos apenas para provar que é humano é um desrespeito ao seu tempo.
- **Falta de clareza:** Não há indicação visual de progresso ou de quantos quadrados precisam ser selecionados.

### Etapa 4: Pedidos Inúteis
**O que acontece:** O sistema solicita a cor favorita do primeiro animal de estimação e o número do calçado em polegadas romanas.
**Por que é errado:**
- **Coleta excessiva de dados (Violação da LGPD/GDPR):** O princípio da minimização de dados exige que apenas dados estritamente necessários para a finalidade do serviço sejam coletados.
- **Atrito desnecessário:** Perguntas irrelevantes aumentam a taxa de abandono (churn) durante o funil de cadastro.

### Etapa 5: Senha Impossível
**O que acontece:** A política de senha exige emojis, números primos, letras cirílicas e cálculos matemáticos.
**Por que é errado:**
- **Falsa sensação de segurança:** Políticas de senha excessivamente complexas forçam os usuários a anotar as senhas em locais inseguros (como post-its) ou a reutilizar senhas modificadas, o que paradoxalmente diminui a segurança.
- **Falta de suporte do teclado:** Exigir caracteres de alfabetos específicos (como o cirílico) em teclados ocidentais é uma barreira técnica intransponível para a maioria.

### Etapa 6: Termos de Uso Infinitos e Ilegíveis
**O que acontece:** O usuário é forçado a rolar uma caixa de texto minúscula, com contraste ruim, contendo milhares de palavras repetidas antes de poder marcar a caixa de aceite.
**Por que é errado:**
- **Dark Patterns:** Esconder informações cruciais em textos ilegíveis e forçar o aceite cego é uma prática antiética conhecida como *Dark Pattern*.
- **Contraste inadequado:** O texto cinza escuro sobre fundo preto viola as diretrizes de acessibilidade WCAG (Web Content Accessibility Guidelines).

### Etapa 7: Verificação de Áudio Inversa
**O que acontece:** O sistema pede que o usuário "grite" uma frase no microfone, mas na verdade exige que ele digite a frase em caixa alta.
**Por que é errado:**
- **Instruções enganosas:** Mentir para o usuário sobre a funcionalidade do sistema quebra a confiança.
- **Invasão de privacidade percebida:** Pedir acesso ao microfone (mesmo que falsamente) para uma tarefa trivial gera desconfiança e medo de espionagem.

### Etapa 8: Confirmação por Fax
**O que acontece:** O sistema exige um número de Fax para enviar o código de ativação.
**Por que é errado:**
- **Obsolescência tecnológica:** Exigir tecnologias mortas ou inacessíveis para o público geral impede a conclusão da tarefa.
- **Falta de alternativas:** Sistemas robustos devem oferecer múltiplos canais de verificação (SMS, E-mail, Autenticador).

---

## 🔒 Segurança da Informação e OWASP Top 10

[cite_start]Alinhado com as diretrizes de segurança de software, esta aplicação expõe propositalmente vulnerabilidades críticas que correspondem aos riscos listados no **OWASP Top 10**[cite: 175, 191]:

1. [cite_start]**A04:2021-Insecure Design (Projeto Inseguro):** A arquitetura do sistema joga toda a responsabilidade de validação para o navegador do usuário[cite: 180]. Um sistema seguro deve validar os dados tanto no *Client-Side* quanto obrigatoriamente no *Server-Side*.
2. [cite_start]**A07:2021-Identification and Authentication Failures (Falhas de Identificação e Autenticação):** - **Validação Local:** As validações do nome de usuário e senha ocorrem puramente via JavaScript[cite: 265]. [cite_start]Um atacante pode desativar o JS no navegador ou usar ferramentas de inspeção para injetar qualquer dado inválido e forçar a função `nextStep()`, contornando a segurança[cite: 267].
   - [cite_start]**Exposição em Texto Limpo:** A senha do usuário é lida e manipulada em texto puro no código (`document.getElementById('password').value`), sem passar por funções de hash criptográfico (como *bcrypt* ou *Argon2*) essenciais para proteger credenciais de acessos indevidos[cite: 170, 263].
3. [cite_start]**Ausência de Transporte Seguro (HTTPS):** Por ser executado localmente, os dados inseridos trafegariam desprotegidos na rede, vulneráveis a ataques de interceptação do tipo *Man-in-the-Middle* (MitM)[cite: 197].

---

## 🧪 Estratégia de Teste de Software

Para garantir que o comportamento "frustrante" da aplicação funcione de maneira previsível e controlada (garantindo que o sistema seja difícil para o usuário, mas não quebrado tecnicamente), foram simulados os seguintes cenários de testes:

### Testes de Caixa Preta (Funcionais)
* **Validação de Limites (Etapa 1):** Testado o comportamento do campo com 12, 13 e 14 caracteres com e sem vogais, garantindo que o gatilho `location.reload()` funcione estritamente sob as regras incorretas estabelecidas.
* **Cenários de Senha Complexa (Etapa 5):** Validação de caminhos de erro individuais (ausência de emoji, ausência de caracteres cirílicos ou erro no cálculo matemático) para checar se as mensagens de erro dinâmicas são disparadas adequadamente.

### Testes de Interface e Acessibilidade (UI/UX)
* **Simulação de Responsividade:** Teste de comportamento do "Botão Fujão" (Etapa 2) em resoluções mobile e desktop, assegurando que o cálculo de `Math.random()` limite a fuga do botão dentro das dimensões visíveis da tela, evitando que o elemento suma do DOM visível.
* **Verificação de Evento de Rolagem (Etapa 6):** Teste de stress na caixa de termos de uso para garantir que a propriedade `scrollTop` atinja o gatilho correto apenas quando o usuário chegar ao último pixel do texto.

---

## 🤖 Uso de Inteligência Artificial

[cite_start]Em conformidade com as boas práticas de desenvolvimento e integridade acadêmica, declara-se o uso assistido de ferramentas de Inteligência Artificial no projeto[cite: 273]:

* **Manus.im:** Utilizado para a geração e estruturação da base inicial do código da aplicação (arquivos HTML, esqueleto do arquivo JavaScript de controle de estados das etapas e estruturação das folhas de estilo CSS).
* [cite_start]**Gemini (Google):** Utilizado como assistente técnico na revisão do código de validação, formatação de mensagens amigáveis de erro, refinamento do comportamento matemático de fuga do botão e coautoria na elaboração desta documentação técnica (README) voltada aos critérios de avaliação da banca acadêmica[cite: 222].

---

## Conclusão

[cite_start]A criação de interfaces deve ser guiada pela empatia, acessibilidade e respeito ao usuário[cite: 289]. Este projeto serve como um lembrete de que a tecnologia deve facilitar a vida das pessoas, e não criar labirintos burocráticos digitais.

---
[cite_start]*Desenvolvido para fins acadêmicos - 2026.* [cite: 4]