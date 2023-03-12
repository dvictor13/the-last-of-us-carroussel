/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionada
    - passo 5 - esconder a imagem anterior
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/


//1
const botoesCarrossel = document.querySelectorAll('.botao')

//6
const imagens = document.querySelectorAll('.imagem')
//2

//método repetitivo
// const botao1 = document.getElementById('botao1');
// botao1.addEventListener('click', ()=>{
//     console.log('clicounobotao1')
// })


botoesCarrossel.forEach((botao, indice)=>{
    botao.addEventListener('click',()=>{
        //3
        desativarFuncaoSelecionada();

        //4
        selecionarBotaoCarrossel(botao);

        //5
        EsconderImagemAtiva();
        
        //6
        mostrarImagemDeFundo(indice);
    })
})





//passo 3-refactor
function desativarFuncaoSelecionada() {
    const botaoSelect = document.querySelector('.select');
    botaoSelect.classList.remove('select');
}

//4-refactor
function selecionarBotaoCarrossel(botao) {
    botao.classList.add('select');
}

//5-refactor
function EsconderImagemAtiva() {
    const imagemActive = document.querySelector('.active');
    imagemActive.classList.remove('active');
}

//6-reactor
function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('active');
}
