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
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Pos = Math.abs(mouse - cat1);
  let cat2Pos = Math.abs(mouse - cat2);
  if (cat1Pos < cat2Pos) {
    return 'cat1';
  } if (cat2Pos < cat1Pos) {
    return 'cat2';
  }     
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayX) {
  let words = [];
  for (let index of arrayX) {
    if (index % 3 === 0 && index % 5 === 0) {
      words.push('fizzBuzz');
    } else if (index % 3 !== 0 && index % 5 !== 0) {
      words.push('bug!');
    } else if (index % 3 === 0) {
      words.push('fizz');
    } else if (index % 5 === 0) {
      words.push('buzz');
    }
  } return words;
}

// Desafio 9
function encode(word) {
  let codificar = '';
  for (let value of word) {
    switch (value) {
    case 'a':
      codificar += 1;
      break;
    case 'e':
      codificar += 2;
      break;
    case 'i':
      codificar += 3;
      break;
    case 'o':
      codificar += 4;
      break;
    case 'u':
      codificar += 5;
      break;
    default:
      codificar += value;
    }
  } return codificar;
}

function decode(word) {
  let decodificar = '';
  for (let value of word) {
    switch (value) {
    case '1':
      decodificar += 'a';
      break;
    case '2':
      decodificar += 'e';
      break;
    case '3':
      decodificar += 'i';
      break;
    case '4':
      decodificar += 'o';
      break;
    case '5':
      decodificar += 'u';
      break;
    default:
      decodificar += value;
    }
  } return decodificar;
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
