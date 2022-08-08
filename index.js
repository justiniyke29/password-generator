const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
"R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", 
"7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[",
"}","]",",","|",":",";","<",">",".","?","/"];
let passwordLength= 10;
let passwordOneEl= document.getElementById("password1-el")
 let passwordTwoEl= document.querySelector("#password2-el");
let passwordTwo= "";  
function getRandomCharacter(){
    let randomChar= Math.floor(Math.random()*characters.length)
    return characters[randomChar]
}
function button(){
    let passwordOne="";
    for (i=0; i<passwordLength; i++){
        passwordOne+=getRandomCharacter()
    }
   return passwordOne
  
}
let generatedPassword= button()
passwordOneEl.textContent=generatedPassword
