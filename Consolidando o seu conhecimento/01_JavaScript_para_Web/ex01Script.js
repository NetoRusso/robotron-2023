const botao = document.getElementById('frase_button');

document.addEventListener("keypress", function(e){
    if(e.key === 'Enter'){
        botao.onclick();
    }
})

botao.onclick = function (){

    let input = document.getElementById('frase_entrada').value;

    if(input != ''){
        document.getElementById('texto').innerText = input
        
        console.log(input);
    
        document.getElementById('frase_entrada').value = "";

    } else {
        document.getElementById('texto').innerText = 'O inverno está chegando'

    }
  
}

/*--------------------------------------------------------------------------------------------------------*/

const menu = document.querySelector('.menu')
menu.addEventListener('click', ()=>{
    menu.classList.toggle("change");
})

