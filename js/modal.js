const element = document.getElementById("modal");
const btnTeste = document.getElementById("btnSalvar");
const campoTitulo = document.getElementById("campoTitle");
const campoIngredientes = document.getElementById("campoIngredientes");
const campoPreparo = document.getElementById("campoPreparo");


function showModal(){
    element.classList.add("show-modal");
    console.log("abriu modal");
}

function hideModal(){
    element.classList.remove("show-modal");
    console.log("fechou modal");
    limpa();
}




btnTeste.addEventListener('click' , function(){
    createTask(campoTitulo.value, campoIngredientes.value , campoPreparo.value )
    //console.log(campoTitulo.value , campoIngredientes.value , campoPreparo.value);
    
});


function createTask(titulo, ingredientes, preparo ){

}




function limpa(){
    campoTitulo.value = "";
    campoIngredientes.value = ""; 
    campoPreparo.value = "";
}