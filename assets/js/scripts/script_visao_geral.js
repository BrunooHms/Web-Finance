const liDespesa = document.querySelector('#liDespesa')
const liReceita = document.querySelector('#liReceita')

const btnDespesaModal = document.querySelector('#botaoDespesa')
const btnReceitaModal = document.querySelector('#botaoReceita')
const horarioDoDia = document.querySelector('#horaDoDia')
const iconeSaudacao = document.querySelector('.icone-saudacao')

btnDespesaModal.addEventListener('click', () => {
    Concluir_des()
})
btnReceitaModal.addEventListener('click', () => {
    Concluir_rec()
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
