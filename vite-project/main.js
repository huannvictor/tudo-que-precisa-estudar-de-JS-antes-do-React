//* Nullish Coalescing Operator ??

// É uma forma de utilizar duas opções de retorno, assim como o "OU" ||
// A diferença é que é mais restritivo
// O operador || considera alguns falsies como valores válidos apara atribuições, já o Nullish Coalescing Operator, não
// Com o ?? o 0(zero) é válido, pois é um número, já os demais falsies não (null, undefined)

// const idade = 0;

//* Objetos
// Uma funcionalidade propriedade-valor que retorna diferentes tipos de dados.

const user = {
  name: "Huann",
  // surname: "Almeida",
  idade: 32,
  address: {
    street: "Rua Hermenegildo Francisco da Cruz",
    number: 120,
  },
};

//? método in
// retorna um booleano caso haja uma propriedade dentro do objeto
// document.body.innerText = "name" in user;     // true
// document.body.innerText = "surname" in user;  // false

//? método keys()
// retorna um vetor com todas as propriedades que estão no objeto
// document.body.innerText = Object.keys(user);

//? método values()
// retorna um vetor com os valores das propriedades do objeto
// document.body.innerText = JSON.stringify(Object.values(user));

//? método entries()
// retorna um vetor, com vários vetores dentro.
// cada sub vetor retorna:
//  -> sua posição 0, a propriedade
//  -> na posição 1, o valor
// document.body.innerText = JSON.stringify(Object.entries(user));

//? Desestruturação
// retorna o valor de uma propriedade como uma variável
const { name, address } = user;

// há a possibilidade de renomear variáveis no momento da desestruturação
const { idade: age } = user;

// assim como, pode-se criar uma nova variável e informar um valor padrão
const { surname = "sobrenome não informado" } = user;

// document.body.innerText = JSON.stringify({ name, surname, address, age });

// há a possibilidade de desestruturar objetos dentro de funções, no campo dos parâmetros
// neste espaço é possível utilizar todas os recursos da desestruturação
//  -> renomear;
//  -> criar uma nova variável, predefinir valores padrão
function mostraIdade({ idade }) {
  return idade;
}

document.body.innerText = mostraIdade(user);

