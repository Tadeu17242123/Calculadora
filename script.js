var operaçao = prompt ("Digite 1 para divisão, 2 para multiplicação, 3 para soma, 4 para subtração, 5 para porcentagem")
var primeiroValor = parseInt(prompt('digite o primeiro valor:'))
var segundoValor = parseInt(prompt('digite o segundo valor:'))
var resultado = primeiroValor / segundoValor

if(operaçao == 1){
  var resultado = primeiroValor / segundoValor
  document.write ("<h2>" + primeiroValor +  " / " + segundoValor +  " = " +  resultado + "</h2>")
  } else if (operaçao == 2){
    var resultado = primeiroValor * segundoValor
  document.write ("<h2>" + primeiroValor +  " * " + segundoValor +  " = " +  resultado + "</h2>")
 } else if (operaçao == 3){
    var resultado = primeiroValor + segundoValor
  document.write ("<h2>" + primeiroValor +  " + " + segundoValor +  " = " +  resultado + "</h2>")
 } else if (operaçao == 4){
    var resultado = primeiroValor - segundoValor
  document.write ("<h2>" + primeiroValor +  " - " + segundoValor +  " = " +  resultado + "</h2>")
    } else if (operaçao == 5){
    var resultado = primeiroValor * segundoValor / 100
  document.write ("<h2>" + primeiroValor +  " % " + segundoValor +  " = " +  resultado + "</h2>")
    } else if (operaçao == 6){
    var resultado = primeiroValor ** segundoValor
  document.write ("<h2>" + primeiroValor +  " % " + segundoValor +  " = " +  resultado + "</h2>")
    } 
     else {
       document.write ("<h2> Opção inválida </h2>")
     }
