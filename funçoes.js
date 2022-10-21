
  // 1 declara afuçao
function imprimetexto (texto){

  //console.log(texto)
}
  // 2 execulta a funçao 1 ou + vezes
  imprimetexto("oi")
  imprimetexto("outro texto")
  //trés formas de ver funçoes
function soma(){
  return 2 + 2; 
}
//console.log(soma())

function soma(a){
  //console.log(a)
}
soma(22 * 2)
imprimetexto(soma) // funçao dentro de outra funçao

  //parametros de funçoes
  function soma(num1, num2){
    return num1 + num2;
  }
//console.log(soma(2, 2))
//console.log(soma(2, 4))
//console.log(soma(2, 3))

function nomeidade(nome, idade){
  return 'meu nome é ${nome} e minha idade é ${idade}';
}
//console.log(nomeidade("wagner", 39))

function multiplica(num1, num2){
  return num1 * num2;
}

//console.log(multiplica(soma(2, 2),( 3,3)))

function apresenta(){
  return "olá";
}

console.log(apresenta())

//expressoes de funçoe

//const soma = function(num1, num2){return num1 + num2}
//console.log(soma(1, 1))

// arrow function

