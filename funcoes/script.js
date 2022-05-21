//função 1 - Par ou Ímpar


function parImpar(valor) {
  var total = valor / 2;
  var result = total % 2 == 0 ? 'Valor é Par' : 'Valor é Ímpar';
  console.log(result);
}
parImpar(236);

//função 2 - Média

function media(a, b, c, d) {
  media = (a + b + c + d) / 4;
  console.log('A média é ' + media)
}

media(2, 4, 5, 7)

//função 3 -IMC

function imc(peso, altura) {
  var result = peso / (altura * altura)
  var mensagem = ''

  if ((result > 16) && (result < 17)) {
    console.log('Muito abaixo do peso ' + result)
  }
  else if ((result >= 17) && (result < 18.4)) {
    console.log('Abaixo do peso ' + result)
  }
  else if ((result >= 18.5) && (result < 24.9)) {
    console.log('Peso normal ' + result)
  }
  else if ((result >= 25) && (result < 29.9)) {
    console.log('Acima do peso ' + result)
  }
  else if ((result >= 30) && (result < 34.9)) {
    console.log('Obesidade Grau I ' + result)

  }
  else if ((result >= 35) && (result < 40)) {
    console.log('Obesidade Grau II ' + result)

  }
  else if (result > 40) {
    console.log('Obesidade Grau III ' + result)

  }

}

imc(97, 1.85)


//função 4 - Lêr 2 valores

function valores(x, y) {
  if (x == y) {
    var z = x + y;
    console.log(z)
  }
  else {
    var z = x * y;
    console.log(z)
  }
}

valores(2, 3)
valores(5, 5)



console.log('*********************')
//função 5 - Arrow function


var hello = (x, y) => {
  if (x == y) {
    var z = x + y;
    console.log(z)
  }
  else {
    var z = x * y;
    console.log(z)
  }
}

hello(4, 5);

//função 6 - Arrow function - média

var media = (a, b, c, d) => {
  result = (a + b + c + d) / 4;
  console.log(result);
}



var dados = [5, 28, 36, 30];
var double = dados.map(function (item) {
  console.log(item * 2);
});



let double2 = dados.map(item => item * 2);
console.log(double2)