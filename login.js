const nombre = document.getElementById("name");
const email = document.getElementById("email");
const contraseña = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warnings = "";
  let entrar = false;
  let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
parrafo.innerHTML = "";
  if(nombre.value.length <6) {
    warnings += `El nombre debe tener al menos 6 caracteres <br>`;
    entrar = true;
  }
  if(!regexEmail.test(email.value)) {
    warnings += `El email no es valido <br>`
    entrar = true;
  }
  if(password.value.length <6){
    warnings += `La contraseña no es valida <br>`
}
if(entrar){
    parrafo.innerHTML = warnings;
}else{
    parrafo.innerHTML = "Enviado";
}
})

