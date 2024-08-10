function initPage2(){

    let btnLancamento = document.querySelector('.btn-lancamento');
    let buttonSelect = document.querySelector('.select')

    const btnDespesaModal = document.querySelector('#botaoDespesaPag2');
    const btnReceitaModal = document.querySelector('#botaoReceitaPag2');

    const btnProximo = document.querySelector('#btnProximo')
    const btnAnterior = document.querySelector('#btnAnterior')
    const mesCalendario = document.querySelector('.mes-do-ano')
    const anoCalendario = document.querySelector('#anoCalendario')
    const mesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
                    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    


    
    data = new Date 
    let mesAtual = data.getMonth()
    let anoAtual = data.getFullYear()

    mesCalendario.innerHTML = `${mesDoAno[mesAtual]} ${anoAtual}`

    

    btnProximo.addEventListener('click', function(){
        
       mesAtual += 1
        
        if(mesAtual >= 12){
            mesAtual = 0
        }
        
        avancaMes = mesDoAno[mesAtual]

        if(mesDoAno[mesAtual] === 'Janeiro'){
            anoAtual += 1
        }
        
        mesCalendario.innerHTML = `${avancaMes} ${anoAtual}`


    })

    console.log(mesAtual)

    btnAnterior.addEventListener('click', function(){
        mesAtual -= 1

        if(mesAtual < 0){
            mesAtual = 11
        }

        let retroceMes = mesDoAno[mesAtual]

        if(mesDoAno[mesAtual] === 'Dezembro'){
            anoAtual -= 1
        }

        mesCalendario.innerHTML = `${retroceMes} ${anoAtual}`

    
    })

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

