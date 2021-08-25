/*
    Alerts
    Documentação: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert

    alert(texto|valor);

    Prompts
    Documentação: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/prompt

    prompt(texto, valor);

    Confirm
    Documentação: https://developer.mozilla.org/pt-BR/docs/Web/API/Window/confirm

    confirm(mensagem);
*/

//Comentário de uma única linha.
/*
Comentário de múltiplas linhas.
Utilzada principalmente em documentações de código.
*/

var saudacao = 'Olá';
var nome = prompt('Qual o seu nome?')


alert(saudacao + ' ' + nome);

if (window.confirm("Você realmente quer sair?")) {
    window.open("sair.html", "Obrigado pela visita!");
  }