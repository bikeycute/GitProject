

function changeValue() {
    var X = prompt("X: ");
    var Y = prompt("Y: ");
    data = "";
    board[X][Y] = "x";
    for(var i = 0; i < 5; i++) {
        data += "<br/>";
        for(var j = 0; j < 5; j++){
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
    b.innerHTML = "<hr/>"+ data;
}