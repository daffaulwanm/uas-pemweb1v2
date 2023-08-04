// perkalian
function cekJawaban() {
    var jawaban1 = parseInt(document.getElementById("perkalian1").value);
    var jawaban2 = parseInt(document.getElementById("perkalian2").value);
    
    if (jawaban1 === 90 && jawaban2 === 5082) {
      document.getElementById("hasil").innerHTML = "Anda Benar!";
    } else {
      document.getElementById("hasil").innerHTML = "Jawaban Anda Salah. Coba lagi!";
    }
  }  