const textArea = document.querySelector(".text-area")
const mensaje = document.querySelector(".mensaje")
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
function crypto(texto,accion){
    // action represents the action of encrypt (true) or unencrypted (false) a text
    let mat = [["e", "enter"],["i" , "imes"], ["a", "ai"],["o","ober"],["u", "ufat"]]
    texto = texto.toLowerCase()
    let j = Number(!accion);
    let k = Number(accion);
    for(let i =0;i< mat.length;i++){
        if(texto.includes(mat[i][j])){
            texto = texto.replaceAll(mat[i][j],mat[i][k]);
            //window.alert("hey there is something bad");
        }
    }
    return texto;
}
function btnEncriptar(){
    const textoEncriptado = crypto(textArea.value,true);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage= "none"
}

function btnDesEncriptar() {
    const textoEncriptado = crypto(textArea.value, false);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}
function copy() {
    let copyText = document.querySelector(".mensaje");
    copyText.select();
    document.execCommand("copy");
}

