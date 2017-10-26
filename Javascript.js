//La on lance la fonction lorsqu'une touche est préssé, avec evt (event) en paramètre
document.onkeypress=function(evt){
    //À l'id "nom", on attribut la valeur de evt.key
    document.getElementById('nom').value=evt.key;
    alert('Vous avez appuyé sur la touche ' + evt.key);
  }
