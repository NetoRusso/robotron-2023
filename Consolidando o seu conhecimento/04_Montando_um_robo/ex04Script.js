/*Apenas com teoria não é possível aprender código, então, vamos exercitar a utilização do data-attribute em funções 
neste desafio. Temos uma lista de cores disponibilizada no código abaixo. Você irá criar um botão que, ao ser clicado, 
faz aparecer esta lista, e também criará um segundo botão que, ao ser clicado, faz com que a lista de cores volte a sumir.

Você pode chegar ao mesmo resultado de diferentes formas. Então, fique à vontade para compartilhar a sua solução para este 
desafio no Fórum!

                                            Como fazer:

                                            Utilize os códigos HTML e CSS disponibilizados;
                                            Crie o arquivo de código JS;
                                            Referencie o arquivo JS no HTML.
*/



const exterioresB = document.querySelector('#tinta__exterior');
const interioresB = document.querySelector('#tinta__interior');
const todasB = document.querySelector('#tinta__toda');
const zerarB = document.querySelector('#tinta__zera');

const itens = document.querySelectorAll('.item');
const exteriores = document.querySelectorAll('[tipo = "exterior"]');
const interiores = document.querySelectorAll('[tipo = "interior"]');

console.log(exteriores, interiores)
itens.forEach((e) =>{
    e.addEventListener('click', ()=>{
        console.log(typeof e.attributes.tipo.nodeValue)
        e.setAttribute('data-data', 'vai')
    })
})

function para(excluir){
    
    itens.forEach((e) => {
        const v = e.attributes.tipo.nodeValue
        if(v === excluir) {
            e.setAttribute('data-data', 'vai');
        } else {
            e.removeAttribute('data-data', 'vai');
        }
    })
}

zerarB.addEventListener('click', () => {
    itens.forEach((e) => e.setAttribute('data-data', 'vai'))
})

todasB.addEventListener('click', () => {
    itens.forEach((e) => e.removeAttribute('data-data', 'vai'))
})

interioresB.addEventListener('click', () =>{
    para('exterior')
})
exterioresB.addEventListener('click', () =>{
    para('interior')
})

const tipo = document.querySelectorAll('[tipo = "exterior"]')




/*--------------------------------------------------------------------------------------------------------*/

const menu = document.querySelector('.menu')
menu.addEventListener('click', ()=>{
    menu.classList.toggle("change");
})
