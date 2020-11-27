const character = document.getElementById ("character");
const block=document.getElementById("block");

function jump() {
    console.log(character)
    character.classList.add("animate");
   
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}