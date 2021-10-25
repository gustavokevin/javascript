function langCheck() {
    var lang = window.document.getElementsByName('favLanguage')
    var mensagem = window.document.querySelector('div#show')
    var x = document.createElement('img')
    x.setAttribute('id', 'foto')

    if (lang[0].checked){
        //javascript
        mensagem.innerHTML = `Você escolheu a linguagem JavaScript. Uma ótima linguagem para o front-end`
        x.setAttribute('src', 'jslogo.png')
    } else {
        //python
        mensagem.innerHTML = 'Você escolheu a linguagem Python. Uma ótima linguagem para o back-end'
        x.setAttribute('src', 'pythonlogo.png')
    }

    mensagem.appendChild(x)

}