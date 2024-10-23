var itensJs = document.getElementById('itens')

function clickMenu() {
    if (itensJs.style.display == 'block') {
        itensJs.style.display = 'none'
    }
    else {
        itensJs.style.display = 'block'
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 768)
        itensJs.style.display = 'block'
    else {
        itensJs.style.display = 'none'
    }
}