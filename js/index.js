

//Código para capturar o parâmetro "codigo" da URL e armazená-lo no sessionStorage
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
//////////////////////////////////////////////////////////////////////////////////

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

//Botões Header
document.getElementById("opçãoHeader").style.display = "none";
document.getElementById("dpsetacima").style.display = "none";
document.getElementById("btnImoveis").addEventListener("click", function() {
  var icone= document.getElementById('munuIcon');
icone.textContent='density_medium'
document.getElementById("optflex01Pesq").style.display = "block";
var btnOpt2 = document.getElementById("btnOpt2");
btnOpt2.className='btnHeder';
var estado =document.getElementById("opçãoHeader").style.display;
if(estado == "none"){
document.getElementById("opçãoHeader").style.display = "block";
document.getElementById("optdivFlax").style.display = "block";
document.getElementById("optdivFlax").style.display = "flex";
document.getElementById("optdivFlax2").style.display = "none";
var btnImoveis = document.getElementById("btnImoveis");
btnImoveis.className='btnHederAlternativa'
document.getElementById("dpsetacima").style.display = "block";
document.getElementById("dpsetaBaixo").style.display = "none";
} else{
document.getElementById("opçãoHeader").style.display = "none";
var btnImoveis = document.getElementById("btnImoveis");
btnImoveis.className='btnHeder';
document.getElementById("dpsetacima").style.display = "none";
document.getElementById("dpsetaBaixo").style.display = "Block";
}
});

//////////////////////////////////////////////////////////////////////////
//document.getElementById("BTmenu").style.display='none'
document.getElementById("btnOpt2").addEventListener("click", function() {
document.getElementById("optflex01Pesq").style.display = "none";
document.getElementById("dpsetacima").style.display = "none";
document.getElementById("dpsetaBaixo").style.display = "Block";
var btnImoveis = document.getElementById("btnImoveis");
btnImoveis.className='btnHeder'
var estado2 =document.getElementById("opçãoHeader").style.display;
if(estado2 == "none"){
document.getElementById("opçãoHeader").style.display = "block";
document.getElementById("optdivFlax").style.display = "none";
document.getElementById("optdivFlax2").style.display = "block";
document.getElementById("optdivFlax2").style.display = "flex";
var btnOpt2 = document.getElementById("btnOpt2");
btnOpt2.className='btnHederAlternativa'
var icone= document.getElementById('munuIcon');
icone.textContent='menu_open'
} else{
document.getElementById("opçãoHeader").style.display = "none";
var btnOpt2 = document.getElementById("btnOpt2");
btnOpt2.className='btnHeder';
var icone= document.getElementById('munuIcon');
icone.textContent='density_medium'
}
});

//Click baner para fechar menu
document.getElementById('banser').addEventListener('click',function(){
  var localAberto= document.getElementById("opçãoHeader").style.display;
  if(localAberto=='none'){

  } else{
 document.getElementById('btnImoveis').click()
  }
})
///////////////////////////////////////////////////////////////////////////

// Adicionar evento de clique aos links dentro de .opt01 LOCAÇÂO
document.querySelectorAll('.opt01 a').forEach(link => {
link.addEventListener('click', function () {
// console.log(this.textContent);
Swal.fire('',  this.textContent, 'success');
});
});
////////////////////////////////////////////////////////////////////////////

// Adicionar evento de clique aos links dentro de .opt02 VENDA
document.querySelectorAll('.opt02 a').forEach(link => {
link.addEventListener('click', function () {
// console.log(this.textContent);
Swal.fire('',  this.textContent, 'success');
});
});
//////////////////////////////////////////////////////////////////////////////////

// botão pesquisar
document.getElementById("pesq-1").addEventListener("click", function() {
var pesquisa = document.getElementById("pesqflex01").value;
if(pesquisa == ""){
Swal.fire('',  'O campo de pesquisa está vazio', 'warning');
} else{
Swal.fire('',  pesquisa, 'success');
}
});
//////////////////////////////////////////////////////////////////////////////////////

document.getElementById('divADM').style.display='none';
  document.getElementById('menAD').style.display='none';
 
      
//login google
function loginComGoogle() {
  var lblG=document.getElementById('labellogarLater');
var lognome= localStorage.getItem('GoogleNome')
var logEmail= localStorage.getItem('GoogleEmail')
var hora=sessionStorage.getItem('hora')
var data=sessionStorage.getItem('data')
if(!lognome||lognome==''||!logEmail||logEmail==''){

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
auth.signInWithPopup(provider)
.then((result) => {
const user = result.user;
//console.log("Nome:", user.displayName);
//console.log("Email:", user.email);
//console.log("Foto:", );
 localStorage.setItem('GoogleFoto',user.photoURL)
 localStorage.setItem('GoogleEmail',user.email);
 localStorage.setItem('GoogleNome',user.displayName);
var nome_= user.displayName
var resp=nome_.split(' ');
var nome1=resp[0]
var nome2= resp[1]
var Usuário=`${nome1}`;

//document.getElementById('lblUser').innerHTML=`Olá, ${nome1}`;
document.getElementById('nomeParagrafo').innerHTML=`Olá, ${nome1}`;
localStorage.setItem('GoogleNome_Abreviado', `${Usuário}`)
document.getElementById('imgMenuUser').src=`${user.photoURL}`;
//document.getElementById('imgUser').src=`${user.photoURL}`;

var ddg= firebase.firestore()
ddg.collection('UsuáriosGoogle').doc(`${user.email}`).set({
Nome:user.displayName,
Email:user.email,
Foto:user.photoURL,
NomeAbrev:Usuário,
Logado:'Logao',
Data:data,
Hora:hora,
})
 //document.getElementById('divADM').style.display='block'
 // document.getElementById('menAD').style.display='block';
  //localStorage.setItem('ADM','ADM_Logado')
})
.catch((error) => {
console.error("Erro ao autenticar:", error);
})
}
}
//loginComGoogle() 
function iniciarUserFirebase(){
var foto= localStorage.getItem('GoogleFoto')
var emailUser= localStorage.getItem('GoogleEmail');
var nomeUser= localStorage.getItem('GoogleNome');
if(emailUser){
var dbif= firebase.firestore()
dbif.collection('UsuáriosGoogle').doc(emailUser).get().then((doc=>{
if(doc){
var doc =doc.data()

//document.getElementById('lblUser').innerHTML=`Olá, ${doc.NomeAbrev}`;
document.getElementById('nomeParagrafo').innerHTML=`Olá, ${doc.NomeAbrev}`;
 var foto= localStorage.getItem('ImagemADM_');
      if(!foto|| foto==''){
document.getElementById('imgMenuUser').src= doc.Foto;
      }else{
document.getElementById('imgMenuUser').src= foto;
      }
//document.getElementById('imgUser').src= doc.Foto;
localStorage.setItem('idUser', doc.Email);
}else{
//alert(`Nome: ${doc.Usuário}`)
}
}))
}
}
iniciarUserFirebase()

document.getElementById('imgMenuUser').addEventListener('click', function(){
       var foto= localStorage.getItem('ImagemADM_');
      if(!foto|| foto==''){
    var conf= localStorage.getItem('GoogleFoto')
      }else{
      var conf= foto;
      }
var logEmail = localStorage.getItem('GoogleEmail');
if(!conf|| conf==''||!logEmail|| logEmail==''||conf==null||logEmail==null){
// Swal.fire('','Você Precisa se conectar com sua conta do Google!','')
loginComGoogle()
}else{

Swal.fire({
title: `Perfil Google`,
html: `
<img id='imimg' src="" alt="" width="280"> <br>
<label id='nomeUserCuston' >User</label><br>
<label id='EmailUserCuston' >Email</label><br>
<br><label id='deslogar' style="cursor:pointer">Desconectar conta</label>
`,
background: 'hsl(113, 100%, 2%)',
color: '#fafafa',
showCloseButton: true,
showConfirmButton: false,
customClass: { popup: 'my-custom_img' },
didOpen: () => { document.body.style.paddingRight = '0px'; }
});

document.getElementById('imimg').src=conf;
document.getElementById('EmailUserCuston').innerHTML=logEmail
var nome= localStorage.getItem('GoogleNome_Abreviado')
document.getElementById('nomeUserCuston').innerHTML= `Olá, ${nome}`;

// Quando clicar em "Trocar de foto"
document.getElementById('deslogar').addEventListener('click', function(){
  localStorage.setItem('idUser', '');
deslogar()
});
}
});
document.getElementById('nomeParagrafo').addEventListener('click', function(){
  document.getElementById('imgMenuUser').click()
})

// DESLOGAR CONTA GOOGLE E DADOS
function deslogar(){
    firebase.auth().signOut().then(() => {
        localStorage.removeItem('GoogleFoto');
        localStorage.removeItem('GoogleEmail');
        localStorage.removeItem('GoogleNome');
        localStorage.removeItem('GoogleNome_Abreviado');
        localStorage.removeItem('ADM');
        localStorage.removeItem('SenhaADM_');
        localStorage.removeItem('NomeADM_');
        localStorage.removeItem('EmailADM_');
        localStorage.removeItem('ImagemADM_');
        localStorage.removeItem('idUser');
        sessionStorage.clear();
        window.location.reload();
    }).catch((error) => {
        alert('Erro ao deslogar:');
    });
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Email
document.getElementById('emailMenu').addEventListener('click', function(){
var destinatario = 'imoveispraiamaripm@gmail.com'//sessionStorage.getItem('EmailAdmin');
var assunto = "🏡 Imóveis Praia & Mar";
var corpo = "Olá, gostaria de falar sobre IMÓVEIS.";
var isMobile = /Android|iPhone/i.test(navigator.userAgent);
if(isMobile){
window.location.href = `mailto:${destinatario}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
} else {
window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${destinatario}&su=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`,"_blank");
}
});

//Funções de adiministradores
document.getElementById('divADM').addEventListener('click',function(){
Swal.fire({
title: `Funções Adm <span class="material-symbols-outlined">verified_user</span>`,
html: `
<div id='funADM'>
<p id='funADM01'><span class="material-symbols-outlined">real_estate_agent</span> Cadastrar Imóvel </p>
<p id='funADM02'> <span class="material-symbols-outlined">home_work</span> Imóveis Cadastrados </p>
<p id='funADM03'><span class="material-symbols-outlined">currency_exchange</span> Imóveis Vendidos</p>
<p id='funADM04'><span class="material-symbols-outlined">other_houses</span> Imóveis Alugados</p>
<p id='funADM05'><span class="material-symbols-outlined">delete</span> Imóveis Exluidos</p>
<p id='funADM06'><span class="material-symbols-outlined">family_group</span> Corretores</p>
</div>
`,
background: 'hsl(113, 100%, 2%)',
color: '#fafafa',
showCloseButton: true,
showConfirmButton: false,
customClass: { popup: 'my-custom_img' },
didOpen: () => { document.body.style.paddingRight = '0px'; }
});
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// SEÇÃO ADMINISTRADORES
document.getElementById('btnADM_').addEventListener('click', function(){
document.getElementById('divADM').click()
})
// Divs Contatos
document.getElementById('emailCont').addEventListener('click',function(){
document.getElementById('emailMenu').click()
})
document.getElementById('a_ADM').addEventListener('click', function(){
document.getElementById("optflex01Pesq").style.display = "none";
document.getElementById("dpsetacima").style.display = "none";
document.getElementById("dpsetaBaixo").style.display = "Block";
document.getElementById("opçãoHeader").style.display = "block";
document.getElementById("optdivFlax").style.display = "none";
document.getElementById("optdivFlax2").style.display = "block";
document.getElementById("optdivFlax2").style.display = "flex";
var btnOpt2 = document.getElementById("btnOpt2");
btnOpt2.className='btnHederAlternativa'
var icone= document.getElementById('munuIcon');
icone.textContent='menu_open'
});

document.getElementById('divADM').style.display='none'
document.getElementById('menAD').style.display='none';
var SeçãoAMD= localStorage.getItem('ADM');
if(SeçãoAMD==='ADM_Logado'){
document.getElementById('divADM').style.display='block'
document.getElementById('menAD').style.display='block';
var foto= localStorage.getItem('ImagemADM_');
document.getElementById('imgMenuUser').src= foto
}else{
localStorage.setItem('ADM','')
document.getElementById('divADM').style.display='none'
document.getElementById('menAD').style.display='none';
}
document.getElementById('divADM').style.display='none';
document.getElementById('menAD').style.display='none';

const emailAtual = localStorage.getItem('GoogleEmail');
firebase.firestore()
.collection('Administradores')
.where('Email', '==', emailAtual)
.get()
.then(snapshot => {

  if(!snapshot.empty){

      document.getElementById('divADM').style.display='block';
      document.getElementById('menAD').style.display='block';
      var SeçãoAMD= localStorage.getItem('ADM');
  
      var adm= firebase.firestore()
      var produtosRef = adm.collection(`Administradores`);
      produtosRef.get().then((querySnapshot) => {
      querySnapshot.forEach(doc => {
      var doc = doc.data();
      var itemss= querySnapshot.size;

      if(doc.Email=== emailAtual){
      document.getElementById('divADM').style.display='block';
      document.getElementById('menAD').style.display='block';
      if( SeçãoAMD!='ADM_Logado'){
      if(doc.Foto){
      document.getElementById('imgMenuUser').src= doc.Foto
} else{
Swal.fire(`Acesso Adm Ativo`,`<b>Bem vindo administrador(a): ${doc.Nome} \n</b>`,`success`)
}
localStorage.setItem('SenhaADM_', doc.Senha);
localStorage.setItem('NomeADM_', doc.Nome);
localStorage.setItem('EmailADM_', doc.Email);
localStorage.setItem('ImagemADM_', doc.Foto);
}
      }
    })
    })
      localStorage.setItem('ADM','ADM_Logado');
  }else{
      localStorage.removeItem('ADM');
      document.getElementById('divADM').style.display='none';
      document.getElementById('menAD').style.display='none';
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////