// DOM são os objetos que você conhece do HTML (links, ids, etc)
// BOM são os objetos do Navegador (History, Navigator, Location, até o próprio DOM é um objeto do Navegador).


// Retorna um elemento com a id da tag fornecido
// let elemento = document.getElementById(id)


// Retorna um HTMLCollection de elementos com a classe da tag fornecido 
// let elemento = document.getElementsByClassName(teste)


// Retorna um HTMLCollection de elementos com o nome da tag fornecido
// let elemento = document.getElementsByTagName('p')


// Retorna o primeiro elemento que corresponda ao seletor
// let elemento = documento.querySelector('.class')


// Retorna um HTMLCollection de elementos que corresponda ao seletor
// let elemento = documento.querySelectorAll('.class')


// Retorna o conteudo de um elemento
// let content = element.innerHTML


// Cria o elemento HTML especificado 
// let div = document.createElement("div")


// Adiciona um nó ao final da lista de filhos de um nó pai especificado
// let p = document.createElement("p")
// document.body.appendChild(p)


// Remove um nó filho do DOM
// let filhoRemovido = elemento.removeChild(filho)


// Retorna uma coleção viva de nós filhos de um dado elemento
// let filhos= elemento.childNodes


// Retorna o nome do atual Nodecomo uma string
// let str = element.nodeName


// Distingue diferentes tipos de nós uns dos outros, como elements, text e comments.
// let type = element.nodeType


// Retorna ou define o valor do nó atual
// str = element.nodeValue
// element.nodeValue = str


// Retorna o nó (node) pai
// parentNode = element.parentNode


// Retorna o valor de um argumento específico do elemento
// var atributo = element.getAttribute(nomeDoAtributo)


// Adiciona um novo atributo ou modifica o valor de um atributo existente num elemento específico
// element.setAttribute(name, value)


// Remove um atributo de um elemento específico
// element.removeAttribute(attrName)


// Representa o conteúdo de texto de um nó e dos seus descendentes
// let text = element.textContent
// element.textContent = text


// Retorna uma coleção HTMLCollection dos elementos filhos do nó
// var filhos = element.children 


// Insere um nó antes do nó de referência como um filho de um nó pai especificado
// var elementoInserido = elementoPai.insertBefore(novoElemento, elementoDeReferencia)


// Substitui o elemento filho especificado por outro.
// replacedNode = parentNode.replaceChild(newChild, oldChild)