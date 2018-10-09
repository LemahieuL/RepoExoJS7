
var nbsize = document.getElementById('shoeSize')
var nbyears = document.getElementById('yearOfBirth')
var regex = /^[0-9]+$/

submit.addEventListener('click', start)
function start(){
//result a l'intérieur de la fonction pour effectuer le calcul avec les valeurs et non pas 0//
result =((nbsize.value * 2 + 5)*50-nbyears.value)+1766;
if(regex.test(nbsize.value) && regex.test(nbyears.value)){
alert('Résultat : ' + result)
} else {
  alert('Donnée incorect')
}
}
