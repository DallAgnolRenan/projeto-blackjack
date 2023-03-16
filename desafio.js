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

// 1. A cada rodada, cada jogador pode ou não comprar mais cartas. Quando ambos os jogadores estiverem satisfeitos, ou seja, quando não desejarem comprar mais cartas, é feita a soma da pontuação da mão de cada jogador.