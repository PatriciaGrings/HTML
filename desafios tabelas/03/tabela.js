var vetorNotas = []
var contNota = 1
var contVet = 0
var contMed = 0
function substituirNotas() {
    if (contNota <= 4) {    
        var notaInfo= window.prompt('Insira a nota: ')
        var notaNum= Number.parseFloat(notaInfo)
        vetorNotas.push(notaNum)
        var n1Mat= document.getElementById('nota' + contNota)
        n1Mat.innerText= vetorNotas[contVet]
        /*window.alert(vetorNotas[contVet])*/

        contNota ++
        contVet ++
    }
    if (contVet >= 4) {
    for (var c=1;c<=3;c++){
        window.alert(vetorNotas[contMed])
        window.alert(vetorNotas[contMed+1])
        var medNota= (vetorNotas[contMed]+vetorNotas[contMed+1])/2
        var med= document.getElementById('notaMed' + c)
        med.innerText= medNota
        contMed= contMed+2
    }
}
}


document.getElementById('notaForm').addEventListener('submit', function(event) {
    event.preventDefault()
})