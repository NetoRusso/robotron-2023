const itemTabela = document.querySelectorAll('li');

const lista = [];

itemTabela.forEach( (item) => {
    const texto = item.innerText;
    item.addEventListener('click', inserirClassSelected)
    lista.push(texto);
})

console.log(lista)
let novaLista = lista.slice(0,1).concat(lista.slice(2));
console.log(novaLista + ' sem o item de índice 1 o Vermelho')

const textoLista = document.querySelector('#texto__lista')
const textoResp = document.querySelector('.texto__2')

function trocarLista(item) {
    console.log(item)
    switch (item) {
        case 'Laranja':
            textoLista.innerText = "'Vermelho', 'Branco', 'Amarelo', 'Rosa'"
            textoResp.innerHTML = "<span class='ac'>lista</span><span class='am'>.splice</span><span class='ae'>(0,1)</span>; tchau <span class='la'>Laranja</span>!"
          break;
        case 'Vermelho':
            textoLista.innerText = "'Laranja', 'Branco', 'Amarelo', 'Rosa'"
            textoResp.innerHTML = "<span class='ac'>lista</span><span class='am'>.splice</span><span class='ae'>(1,1)</span>; tchau <span class='rd'>Vermelho</span>!"
            break;
        case 'Branco':
            textoLista.innerText = "'Laranja', 'Vermelho', 'Amarelo', 'Rosa'"
            textoResp.innerHTML = "<span class='ac'>lista</span><span class='am'>.splice</span><span class='ae'>(2,1)</span>; tchau Branco!"
            break;
        case 'Amarelo':
            textoLista.innerText = "'Laranja', 'Vermelho', 'Branco', 'Rosa'"
            textoResp.innerHTML = "<span class='ac'>lista</span><span class='am'>.splice</span><span class='ae'>(3,1)</span>; tchau <span class='am'>Amarelo</span>!"
            break;
        case 'Rosa':
            textoLista.innerText = "'Laranja', 'Vermelho', 'Branco', 'Amarelo'"
            textoResp.innerHTML = "<span class='ac'>lista</span><span class='am'>.splice</span><span class='ae'>(4,1)</span>; tchau <span class='rz'>Rosa</span>!"
            break;       
    }
}

function inserirClassSelected(event) {
    const elementoS = document.querySelector('.selected');
    const name = event.target.innerText
    if(elementoS) {
    elementoS.classList.remove('selected');
    }
     event.target.classList.add('selected');
     trocarLista(name)
}

const butaoReseta = document.querySelector('.reset');

butaoReseta.addEventListener('click', () => {
    document.querySelector('.selected').classList.remove('selected')
    textoLista.innerText = "'Laranja', 'Vermelho', 'Branco', 'Amarelo', 'Rosa'"
            textoResp.innerText = ""
})

/*--------------------------------------------------------------------------------------------------------*/

const menu = document.querySelector('.menu')
menu.addEventListener('click', ()=>{
    menu.classList.toggle("change");
})