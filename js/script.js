function verificar () {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <10){
                //Criança
                img.setAttribute('src','assets/crianca-homem.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'assets/jovem-homem.jpg')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'assets/adulto-homem.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'assets/idoso-homem.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <10){
                //Criança
                img.setAttribute('src', 'assets/crianca-mulher.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'assets/jovem-mulher.jpg')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'assets/adulto-mulher.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'assets/idoso-mulher.jpg')
            }
        }
        
        res.style.textAlign = 'left';
        res.innerHTML = `Detectamos ${gênero} com idade ${idade} anos.`
        res.appendChild(img)

    }
    
}