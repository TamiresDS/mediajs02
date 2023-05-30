function media(){
    let nome = window.prompt('Digite seu nome: ')

    let n1 = Number(window.prompt("Nota 1: "))
    let n2 = Number(window.prompt("Nota 2: "))
    let n3 = Number(window.prompt("Nota 3: "))

    suaMedia = (n1+n2+n3)/3


    if(suaMedia >= 6)
    if(suaMedia==10 )
        alert("Você foi aprovado")
    else 
        document.getElementById('valor').innerHTML = `${nome}, sua média foi ${+ suaMedia}, parabéns você foi aprovado!`
    else
        document.getElementById('valor').innerHTML = `${nome}, sua média foi ${+ suaMedia}, você foi reprovado. `
}