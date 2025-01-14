/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// VERSÃO NOSSO JOGO

console.log('Boas vindas ao jogo de BlackJack!');

const iniciarRodada = confirm('Quer iniciar uma nova rodada?');

if (iniciarRodada === true) {
  console.log("Ótimo, vamos começar!");

  const cartaUsuario = comprarCarta()
  const cartaUsuario2 = comprarCarta()
  const cartaComputador = comprarCarta()
  const cartaComputador2 = comprarCarta()
  const pontosMaximo = 21

  console.log(`Usuário: ${cartaUsuario.texto} + ${cartaUsuario2.texto} = ${cartaUsuario.valor + cartaUsuario2.valor}`)

  console.log(`Computador: ${cartaComputador.texto} + ${cartaComputador2.texto} = ${cartaComputador.valor + cartaComputador2.valor}`)

  let somaUsuario = cartaUsuario.valor + cartaUsuario2.valor
  let somaComputador = cartaComputador.valor + cartaComputador2.valor

   if(somaUsuario > somaComputador){
   console.log(`O usuário ganhou`) 
   } else if (somaUsuario > pontosMaximo){
      console.log(`O computador ganhou`)
   } else if (somaComputador > pontosMaximo){
      console.log(`O usuário ganhou`)
   } else if (somaUsuario === somaComputador) {
      console.log(`empate!`)
   } else  {
      console.log(`O computador ganhou`)
      
   }
} else {
  console.log("Tudo bem, até a próxima!");
}

