var vetorNotas = []
var vetorMedias = []
var contNota = 1
var contVet = 0
var contMed = 0
function substituirNotas() {
    
    if (contNota <= 14) {    
        var notaInfo= window.prompt('Insira a nota: ')
        var notaNum= Number.parseFloat(notaInfo.replace(',','.'))
            if (!isNaN(notaNum)) {   
                vetorNotas.push(notaNum)
                var n1Mat= document.getElementById('nota' + contNota)
                n1Mat.innerText= vetorNotas[contVet].toFixed(2)
                contNota ++
                contVet ++
            }
            else {
                window.alert('Insira uma nota válida!')
            }
    }
    else {
        window.alert ('Todas as notas já foram inseridas')
    }
    if (contVet >= 14) {
        for (var c=1;c<=7;c++){
            var medNota= (vetorNotas[contMed]+vetorNotas[contMed+1])/2
            vetorMedias.push(medNota)
            var med= document.getElementById('notaMed' + c)
            med.innerText= medNota.toFixed(2)
            contMed= contMed+2
        }
        var medExatas= (vetorMedias[0]+vetorMedias[1]+vetorMedias[2]+vetorMedias[3])/4
        var medEx= document.getElementById('notaMedEx')
        medEx.innerText= medExatas.toFixed(2)

        var medHumanas= (vetorMedias[4]+vetorMedias[5]+vetorMedias[6])/3
        var medHum= document.getElementById('notaMedHum')
        medHum.innerText= medHumanas.toFixed(2)

        document.getElementById('btnInserir').disabled = true
    }
}

