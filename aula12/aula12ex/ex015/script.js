function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoNascimento = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (anoNascimento.value.length == 0 || anoNascimento.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(anoNascimento.value)
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'CriancaMasculino.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'JovemMasculino.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'AdultoMasculino.png')
            }else{
                //idoso
                img.setAttribute('src', 'IdosoMasculino.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'CriancaFeminino.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'JovemFeminino.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'AdultoFeminino.png')
            }else{
                //idoso
                img.setAttribute('src', 'IdosoFeminino.png')
            }
        }

        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}