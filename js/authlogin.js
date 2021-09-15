var inputEmailLogin = document.getElementById('inputEmailLogin');
var inputsPassLogin = document.getElementById('inputPassLogin');
var btnlogin = document.getElementById('btnLogin');


firebase.auth().onAuthStateChanged((user) => {
    if(user){
        window.location.replace('index.html');
    }else{
        console.log("Não está logado");
    }

  });

btnlogin.addEventListener('click' , function () {

        firebase.auth().signInWithEmailAndPassword(inputEmailLogin.value, inputsPassLogin.value).then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        window.location.replace('index.html');
        
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    
        alert(errorMessage);
        console.log("Errou");
    });
});