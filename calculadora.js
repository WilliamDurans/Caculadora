function calcular() {
    var tx1 = document.getElementById("s1")
    var tx2 = document.getElementById("s2")

    var n1 = Number(tx1.value)
    var n2 = Number(tx2.value)

    var s = n1 + n2
    var su = n1 - n2 
    var m = n1 * n2
    var d = n1 / n2
    var p = n1 ** n2

    if (n1>n2) {
        su = n1 - n2
    } else {
        su = n2 - n1
    }
    
    var r = document.getElementById("resultado")
    r.innerHTML = `<p><strong>A partir de ${n1} e ${n2}, respectivamente:</strong></p>`
    r.innerHTML += `<p>A soma vale <strong>${s}</strong>;</p>`
    r.innerHTML += `<p>A subtração vale <strong>${su}</strong>;</p>`
    r.innerHTML += `<p>A multipicação vale <strong>${m}</strong>;</p>`
    r.innerHTML += `<p>A divisão vale <strong>${d.toFixed(2)}</strong>;</p>`
    r.innerHTML += `<p>Por fim, ${n1} elevado a ${n2} vale <strong>${p}</strong></p>`
}
