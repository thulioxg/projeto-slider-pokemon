
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll (".cartao");
let cartaoAtual = 0;

function esconderCataoSelecionado () {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado")
}

function mostrarCartao () {cartoes [cartaoAtual].classList.add("selecionado")
}


 btnAvancar.addEventListener("click", function() {

    if (cartaoAtual === cartoes.length - 1) return
      
    cartaoAtual++;

    mostrarCartao ()

    esconderCataoSelecionado()

    });

btnVoltar.addEventListener("click", function() {

     if (cartaoAtual === 0) return
    
     esconderCataoSelecionado()

     cartaoAtual--;

     mostrarCartao ()

     
    
    });



    
   
