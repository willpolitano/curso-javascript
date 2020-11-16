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


//Numeros primos

    let limite = 5;
    exibirNumerosPrimos(15);
    function exibirPropriedades(limite) {
        for ( let numero = 1; numero <= limite; numero++ ) {
            let ehPrimo = true;

            for ( let divisor = 2; divisor < numero; divisor++ ) {
                if ( numero % divisor === 0 ) {
                    ehPrimo = false;
                    break;
                } 
            }

            if ( ehPrimo ) console.log(numero);
        }
    }


