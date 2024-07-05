const liDespesa = document.querySelector('#liDespesa')
const liReceita = document.querySelector('#liReceita')

const btnDespesaModal = document.querySelector('#botaoDespesa')
const btnReceitaModal = document.querySelector('#botaoReceita')
const horarioDoDia = document.querySelector('#horaDoDia')
const iconeSaudacao = document.querySelector('.icone-saudacao')
const botaoSenha = document.querySelector('.botao-saldo')

const valorReceitaMensal = document.querySelector('#valorReceitaMensal')
const receitaEscondida = document.querySelector('#receitaEscondida')

const valorDespesaMensal = document.querySelector('#valorDespesaMensal')
const despesaEscondida = document.querySelector('#despesaEscondida')

const valorVisivel = document.querySelector('#saldoVisivel')
const valorEscondido = document.querySelector('#saldoEscondido')



btnDespesaModal.addEventListener('click', () => {
    Concluir_des()
})
btnReceitaModal.addEventListener('click', () => {
    Concluir_rec()
})

botaoSenha.addEventListener('click', function(){
    const img = document.querySelector(".icone-senha")
    const cadeadoAberto = '/assets/img/cadeado-aberto.png'
    const cadeadoFechado = '/assets/img/cadeado-fechado.png'

    img.src = img.src.includes(cadeadoAberto) ? cadeadoFechado : cadeadoAberto;

})

botaoSenha.addEventListener('click', function(){

   if (valorReceitaMensal.classList.contains('invisivel')){
        valorReceitaMensal.classList.remove('invisivel')
        receitaEscondida.classList.add('invisivel')
   } else {
        valorReceitaMensal.classList.add('invisivel')
        receitaEscondida.classList.remove('invisivel')
   }


   if (valorDespesaMensal.classList.contains('invisivel')){
        valorDespesaMensal.classList.remove('invisivel')
        despesaEscondida.classList.add('invisivel')
   } else {
    valorDespesaMensal.classList.add('invisivel')
    despesaEscondida.classList.remove('invisivel')
   }

   

   
   if (valorVisivel.style.visibility === 'hidden') {
    valorVisivel.style.visibility = 'visible';
    valorEscondido.style.visibility = 'hidden';
} else {
    valorVisivel.style.visibility = 'hidden';
    valorEscondido.style.visibility = 'visible';
}
    

    
})




function Concluir_des() {
    $('#modalDespesa').modal('hide');
}

function Concluir_rec() {
    $('#modalReceita').modal('hide');
}


//----------Função que captura a hora do dia e seleciona o icone de acordo-----------------
const data = new Date
const horario = data.getHours();
function saudacao(hora) {
    if(hora >= 0 && hora <= 11){
        return 'Bom dia'
    }else if(hora >= 12 && hora <= 17) {
        return 'Boa tarde'
    }else if(hora >= 18 && hora <= 23){
        return 'Boa noite'}
}
horarioDoDia.innerHTML = `${saudacao(horario)},`
if(saudacao(horario) === 'Boa noite') {
    iconeSaudacao.innerHTML = 'BH <img src="/assets/img/icone-noite.png"> '
} else if (saudacao(horario) === 'Bom dia') {
    iconeSaudacao.innerHTML = 'BH <img src="/assets/img/icone-dia.png"> '
} else if (saudacao(horario) === 'Boa tarde') {
    iconeSaudacao.innerHTML = 'BH <img src="/assets/img/icone-tarde.png"> '
}
//-------------------------------------------------------
