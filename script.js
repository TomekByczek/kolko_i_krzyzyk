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
            xOrO = true
            document.getElementById('statusGame').innerHTML = 'Aktualny stan gry:<br>Gra rozpoczęta! Gra O';
        }
        else {
            table[row][col] = true
            event.srcElement.innerHTML = 'O'
            xOrO = false
            document.getElementById('statusGame').innerHTML = 'Aktualny stan gry:<br>Gra rozpoczęta! Gra X';
        }
    } else {
        alert('Tu już coś jest')
    }
    if (table[0][0] == true && table[0][1] == true && table[0][2] == true ) {alert('wygrywa kółko')}
    if (table[1][0] == true && table[1][1] == true && table[1][2] == true ) {alert('wygrywa kółko')}
    if (table[2][0] == true && table[2][1] == true && table[2][2] == true ) {alert('wygrywa kółko')}
    if (table[0][0] == true && table[1][0] == true && table[2][0] == true ) {alert('wygrywa kółko')}
    if (table[0][1] == true && table[1][1] == true && table[2][1] == true ) {alert('wygrywa kółko')}
    if (table[0][2] == true && table[1][2] == true && table[2][2] == true ) {alert('wygrywa kółko')}
    if (table[0][0] == true && table[1][1] == true && table[2][2] == true ) {alert('wygrywa kółko')}
    if (table[0][2] == true && table[1][1] == true && table[2][0] == true ) {alert('wygrywa kółko')}
    if (table[0][0] == false && table[0][1] == false && table[0][2] == false ) {alert('wygrywa krzyżyk')}
    if (table[1][0] == false && table[1][1] == false && table[1][2] == false ) {alert('wygrywa krzyżyk')}
    if (table[2][0] == false && table[2][1] == false && table[2][2] == false ) {alert('wygrywa krzyżyk')}
    if (table[0][0] == false && table[1][0] == false && table[2][0] == false ) {alert('wygrywa krzyżyk')}
    if (table[0][1] == false && table[1][1] == false && table[2][1] == false ) {alert('wygrywa krzyżyk')}
    if (table[0][2] == false && table[1][2] == false && table[2][2] == false ) {alert('wygrywa krzyżyk')}
    if (table[0][0] == false && table[1][1] == false && table[2][2] == false ) {alert('wygrywa krzyżyk')}
    if (table[0][2] == false && table[1][1] == false && table[2][0] == false ) {alert('wygrywa krzyżyk')}
    console.log(event)
}


function startgame() {
    table = []
    isgameactiv = true
    document.getElementById('game'), game.style.display = 'block';
    xOrO = false;
    document.getElementById('statusGame').innerHTML = 'Aktualny stan gry:<br>Gra rozpoczęta! Gra X';
    document.getElementById('newgame'), newgame.disabled = true;
    table.push([undefined, undefined, undefined])
    table.push([undefined, undefined, undefined])
    table.push([undefined, undefined, undefined])
    clinerFields();
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
function clinerFields(){
   var fields = document.getElementsByTagName('td')
   console.log(fields)
   for (var i = 0; fields.length  > i ; i++) {
    fields[i].innerHTML = ''
   }
Function gameNoWiner() {
    
    for (var row = 0; table.length > row ;row++) {
    for (var col = 0; table[row].length > col; col++){
        Table[row][col]
    }
    }
}

    
   
   
}
