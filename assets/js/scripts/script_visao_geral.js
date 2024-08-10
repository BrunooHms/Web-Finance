function initPageScript() {
    const btnDespesaModal = document.querySelector('#botaoDespesa');
    const btnReceitaModal = document.querySelector('#botaoReceita');
    const horarioDoDia = document.querySelector('#horaDoDia');
    const iconeSaudacao = document.querySelector('.icone-saudacao');
    const botaoSenha = document.querySelector('.botao-saldo');

    const valorReceitaMensal = document.querySelector('#valorReceitaMensal');
    const receitaEscondida = document.querySelector('#receitaEscondida');

    const valorDespesaMensal = document.querySelector('#valorDespesaMensal');
    const despesaEscondida = document.querySelector('#despesaEscondida');

    const divSaldoGeral = document.querySelector(".saldo-geral-valor");
    const valorVisivel = document.querySelector('#saldoVisivel');
    const valorEscondido = document.querySelector('#saldoEscondido');

    const descricaoDes = document.querySelector('#descricaoDes')
    const valorDes = document.querySelector('#valorDes')
    const dataDes = document.querySelector('#dataDes')

    const descricaoRec = document.querySelector('#descricaoRec')
    const valorRec = document.querySelector('#valorRec')
    const dataRec = document.querySelector('#dataRec')

    let totalSaldoGeralcontrole = 0
    let totalSaldoGeral = 0
    let totalDespesa;
    let totalReceita;

    

    function ConteudoModais(descricao, valor, data){
        this.descricao = descricao
        this.valor = valor
        this.data = data
    }
    const arrayDespesa = []
    const arrayReceita = []
    
    

    //Eventos
    btnDespesaModal.addEventListener('click', () => {
        const despesa = new ConteudoModais(descricaoDes.value , valorDes.value, dataDes.value)


        let valorDespesa = converteValor(valorDes)


        arrayDespesa.push(valorDespesa)

        
        totalDespesa = somaArray(arrayDespesa)

        valorDespesaMensal.innerHTML = `R$ ${formatador.format(totalDespesa)}`

        totalSaldoGeral = totalSaldoGeralcontrole - valorDespesa

        console.log(totalSaldoGeral)

        valorVisivel.innerHTML = `${formatador.format(totalSaldoGeral)}`

        console.log(despesa)
        
        limpaModal(descricaoDes, valorDes, dataDes)
        mudaCorSaldo(totalSaldoGeral)
        concluirModal('#modalDespesa');
    });

    
    
    btnReceitaModal.addEventListener('click', () => {
        const receita = new ConteudoModais(descricaoRec.value , valorRec.value, dataRec.value)

        let valorReceita = converteValor(valorRec)

        arrayReceita.push(valorReceita)

        
        totalReceita = somaArray(arrayReceita)

        valorReceitaMensal.innerHTML = `R$ ${formatador.format(totalReceita)}`

        totalSaldoGeralcontrole  = totalSaldoGeral + valorReceita

        console.log(totalSaldoGeralcontrole)

        valorVisivel.innerHTML = `${formatador.format(totalSaldoGeralcontrole)}`

        limpaModal(descricaoRec, valorRec, dataRec)
        mudaCorSaldo(totalSaldoGeralcontrole)
        concluirModal('#modalReceita');
    });

    
    botaoSenha.addEventListener('click', function() {
        const img = document.querySelector(".icone-senha");
        const cadeadoAberto = '/assets/img/cadeado-aberto.png';
        const cadeadoFechado = '/assets/img/cadeado-fechado.png';

        img.src = img.src.includes(cadeadoAberto) ? cadeadoFechado : cadeadoAberto;
    });

    botaoSenha.addEventListener('click', function() {
        if (valorReceitaMensal.classList.contains('invisivel')) {
            valorReceitaMensal.classList.remove('invisivel');
            receitaEscondida.classList.add('invisivel');
        } else {
            valorReceitaMensal.classList.add('invisivel');
            receitaEscondida.classList.remove('invisivel');
        }

        if (valorDespesaMensal.classList.contains('invisivel')) {
            valorDespesaMensal.classList.remove('invisivel');
            despesaEscondida.classList.add('invisivel');
        } else {
            valorDespesaMensal.classList.add('invisivel');
            despesaEscondida.classList.remove('invisivel');
        }

        if (valorVisivel.style.visibility === 'hidden') {
            valorVisivel.style.visibility = 'visible';
            valorEscondido.style.visibility = 'hidden';
        } else {
            valorVisivel.style.visibility = 'hidden';
            valorEscondido.style.visibility = 'visible';
        }
    });

    
    valorDes.addEventListener('input', () => {
        parseFloat(filtraValor(valorDes).replace(',','.'))
    });

    valorRec.addEventListener('input', ()=> {
        parseFloat(filtraValor(valorRec).replace(',','.'))
    })


    //Funções
    
    const formatador = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });


    function mudaCorSaldo(variavelControle1){
        if(variavelControle1 < 0){
            valorVisivel.style.color = 'red'
            divSaldoGeral.classList.add('borda-saldo-negativo')
        }   else if (variavelControle1 >= 0) {
            valorVisivel.style.color = '#656060'
            divSaldoGeral.classList.remove('borda-saldo-negativo')
        }

        return 
    }


   
    function converteValor(input){
        let convertendoValor = parseFloat(filtraValor(input).replace(/\./g, '').replace(',', '.')  )
        return convertendoValor
    }

    function filtraValor(input){
        let valorFiltrado = input.value.replace(/\D/g, '');
        let valorNum = parseFloat(valorFiltrado, 10) || 0;
        valorNum = valorNum / 100
        const valorFormatado = formatador.format(valorNum)
         return input.value = valorFormatado
    }

    function limpaModal(input1, input2, input3){
        input1.value = ''
        input2.value = ''
        input3.value = ''
    }

    function somaArray(arrayValor) {
    const totalArray = arrayValor.reduce(function(acc, valor) {
            acc += valor
            return acc
        },0)

        return totalArray
    }

    function somaSaldoGeral(arraySaldo) {
        const totalSaldoGeral = arraySaldo.reduce((acc, curr) => acc + curr, 0)
        arraySaldo = []
        return totalSaldoGeral
    }

    function concluirModal(modal) {
        $(modal).modal('hide');
    }


    const data = new Date();
    const horario = data.getHours();
    function saudacao(hora) {
        if (hora >= 0 && hora <= 11) {
            return 'Bom dia';
        } else if (hora >= 12 && hora <= 17) {
            return 'Boa tarde';
        } else if (hora >= 18 && hora <= 23) {
            return 'Boa noite';
        }
    }
    horarioDoDia.innerHTML = `${saudacao(horario)},`;
    if (saudacao(horario) === 'Boa noite') {
        iconeSaudacao.innerHTML = 'BH <img src="/assets/img/icone-noite.png"> ';
    } else if (saudacao(horario) === 'Bom dia') {
        iconeSaudacao.innerHTML = 'BH <img src="/assets/img/icone-dia.png"> ';
    } else if (saudacao(horario) === 'Boa tarde') {
        iconeSaudacao.innerHTML = 'BH <img src="/assets/img/icone-tarde.png"> ';
    }


}




initPageScript();
