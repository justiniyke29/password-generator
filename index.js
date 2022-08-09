const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
"R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", 
"7", "8", "9"];
let password="";
let passwordLength= 6;
 let passwordEl= document.getElementById("password-el") 
function getRandomCharacter(){
    let randomChar= Math.floor(Math.random()*characters.length)
    return characters[randomChar] 
}
function renderPassword(){
    for (i=0; i<passwordLength; i++){
        password+=getRandomCharacter()
    }
   genPassword()
}

function genPassword(){
    passwordEl.textContent = password
}
let copyToClipboardButton = document.getElementById("copyToClipboard");

copyToClipboardButton.addEventListener('click', () => {
    let textToCopy = document.getElementById("password-el").innerText;
    if(navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert("copyToClipboard")
        })
    } else {
        console.log('Browser Not compatible')
    }

})
