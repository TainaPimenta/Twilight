var jacob = {
  nome: "Jacob",
  vitorias: 3,
  empates: 2,
  derrotas: 4,
  pontos: 0
}
var edward = {
  nome: "Edward",
  vitorias: 7,
  empates: 2,
  derrotas: 2,
  pontos: 0
}


jacob.pontos = calculaPontos(jacob)
edward.pontos = calculaPontos(edward)

function calculaPontos(jogador){
var pontos = (jogador.vitorias *3) + jogador.empates
return pontos
}
 
var jogadores = [jacob, edward]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores){
  var html = ""
  for(var i = 0; i < jogadores.length; i++){
     html += "<tr><td>" + jogadores[i].nome + "</td>"
     html += "<td>" + jogadores[i].vitorias + "</td>"
     html += "<td>" + jogadores[i].empates + "</td>"
     html += "<td>" + jogadores[i].derrotas + "</td>"
     html += "<td>" + jogadores[i].pontos + "</td>"
     html += "<td><td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
     html += "<td><td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
     html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    
    
  }
  var tabelaJogares = document.getElementById("tabelaJogadores")
  tabelaJogares.innerHTML = html
}

function adicionarVitoria (i){
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate (i){
 var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}


function adicionarDerrota (i){
  var jogador = jogadores[i]
  jogador.derrotas++
  exibirJogadoresNaTela(jogadores)
}