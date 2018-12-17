
    function showMessenge(){
        var amount = document.getElementById('amount').value;
        var batdau= document.getElementById('batdau').value;
        var ketthuc = document.getElementById('ketthuc').value;

        if (batdau == 'VND' && ketthuc == 'USD') {
            var ketqua = amount / 23000;
          document.getElementById('hienthi').innerHTML = (ketqua);
        }
        else if (batdau =='VND' && batdau =='VND') {
                var ketqua = amount;
            document.getElementById('hienthi').innerHTML = (ketqua);
            }
            else if (ketthuc=='USD'&& ketthuc =='USD') {
                    var ketqua = amount;
            document.getElementById('hienthi').innerHTML = (ketqua);
                }
                else {
                    var ketqua = amount * 23000;
            document.getElementById('hienthi').innerHTML = (ketqua);

            }
    }


