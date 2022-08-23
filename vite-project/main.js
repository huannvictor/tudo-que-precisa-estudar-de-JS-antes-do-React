//* Nullish Coalescing Operator ??

// É uma forma de utilizar duas opções de retorno, assim como o "OU" ||
// A diferença é que é mais restritivo
// O operador || considera alguns falsies como valores válidos apara atribuições, já o Nullish Coalescing Operator, não
// Com o ?? o 0(zero) é válido, pois é um número, já os demais falsies não (null, undefined)

// const idade = 0;

//* Objetos
// Uma funcionalidade propriedade-valor que retorna diferentes tipos de dados.

//? Short Syntax
// uma forma menos verbosa de atribuir os valores às propriedades de um objeto quando o nome da propriedade é o mesmo da variável que guarda o valor.

const email = "huannvictor@gmail.com";
const phone = 83999999999;

const contact = {
  email,
  phone,
};
// automaticamente o JS vai entender que email: email, phone: phone

// document.body.innerText = JSON.stringify(contact);

const user = {
  name: "Huann",
  // surname: "Almeida",
  idade: 32,
  address: {
    street: "Rua Hermenegildo Francisco da Cruz",
    number: 120,
    zip: {
      code: 58057000,
      city: "João Pessoa",
    },
    isInfoOk() {
      return "ok";
    },
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
// const { name, address } = user;

// há a possibilidade de renomear variáveis no momento da desestruturação
// const { idade: age } = user;

// assim como, pode-se criar uma nova variável e informar um valor padrão
// const { surname = "sobrenome não informado" } = user;

// document.body.innerText = JSON.stringify({ name, surname, address, age });

// há a possibilidade de desestruturar objetos dentro de funções, no campo dos parâmetros
// neste espaço é possível utilizar todas os recursos da desestruturação
//  -> renomear;
//  -> criar uma nova variável, predefinir valores padrão
// function mostraIdade({ idade }) {
//   return idade;
// }
// document.body.innerText = mostraIdade(user);

//? Rest Operator
// retorna um vetor com todas as variáveis que não foram desestruturadas

// const { name, ...rest } = user;

// document.body.innerText = JSON.stringify(rest); // retorna todas as outras variáveis, sem o `name`.

//? Optional Chaining
// recurso utilizado para conseguir encadear a informação de um objeto de acordo com um 'if'

// Caso queira acessar a informação com seguindo uma cadeia de condicionais, sem o Optional Chaining:
// document.body.innerText = user.address
//   ? user.address.zip
//     ? user.address.zip.code
//     : "Não informado"
//   : "Não informado";

// Para obter a mesma informação, de maneira menos verbosa com o Optional Chaining:
// document.body.innerText = user.address?.zip?.code ?? "Não informado";

// Este recurso também pode ser usado para verificar de uma função existe e só chamá-la caso exista.
// Para tal, coloca-se o sinal de interrogação '?' e um ponto '.' antes da chamada da função '()'.
// document.body.innerText = user.address?.isInfoOk?.() ?? "Não informado";

// só chama a função caso exista

//* Arrays
// é um recurso que contém valores organizados em lista.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//? Desestruturação com o Rest Operator
// Assim como é possível desestruturar um objeto, um array também tem essa funcionalidade.

const [first, second, ...rest] = array;
// document.body.innerText = JSON.stringify({ first, second, rest }); // first e second retorna como variáveis e rest como um array do restante dos números (de 3 a 10)

//? Métodos de Array

//? for()
// percorre um array e retorna um resultado para cada item
/*
for (let i of array) {
  document.body.innerText += i;
}
*/

//? forEach()
// percorre um array e retorna um resultado para cada item, porém não altera o array.
// array.forEach(item => {
//   document.body.innerText += item;
// });

//? map()
// percorre um array e retorna um novo array com base do array que está sendo utilizado.
// array.map(item => {
//   document.body.innerText += item * 2;
// }); // este é um array novo
// document.body.innerText += array; // o array anterior não muda.

//? filter()
// percorre determinado array e retorna um novo com alguns itens selecionados.
// não altera o array anterior
// const novoArray = array.filter(item => item % 2 === 0);
// document.body.innerText = JSON.stringify(novoArray);

//? every()
// retorna um booleano para caso todos os elementos de um array satisfaçam uma condição
// const test1 = [1, 2, 3, 4, 5];
// const test2 = [1, 2, 3, 4, 5, "string"];
// const isAllNumber1 = test1.every(item => typeof item === "number");
// const isAllNumber2 = test2.every(item => typeof item === "number");
// document.body.innerText = JSON.stringify({ isAllNumber1, isAllNumber2 });

//? some()
// retorna um booleano para se pelo menos um item satisfaça uma condição.
// const test1 = [1, 2, 3, 4, 5];
// const test2 = [1, 2, 3, 4, 5, "string"];
// const hasString1 = test1.some(item => typeof item === "string");
// const hasString2 = test2.some(item => typeof item === "string");
// document.body.innerText = JSON.stringify({ hasString1, hasString2 });

//? find()
// percorre um array e retorna o primeiro elemento que satisfaça a condição
// const firstEven = array.find(item => {
//   return item % 2 === 0;
// });

// document.body.innerText = JSON.stringify(firstEven);

//? findIndex()
// retorna a posição do primeiro elemento que satisfaz a condição
// const positionOfFirstEven = array.findIndex(item => item % 2 === 0);
// document.body.innerText = JSON.stringify(positionOfFirstEven);

//? reduce()
// retorna uma nova estrutura de dados (objetos, arrays, strings etc) com base no array anterior.
// pode ser alterado seu tamanho, seus valores etc

// const soma = array.reduce((acc, item) => {
//   console.log(" - " + acc + "---" + item);
//   return acc + item;
// }, 0);
// -> para cada item do array, o reduce fez a soma com o accumulator 'acc'

// document.body.innerText = JSON.stringify(soma);
// -> o resultado da soma final está na constante 'soma' informando a a soma de todos os itens do array, que é 55
