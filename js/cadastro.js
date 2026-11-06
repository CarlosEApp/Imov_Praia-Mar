

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

function limparCadastro(){
   
  document.getElementById("Operação_imobiliaria_01").value='';
  document.getElementById("Operação_imobiliaria_02").value='';
  document.getElementById('CodigoGerado').innerHTML='######';
}

// Gerar código
function geradorCodigo(){
var cod=document.getElementById('CodigoGerado').innerHTML;
if(!cod|| cod==''||cod=='######'){
var caracteres = 'A1B2C3D4E5F6G7H8I9JK1L2M3N4O5P6Q7R8S9TUVWXYZ';
let codigo = '';
for (let i = 0; i < 6; i++) {
codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
document.getElementById('CodigoGerado').innerHTML= `${codigo}`
}
} else{
}
}

document.querySelectorAll('#menuButton p').forEach(lenght => {
  lenght.addEventListener('click', function() {
  
  if(lenght.innerHTML=='Cadastre'){
     var verde=  document.getElementById('dadosImovel'); var verde2=  document.getElementById('dbvalore');var verde3=  document.getElementById('dbEnd');
      var verde4=  document.getElementById('dbPessoal');var verde5=  document.getElementById('dbimag');
  var bloqueio = document.querySelector('.mainFlax').style.display;
 if (bloqueio === 'block') {
        document.querySelector('.mainFlax').style.display = 'none';
         verde.className=''
    } else {
  var operação01=document.getElementById("Operação_imobiliaria_01").value;
 // var operação02=document.getElementById("Operação_imobiliaria_02").value;
  if(!operação01||operação01==""){
 geradorCodigo()
  }else{
    Swal.fire({
title: `Cadastro em andamento`,
html: `
<div id='divCad'> 
 <p id='novoCad'>Novo Cadastro</p>
 <p id='ContCad'>Continuar Editando</p>
</div>
`,
background: 'hsl(113, 100%, 2%)',
color: '#fafafa',
showCloseButton: true,
showConfirmButton: false,
customClass: { popup: 'my-custom_img' },
didOpen: () => { document.body.style.paddingRight = '0px'; }
});
   document.querySelectorAll('.my-custom_img p').forEach(lenght=>{
    lenght.addEventListener('click', function(){
      
      if(lenght.id==='novoCad'){
        limparCadastro()
        Swal.close()
        setTimeout(function(){
         geradorCodigo()

        },1200)
      }else{
        Swal.close()
      }
    })
   })

  }
         verde.className='verdeLimao'; verde2.className=''; verde3.className=''; verde4.className=''; verde5.className='';
     document.querySelector('.mainFlax').style.display = 'block';  

     document.getElementById('part01cad').style.display='block';  document.getElementById('part02cad').style.display='none';  document.getElementById('part03cad').style.display='none'; 
      document.getElementById('part04cad').style.display='none';  document.getElementById('part05cad').style.display='none'; 
      document.querySelectorAll('#menuItems p').forEach(lenght =>{
        lenght.addEventListener('click', function(){
         
       if(lenght.innerHTML==='Imóvel'){ lenght.className='verdeLimao';
        verde2.className=''; verde3.className=''; verde4.className=''; verde5.className='';
        document.getElementById('part01cad').style.display='block';  document.getElementById('part02cad').style.display='none';  document.getElementById('part03cad').style.display='none'; 
       document.getElementById('part04cad').style.display='none';  document.getElementById('part05cad').style.display='none'; 

        };

      if(lenght.innerHTML==='Valores'){ lenght.className='verdeLimao';
        verde.className=''; verde3.className=''; verde4.className=''; verde5.className='';
        document.getElementById('part01cad').style.display='none';  document.getElementById('part02cad').style.display='block';  document.getElementById('part03cad').style.display='none'; 
       document.getElementById('part04cad').style.display='none';  document.getElementById('part05cad').style.display='none'; 

        };

          if(lenght.innerHTML==='End'){ lenght.className='verdeLimao';
              verde.className=''; verde2.className=''; verde4.className=''; verde5.className='';
              document.getElementById('part01cad').style.display='none';  document.getElementById('part02cad').style.display='none';  document.getElementById('part03cad').style.display='block'; 
             document.getElementById('part04cad').style.display='none';  document.getElementById('part05cad').style.display='none'; 

        };

          if(lenght.innerHTML==='Pessoal'){ lenght.className='verdeLimao';
              verde.className=''; verde2.className=''; verde3.className=''; verde5.className='';
              document.getElementById('part01cad').style.display='none';  document.getElementById('part02cad').style.display='none';  document.getElementById('part03cad').style.display='none'; 
              document.getElementById('part04cad').style.display='block';  document.getElementById('part05cad').style.display='none'; 

        };

          if(lenght.innerHTML==='Img'){ lenght.className='verdeLimao';
              verde.className=''; verde2.className=''; verde3.className=''; verde4.className='';
              document.getElementById('part01cad').style.display='none';  document.getElementById('part02cad').style.display='none';  document.getElementById('part03cad').style.display='none'; 
             document.getElementById('part04cad').style.display='none';  document.getElementById('part05cad').style.display='block'; 

        };
        
        })
      })
    
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

 document.getElementById('Operação_imobiliaria_02').value=''; document.getElementById('Operação_imobiliaria_01').value='';
 