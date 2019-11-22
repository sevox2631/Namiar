var tab = [ [1, 1, 1],
    [0.0432, 0.0028, 0],
    [0.0079, 0.0002, 0.985] ];
var logWyniku = '';
function podajNamiar(){
    var namiar = document.getElementById("namiar").value;
    var wegiel = document.getElementById("wegiel").value;
    var krzem = document.getElementById("krzem").value;
    var masaC = namiar * (wegiel * 0.01); // 525
    var masaSi = namiar * (krzem * 0.01); // 300

    if(namiar !== '' && wegiel !== '' && krzem !== '') {
        function wyznacznikGlowny(tab) {
            return (tab[0][0] * tab[1][1] * tab[2][2] +
                tab[1][0] * tab[2][1] * tab[0][2] +
                tab[2][0] * tab[0][1] * tab[1][2]) -
                (tab[0][2] * tab[1][1] * tab[2][0] +
                    tab[1][2] * tab[2][1] * tab[0][0] +
                    tab[2][2] * tab[0][1] * tab[1][0]);
        }
        var wyznGl = wyznacznikGlowny(tab);
        logWyniku += "Wyznacznik główny det = "+ wyznGl + "<br>";

        function wyznacznikSurowki(tab) {
            return (namiar * tab[1][1] * tab[2][2] +
                masaC * tab[2][1] * tab[0][2] +
                masaSi * tab[0][1] * tab[1][2]) -
                (tab[0][2] * tab[1][1] * masaSi +
                    tab[1][2] * tab[2][1] * namiar +
                    tab[2][2] * tab[0][1] * masaC);
        }
        var wyznX = wyznacznikSurowki(tab);
        logWyniku += "Wyznacznik macierzy dla surowki detX = "+ wyznX + "<br>";

        function wyznacznikZlomu(tab) {
            return (tab[0][0] * masaC * tab[2][2] +
                tab[1][0] * masaSi * tab[0][2] +
                tab[2][0] * namiar * tab[1][2]) -
                (tab[0][2] * masaC * tab[2][0] +
                    tab[1][2] * masaSi * tab[0][0] +
                    tab[2][2] * namiar * tab[1][0]);
        }
        var wyznY = wyznacznikZlomu(tab);
        logWyniku += "Wyznacznik macierzy dla złomu detY = "+ wyznY + "<br>";

        function wyznacznikKrzemu(tab) {
            return (tab[0][0] * tab[1][1] * masaSi +
                tab[1][0] * tab[2][1] * namiar +
                tab[2][0] * tab[0][1] * masaC) -
                (namiar * tab[1][1] * tab[2][0] +
                    masaC * tab[2][1] * tab[0][0] +
                    masaSi * tab[0][1] * tab[1][0]);
        }
        var wyznZ = wyznacznikKrzemu(tab);
        logWyniku += "Wyznacznik macierzy dla krzemu detZ = "+ wyznZ + "<br>";

        var x = wyznX/wyznGl;
        var y = wyznY/wyznGl;
        var z = wyznZ/wyznGl;

        logWyniku += "<br>Przy założeniu namiaru <b>" + namiar + "</b> gram, <b>" +
            + wegiel+"% C</b>, oraz <b>"+ krzem + "% Si:</b><br><br>";
        logWyniku += "Namiar: " + namiar + "g, <br>"+
            "Węgiel : " + masaC.toFixed(2) + "g, " + "<br>"+
            "Krzem: " + masaSi.toFixed(2) + "g, " + "<br>";

        logWyniku += "<br>Wynik (zaokrąglony do 2 miejsc po przecinku): <br>";
        logWyniku += "<p id='x'>" + "x (surówka) = <b>" + x.toFixed(2) + " g</b></p>";
        logWyniku += "<p id='y'>" + "y (złom stalowy) = <b>" + y.toFixed(2) + " g</b></p>";
        logWyniku += "<p id='z'>" + "z (krzem) = <b>" + z.toFixed(2) + " g</b></p>";
        logWyniku += "<p id='namiarFinal'>Co daje łącznie: " + namiar + " g<br> [" + namiar/1000 + " kg]</p><br>";
        logWyniku += "---------------------------------------------------------------<br><br><br>";

        var wT = document.getElementById("tekstWynik");
        wT.style.display = 'block';
        wT.innerHTML = "Wynik";
        var w = document.getElementById("wynik");
        w.innerHTML = logWyniku;

    } else {
        alert("Wpisz wszystkie dane!");
    }
}

function wyczysc() {
    location.reload();
}


