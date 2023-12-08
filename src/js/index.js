let sliderElemet = document.getElementById('slider');
let buttonElemet = document.getElementById('button');
let sizePassword = document.getElementById('valor');
let password = document.getElementById('passoward');
let containerPassword = document.getElementById('container-password');

let charset = "abcdefghijklmnoprstvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#";
let novaSenha = "";

sizePassword.innerHTML = sliderElemet.value
sliderElemet.oninput = function(){
    sizePassword.innerHTML = this.value
}

function generatePassword(){
    let pass = '';
    for(let i = 0, n=charset.length; i < sliderElemet.value ;i++){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    containerPassword.classList.remove("hide")
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPasswoard(){
    alert("Senha copiada com sucesso")
    navigator.clipboard.writeText(novaSenha)
}