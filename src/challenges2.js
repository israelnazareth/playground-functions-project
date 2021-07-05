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
function generatePhoneNumber(numbers) {
  // Verifica se o array informado tem um tamanho diferente de 11,
  // se os valores são menores que 0 ou se são maiores que 9.
  if (numbers.length !== 11) {
    return "Array com tamanho incorreto.";
  } for (let values of numbers) {
    if (values < 0 || values > 9 ) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    // Verifica a quantidade de repetições de um número é maior ou igual a 3 vezes.
    let times = 0;
    for (let index of numbers) {      
      if (values === index) {
        times += 1;
      } if (times >= 3) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  } // Retorna o array respeitando os parênteses, espaços e traços caso não tenha nenhum erro.
  return '(' + numbers[0] + numbers[1] + ')' + ' ' + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + '-' + numbers[7] + numbers[8] + numbers[9] + numbers[10]  
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
