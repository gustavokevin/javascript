function contar(){
    var inicio = window.document.querySelector('input#firstStep')
    var fim = window.document.querySelector('input#finalStep')
    var passo = window.document.querySelector('input#steps')
    var res = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar'
        window.alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando...'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        if (p <= 0){
            window.alert('Passo inválido! CONSIDERANDO PASSO 1')
            p = 1
        }
        if(i < f){
            //contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else{
            //contagem decrescente
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }
}