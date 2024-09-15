function f1(){
var id=document.getElementById("Id").value; 
var regxid=/^[A-Z]{2}[0-6]{6}/;
var spanid=document.getElementById("spid");
if(regxid.test(id)){
    alert("Good");
    }
    else{
        spanid.innerHTML="*";
        spanid.style.color="Red";
    }
var nom=document.getElementById("Nom").value;
var regexnom=/^[A-Z]+/;
var spannom=document.getElementById("spnom");
if(regexnom.test(nom)){
alert("Very Good");
}else{
    spannom.innerHTML="Not Very Good";
    spannom.style.color="red";
}
var prenom=document.getElementById("Prenom").value;
var regexprenom=/^[A-Z]{1}[a-z]+/;
var spanprenom=document.getElementById("spprenom");
if(prenom!=""&&regexprenom.test(prenom)){
alert("Very Very Good Mon frére");
}else{
    spanprenom.innerHTML="Error";
    spanprenom.style.color="red";
}
}