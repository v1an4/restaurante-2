function comecar(){
   var nome = document.getElementById("exampleFormControlInput1").value;
   show(nome);

}

function show(nome){
   document.getElementById("nomeprint").textContent = nome;
   var div = document.getElementById("selects-dic");
   if(nome && nome.trim() !== ""){
       div.style.display = "block"
       document.getElementById("exampleFormControlInput1").style.background = "none";
   }else{
       document.getElementById("error").style.display = "flex"
   }
   
}

function fechar(){
   document.getElementById("error").sty
}