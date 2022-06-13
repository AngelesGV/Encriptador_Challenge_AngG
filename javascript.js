/*____________________VALIDAR SOLO MINUSCULAS__________________*/
function Restrinccion(event){
    return ((event.charCode >= 97 && event.charCode <= 122) || (event.charCode == 32) || (event.charCode == 164))
}

/*________________________BOTON  ENCRIPTAR______________________________*/
const InputTexto = document.querySelector(".input_text");
const Muestra = document.querySelector(".input_text_Muestra");


function Boton_Encriptar(){
    const Mensaje_Encriptado = Encriptar(InputTexto.value);
    Muestra.value = Mensaje_Encriptado;
}

const pattern = new RegExp('^[a-z ]+$');

function Encriptar(StEncriptador){

    let LRemplazo = [["e","enter"],["i","imes"],["o","ober"],["a","ai"],["u","ufat"]]
    StEncriptador = StEncriptador.toLowerCase();

    if(StEncriptador.length==0){
        alert("No hay nada que incriptar");
        mostrar("muestreo");
        return StEncriptador=""
    
    }else if(!pattern.test(StEncriptador)){
        alert("Solo se aceptan letras minusculas, no caracteres especiales");
        return StEncriptador=""
    }else{
        for (let n=0; n<LRemplazo.length; n++){
            if(StEncriptador.includes(LRemplazo[n][0])){
                StEncriptador = StEncriptador.replaceAll(LRemplazo[n][0], LRemplazo[n][1]) 
            }
        }
        return StEncriptador;

    }
}

/* ________________________BOTON DESENCRIPTAR______________________________ */
function Boton_Dese_Encriptar(){
    const Mensaje_Encriptado = Dese_Encriptar(InputTexto.value);
    Muestra.value = Mensaje_Encriptado;
}

function Dese_Encriptar(StEncriptador){

    let LRemplazo = [["e","enter"],["i","imes"],["o","ober"],["a","ai"],["u","ufat"]]
    StEncriptador = StEncriptador.toLowerCase();

    if(StEncriptador.length==0){
        alert("No hay nada que desencriptar");
        mostrar("muestreo");


        return StEncriptador=""
    }else if(!pattern.test(StEncriptador)){
        alert("Solo se aceptan letras minusculas, no caracteres especiales");
        return StEncriptador=""
    }else{
        for (let n=0; n<LRemplazo.length; n++){
            if(StEncriptador.includes(LRemplazo[n][1])){
                StEncriptador = StEncriptador.replaceAll(LRemplazo[n][1], LRemplazo[n][0])
            }
        }
    
        return StEncriptador;
    }

}

/*________________________BOTON COPIAR______________________*/

function copy() {

    let copyText = document.getElementById("Muestra_E_D").value;

    console.log({copyText});


    navigator.clipboard.writeText(copyText).then(() => {
        
        if (copyText.length == 0) {
            alert("No hay texto que copiar");
        } else {
            alert("Texto copiado al portapapeles");
        }
    });
}

/*_______________________IMAGEN - SIN CODIFICAR_________________*/

function mostrar(id){
    document.getElementById(id).style.display = '';
}

function mostrardos(id){
    document.getElementById(id).style.display = 'flex';
}

function ocultar(id){
    document.getElementById(id).style.display = 'none';
}

const Boton_En = document.getElementById('BotonEn');
const Texto = document.getElementById('IngresoTexto');

Boton_En.addEventListener("click", function(){
    if(Texto.value!=""){
        ocultar("muestreo");
        mostrardos("text-resultado");

    }else{
        ocultar("text-resultado");
        mostrar("muestreo");

    }
});