//1
const n1 = 5
const n2 = 4
console.log(Math.max(n1, n2))
//2
const idade = 12
switch(idade){
    case (idade < 0):
        console.log("Idade inválida")
        break
    default:
        console.log(`A sua idade convertida em dias é ${idade * 365}`)
        break
}

//3

function nomeDoMes(mes) {
    const meses = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ]

    return meses[mes-1];
}
console.log(nomeDoMes(1))
//4

function inverso(entrada) {
    typeEntry = typeof entrada;//typeof ve qual é o tipo da variavel
    switch (typeEntry) {
        case 'number':
            return -entrada
        case 'boolean':
            return !entrada
        default:
            return `Booleano ou número esperados, mas o parâmetro é do tipo ${typeEntry}`
    }
}

console.log(inverso(false));
console.log(inverso(-5));
console.log(inverso("sla"));

//5

function multiplicar(numero, multiplicador) {
    var resultado = 0;
  
    while (multiplicador > 0) {//enquanto o multiplicador for maior que zero
      resultado += numero;//é adicionado ao resultado o numero
      multiplicador--;//o contador de multiplicador diminui
    }//quando chegar a zero
  
    return resultado;//ele retorna o numero somado tantas vezes como foi indicado na variavel multiplicador
  }
console.log(multiplicar(9, 7))

//6

function repetir(elemento, repeticoes) {
    var arrayResultante = [];
    for (var i = 0; i < repeticoes; i++) {//enquanto o numero de repetições for maior que zero
      arrayResultante.push(elemento);//ira adicionar "repetições" vezes o elemento dentro da arraylist
    }
    return arrayResultante;
  }
console.log(repetir("sla", 4))

//7

function soNumero(array) {
    var numerosFiltrados = [];
    for (var i = 0; i < array.length; i++) {//verifica o tamanho do array e passa dentro de cada elemento
      if (typeof array[i] === "number") {//verifica se o tipo de variavel é numero
        numerosFiltrados.push(array[i]);//coloca o que é numero dentro da arraylist
      }
    }
    return numerosFiltrados;
  }
console.log(soNumero(["sla", 5, 7 ,9, "nao sei"]))
//8

function soma (array){
    var somaArray = 0
    for (var i = 0; i < array.length; i++) {//verifica o tamanho do array e passa dentro de cada elemento
        if (typeof array[i] === "number"){//se o tipo do elemnto for numero
            somaArray += array[i]//soma o elemento com a variavel somaArray
        }
    }
    return somaArray
}
console.log(soma([1,2,3,4,5]))

//9
function segundoMaior(numeros){
    console.log(numeros)
    for (var i = 0; i < numeros.length; i++) {
        if (typeof numeros[i] === "number"){
            numeros.sort()
            numeros.splice(i-1)
            console.log(numeros)
        }
    return numeros[numeros.length-1]
    }
}
console.log(segundoMaior([2,1,5,4,3]))
//10

