/*Chegou a hora de colocar a mão na massa! No desafio desta aula você irá criar uma função anônima que retorne a frase “Fui clicado”.
    Esta função será aplicada em conjunto de um evento de clique.
    Você pode utilizar o código base HTML e CSS disponibilizados abaixo, criar e aplicar o código JavaScript nele, 
    ou também fique à vontade para criar o layout à sua maneira:
                            Como fazer:
                                Utilize os códigos HTML e CSS disponibilizados;
                                Crie o arquivo de código JS;
                                Referencie o arquivo JS no HTML.*/

const botao = document.querySelector('#calcular');
var titulo = document.getElementById('titulo');

botao.addEventListener('click', (e) => {
   if (titulo.innerText === 'Parabéns Você clicou!') {
        titulo.innerText = 'Manipulando elementos no DOM'
   }else {
    titulo.innerText = 'Parabéns Você clicou!'}});
   
    /*--------------------------------------------------------------------------------------------------------*/

const menu = document.querySelector('.menu')

menu.addEventListener('click', ()=>{
    menu.classList.toggle("change");
});
