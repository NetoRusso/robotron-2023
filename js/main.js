const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')
const braco = document.querySelector('#braco')
const controle = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica')
const pintura = document.querySelectorAll('.cor__robo')

const pecas = {
    "bracos": {"forca": 29, "poder": 35, "energia": -21, "velocidade": -5},
    "blindagem": {"forca": 41, "poder": 20, "energia": 0, "velocidade": -20},
    "nucleos":{"forca": 0, "poder": 7, "energia": 48, "velocidade": -24},
    "pernas":{"forca": 27, "poder": 21, "energia": -32, "velocidade": 42},
    "foguetes":{"forca": 0, "poder": 28, "energia": 0, "velocidade": -2}
    }

pintura.forEach( (e) => {
    e.addEventListener('click', () => {
        var p = e.attributes.cor.value
        var i = document.querySelector('.robo')
        if (p === "branco"){
             i.src = "img/Robotron 2000 - Branco/robotron.png"
        } else if (p === "amarelo") {
             i.src = "img/Robotron 2000 - Amarelo/robotron.png"
        } else if (p === "azul") {
             i.src = "img/Robotron 2000 - Azul/robotron.png"
        } else if (p === "preto") {
             i.src = "img/Robotron 2000 - Preto/robotron.png"
        } else if (p === "rosa") {
             i.src = "img/Robotron 2000 - Rosa/robotron.png"
        }else if (p === "vermelho") {
             i.src = "img/Robotron 2000 - Vermelho/robotron.png"
        }
    })
})

controle.forEach( (e) => {
    e.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.controle, evento.target.dataset.peca)

    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]')

    if(operacao === '-') {
        peca.value = (parseInt(peca.value) - 1).toLocaleString('pt-BR', { minimumIntegerDigits: 2 }).padStart(2, '0');
    } else {
        peca.value = (parseInt(peca.value) + 1).toLocaleString('pt-BR', { minimumIntegerDigits: 2 }).padStart(2, '0');
    }
}

function atualizaEstatisticas (controle, peca) {
    if(controle === "+"){
    estatisticas.forEach( (e) => {
        e.textContent =parseInt(e.textContent) + pecas[peca][e.dataset.estatistica]
    })} else {
        estatisticas.forEach( (e) => {
            e.textContent =parseInt(e.textContent) - pecas[peca][e.dataset.estatistica]
        })}
}




/*--------------------------------------------------------------------------------------------------------*/

const menu = document.querySelector('.menu')
menu.addEventListener('click', ()=>{
    menu.classList.toggle("change");
})

