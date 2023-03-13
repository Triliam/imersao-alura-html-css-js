let numeroSecreto = parseInt(Math.random() * 11);
let contador = 0;
function Chutar() {
    let elementoResultado = document.getElementById("resultado");
    let chute = parseInt(document.getElementById("valor").value);
  while (contador < 3) {
 

    if (chute == numeroSecreto) {
      elementoResultado.innerHTML =
        "Você acertou! A intuição está alinhada com o TAO! Somos um com a Força!";
      //var numeroTentativas = true
      break;
    } else if (chute < 0 || chute > 10) {
      elementoResultado.innerHTML =
        "Além da intuição, você deve ler também, use todos os sentido: digite um número de 0 a 10. Suas chances de acertar reduziram, concentre-se e digite novamente.";
      contador = contador + 1;
      break;
    } else if (numeroSecreto < chute) {
      elementoResultado.innerHTML =
        "Humm, um pouco menos, se concentre e digite novamente.";
      contador = contador + 1;
      break;
    } else if (numeroSecreto > chute) {
      elementoResultado.innerHTML =
        "Hummm, um pouco mais! Se concentre e digite novamente.";
      contador = contador + 1;
      break;
    }
  }
  if (contador == 3) {
    elementoResultado.innerHTML = "Você atingiu 3 tentativas, vá meditar!";
  }
}