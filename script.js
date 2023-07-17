const speakbtn = document.querySelector("#play")
const text = document.querySelector("#text")

speakbtn.addEventListener("click", ()=>{
    const speech = new SpeechSynthesisUtterance(text.value)
    speechSynthesis.speak(speech)
})

