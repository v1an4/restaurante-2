function comecar(){
var nome= document.getElementById("exampleFormcontrolInput1") .value; 
show(nome)
}

function show(nome){
document.getElementById("nomeprint") .textContent = nome;
var div =document.getElementById("selects-div");
if(nome && nome.trim() !== ""){
   div.style.display = "block"
   document.getElementById("exampleFormControlInput1").style.background = "none"; 
}else{
 document.getElementsById("error").style.display = "flex";
 }

}

function fechar(){
document.getElementById("error").style.display = "none";
document.getElementById("exampleformControlInput1").style.background = "lightpink";
}