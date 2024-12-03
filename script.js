let numeroPedidos = 0;
function  selecionarPrato(pedido){
  let pratoSelecionadoAntes = document.querySelector(".pratos .selecionado");
  if (pratoSelecionadoAntes !== null) {
    pratoSelecionadoAntes.classList.remove("selecionado");
    numeroPedidos--;
  }
  pedido.classList.add("selecionado");
  numeroPedidos++;
  if (numeroPedidos === 3) {
    habilitarPedido();
  }
}

function  selecionarBebida(pedido){
  let bebidaSelecionadaAntes = document.querySelector(".bebidas .selecionado");
  if (bebidaSelecionadaAntes !== null) {
    bebidaSelecionadaAntes.classList.remove("selecionado");
    numeroPedidos--;
  }
  pedido.classList.add("selecionado");
  numeroPedidos++;
  if (numeroPedidos === 3) {
    habilitarPedido();
  }
}

function  selecionarSobremesa(pedido){
  let sobremesaSelecionadaAntes = document.querySelector(".sobremesas .selecionado");
  if (sobremesaSelecionadaAntes !== null) {
    sobremesaSelecionadaAntes.classList.remove("selecionado");
    numeroPedidos--;
  }
  pedido.classList.add("selecionado");
  numeroPedidos++;
  if (numeroPedidos === 3) {
    habilitarPedido();
  }
}

function habilitarPedido (){
  let botaoFecharPedido = document.querySelector(".botaoPedido");
  botaoFecharPedido.innerHTML = "Fechar pedido";
  botaoFecharPedido.classList.add("pedidoFechado");
}
function fecharPedido(botao){
  let botaoAtivo = document.querySelector(".pedidoFechado");
  if (botaoAtivo !== null) {
    let secaoConfirmar = document.querySelector(".confirmar");
    secaoConfirmar.classList.remove("escondido");
    let pedidoPrato = document.querySelector(".pratos .selecionado h1").innerHTML;
    let pedidoBebida = document.querySelector(".bebidas .selecionado h1").innerHTML;
    let pedidoSobremesa = document.querySelector(".sobremesas .selecionado h1").innerHTML;
    let precoPedidoPrato = Number(document.querySelector(".pratos .selecionado h2").innerHTML);
    let precoPedidoBebida = Number(document.querySelector(".bebidas .selecionado h2").innerHTML);
    let precoPedidoSobremesa = Number(document.querySelector(".sobremesas .selecionado h2").innerHTML);
    let prato =  document.querySelector(".pedido .prato");
    let bebida =  document.querySelector(".pedido .bebida");
    let sobremesa =  document.querySelector(".pedido .sobremesa");
    prato.innerHTML = `${pedidoPrato}: ${precoPedidoPrato.toFixed(2)}`;
    bebida.innerHTML = `${pedidoBebida}: ${precoPedidoBebida.toFixed(2)}`;
    sobremesa.innerHTML = `${pedidoSobremesa}: ${precoPedidoSobremesa.toFixed(2)}`;
     
    // somar o total 

    let ptotal = document.querySelector(".total");
    let total = Number(precoPedidoPrato.toFixed(2)) + Number(precoPedidoBebida.toFixed(2)) + Number(precoPedidoSobremesa.toFixed(2));
    ptotal.innerHTML = `TOTAL: ${total.toFixed(2)}`;

  }
}

function cancelar(){
  let secaoConfirmar = document.querySelector(".confirmar");
    secaoConfirmar.classList.add("escondido");
}
function pedir (){
  let pedidoPrato = document.querySelector(".pratos .selecionado h1").innerHTML;
  let pedidoBebida = document.querySelector(".bebidas .selecionado h1").innerHTML;
  let pedidoSobremesa = document.querySelector(".sobremesas .selecionado h1").innerHTML;
  let precoPedidoPrato = Number(document.querySelector(".pratos .selecionado h2").innerHTML);
  let precoPedidoBebida = Number(document.querySelector(".bebidas .selecionado h2").innerHTML);
  let precoPedidoSobremesa = Number(document.querySelector(".sobremesas .selecionado h2").innerHTML);
  let total = Number(precoPedidoPrato.toFixed(2)) + Number(precoPedidoBebida.toFixed(2)) + Number(precoPedidoSobremesa.toFixed(2));
  let mensagem = `Olá, gostaria de fazer o pedido:
   - Prato: ${pedidoPrato}
   - Bebida: ${pedidoBebida}
   - Sobremesa: ${pedidoSobremesa}
Total: ${total.toFixed(2)}`;
  console.log(encodeURIComponent(mensagem));
   let link = document.querySelector(".pedido a");
  link.href = `https://wa.me/5511960386578?text=${encodeURIComponent(mensagem)}`;
   
}
