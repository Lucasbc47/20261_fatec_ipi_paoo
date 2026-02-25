

//comparação por igualdade
//Java: ==, Python: ==
//Javascript: == ou ===(usamos apenas esse)
//null e undefined
//exemplos:
//a = null
//b = undefined
// lista = []
// lista2 = lista
// console.log(lista2 === lista)
// console.log([] == [])
// console.log(false == [])
// console.log(null == undefined): true
// console.log(null == null): true
// console.log(1 === [1]): false
//console.log(1 == [1]): true
// console.log(true == 1): true
// console.log(1 === '1'): false
// console.log(1 == '1'): true
// console.log(1 === 1): true
// console.log(1 == 1): true

//coerção explícita
// const n1 = 2
// const n2 = '3'
// const n3 = n1 + Number(n2)
// console.log(`${n1} + ${n2} = ${n3}`)


//coerção implicita
// const n1 = 2
// const n2 = '3'
// const n3 = n1 + n2
// console.log(`${n1} + ${n2} = ${n3}`)

//tipos
//js é dinamicamente tipa

// let a = 2
// console.log(typeof(a))
// a = true
// console.log(typeof(a))

// s  = "abc"
// String s = "abc";

// listaDeLista = [[], [], [], 2]

// List <List <String>> lista = new ArrayList <List<String>>();
//declaração de variáveis
//const, let e var
//içamento(hoisting)
//null undefined
// var idade = 18
// console.log(`Oi, ${nome}.`)
// if(idade >= 18){
//   let nome = 'Maria'
//   console.log(`Parabéns, ${nome}. Você pode dirigir.`)
// }
// console.log("Até mais, " + nome + '.')
// String linguagem = "Javascript";
// String linguagem = "Java";
// var linguagem = 'Javascript'
// console.log(`Aprendendo ${linguagem}`)
// var linguagem = 'Java'
// console.log('Aprendendo ' + linguagem)
// console.log('Antes do for')
// for (const i = 0; i < 10; i = i + 1){
//   console.log('for com const...')
// }
// console.log('Depois do for')

// let nome = 'Maria'
// console.log(nome)
// nome = `Meu nome é ${nome}.`
// console.log(nome)

// const nome = 'José'
// console.log(nome)
// nome = 'José Silva'
// console.log(nome)

// console.log('Hello, JS!')