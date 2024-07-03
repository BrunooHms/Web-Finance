const liDespesa = document.querySelector('#liDespesa')
const liReceita = document.querySelector('#liReceita')

const btnDespesaModal = document.querySelector('#botaoDespesa')
const btnReceitaModal = document.querySelector('#botaoReceita')

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



