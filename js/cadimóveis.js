


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


document.querySelectorAll('#divFlax div').forEach(length => {
length.addEventListener('click', function () {
 


  Swal.fire(length.textContent,'','')



})
})