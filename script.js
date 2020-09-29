function Verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')

  if (fano.value.length == 0 || fano.value > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ""
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked){
      genero = 'Mulher'
      if(idade >=0 && idade <10){
        img.setAttribute('src', './img/menina.jpg')
      }
      else if(idade >=10 && idade <21){
        img.setAttribute('src', './img/mulher-jovem.jpg')
      }
      else if(idade >=21 && idade <40){
        img.setAttribute('src', './img/mulher-adulta.jpg')
      }
      else {
        img.setAttribute('src', './img/mulher-40.jpg')
      }
    } else if (fsex[1].checked){
      genero = 'Homem'
      if(idade >=0 && idade <10){
        img.setAttribute('src', './img/menino.jpg')
      }
      else if(idade >=10 && idade <21){
        img.setAttribute('src', './img/homem-jovem.jpg')
      }
      else if(idade >=21 && idade <40){
        img.setAttribute('src', './img/homem-adulto.jpg')
      }
      else {
        img.setAttribute('src', './img/homem-40.jpg')
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }
}

