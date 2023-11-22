// récuperer les valeurs des champs
const prénom = document.querySelector('.prénom');
const mail = document.querySelector('.mail');
const tel = document.querySelector('.tel');
const error = document.querySelector('.error');
const submit = document.querySelector('.submit');
const affiche = document.querySelector('.affiche');

// validation des inputs

submit.addEventListener('click', (event) => {
    if (prénom.value == ""){
        error.innerHTML = `<span>prenom est vide</span> `;
        return;
    }
    if (!/^[a-zA-Z]+$/.test(prénom)) {
        error.innerHTML = `<span>"le prénom doit contenir seulement des lettres"</span> `;
        return ;}

    else {error.innerHTML = "";}
    if (mail.value == ""){
      error.innerHTML = `<span>mail est vide</span> `;
      return;
  }
  if (!/^[a-zA-Z0-9]+@[a-zA-Z]+[?:\.com.fr.tn]$/) {
    error.innerHTML = `<span>"mail doit contenir @ et .com .fr .tn"</span> `; 
    return;
}
  else {error.innerHTML = "";}
  if (tel.value == ""){
      error.innerHTML = `<span>tel est vide</span> `;
      return;
  }
  if (!/^[0-9]+$/.test(tel)){
      error.innerHTML=`tel doit etre des numero `;
  }
  else {error.innerHTML = "";}
  const longeurTel = 8;
   
   if (tel !== longeurTel) {
    error.innerHTML=`"tel doit contenir 8 chiffres" `;
    return;
   }
   return null;
   // afficher le resultat dans le champs affiche
   affiche.innerHTML = `
   <h1>Votre Prenom : </h1>
   ${prénom.value}
   <h1>Votre mail : </h1>
   ${mail.value}
   <h1>Votre tel : </h1>
   ${tel.value}`

})
  