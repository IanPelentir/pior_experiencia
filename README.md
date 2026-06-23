# O Labirinto da Frustração: Uma Interface Intencionalmente Terrível 🛡️❌

Este projeto foi desenvolvido como um experimento acadêmico prático e provocativo para demonstrar as piores práticas de User Experience (UX), Acessibilidade (WCAG) e Segurança da Informação (OWASP Top 10) em interfaces digitais. Utilizando uma abordagem de engenharia reversa conceitual, o sistema serve como ferramenta didática para conscientizar novos desenvolvedores sobre o impacto crítico do design centrado no ser humano e da maturidade de segurança no desenvolvimento de software.

---

## 👥 Equipe
* **Nome da Equipe:** Labirinto Anti-UX
* **Integrantes:** * Alan Menezes de Araújo (Curso: Tecnologia em Análise e Desenvolvimento de Sistemas - ADS)
  * Marco Antônio de Oliveira Medeiros (Curso: Tecnologia em Análise e Desenvolvimento de Sistemas - ADS)
  * Ian Pelentir Ramos (Curso: Tecnologia em Análise e Desenvolvimento de Sistemas - ADS)
* **Categoria:** Desafio Pior Experiência de Usuário (Anti-UX)

---

## ⚠️ Problema
A negligência e a falta de rigor técnico na aplicação dos pilares de UX, Acessibilidade (WCAG) e Validações Seguras no ciclo de desenvolvimento de software. Interfaces mal projetadas na internet causam fadiga cognitiva, abandono de fluxo (*churn*), exclusão digital severa de Pessoas com Deficiência (PCD) e, criticamente, induzem os usuários a ignorarem boas práticas de cibersegurança (como reutilizar credenciais simples ou anotar senhas em locais físicos devido a políticas de complexidade impraticáveis).

O público diretamente afetado por este problema no cenário regional inclui novos profissionais de TI em formação, empresas em processo de transformação digital e cidadãos usuários de serviços públicos que dependem de sistemas web burocráticos.

---

## 💡 Solução
Desenvolvemos um MVP (Mínimo Produto Viável) invertido intitulado **O Labirinto da Frustração**: um fluxo interativo de cadastro composto por **8 etapas críticas de validação**. Cada etapa implementa intencionalmente um padrão de design obscuro (*Dark Pattern*) ou uma vulnerabilidade arquitetural grave, permitindo que a banca e os estudantes auditem visualmente e tecnicamente o impacto negativo de decisões de engenharia de software equivocadas.

---

## 🌐 Link do MVP
A aplicação está totalmente hospedada e operacional de forma pública na web:
🔗 **[Acessar o MVP Online - O Labirinto da Frustração](https://ianpelentir.github.io/pior_experiencia/)**

---

## 📊 Pitch
A estrutura dos slides e a linha de defesa técnica da apresentação foram organizadas para conectar cada erro de UX com uma falha de engenharia ou segurança. 
* O link do youtube com a apresentação do pith: "https://youtu.be/l8-01JNRVPo".

---

## 🕹️ Como Testar
Para fins de auditoria acadêmica e avaliação pela banca examinadora, os parâmetros exatos para "vencer" e contornar as validações absurdas de cada etapa do fluxo são:

1. **Etapa 1 (Nome de Usuário):** Insira uma string com exatamente 13 caracteres e sem nenhuma vogal (Ex: `XPTZQRSLMNWKB`). Caso erre, o sistema aciona um recarregamento total forçado da página.
2. **Etapa 2 (Botão Fujão):** Mova o cursor do mouse repetidamente sobre o botão "CLIQUE AQUI". O algoritmo possui uma taxa de probabilidade aleatória de 5% de travar o movimento do elemento, permitindo o clique.
3. **Etapa 3 (Captcha de Memória):** Selecione pelo menos 3 quadrantes pretos do grid e clique no botão de validação.
4. **Etapa 4 (Pedidos Inúteis):** Preencha os campos arbitrários e prossiga.
5. **Etapa 5 (Senha Impossível):** Insira uma cadeia de caracteres contendo cumulativamente: o emoji de maçã (`🍎`), os números primos `7` e `13`, uma letra do alfabeto cirílico (Ex: `А`, `Б` ou `В`) e o resultado exato do cálculo `152 * 43` (que é `6536`). *Exemplo válido:* `🍎713А6536`.
6. **Etapa 6 (Termos de Uso Infinitos):** Mova a barra de rolagem da caixa de texto preta até o limite inferior absoluto para habilitar o checkbox de consentimento.
7. **Etapa 7 (Verificação de Áudio Inversa):** Ignore a instrução do microfone e digite exatamente em caixa alta a frase: `EU AMO BUROCRACIA`.
8. **Etapa 8 (Confirmação por Fax):** Digite qualquer sequência numérica e dispare a rotina `finish()`.

---

## 🛠️ Tecnologias Utilizadas
A arquitetura do projeto foi estruturada sem dependências externas complexas para garantir conformidade estática total no lado do cliente (*Client-Side Purist*):
* **HTML5:** Estruturação semântica adaptada para injeção e manipulação dinâmica de componentes de estado.
* **CSS3:** Estilização baseada em variáveis dinâmicas (`:root`), paleta de cores berrantes de baixo contraste, tipografia cursiva prejudicial (Comic Sans MS) e animações de stress de tela via `@keyframes`.
* **JavaScript (Vanilla JS):** Mecanismo de gerenciamento de estado da aplicação por meio de matrizes de objetos, renderização condicional por manipulação direta do DOM, escuta de eventos e cálculos matemáticos de confinamento de coordenadas.
* **Hospedagem:** GitHub Pages.

---

## 🔒 Medidas de Segurança e Relação com OWASP Top 10
Como exigência da integração com a disciplina de Segurança da Informação, o software expõe deliberadamente falhas estruturais críticas em sua arquitetura para fins pedagógicos:

1. **A04:2021-Insecure Design (Projeto Inseguro):** A aplicação confia 100% das suas regras de validação, limites de formulário e filtros complexos ao navegador do cliente. Sem validação complementar no *Server-Side*, um usuário mal-intencionado pode desativar o JavaScript ou interceptar as funções de transição no console para injetar qualquer payload malicioso.
2. **A07:2021-Identification and Authentication Failures:**
   * **Exposição de Credenciais:** As senhas inseridas são capturadas e lidas em texto claro pelo script (`document.getElementById('password').value`), sem passar por funções de hash criptográfico obrigatórias (como *bcrypt*, *Argon2* ou *PBKDF2*).
   * **Políticas de Senhas Ineficientes:** A exigência de caracteres exóticos e equações matemáticas viola as diretrizes modernas do NIST e da OWASP, pois força os usuários a anotarem dados sigilosos em mídias inseguras.
3. **Privacidade e Minimização (LGPD):** A Etapa 4 solicita dados desconexos do escopo de um cadastro (como tamanho de calçado em unidades romanas), ilustrando a violação direta ao princípio da minimização e da finalidade legítima de tratamento de dados estabelecidos pela LGPD.

---

## 🧪 Validação e Testes de Software
A aplicação foi validada por meio de rotinas de testes manuais para garantir estabilidade operacional sob o comportamento caótico projetado:
* **Análise de Valor Limite (Caixa Preta):** O campo de nome de usuário foi exaustivamente testado com comprimentos de 12, 13 e 14 caracteres, validando se o gatilho de rejeição e *reload* responde estritamente no limite exato de 13 caracteres.
* **Teste de Stress de Layout de Interface (UI):** O comportamento matemático de fuga do "Botão Fujão" (Etapa 2) foi testado em diferentes resoluções de tela (*viewports* mobile e desktop), garantindo que os limites máximos calculados com base no `clientWidth` e `clientHeight` impeçam o botão de se deslocar para fora do escopo visível da janela do navegador.

---

## 🤖 Uso de IA
* **Manus.im:** Utilizado na fase inicial de ideação e prototipagem para estruturar a árvore de elementos do DOM (HTML) e fornecer o padrão estrutural para o gerenciamento de estados no arquivo JavaScript.
* **Gemini (Google):** Utilizado como assistente na modelagem de segurança da informação da aplicação, mapeamento das falhas funcionais frente ao framework do OWASP Top 10, refinamento das rotinas lógicas de colisão de tela do botão móvel e coautoria desta documentação técnica em estrita conformidade com o regulamento do edital.

---
*Laboratório de Anti-UX - IFRO Ariquemes 2026. Desenvolvido para fins estritamente didáticos e avaliativos.*