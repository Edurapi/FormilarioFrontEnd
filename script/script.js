function Validar() {
    var ret_email = validar_email();
    var ret_password1 = validar_password();
    var ret_direccion = validar_direccion();
    var ret_telefono = validar_telefono();
    
    
    return  ret_email && ret_password1 && ret_password2 && ret_direccion & ret_telefono;   
}


function validar_email(){
    var email = document.getElementById("correo").value;
    var div = document.getElementById("err_correo");
    var arroba = email.indexOf("@");
    var punto = email.lastIndexOf(".");

        if (arroba < 1) {
            div.innerText = "El correo debe contener '@'. ";
            div.className = "text-danger";
            return false;
        } else{
            if (arroba < 2) {
                div.innerText = "El correo electronico es invalido.";
                div.className = "text-danger";
                return false;
            } else {
                if (arroba +3 > punto || punto == email.length - 1 ){
                div.innerText = "El nombre de dominio no es valido";
                div.className = "text-danger";
                return false;
            }   else {
                div.innerText = "";
                return true;
            }
        }
    }
}

function validar_password() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var div = document.getElementById("err_password1");

    if (password1.trim() === "") {
        div.innerText = "Campo clave no puede estar en blanco";
        div.className = "text-danger";
        return false;
    } else {
    if (password1.length < 3 || password1.length > 6) {
        div.innerText = "La contraseña debe tener de 3 a 6 caracteres";
        div.className = "text-danger";
        return false;
    } else if (!/[a-zA-Z]/.test(password1) || !/\d/.test(password1)) {
        div.innerText = "La contraseña debe tener al menos una Mayúscula y un número"
        div.className = "text-danger";
        return false;
    }
    else {
        if(password1 != password2) {
            div.innerText = "Las contraseñas no coinciden";
            div.className = "text-danger";
            return false;
        } else {
            div.innerText = "";
            return true;
        }
    }         
}}

function validar_direccion(){
    var direccion = document.getElementById("direccion").value;
    var div = document.getElementById("err_direccion");
    if (direccion == ""){
        div.innerText = " Este campo no puede estar en blanco";
        div.className = "text-danger";
        return false;
    } else {
    if (direccion.length < 10){
        div.innerText = "La direccion debe tener al menos 20 caracteres";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";  
        return true;
        }
    }
}

function validar_telefono(){
    var telefono = document.getElementById("telefono").value;
    var div = document.getElementById("err_telefono");
    if (telefono == ""){
        div.innerText = " Este campo no puede estar en blanco";
        div.className = "text-danger";
        return false;
    } else {
    if (telefono.length < 10){
        div.innerText = "El telefono debe tener al menos 9 caracteres";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";  
        return true;
        }
    }
}


const personas = [];

function proceso() {
    // alert("Primer elemento: " + personas[0]);
    // alert("Último elemento: " + personas[personas.length-1]);
    let input = document.getElementById("aficiones");
    personas.push(input.value);
    let div = document.getElementById("lista");
    div.innerHTML = "";
    let ul = document.createElement("ul");
    div.appendChild(ul);
    for (let i = 0; i < personas.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = personas[i];
        ul.appendChild(li);
    }
    
}