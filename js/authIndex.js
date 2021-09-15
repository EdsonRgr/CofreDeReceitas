firebase.auth().onAuthStateChanged((user) => {
    if(user){
        
        document.getElementById('nameUser').innerHTML = `Olá, ${user.displayName}`;
        document.getElementById('emailUser').innerHTML = `${user.email}`;
        console.log(user.email);
        console.log(user.displayName);
        console.log(user.uid);
        
    }else{
        window.location.replace('login.html');
    }
    

});


function sair(){
    firebase.auth().signOut();
    window.location.replace('login.html');
    //alert("asdaaasda");
}
