// Desafio 10
// Pesquisei sobre como ordenar os elementos de uma array e encontrei o comando '.sort()' na documentação do MDN Web Docs para ordenar o parâmetro 'techs',
// Link: (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).
function techList(tech, name) {
  let novaArray = [];
  tech.sort();
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index of tech) {
    novaArray.push({
      tech: index,
      name,
    });
  }
  return novaArray;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
