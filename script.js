let idade = 33

if (idade >= 18){
    console.log( "maior de 18 anos" )
 } else { 
    console.log = ("você é menor de 18 anos") 
 }

let humano = true

if (idade >= 18 && humano === true){
    console.log("você tem mais de 18 anos, e você é humano")
 } else {
    console.log("você não é maior de 18 anos, ou não é humano")
 }

let mes = "agosto"
 
if (mes == "janeiro" || mes == "dezembro" ){
    console.log("parabens, você nasceu em agosto")
 } else{
    console.log("parabens, você nasceu em janeiro ou dezembro")
 }

let nome = "Ricardo"
 
if(nome[0] == "R"){
    console.log("seu nome começa com 'R'")
 } else{
    console.log("seu nome não começa com 'R'")
 }

let sobrenome = "Borges"
 
if (sobrenome.length >6 || nome.substring (0,1) === "E"){
    console.log("seu sobrenome tem menos de 6 letras ou seu nome começa com 'E'")
 } else{
    console.log("seu nome não tem menos de 6 letras ou seu nome não começa com 'E'")
 }