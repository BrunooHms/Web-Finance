function initPage2(){

    let btnLancamento = document.querySelector('.btn-lancamento');
    let buttonSelect = document.querySelector('.select')

    const btnDespesaModal = document.querySelector('#botaoDespesaPag2');
    const btnReceitaModal = document.querySelector('#botaoReceitaPag2');

    btnDespesaModal.addEventListener('click', () => {
        Concluir_des();
    });
    btnReceitaModal.addEventListener('click', () => {
        Concluir_rec();
    });

    
    function Concluir_des() {
        $('#modalDespesa').modal('hide');
    }

    function Concluir_rec() {
        $('#modalReceita').modal('hide');
    }
    
    btnLancamento.addEventListener('click', function(){
        buttonSelect.classList.toggle('open');
    })
     
    var options = document.querySelectorAll('.option-select');
    options.forEach(function(option) {
        option.addEventListener('click', function() {
            selectedValue = this.textContent.trim(); 
            buttonSelect.classList.remove('open');
            
            
        })
    })
        
}

initPage2()

