


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


// função limpar cad
function limparcad(){
   document.getElementById('NumSerie').innerHTML= `######`,
     document.getElementById('listRef1').innerHTML='Imóvel tipo'
     document.getElementById('reflist2').innerHTML='Lista referente?'
        document.getElementById('titulo').innerHTML='Titulo do Imóvel'
           document.getElementById('decrit').innerHTML='Descrição do imóvel'
              document.getElementById('Quartos').innerHTML='Quartos'
                 document.getElementById('Salas').innerHTML='Salas'
                    document.getElementById('Cozinhas').innerHTML='Cozinhas'
                       document.getElementById('Banheiros').innerHTML='Banheiros'
}

document.querySelectorAll('#divFlax div').forEach(length => {
length.addEventListener('click', function () {
 

 if(length.textContent==='Casa'){
   document.getElementById('cadvPrimary').style.display='block'
  limparcad()
     document.getElementById('NumSerie').innerHTML= `######`,
     document.getElementById('listRef1').innerHTML=length.textContent
      document.querySelectorAll('.my-custonRef2 h2').innerHTML=document.querySelectorAll('#custonRef2 p')
     geradorCodigo()
     
Swal.fire({
title: `Imóvel`,
html: `
<div id='custonRef2'>
   <p id='Casa'>Casa</p> 
    <p id='Edícula'>Edícula</p>
     <p id='Casa_geminada'>Casa geminada</p>
      <p id='Casa_em_condomínio'>Casa em condomínio</p>
</div>
`,
background: 'hsl(208, 100%, 98%)',
color: '#080808',
showCloseButton: true,
showConfirmButton: false,
customClass: { popup: 'my-custonRef2' },
didOpen: () => { document.body.style.paddingRight = '0px'; }
});

document.querySelectorAll('#custonRef2 p').forEach(length => {
length.addEventListener('click', function () {
 document.getElementById('reflist2').innerHTML=length.textContent;
Swal.close()
})
})
 }
 
 if(length.textContent==='Sobrado'){
  document.getElementById('cadvPrimary').style.display='block'
  limparcad()
     document.getElementById('NumSerie').innerHTML= `######`,
     document.getElementById('listRef1').innerHTML=length.textContent
     document.querySelectorAll('.my-custonRef2 h2').innerHTML=document.querySelectorAll('#custonRef2 p')
     geradorCodigo()
     
Swal.fire({
title: `Imóvel`,
html: `
<div id='custonRef2'>
   <p id='Sobrado'>Sobrado</p> 
    <p id='Sobrado_em_condomínio'>Sobrado em condomínio</p>
   
</div>
`,
background: 'hsl(208, 100%, 98%)',
color: '#020202',
showCloseButton: true,
showConfirmButton: false,
customClass: { popup: 'my-custonRef2' },
didOpen: () => { document.body.style.paddingRight = '0px'; }
});

document.querySelectorAll('#custonRef2 p').forEach(length => {
length.addEventListener('click', function () {
 document.getElementById('reflist2').innerHTML=length.textContent;
Swal.close()
})
})
 }
 if(length.textContent==='Apartamento'){
   document.getElementById('cadvPrimary').style.display='block'
  limparcad()
     document.getElementById('NumSerie').innerHTML= `######`,
     document.getElementById('listRef1').innerHTML=length.textContent
     document.querySelectorAll('.my-custonRef2 h2').innerHTML=document.querySelectorAll('#custonRef2 p')
     geradorCodigo()
     
Swal.fire({
title: `Imóvel`,
html: `
<div id='custonRef2'>
   <p id='Apartamento'>Apartamento</p> 
    <p id='Kitnet'>Kitnet</p>
     <p id='Cobertura'>Cobertura</p>
   
</div>
`,
background: 'hsl(208, 100%, 98%)',
color: '#020202',
showCloseButton: true,
showConfirmButton: false,
customClass: { popup: 'my-custonRef2' },
didOpen: () => { document.body.style.paddingRight = '0px'; }
});

document.querySelectorAll('#custonRef2 p').forEach(length => {
length.addEventListener('click', function () {
 document.getElementById('reflist2').innerHTML=length.textContent;
Swal.close()
})
})
 }

 if(length.textContent==='Terreno'){
   document.getElementById('cadvPrimary').style.display='block'
  limparcad()
     document.getElementById('NumSerie').innerHTML= `######`,
     document.getElementById('listRef1').innerHTML=length.textContent
     document.querySelectorAll('.my-custonRef2 h2').innerHTML=document.querySelectorAll('#custonRef2 p')
     geradorCodigo()
     
Swal.fire({
title: `Imóvel`,
html: `
<div id='custonRef2'>
   <p id='Terreno'>Terreno</p> 
    <p id='Lote'>Lote</p>
     <p id='Área'>Área</p>
   
</div>
`,
background: 'hsl(208, 100%, 98%)',
color: '#020202',
showCloseButton: true,
showConfirmButton: false,
customClass: { popup: 'my-custonRef2' },
didOpen: () => { document.body.style.paddingRight = '0px'; }
});

document.querySelectorAll('#custonRef2 p').forEach(length => {
length.addEventListener('click', function () {
 document.getElementById('reflist2').innerHTML=length.textContent;
Swal.close()
})
})
 }

 if(length.textContent==='Comercial'){
   document.getElementById('cadvPrimary').style.display='block'
  limparcad()
     document.getElementById('NumSerie').innerHTML= `######`,
     document.getElementById('listRef1').innerHTML=length.textContent
     document.querySelectorAll('.my-custonRef2 h2').innerHTML=document.querySelectorAll('#custonRef2 p')
     geradorCodigo()
     
Swal.fire({
title: `Imóvel`,
html: `
<div id='custonRef2'>
   <p id='Sala_comercial'>Sala comercial</p> 
    <p id='Loja'>Loja</p>
     <p id='Galpão'>Galpão</p>
   
</div>
`,
background: 'hsl(208, 100%, 98%)',
color: '#020202',
showCloseButton: true,
showConfirmButton: false,
customClass: { popup: 'my-custonRef2' },
didOpen: () => { document.body.style.paddingRight = '0px'; }
});

document.querySelectorAll('#custonRef2 p').forEach(length => {
length.addEventListener('click', function () {
 document.getElementById('reflist2').innerHTML=length.textContent;
Swal.close()
})
})
 }

 if(length.textContent==='Rurais'){
   document.getElementById('cadvPrimary').style.display='block'
  limparcad()
     document.getElementById('NumSerie').innerHTML= `######`,
     document.getElementById('listRef1').innerHTML=length.textContent
     document.querySelectorAll('.my-custonRef2 h2').innerHTML=document.querySelectorAll('#custonRef2 p')
     geradorCodigo()
     
Swal.fire({
title: `Imóvel`,
html: `
<div id='custonRef2'>
   <p id='Chácara'>Chácara</p> 
    <p id='Sítio'>Sítio</p>
     <p id='Fazenda'>Fazenda</p>
   
</div>
`,
background: 'hsl(208, 100%, 98%)',
color: '#020202',
showCloseButton: true,
showConfirmButton: false,
customClass: { popup: 'my-custonRef2' },
didOpen: () => { document.body.style.paddingRight = '0px'; }
});

document.querySelectorAll('#custonRef2 p').forEach(length => {
length.addEventListener('click', function () {
 document.getElementById('reflist2').innerHTML=length.textContent;
Swal.close()
})
})
 }

})
})
//////////////////////////////////////////////////////////////////////////////////////////

//casa edite
document.getElementById('reflist2').addEventListener('click', function(){
  var resp= document.getElementById('listRef1').innerHTML;
  if(resp==='Casa'){
Swal.fire({
title: `Imóvel`,
html: `
<div id='custonRef2'>
   <p id='Casa'>Casa</p>
    <p id='Edícula'>Edícula</p>
     <p id='Casa_geminada'>Casa geminada</p>
      <p id='Casa_em_condomínio'>Casa em condomínio</p>
</div>
`,
background: 'hsl(208, 100%, 98%)',
color: '#070707',
showCloseButton: true,
showConfirmButton: false,
customClass: { popup: 'my-custonRef2' },
didOpen: () => { document.body.style.paddingRight = '0px'; }
});
document.querySelectorAll('#custonRef2 p').forEach(length => {
length.addEventListener('click', function () {
 document.getElementById('reflist2').innerHTML=length.textContent;
 Swal.close()
})
})
  }
})

// edite sobrado
document.getElementById('reflist2').addEventListener('click', function(){

   var resp= document.getElementById('listRef1').innerHTML;
  if(resp==='Sobrado'){
   
Swal.fire({
title: `Imóvel`,
html: `
<div id='custonRef2'>
   <p id='Sobrado'>Sobrado</p> 
    <p id='Sobrado_em_condomínio'>Sobrado em condomínio</p>
   
</div>
`,
background: 'hsl(208, 100%, 98%)',
color: '#020202',
showCloseButton: true,
showConfirmButton: false,
customClass: { popup: 'my-custonRef2' },
didOpen: () => { document.body.style.paddingRight = '0px'; }
});

document.querySelectorAll('#custonRef2 p').forEach(length => {
length.addEventListener('click', function () {
 document.getElementById('reflist2').innerHTML=length.textContent;
Swal.close()
})
})
  }
 })

 //edite apartamentos
document.getElementById('reflist2').addEventListener('click', function(){
  var resp= document.getElementById('listRef1').innerHTML;
  if(resp==='Apartamento'){
Swal.fire({
title: `Imóvel`,
html: `
<div id='custonRef2'>
   <p id='Apartamento'>Apartamento</p> 
    <p id='Kitnet'>Kitnet</p>
     <p id='Cobertura'>Cobertura</p>
   
</div>
`,
background: 'hsl(208, 100%, 98%)',
color: '#070707',
showCloseButton: true,
showConfirmButton: false,
customClass: { popup: 'my-custonRef2' },
didOpen: () => { document.body.style.paddingRight = '0px'; }
});
document.querySelectorAll('#custonRef2 p').forEach(length => {
length.addEventListener('click', function () {
 document.getElementById('reflist2').innerHTML=length.textContent;
 Swal.close()
})
})
  }
})

//edite Terreno
document.getElementById('reflist2').addEventListener('click', function(){
  var resp= document.getElementById('listRef1').innerHTML;
  if(resp==='Terreno'){
Swal.fire({
title: `Imóvel`,
html: `
<div id='custonRef2'>
   <p id='Terreno'>Terreno</p> 
    <p id='Lote'>Lote</p>
     <p id='Área'>Área</p>
   
</div>
`,
background: 'hsl(208, 100%, 98%)',
color: '#070707',
showCloseButton: true,
showConfirmButton: false,
customClass: { popup: 'my-custonRef2' },
didOpen: () => { document.body.style.paddingRight = '0px'; }
});
document.querySelectorAll('#custonRef2 p').forEach(length => {
length.addEventListener('click', function () {
 document.getElementById('reflist2').innerHTML=length.textContent;
 Swal.close()
})
})
  }
})

//edite Sala Comercial
document.getElementById('reflist2').addEventListener('click', function(){
  var resp= document.getElementById('listRef1').innerHTML;
  if(resp==='Comercial'){
Swal.fire({
title: `Imóvel`,
html: `
<div id='custonRef2'>
   <p id='Sala_comercial'>Sala comercial</p> 
    <p id='Loja'>Loja</p>
     <p id='Galpão'>Galpão</p>
   
</div>
`,
background: 'hsl(208, 100%, 98%)',
color: '#070707',
showCloseButton: true,
showConfirmButton: false,
customClass: { popup: 'my-custonRef2' },
didOpen: () => { document.body.style.paddingRight = '0px'; }
});
document.querySelectorAll('#custonRef2 p').forEach(length => {
length.addEventListener('click', function () {
 document.getElementById('reflist2').innerHTML=length.textContent;
 Swal.close()
})
})
  }
})

//edite Rurais
document.getElementById('reflist2').addEventListener('click', function(){
  var resp= document.getElementById('listRef1').innerHTML;
  if(resp==='Rurais'){
Swal.fire({
title: `Imóvel`,
html: `
<div id='custonRef2'>
   <p id='Chácara'>Chácara</p> 
    <p id='Sítio'>Sítio</p>
     <p id='Fazenda'>Fazenda</p>
   
</div>
`,
background: 'hsl(208, 100%, 98%)',
color: '#070707',
showCloseButton: true,
showConfirmButton: false,
customClass: { popup: 'my-custonRef2' },
didOpen: () => { document.body.style.paddingRight = '0px'; }
});
document.querySelectorAll('#custonRef2 p').forEach(length => {
length.addEventListener('click', function () {
 document.getElementById('reflist2').innerHTML=length.textContent;
 Swal.close()
})
})
  }
})
///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////





document.getElementById('divFlax').style.display='none'
document.getElementById('oquecadastrar').addEventListener('click',function(){
    var resp= document.getElementById('divFlax').style.display
if(resp==='none'){
document.getElementById('divFlax').style.display='block'
}else{
document.getElementById('divFlax').style.display='none'
}


})

document.getElementById('divmain').addEventListener('click', function(){
       var resp= document.getElementById('divFlax').style.display
if(resp==='block'){
document.getElementById('divFlax').style.display='none'
}else{

}

})

document.querySelectorAll('.prmaryEscol div').forEach(length=>{
 length.addEventListener('click', function (){
    var div1= document.getElementById('dadv');
    var div2= document.getElementById('endv');
    var div3= document.getElementById('imgdv');
    
    if(length.textContent ==='db Imóvel'){
       div1.className='Activ';
        div2.className='nula';
         div3.className='nula';
         document.getElementById('Cadastro').style.display='block'
    } else if(length.textContent ==='Endereço'){
        div2.className='Activ';
        div1.className='nula';
         div3.className='nula';
          document.getElementById('Cadastro').style.display='none'
    } else {
         div3.className='Activ';
        div1.className='nula';
         div2.className='nula';
         document.getElementById('Cadastro').style.display='none'
    } 
 
    
 })
})

// Gerar código
function geradorCodigo(){
var cod=document.getElementById('NumSerie').innerHTML;
if(!cod|| cod==''||cod=='######'){
var caracteres = 'A1B2C3D4E5F6G7H8I9JK1L2M3N4O5P6Q7R8S9TUVWXYZ';
let codigo = '';
for (let i = 0; i < 6; i++) {
codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
document.getElementById('NumSerie').innerHTML= `${codigo}`
}
} else{
}
}


setInterval(function(){

   var lbl2= document.getElementById('reflist2');
   if(lbl2.innerHTML==='Lista referente?'){
     lbl2.className='lblred'
     document.getElementById('informecad').style.display='none'
   }else{
   lbl2.className='lblblack'
    document.getElementById('informecad').style.display='block'
   }
    var lbl2= document.getElementById('titulo');
   if(lbl2.innerHTML==='Titulo do Imóvel'){
     lbl2.className='lblred'
   }else{
   lbl2.className='lblblack'
   }
    var lbl2= document.getElementById('decrit');
   if(lbl2.innerHTML==='Descrição do imóvel'){
     lbl2.className='lblred'
   }else{
   lbl2.className='lblblack'
   }
    var lbl2= document.getElementById('Quartos');
   if(lbl2.innerHTML==='Quartos'){
     lbl2.className='lblred'
   }else{
   lbl2.className='lblblack'
   }
    var lbl2= document.getElementById('Salas');
   if(lbl2.innerHTML==='Salas'){
     lbl2.className='lblred'
   }else{
   lbl2.className='lblblack'
   }
    var lbl2= document.getElementById('Cozinhas');
   if(lbl2.innerHTML==='Cozinhas'){
     lbl2.className='lblred'
   }else{
   lbl2.className='lblblack'
   }
    var lbl2= document.getElementById('Banheiros');
   if(lbl2.innerHTML==='Banheiros'){
     lbl2.className='lblred'
   }else{
   lbl2.className='lblblack'
   }

},100)

//fecher exit
document.getElementById('exit').addEventListener('click', function(){
  limparcad()
  document.getElementById('dadv').click()
   document.getElementById('cadvPrimary').style.display='none'
})