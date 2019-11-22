function pokaMacierz() {
    var namiar = document.getElementById("namiar").value;
    var wegiel = document.getElementById("wegiel").value;
    var krzem = document.getElementById("krzem").value;

    var tab = [[1, 1, 1],
        [0.0432, 0.0028, 0],
        [0.0079, 0.0002, 0.985]];

    var masaC = namiar * (wegiel * 0.01); // 525
    var masaSi = namiar * (krzem * 0.01); // 300

    masaC = masaC.toFixed(4);
    masaSi = masaSi.toFixed(4);

    document.getElementById("zer0").innerText = tab[0][0];
    document.getElementById("zer1").innerText = tab[0][1];
    document.getElementById("zer2").innerText = tab[0][2];
    document.getElementById("zer3").innerText = namiar;
    document.getElementById("jed0").innerText = tab[1][0];
    document.getElementById("jed1").innerText = tab[1][1];
    document.getElementById("jed2").innerText = tab[1][2];
    document.getElementById("jed3").innerText = masaC;
    document.getElementById("dwa0").innerText = tab[2][0];
    document.getElementById("dwa1").innerText = tab[2][1];
    document.getElementById("dwa2").innerText = tab[2][2];
    document.getElementById("dwa3").innerText = masaSi;

    if(namiar !== '' && wegiel !== '' && krzem !== '')
    {
        var tekstMacierzy = document.getElementById("pokaz");
        var pokazTabele = document.getElementById("tabelaMacierzy");
        var pokazNapis = document.getElementById("macGlowna");

        if(pokazTabele.style.display === 'block') {
            pokazTabele.style.display = 'none';
            pokazNapis.style.display = 'none';
            tekstMacierzy.innerText = "Pokaż macierz";
        } else {
            pokazTabele.style.display = 'block';
            pokazNapis.style.display = 'block';
            tekstMacierzy.innerText = "Ukryj macierz";
        }
    }
    else {
        alert("Wpisz wszystkie dane!");
    }
}