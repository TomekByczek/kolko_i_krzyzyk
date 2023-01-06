console.log('hello world')
var isgameactiv = false
var xOrO //x-false o-true 
var table = []
function onFieldClicked(event) {
    var row = event.srcElement.dataset.row
    var col = event.srcElement.dataset.col
    var result = isFieldEmpty(row, col)
    if (result == true) {
        if (xOrO == false) {
            table[row][col] = false
            event.srcElement.innerHTML = 'X'
        }
        else {
            table[row][col] = true
            event.srcElement.innerHTML = 'O'
        }
    } else {
        alert('Tu już coś jest')
    }
    console.log(event)
}


function startgame() {
    table = []
    isgameactiv = true
    document.getElementById('game'), game.style.display = 'block';
    xOrO = false;
    document.getElementById('statusGame'), statusGame.innerHTML = ' Aktualny stan gry:<br>Gra rozpoczęta!';
    document.getElementById('newgame'), newgame.disabled = true;
    table.push([undefined, undefined, undefined])
    table.push([undefined, undefined, undefined])
    table.push([undefined, undefined, undefined])
    alert('Gra rozpoczęta')

}
function endgame() {
    isgameactiv = false
    document.getElementById('game'), game.style.display = 'none';
    document.getElementById('newgame'), newgame.disabled = false;
    alert('Gra zakonczona')
}
function fieldcheck(row, col) {
    if (row < 1 || row > 3) {
        throw 'Wartosc wiersza powinien zawierac sie miedzy 1 a 3'
    }
    if (col < 1 || col > 3) {
        throw 'Wartosc kolumny powinien zawierac sie miedzy 1 a 3'
    }
    else {
        var field = table[row - 1][col - 1]
        return field
    }
}
document.addEventListener('DOMContentLoaded', function (event) {
    initFieldHandlers()
    var plansza = document.getElementById('game')
    plansza.style.display = 'none'
})
function isFieldEmpty(row, col) {
    var field = table[row][col]
    if (field == undefined)
        return true
    else return false
}
function initFieldHandlers() {
    var gameFields = document.getElementsByTagName('td')
    for (var i = 0; gameFields.length > i; i++) {
        gameFields[i].addEventListener('click', onFieldClicked);
    }
}