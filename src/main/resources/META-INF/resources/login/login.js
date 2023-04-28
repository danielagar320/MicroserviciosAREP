const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validarUsuario();
});

function validarUsuario(){
    var username = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    if(username == "daniela" & password == "123"){
        // Ejemplo de redirección a una página web
        window.location.href = "../home/home.html";
    }

}