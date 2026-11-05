

/* //Código para capturar o parâmetro "codigo" da URL e armazená-lo no sessionStorage
sessionStorage.setItem('Codigo_IDD', '');
window.onload = function () {
var params = new URLSearchParams(window.location.search);
var codigo = params.get("codigo");

if (codigo) {
//wal("Código capturado: " + codigo);
sessionStorage.setItem('Codigo_IDD', codigo);
//alert(codigo)
} else {
console.log("Nenhum código encontrado na URL.");
sessionStorage.setItem('Codigo_IDD', '');
//wal("Código capturado: " + codigo);
}
};
////////////////////////////////////////////////////////////////////////////////// */

// Tela Cheia
function toggleFullScreen() {
if ((document.fullScreenElement && document.fullScreenElement !== null) ||
(!document.mozFullScreen && !document.webkitIsFullScreen)) {
if (document.documentElement.requestFullScreen) {
document.documentElement.requestFullScreen();
} else if (document.documentElement.mozRequestFullScreen) {
document.documentElement.mozRequestFullScreen();
} else if (document.documentElement.webkitRequestFullScreen) {
document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
}
} else {
if (document.cancelFullScreen) {
document.cancelFullScreen();
} else if (document.mozCancelFullScreen) {
document.mozCancelFullScreen();
} else if (document.webkitCancelFullScreen) {
document.webkitCancelFullScreen();
}
}
};
document.getElementById('a_togle').addEventListener('click', function(){
   toggleFullScreen() 
})
//////////////////////////////////////////////////////////////////////////////////////

//Retornar a tela Principal
document.getElementById('a_Retornar').addEventListener('click',function(){
 window.open('../index.html','_self')
});




//Data e Hora
setInterval(function() {
const newDate = new Date()
var dia = String(newDate.getDate()).padStart(2, '0');
var mes = String(newDate.getMonth() + 1).padStart(2, '0');
var ano = String(newDate.getFullYear()).padStart(2, '0')
var data = `${dia}/${mes}/${ano}`
const now = new Date();
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');
const seconds = now.getSeconds().toString().padStart(2, '0');
const timeString = `${hours}:${minutes}:${seconds}`;
//const lbl_data = document.getElementById('lbl-data');
//lbl_data.innerHTML = `${data}`
//localStorage.setItem('data', data)
sessionStorage.setItem('hora', timeString)
sessionStorage.setItem('data', data)

}, 1000)

// INICIAR FIREBASE
const firebaseConfig = {
apiKey: "AIzaSyBdcGs4zGY6oR42NGhRLXupJCdJ1fuDUuU",
authDomain: "ipm-itanhaem.firebaseapp.com",
projectId: "ipm-itanhaem",
storageBucket: "ipm-itanhaem.firebasestorage.app",
messagingSenderId: "512001244228",
appId: "1:512001244228:web:0d78ac8156b8929bc05011",
measurementId: "G-6YMW4PXDZ7"
};
firebase.initializeApp(firebaseConfig);
//////////////////////////////////////////////////////////////////

var filterContainer = document.querySelector('.container');
filterContainer.id = 'filteer_Container';

document.querySelectorAll('#menuButton p').forEach(lenght => {
    
    lenght.addEventListener('click', function() {

var filterContainer = document.querySelector('.container');
    

  if(lenght.innerHTML=='Cadastre'){
  
  var bloqueio = document.querySelector('.mainFlax').style.display;
 if (bloqueio === 'block') {
        document.querySelector('.mainFlax').style.display = 'none';
        filterContainer.id = 'filteer_Container';
    } else {
      
     document.querySelector('.mainFlax').style.display = 'block';   
     filterContainer.id = '';
}
};

 if(lenght.innerHTML=='Cadastrados'){
   
document.querySelector('.mainFlax').style.display = 'none';
 
 };

  if(lenght.innerHTML=='db'){
   
document.querySelector('.mainFlax').style.display = 'none';

 };

 })
})

//cadatrar menu a
document.getElementById('a_Cadastrar').addEventListener('click',function(){
var bloqueio = document.querySelector('.mainFlax').style.display;
 if (bloqueio === 'block') {
        document.querySelector('.mainFlax').style.display = 'none';
        filterContainer.id = 'filteer_Container';
    } else {
      
     document.querySelector('.mainFlax').style.display = 'block';   
     filterContainer.id = '';
}
})



//Menu Lateral
document.getElementById('menu').addEventListener('click', function(){
var BotMenu=document.getElementById('Imenu');
var Menu = document.getElementById('menu_lateral').className;

if (!Menu|| Menu==='') {
BotMenu.className = 'fa-solid fa-delete-left'
sessionStorage.setItem('MENULateral', 'Aberto')
document.getElementById("menu_lateral").classList.add("menu-ativo");

} else {
BotMenu.className = 'fa-solid fa-bars'
sessionStorage.setItem('MENULateral', '')
document.getElementById("menu_lateral").classList.remove("menu-ativo");
}
//alert(BotMenu.className)

});

//Main Click
document.getElementById('mainClass').addEventListener('click', function(){
  var Menu = document.getElementById('menu_lateral').className;
  if(Menu){
 document.getElementById('menu').click()
  }
 
})

// Exit Menu
document.getElementById('exitMenu').addEventListener('click',function(){
document.getElementById('menu').click()
});

