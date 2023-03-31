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
    let link = document.querySelector("a");
    botao.innerHTML = "Fechar Pedido";
    botao.classList.add("botaoLigado");
    botao.disabled = false;
    link.disabled = false;
}

function fechaPedido(){
    const prato = document.querySelector(".prato .selecionado");
    const bebida = document.querySelector(".bebida .selecionado");
    const sobremesa = document.querySelector(".sobremesa .selecionado");
    const precoPrato = (prato.querySelector(".preco").innerHTML).replace("R$ ", "").replace(",", ".");
    const precoBebida = (bebida.querySelector(".preco").innerHTML).replace("R$ ", "").replace(",", ".");
    const precoSobremesa = (sobremesa.querySelector(".preco").innerHTML).replace("R$ ", "").replace(",", ".");
    const total = (Number(precoBebida) + Number(precoPrato) + Number(precoSobremesa)).toFixed(2);
    const mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato.querySelector("p").innerHTML}\n- Bebida: ${bebida.querySelector("p").innerHTML}\n- Sobremesa: ${sobremesa.querySelector("p").innerHTML}\nTotal: R$ ${total.replace(".",",")}`;  
    window.open("https://wa.me/5519992926745?text=" + encodeURIComponent(mensagem));
}