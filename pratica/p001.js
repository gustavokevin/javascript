var getDate = new Date()
var dataDias = getDate.getDate()
var dataHoras = getDate.getHours()
var dataMes = getDate.getMonth()

var dataMesC = dataMes + 1

console.log(`Hoje é dia ${dataDias} do mês ${dataMesC} às ${dataHoras} horas`)

switch (dataMes){
    case 0:
        console.log('Janeirada')
        break
    case 1:
        console.log('Feverada')
        break
    case 2:
        console.log('Marçozada')
        break
    case 3:
        console.log('Abrilzada')
        break
    case 4:
        console.log('Maiada')
        break
    case 5:
        console.log('Junhada')
        break
    case 6:
        console.log('Julhada')
        break
    case 7:
        console.log('Agostada')
        break
    case 8:
        console.log('Setembrada')
        break
    case 9:
        console.log('Outubrada')
        break
    case 10:
        console.log('Novembrada')
        break
    case 11:
        console.log('Dezembrada')
        break
}
