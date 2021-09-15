const inputNome = document.getElementById('inputNome');
const inputEmail = document.getElementById('inputEmail');
const inputSenha = document.getElementById('inputSenha');
const btnRegistrar = document.getElementById('btnRegistrar');


//const database = firebase.database();

  btnRegistrar.addEventListener('click' , function(){

    if(inputNome.value == '' ||  inputNome.value == null){
      alert("campo nome vazio")
      return false;
    }else {

      firebase.auth().createUserWithEmailAndPassword(inputEmail.value, inputSenha.value).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const uid = user.uid;

        user.updateProfile({ displayName: inputNome.value});
        
        firebase.firestore().collection('users').doc(uid).set({
          nome: inputNome.value,
          email: inputEmail.value
        }).then(() => {
          alert("Cadastrou no banco tmb");
          window.location.replace('index.html');
        }).catch(error => {
          console.log('Register: ', error)
        })

        alert("Cadastrou");

      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        
        alert(errorMessage);
      
      });
    }

  
});



firebase.auth().onAuthStateChanged((user) => {
  if(user){
      //window.location.replace('index.html');
  }else{
      console.log("Não está cadastrado");
  }

});




