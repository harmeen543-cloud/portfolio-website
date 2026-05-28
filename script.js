const typing = document.querySelector(".typing")

const words = [
    "Graphic Designer",
    "Frontend Developer",
    "Video editing",
    
]

let wordIndex = 0
let charIndex = 0

function typeEffect(){

    if(charIndex < words[wordIndex].length){

        typing.textContent += words[wordIndex].charAt(charIndex)

        charIndex++

        setTimeout(typeEffect,100)

    }

    else{

        setTimeout(eraseEffect,1500)

    }

}

function eraseEffect(){

    if(charIndex > 0){

        typing.textContent = words[wordIndex].substring(0,charIndex-1)

        charIndex--

        setTimeout(eraseEffect,50)

    }

    else{

        wordIndex++

        if(wordIndex >= words.length){

            wordIndex = 0

        }

        setTimeout(typeEffect,300)

    }

}

window.onload = typeEffect
function showMenu(){
    document.querySelector("nav").classList.toggle("active");
}