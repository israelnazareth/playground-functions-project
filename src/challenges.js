// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(word) {
  return word.split(' ');
}

// Desafio 4
function concatName(phrases) {
  return phrases[phrases.length - 1] + ', ' + phrases[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(count) {
  let maior = count[0];
  let contagem = 0;
  for (let index of count) {
    if (maior < index) {
      maior = index;
    }
  }
  for (let index of count) {
    if (maior === index) {
      contagem += 1;
    }
  } return contagem;
} console.log(highestCount([-2, -2, -1]))

// Desafio 7
function catAndMouse() {
  
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
