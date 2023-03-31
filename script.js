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
}