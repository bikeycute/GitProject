

function cong() {

    var bien1 = parseInt(document.getElementById('bien1').value);
    var bien2 = parseInt(document.getElementById('bien2').value);
    var ketqua = bien1 + bien2;
    document.getElementById('hienthi').innerHTML = (ketqua);
}
function nhan() {

    var bien1 = parseInt(document.getElementById('bien1').value);
    var bien2 = parseInt(document.getElementById('bien2').value);
    var ketqua = bien1 * bien2;
    document.getElementById('hienthi').innerHTML = (ketqua);
}
function chia() {

    var bien1 = parseInt(document.getElementById('bien1').value);
    var bien2 = parseInt(document.getElementById('bien2').value);
    var ketqua = bien1 / bien2;
    document.getElementById('hienthi').innerHTML = (ketqua);
}
function tru() {

    var bien1 = parseInt(document.getElementById('bien1').value);
    var bien2 = parseInt(document.getElementById('bien2').value);
    var ketqua = bien1 - bien2;
    document.getElementById('hienthi').innerHTML = (ketqua);
}
