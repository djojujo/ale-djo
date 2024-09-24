function criacartao ( categoria, pergunta, resposta){
    let container = document.getElementById('container');
    let cartao = document.criateElement('article');
    cartao.classname = 'cartao';
    cartao.innerHTML = 
    `<div class="cartao-conteudo">
    <h3>${categoria}</h3>
    <div class="catao-pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao-respostas">
            <p>${respostas}</p>
        </div>

</div>
    `
    container.appendChild(cartao);
}