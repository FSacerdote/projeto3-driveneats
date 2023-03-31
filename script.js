function seleciona(elemento, pai){
    const selecionadoAnteriormente = document.querySelector(pai + " .selecionado");
    if(selecionadoAnteriormente !== null){
        selecionadoAnteriormente.classList.remove("selecionado")
        let icone = selecionadoAnteriormente.querySelector("ion-icon");
        icone.classList.remove("aparece");        
    }
    elemento.classList.add("selecionado")
    icone = elemento.querySelector("ion-icon");
    icone.classList.add("aparece")
    if(document.querySelector(".prato .selecionado") !== null && document.querySelector(".sobremesa .selecionado") !== null && document.querySelector(".bebida .selecionado") !== null){
        ligaBotao();
    }
}

function ligaBotao(){
    let botao = document.querySelector("button")
    botao.innerHTML = "Fechar Pedido";
    botao.classList.add("botaoLigado");
    botao.disabled = false;
}