// MENU
function toggleMenu(){
document.getElementById("menu").classList.toggle("active");
}

// SCROLL
function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// CONTADOR
function animate(id, end){
let obj=document.getElementById(id);
let start=0;
let interval=setInterval(()=>{
start+=5;
obj.innerText=start+"+";
if(start>=end) clearInterval(interval);
},30);
}

if(document.getElementById("clientes")){
animate("clientes",350);
animate("instalacoesCount",500);
animate("anos",5);
}

// LOGIN
function login(){
let user=document.getElementById("user").value;
let pass=document.getElementById("pass").value;

if(user==="admin" && pass==="1234"){
localStorage.setItem("auth","true");
document.getElementById("login").style.display="none";
document.getElementById("dashboard").style.display="block";
loadProdutos();
}else{
alert("Login inválido");
}
}

function logout(){
localStorage.removeItem("auth");
location.reload();
}

if(localStorage.getItem("auth")==="true"){
if(document.getElementById("dashboard")){
document.getElementById("login").style.display="none";
document.getElementById("dashboard").style.display="block";
loadProdutos();
}
}

// PRODUTOS
function addProduto(){
let nome=document.getElementById("nomeProduto").value;
let preco=document.getElementById("precoProduto").value;

let produtos=JSON.parse(localStorage.getItem("produtos")) || [];
produtos.push({nome,preco});
localStorage.setItem("produtos",JSON.stringify(produtos));
loadProdutos();
}

function loadProdutos(){
let lista=document.getElementById("listaProdutos");
let produtos=JSON.parse(localStorage.getItem("produtos")) || [];
if(lista){
lista.innerHTML="";
produtos.forEach(p=>{
lista.innerHTML+=`<p>${p.nome} - R$ ${p.preco}</p>`;
});
}
let vitrine=document.getElementById("produtos");
if(vitrine){
vitrine.innerHTML="";
produtos.forEach(p=>{
vitrine.innerHTML+=`
<div class="card">
<h3>${p.nome}</h3>
<p>R$ ${p.preco}</p>
<button class="btn">Comprar</button>
</div>`;
});
}
}
loadProdutos();