function initPage2(){

    let btnLancamento = document.querySelector('.btn-lancamento');
    let buttonSelect = document.querySelector('.select')
    
    btnLancamento.addEventListener('click', function(){
        buttonSelect.classList.toggle('open');
    })
     
    var options = document.querySelectorAll('.option-select');
    options.forEach(function(option) {
        option.addEventListener('click', function() {
            selectedValue = this.textContent.trim(); // Obtém o texto da opção selecionada
            buttonSelect.classList.remove('open');
            console.log(selectedValue)
        })
    })
        
}

initPage2()

