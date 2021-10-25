function carregar(){
var contData = new Date()
var Horas = contData.getHours()
var queHora = window.document.querySelector('h3#hora')
var imgHora = window.document.querySelector('img#fotohora')
queHora.innerHTML = `Agora são ${Horas} horas.`

if (Horas < 12){
    imgHora.src = "morningfoto.png"
    document.body.style.background = "#e2cd9f"
} else if (Horas < 19){
    document.body.style.background = "#a87864"
    imgHora.src = "afternfoto.png"
} else {
    document.body.style.background = "#464748"
    imgHora.src = "nightfoto.png"
}
}