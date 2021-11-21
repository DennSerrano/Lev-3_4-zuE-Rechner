// ===========Function des Rechners mit allem drinnen==========
function berechnen() {
    let eingabe = document.getElementById("eingabe").value
    let einzel = document.getElementById("einzel")
    let zweifach = document.getElementById("zweifach")
    let none = document.getElementById("none")
    let acht = document.getElementById("acht")
    let neun = document.getElementById("neun")
    let steuer = document.getElementById("steuer")
    let kSteuer = document.getElementById("kSteuer")
    let gesamt = document.getElementById("gesamt")
    let jahr = document.getElementById("jahr")
    let ESt;

    // if für abfrage von zwei Rechnen Werten
    if (zweifach.checked) {
        eingabe = eingabe / 2;
    }
    // if für 2019    
    if (jahr.value == "2019") {
        if (Number(eingabe) <= 9168) {
            console.log("hallooooooo")
            steuer.innerHTML = "0";
        } else if (Number(eingabe) >= 9169 && Number(eingabe) <= 14254) {
            let y = (Number(eingabe) - 9168) / 10000;
            ESt = (980.14 * y + 1400) * y
        }
        else if (Number(eingabe) >= 14255 && Number(eingabe) <= 57918) {
            let z = (Number(eingabe) - 14255) / 10000
            ESt = (216.16 * z + 2397) * z + 965.58
        } else if (Number(eingabe) >= 55961 && Number(eingabe) <= 265326) {
            ESt = 0.42 * Number(eingabe) - 8780.90
        } else if (Number(eingabe) >= 265327) {
            ESt = 0.45 * Number(eingabe) - 16740.68
        }
    }
    // if für 2020  
    //2020
    if (jahr.value == "2020") {
        if (Number(eingabe) <= 9408) {
            console.log("hallooooooo")
            steuer.innerHTML = "0";
        } else if (Number(eingabe) >= 9408 && Number(eingabe) <= 14532) {
            let y = (Number(eingabe) - 9408) / 10000;
            ESt = (972.87 * y + 1400) * y
        }
        else if (Number(eingabe) >= 14533 && Number(eingabe) <= 57051) {
            let z = (Number(eingabe) - 14532) / 10000
            ESt = (212.02 * z + 2397) * z + 972.79
        } else if (Number(eingabe) >= 57052 && Number(eingabe) <= 270500) {
            ESt = 0.42 * Number(eingabe) - 8963.74
        } else if (Number(eingabe) >= 274613) {
            ESt = 0.45 * Number(eingabe) - 17078.74
        }
    }
    // if für 2021
    if (jahr.value == "2021") {
        if (Number(eingabe) <= 9744) {
            steuer.innerHTML = "0";
        } else if (Number(eingabe) >= 9745 && Number(eingabe) <= 14753) {
            let y = (Number(eingabe) - 9744) / 10000;
            ESt = (995.21 * y + 1400) * y
        }
        else if (Number(eingabe) >= 14754 && Number(eingabe) <= 57918) {
            let z = (Number(eingabe) - 14753) / 10000
            ESt = (208.85 * z + 2397) * z + 950.96
        } else if (Number(eingabe) >= 57919 && Number(eingabe) <= 274612) {
            ESt = 0.42 * Number(eingabe) - 9136.63
        } else if (Number(eingabe) >= 274613) {
            ESt = 0.45 * Number(eingabe) - 17372.99
        }
    }
    // if für rechnung mit zwei Werten (wenn Ausgabe)
    if (zweifach.checked) {
        ESt = ESt * 2;
    }
    // Einkommenssteuer Ausgabe
    steuer.innerHTML = Math.floor(ESt) + "€"
    // Rechung für Kirchensteuer
    if (none.checked) {
        kSteuer.innerHTML = "0€"
        gesamt.innerHTML = Math.floor(ESt) + "€"
    } else if (acht.checked) {
        x = ESt / 100 * 8
        kSteuer.innerHTML = Math.floor(x) + "€"
        gesamt.innerHTML = Math.floor(ESt + x) + "€"
    }
    else if (neun.checked) {
        x = ESt / 100 * 9
        kSteuer.innerHTML = Math.floor(x) + "€"
        gesamt.innerHTML = Math.floor(ESt + x) + "€"
    }

}