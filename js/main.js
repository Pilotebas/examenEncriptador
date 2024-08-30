
let myForm = document.querySelector("#myForm");
let form_ouput = document.querySelector(".form-ouput")
let form_ouput__menssage = document.querySelector(".form-ouput__menssage")
let p = document.querySelector(".form-ouput__menssage p");
let btn_copy = document.querySelector("#copy")

myForm.addEventListener("submit", function(e){
    let btn = e.submitter.dataset.accion
    let data = Object.fromEntries(new FormData(e.target));
    if(btn=="encriptar") {
        form_ouput.classList.remove("active")
        form_ouput__menssage.classList.add("active")
        p.innerHTML = encriptar(data);
    }else if(btn=="desencriptar") {
        form_ouput.classList.remove("active")
        form_ouput__menssage.classList.add("active")
        p.innerHTML = desencriptar(data);
    }
    e.preventDefault();
})
btn_copy.addEventListener("click", function(e){
    let range = document.createRange();
    range.selectNode(p);
    let selection = window.getSelection();
    selection.removeAllRanges();  
    selection.addRange(range);
    document.execCommand('copy');  
    selection.removeAllRanges();  
    p.innerHTML = ""
    form_ouput__menssage.classList.remove("active")
    form_ouput.classList.add("active")
})
function encriptar(object){
    let palabra = object.valor;
    if(validation(palabra)){
        let salida = palabra.replace(/e/gi, "enter").replace(/i/gi, "imes" ).replace(/o/gi, "ober").replace(/u/gi, "ufat").replace(/a/gi, "ai")
        return salida;
    }else{
        alert('El texto solo puede contener letras y espacios.');
    }
}
function desencriptar(object){
    let palabra = object.valor;
    if(validation(palabra)){
        let salida = palabra.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i" ).replace(/ober/g, "o").replace(/ufat/g, "u");
        return salida;
    }else{
        alert('El texto solo puede contener letras y espacios.');
    }
}
function validation(text){
    return /^[a-z\s]*$/.test(text);
}