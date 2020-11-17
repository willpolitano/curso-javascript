// Variaveis 
//     * Não pode iniciar com numero
//     * Não pode conter espaços
//     * Usar camelCase
//     * É case sensitive
//     ex : let idade,nomeCompleto,cargo;


// Constantes 
//     * Não pode alterar o valor definido
//     ex : const valorConstante = 20;


// Tipos de variaveis
//     * String
//     * Number
//     * Boolean
//     * Array
//     * Object
//     * Function
//     ex : 
//         let nome = 'Will'; String literal
//         let idade = 25; Number literal
//         let aprovado = true; Boolean
//         let sobrenome; Undefined
//         let cor = null; Redifinir um valor


// Tipagem dinamica
//     * Js possui tipagem dinamica, ou seja, 
//     não é necessário declarar o tipo de variavel.
//     * É possivel acessar o tipo de variaver 
//     por meio do typeof
//     ex : 
//     let teste = 'will';
//     teste = 123;
//     teste = [];
//     typeof teste = array


// Objetos
//     ex : 
//     let pessoa = {
//         nome : 'Will',
//         idade : 21
//     };
//     console.log(pessoa.nome);


// Arrays
//     ex : 
//     let numeros = [26,true,'jhonantan',17];
//     console.log(numeros.lenght)


// Function
//     Verbo + substantivo
//     ex : 
//     function resetaCor(){};


// Operadores 
//     * Aritiméticos ( + - * / ** ++ -- )
//     * Atribuição ( = += -= )
//     * Comparação ( == === )
//     * Logicos ( && and || or !)
//     * Bitwise ( )


// If
//     ex :
//     let hora = 10;
//     if ( hora > 6 && hora < 12 ) {
//         console.log('Bom dia!');
//     } else if ( hora > 12 && hora < 18 ) {
//         console.log('Boa tarde!');
//     } else {
//         console.log('Boa noite!');
//     }


// Switch
//     ex :
//     let permissao = 'admin';
//     switch(permissao) {
//         case 'admin' : 
//         console.log('permissões admin');
//         break;
//         case 'user' : 
//         console.log('permissões user');
//         break;
//         default :
//         console.log('permissões default');
//     }


// Laços
//     * for
//     * while
//     * do...while
//     * foreach 


// FizzBuzz
//     ex : 
//     const resultado = fizzBuzz(true);
//     function fizzBuzz(entrada) {
//         if ( typeof !== 'number' )
//             return 'Não é um numero';
//         if ( entrada % 3 === 0 )
//             return 'Fizz';
//         if ( entrada % 5 === 0 )
//             return 'Buzz';
//         if ( entrada % 3 === 0 && entrada % 5 === 0 ) 
//             return 'FizzBuzz';
//         return entrada; 
//     }


// Encontrar String
//     const filme = {
//         titulo : 'Vingadores',
//         ano : 2018,
//         diretor : 'Robin',
//         personagem : 'Thor'
//     }
//     exibirPropriedades(filme);
//     function exibirPropriedades(obj) {
//         for (prop in obj)
//             if ( typeof obj[prop] === 'string' )
//                 console.log(prop,obj[prop])
//     }


// Numeros primos
//     let limite = 5;
//     exibirNumerosPrimos(15);
//     function exibirPropriedades(limite) {
//         for ( let numero = 1; numero <= limite; numero++ ) {
//             let ehPrimo = true;
//             for ( let divisor = 2; divisor < numero; divisor++ ) {
//                 if ( numero % divisor === 0 ) {
//                     ehPrimo = false;
//                     break;
//                 } 
//             }
//             if ( ehPrimo ) console.log(numero);
//         }
//     }


// Template literal   
//     const nome = 'Will';
//     const texto = `Olá ${nome}`;


// Date
//     const data = new Date();
//     const data1 = new Data('March 06 2019 09:30');
//     const data2 = new Data(2019,03,06,9,30);
//     date2.getDate();
//     date2.setFullYear(2030);


// let  endereco = {
//     rua : 'a',
//     cidade : 'c',
//     cep : 'e'
// };
// function exibirEndereco(endereco) {
//     for (let chave in endereco)
//         console.log(chave, endereco[chave]);
// }
// exibirEndereco(endereco);



// Map
//     Retorna um array baseado em outro array no mesmo tamanho
//     ex: 
//     const numeros = [3,4,7,1,9,7];
//     function dobro(num) {
//         return num * 2
//     }

//     const resultado = numeros.map(dobro)
//     console.log(resultado)

//     const array = [
//         { nome : '...', preco : 23.69, desconto : 0.2 },
//         { nome : '...', preco : 236.59, desconto : 0.8 },
//         { nome : '...', preco : 789.36, desconto : 0.1 },
//         { nome : '...', preco : 25.12, desconto : 0.5 },
//     ]

//     function darDesconto(produto) {
//         return produto.preco * (1 - produto.desconto)
//     }

//     const resultado = array.map(darDesconto);
//     console.log(resultado)


// Filter
//     retorna um novo array a partir de um filtro em outro array

//     const notas = [7.1, 8.3, 6.3, 7.7, 9.1, 5.2]

//     function aprovar(nota) {
//         return nota > 7
//     }

//     let resultado = notas.filter(aprovar)
//     console.log(resultado)


// Reduce
//     Ele iterará por cada elemento dessa lista com o objetivo de ao final gerar um único valor
//     const numeros = [1,2,3,4,5]

//     function somar (a, b) {
//         return a + b 
//     }

//     console.log(numeros.reduce(somar))
