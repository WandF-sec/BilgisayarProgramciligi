// script.js

// Kullanıcı giriş işlemi
function giris() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username.toLowerCase() === 'ogrenci' && password.toLowerCase() === 'ogrenci') {
        document.getElementById('giris_bloku').style.display = 'none';
        document.getElementById('carpim_bloku').style.display = 'block';
        carpim_tablosu_olustur();
    } else {
        alert('Kullanıcı adı veya şifre hatalı!');
    }
}

// Çarpım tablosunu oluşturma işlemi
function carpim_tablosu_olustur() {
    var table = document.getElementById('carpim_tablosu');
    var rows = 10;
    var cols = 10;

    // Tabloyu temizle
    table.innerHTML = '';

    // Başlık ekleme
    var headerRow = table.insertRow();
    for (var j = 0; j <= cols; j++) {
        var headerCell = headerRow.insertCell();
        if (j === 0) {
            headerCell.innerHTML = 'x';
        } else {
            headerCell.innerHTML = j;
        }
    }

    // Çarpım tablosu oluşturma
    for (var i = 1; i <= rows; i++) {
        var row = table.insertRow();
        for (var j = 0; j <= cols; j++) {
            var cell = row.insertCell();
            if (j === 0) {
                cell.innerHTML = i;
            } else {
                cell.innerHTML = i * j;
            }
        }
    }

    adjustTableSize(); // Tablo boyutunu ayarla
}

// Tablo hücrelerinin genişliğini ayarlama işlemi
function adjustTableSize() {
    var table = document.getElementById('carpim_tablosu');
    var rows = table.rows.length;
    var cols = table.rows[0].cells.length;

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            table.rows[i].cells[j].style.width = (100 / (cols + 1)) + '%'; // Hesaplanan genişlik
        }
    }
}

// Çarpım sonucunu gösterme işlemi
function carpimSonucu() {
    var result = document.getElementById('sayi1').value * document.getElementById('sayi2').value;
    var table = document.getElementById('carpim_tablosu');
    var rows = table.rows.length;
    var cols = table.rows[0].cells.length;

    for (var i = 1; i < rows; i++) {
        for (var j = 1; j < cols; j++) {
            var cellValue = parseInt(table.rows[i].cells[j].innerHTML);
            table.rows[i].cells[j].classList.remove('green');

            if (cellValue === result && i === parseInt(document.getElementById('sayi1').value) && j === parseInt(document.getElementById('sayi2').value)) {
                table.rows[i].cells[j].classList.add('green');
                return; // İstenilen hücreyi yeşil yap ve fonksiyondan çık
            }
        }
    }
}

// Sonuçları temizleme işlemi
function sonucuTemizle() {
    var table = document.getElementById('carpim_tablosu');
    var rows = table.rows.length;
    var cols = table.rows[0].cells.length;

    for (var i = 1; i < rows; i++) {
        for (var j = 1; j < cols; j++) {
            table.rows[i].cells[j].classList.remove('green');
        }
    }
    document.getElementById('sayi1').value = '';
    document.getElementById('sayi2').value = '';
}
