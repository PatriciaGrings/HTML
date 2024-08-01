var vetorNotas = []
function notas() {
    for (var c= 1; c<3; c++){
        var n1= window.prompt('nota: ')
        var n2= Number.parseFloat(n1)
        vetorNotas.push(n2)
    }
    var n1Mat= document.getElementById('mat1')
        n1Mat.innerText= vetorNotas[0]
        window.alert(vetorNotas[0])
        var n2Mat= document.getElementById('mat2')
        n2Mat.innerText= vetorNotas[1]
        window.alert(vetorNotas[1])         
}