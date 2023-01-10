var escolhaJogador
var posicoesDisponiveis = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var posicoesDoJogador = []
var posicoesDaCpu = []
function fazerEscolha(simboloEscolhido){
    escolhaJogador = simboloEscolhido
    document.getElementById('somBotao2').play()
    document.getElementById('botaoXis').hidden = true
    document.getElementById('botaoBolinha').hidden = true
    document.getElementById('textoEscolha').hidden = true
    document.getElementById('hashtag').hidden = false
    document.getElementById('botaoPosicaoUm').hidden = false
    document.getElementById('botaoPosicaoDois').hidden = false
    document.getElementById('botaoPosicaoTres').hidden = false
    document.getElementById('botaoPosicaoQuatro').hidden = false
    document.getElementById('botaoPosicaoCinco').hidden = false
    document.getElementById('botaoPosicaoSeis').hidden = false
    document.getElementById('botaoPosicaoSete').hidden = false
    document.getElementById('botaoPosicaoOito').hidden = false
    document.getElementById('botaoPosicaoNove').hidden = false
    escolherPrimeiro()
}
function escolherPosicao(numeroPosicao){
    if(numeroPosicao == 1){
        document.getElementById('botaoPosicaoUm').hidden = true
        if(escolhaJogador == 'x'){
            document.getElementById('simboloXisPosicaoUm').hidden = false
        }
        else{
            document.getElementById('simboloBolinhaPosicaoUm').hidden = false
        }
    }
    else if(numeroPosicao == 2){
        document.getElementById('botaoPosicaoDois').hidden = true
        if(escolhaJogador == 'x'){
            document.getElementById('simboloXisPosicaoDois').hidden = false
        }
        else{
            document.getElementById('simboloBolinhaPosicaoDois').hidden = false
        }
    }
    else if(numeroPosicao == 3){
        document.getElementById('botaoPosicaoTres').hidden = true
        if(escolhaJogador == 'x'){
            document.getElementById('simboloXisPosicaoTres').hidden = false
        }
        else{
            document.getElementById('simboloBolinhaPosicaoTres').hidden = false
        }
    }
    else if(numeroPosicao == 4){
        document.getElementById('botaoPosicaoQuatro').hidden = true
        if(escolhaJogador == 'x'){
            document.getElementById('simboloXisPosicaoQuatro').hidden = false
        }
        else{
            document.getElementById('simboloBolinhaPosicaoQuatro').hidden = false
        }
    }
    else if(numeroPosicao == 5){
        document.getElementById('botaoPosicaoCinco').hidden = true
        if(escolhaJogador == 'x'){
            document.getElementById('simboloXisPosicaoCinco').hidden = false
        }
        else{
            document.getElementById('simboloBolinhaPosicaoCinco').hidden = false
        }
    }
    else if(numeroPosicao == 6){
        document.getElementById('botaoPosicaoSeis').hidden = true
        if(escolhaJogador == 'x'){
            document.getElementById('simboloXisPosicaoSeis').hidden = false
        }
        else{
            document.getElementById('simboloBolinhaPosicaoSeis').hidden = false
        }
    }
    else if(numeroPosicao == 7){
        document.getElementById('botaoPosicaoSete').hidden = true
        if(escolhaJogador == 'x'){
            document.getElementById('simboloXisPosicaoSete').hidden = false
        }
        else{
            document.getElementById('simboloBolinhaPosicaoSete').hidden = false
        }
    }
    else if(numeroPosicao == 8){
        document.getElementById('botaoPosicaoOito').hidden = true
        if(escolhaJogador == 'x'){
            document.getElementById('simboloXisPosicaoOito').hidden = false
        }
        else{
            document.getElementById('simboloBolinhaPosicaoOito').hidden = false
        }
    }
    else if(numeroPosicao == 9){
        document.getElementById('botaoPosicaoNove').hidden = true
        if(escolhaJogador == 'x'){
            document.getElementById('simboloXisPosicaoNove').hidden = false
        }
        else{
            document.getElementById('simboloBolinhaPosicaoNove').hidden = false
        }
    }
    document.getElementById('somBotao1').play()
    posicoesDisponiveis.splice(posicoesDisponiveis.indexOf(numeroPosicao), 1)
    posicoesDoJogador.push(numeroPosicao)
}
function escolhaDaCpu(){
    var escolhaCpu
    if(((posicoesDisponiveis.includes(1) && posicoesDoJogador.includes(2) && posicoesDoJogador.includes(3)) || (posicoesDisponiveis.includes(1) && posicoesDoJogador.includes(4) && posicoesDoJogador.includes(7)) || (posicoesDisponiveis.includes(1) && posicoesDoJogador.includes(5) && posicoesDoJogador.includes(9))) || ((posicoesDisponiveis.includes(1) && posicoesDaCpu.includes(2) && posicoesDaCpu.includes(3)) || (posicoesDisponiveis.includes(1) && posicoesDaCpu.includes(4) && posicoesDaCpu.includes(7)) || (posicoesDisponiveis.includes(1) && posicoesDaCpu.includes(5) && posicoesDaCpu.includes(9)))){
        escolhaCpu = 1
    }
    else if(((posicoesDoJogador.includes(1) && posicoesDisponiveis.includes(2) && posicoesDoJogador.includes(3)) || (posicoesDisponiveis.includes(2) && posicoesDoJogador.includes(5) && posicoesDoJogador.includes(8))) || ((posicoesDaCpu.includes(1) && posicoesDisponiveis.includes(2) && posicoesDaCpu.includes(3)) || (posicoesDisponiveis.includes(2) && posicoesDaCpu.includes(5) && posicoesDaCpu.includes(8)))){
        escolhaCpu = 2
    }
    else if((posicoesDoJogador.includes(1) && posicoesDoJogador.includes(2) && posicoesDisponiveis.includes(3) || (posicoesDisponiveis.includes(3) && posicoesDoJogador.includes(6) && posicoesDoJogador.includes(9)) || (posicoesDisponiveis.includes(3) && posicoesDoJogador.includes(5) && posicoesDoJogador.includes(7))) || (posicoesDaCpu.includes(1) && posicoesDaCpu.includes(2) && posicoesDisponiveis.includes(3) || (posicoesDisponiveis.includes(3) && posicoesDaCpu.includes(6) && posicoesDaCpu.includes(9)) || (posicoesDisponiveis.includes(3) && posicoesDaCpu.includes(5) && posicoesDaCpu.includes(7)))){
        escolhaCpu = 3
    }
    else if(((posicoesDoJogador.includes(1) && posicoesDisponiveis.includes(4) && posicoesDoJogador.includes(7)) || (posicoesDisponiveis.includes(4) && posicoesDoJogador.includes(5) && posicoesDoJogador.includes(6))) || ((posicoesDaCpu.includes(1) && posicoesDisponiveis.includes(4) && posicoesDaCpu.includes(7)) || (posicoesDisponiveis.includes(4) && posicoesDaCpu.includes(5) && posicoesDaCpu.includes(6)))){
        escolhaCpu = 4
    }
    else if(((posicoesDoJogador.includes(1) && posicoesDisponiveis.includes(5) && posicoesDoJogador.includes(9)) || (posicoesDoJogador.includes(3) && posicoesDisponiveis.includes(5) && posicoesDoJogador.includes(7)) || (posicoesDoJogador.includes(2) && posicoesDisponiveis.includes(5) && posicoesDoJogador.includes(8)) || (posicoesDoJogador.includes(4) && posicoesDisponiveis.includes(5) && posicoesDoJogador.includes(6))) || ((posicoesDaCpu.includes(1) && posicoesDisponiveis.includes(5) && posicoesDaCpu.includes(9)) || (posicoesDaCpu.includes(3) && posicoesDisponiveis.includes(5) && posicoesDaCpu.includes(7)) || (posicoesDaCpu.includes(2) && posicoesDisponiveis.includes(5) && posicoesDaCpu.includes(8)) || (posicoesDaCpu.includes(4) && posicoesDisponiveis.includes(5) && posicoesDaCpu.includes(6)))){
        escolhaCpu = 5
    }
    else if(((posicoesDoJogador.includes(4) && posicoesDoJogador.includes(5) && posicoesDisponiveis.includes(6)) || (posicoesDoJogador.includes(3) && posicoesDisponiveis.includes(6) && posicoesDoJogador.includes(9))) || ((posicoesDaCpu.includes(4) && posicoesDaCpu.includes(5) && posicoesDisponiveis.includes(6)) || (posicoesDaCpu.includes(3) && posicoesDisponiveis.includes(6) && posicoesDaCpu.includes(9)))){
        escolhaCpu = 6
    }
    else if(((posicoesDoJogador.includes(1) && posicoesDoJogador.includes(4) && posicoesDisponiveis.includes(7)) || (posicoesDoJogador.includes(3) && posicoesDoJogador.includes(5) && posicoesDisponiveis.includes(7)) || (posicoesDisponiveis.includes(7) && posicoesDoJogador.includes(8) && posicoesDoJogador.includes(9))) || ((posicoesDaCpu.includes(1) && posicoesDaCpu.includes(4) && posicoesDisponiveis.includes(7)) || (posicoesDaCpu.includes(3) && posicoesDaCpu.includes(5) && posicoesDisponiveis.includes(7)) || (posicoesDisponiveis.includes(7) && posicoesDaCpu.includes(8) && posicoesDaCpu.includes(9)))){
        escolhaCpu = 7
    }
    else if(((posicoesDoJogador.includes(2) && posicoesDoJogador.includes(5) && posicoesDisponiveis.includes(8)) || (posicoesDoJogador.includes(7) && posicoesDisponiveis.includes(8) && posicoesDoJogador.includes(9))) || ((posicoesDaCpu.includes(2) && posicoesDaCpu.includes(5) && posicoesDisponiveis.includes(8)) || (posicoesDaCpu.includes(7) && posicoesDisponiveis.includes(8) && posicoesDaCpu.includes(9)))){
        escolhaCpu = 8
    }
    else if(((posicoesDoJogador.includes(1) && posicoesDoJogador.includes(5) && posicoesDisponiveis.includes(9)) || (posicoesDoJogador.includes(3) && posicoesDoJogador.includes(6) && posicoesDisponiveis.includes(9)) || (posicoesDoJogador.includes(7) && posicoesDoJogador.includes(8) && posicoesDisponiveis.includes(9))) || ((posicoesDaCpu.includes(1) && posicoesDaCpu.includes(5) && posicoesDisponiveis.includes(9)) || (posicoesDaCpu.includes(3) && posicoesDaCpu.includes(6) && posicoesDisponiveis.includes(9)) || (posicoesDaCpu.includes(7) && posicoesDaCpu.includes(8) && posicoesDisponiveis.includes(9)))){
        escolhaCpu = 9
    }
    else{
        escolhaCpu = posicoesDisponiveis[Math.floor(Math.random() * posicoesDisponiveis.length)]
    }
    if(escolhaCpu == 1){
        document.getElementById('botaoPosicaoUm').hidden = true
        if(escolhaJogador == 'x'){
            document.getElementById('simboloBolinhaPosicaoUm').hidden = false
        }
        else{
            document.getElementById('simboloXisPosicaoUm').hidden = false
        }
    }
    else if(escolhaCpu == 2){
        document.getElementById('botaoPosicaoDois').hidden = true
        if(escolhaJogador == 'x'){
            document.getElementById('simboloBolinhaPosicaoDois').hidden = false
        }
        else{
            document.getElementById('simboloXisPosicaoDois').hidden = false
        }
    }
    else if(escolhaCpu == 3){
        document.getElementById('botaoPosicaoTres').hidden = true
        if(escolhaJogador == 'x'){
            document.getElementById('simboloBolinhaPosicaoTres').hidden = false
        }
        else{
            document.getElementById('simboloXisPosicaoTres').hidden = false
        }
    }
    else if(escolhaCpu == 4){
        document.getElementById('botaoPosicaoQuatro').hidden = true
        if(escolhaJogador == 'x'){
            document.getElementById('simboloBolinhaPosicaoQuatro').hidden = false
        }
        else{
            document.getElementById('simboloXisPosicaoQuatro').hidden = false
        }
    }
    else if(escolhaCpu == 5){
        document.getElementById('botaoPosicaoCinco').hidden = true
        if(escolhaJogador == 'x'){
            document.getElementById('simboloBolinhaPosicaoCinco').hidden = false
        }
        else{
            document.getElementById('simboloXisPosicaoCinco').hidden = false
        }
    }
    else if(escolhaCpu == 6){
        document.getElementById('botaoPosicaoSeis').hidden = true
        if(escolhaJogador == 'x'){
            document.getElementById('simboloBolinhaPosicaoSeis').hidden = false
        }
        else{
            document.getElementById('simboloXisPosicaoSeis').hidden = false
        }
    }
    else if(escolhaCpu == 7){
        document.getElementById('botaoPosicaoSete').hidden = true
        if(escolhaJogador == 'x'){
            document.getElementById('simboloBolinhaPosicaoSete').hidden = false
        }
        else{
            document.getElementById('simboloXisPosicaoSete').hidden = false
        }
    }
    else if(escolhaCpu == 8){
        document.getElementById('botaoPosicaoOito').hidden = true
        if(escolhaJogador == 'x'){
            document.getElementById('simboloBolinhaPosicaoOito').hidden = false
        }
        else{
            document.getElementById('simboloXisPosicaoOito').hidden = false
        }
    }
    else if(escolhaCpu == 9){
        document.getElementById('botaoPosicaoNove').hidden = true
        if(escolhaJogador == 'x'){
            document.getElementById('simboloBolinhaPosicaoNove').hidden = false
        }
        else{
            document.getElementById('simboloXisPosicaoNove').hidden = false
        }
    }
    posicoesDisponiveis.splice(posicoesDisponiveis.indexOf(escolhaCpu), 1)
    posicoesDaCpu.push(escolhaCpu)
}
function checarVitoria(){
    if(posicoesDisponiveis.length != 0){
        escolhaDaCpu()
    }
    if((posicoesDoJogador.includes(1) && posicoesDoJogador.includes(2) && posicoesDoJogador.includes(3))|| (posicoesDoJogador.includes(1) && posicoesDoJogador.includes(4) && posicoesDoJogador.includes(7)) || (posicoesDoJogador.includes(1) && posicoesDoJogador.includes(5) && posicoesDoJogador.includes(9)) || (posicoesDoJogador.includes(2) && posicoesDoJogador.includes(5) && posicoesDoJogador.includes(8)) || (posicoesDoJogador.includes(3) && posicoesDoJogador.includes(6) && posicoesDoJogador.includes(9)) || (posicoesDoJogador.includes(3) && posicoesDoJogador.includes(5) && posicoesDoJogador.includes(7)) || (posicoesDoJogador.includes(4) && posicoesDoJogador.includes(5) && posicoesDoJogador.includes(6)) || (posicoesDoJogador.includes(7) && posicoesDoJogador.includes(8) && posicoesDoJogador.includes(9))){
        document.getElementById('somOhNo').play()
        alert('Você ganhou!')
        document.getElementById('botaoJogarNovamente').hidden = false;
    }
    else if((posicoesDaCpu.includes(1) && posicoesDaCpu.includes(2) && posicoesDaCpu.includes(3))|| (posicoesDaCpu.includes(1) && posicoesDaCpu.includes(4) && posicoesDaCpu.includes(7)) || (posicoesDaCpu.includes(1) && posicoesDaCpu.includes(5) && posicoesDaCpu.includes(9)) || (posicoesDaCpu.includes(2) && posicoesDaCpu.includes(5) && posicoesDaCpu.includes(8)) || (posicoesDaCpu.includes(3) && posicoesDaCpu.includes(6) && posicoesDaCpu.includes(9)) || (posicoesDaCpu.includes(3) && posicoesDaCpu.includes(5) && posicoesDaCpu.includes(7)) || (posicoesDaCpu.includes(4) && posicoesDaCpu.includes(5) && posicoesDaCpu.includes(6)) || (posicoesDaCpu.includes(7) && posicoesDaCpu.includes(8) && posicoesDaCpu.includes(9))){
        document.getElementById('somOhYes').play()
        alert('Você perdeu!')
        document.getElementById('botaoJogarNovamente').hidden = false;
    }
    else if(posicoesDisponiveis.length == 0){
        document.getElementById('somThiscantbe').play()
        alert('Empate!')
        document.getElementById('botaoJogarNovamente').hidden = false;
    }
    }
function escolherPrimeiro(){
    var primeiroAJogar = Math.floor(Math.random() * 2);
    document.getElementById('somTimeToDuel').play()
    if(primeiroAJogar == 1){
        alert('Eu jogarei primeiro')
        escolhaDaCpu()
    }
    else{
        alert('Você jogará primeiro')
    }
}