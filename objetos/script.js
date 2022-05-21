let pessoa = {
  nome: 'fulano',
  sobrenome: 'beltrano',
  idade: 30,
  fala: (palavra) => {
    console.log(palavra);
  },
  anda: (direcao) => {
    console.log('A pessoa anda para a ' + direcao);
  },
  // mudaNome: (nome) => {
  //   this.nome = nome;
  // }
}

// pessoa.fala('olá pessoal');
// pessoa.anda('direita');

// pessoa.mudaNome('Arnaldo');
// var valor = pessoa.nome.length
// console.log(valor)

// pessoa.nome = 'Roberto';
// pessoa.cidade = 'Tianguá';
// delete pessoa.idade;
// console.log(pessoa['nome'], pessoa['sobrenome'], pessoa['idade'], pessoa['cidade'])

// if ('estado' in pessoa) {
//   console.log('Verdadeiro');
// }
// else {
//   console.log('False');
// }
// for (const i in pessoa) {
//   console.log(pessoa[i]);
// }

//String
var nome2 = 'André';

nome2.length; // 5
nome2.charAt(1); // 'n'
nome2.replace('ré', 'rei'); // 'Andrei'
nome2; // 'André'



//Números
var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'



//ARRAY

var videoGames = ['Switch', 'PS4', 'XBox'];
var valores = [3, 1, 2, 4]

videoGames.pop(1); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3
console.log(videoGames);
var x = valores.sort();
console.log(x);
console.log(valores.length);



