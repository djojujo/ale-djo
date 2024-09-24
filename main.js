function criacartao ( categoria, pergunta, resposta){
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.classname = 'cartao';
    cartao.innerHTML = 
    `<div class="cartao-conteudo">
    <h3>${categoria}</h3>
    <div class="catao-pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao-respostas">
            <p>${resposta}</p>
        </div>
</div>
    `
    container.appendChild(cartao);
}