let generateBtn = document.getElementById("generate-btn");
let copyBtn = document.getElementById("copy-btn");
let outputColor = document.getElementById("output-color");
let outputCode = document.getElementById("output-code");
let clearBtn = document.getElementById("clear")
let hexString = "0123456789abcdef";
let audio = new Audio("sound/click.wav")

let randomColor = () => {
    let hexCode = "#";
    for (i = 0; i < 6; i++) {
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
}

let generateGrad = () => {
    let colorOne = randomColor();
    let colorTwo = randomColor();
    audio.play()
    let angle = Math.floor(Math.random() * 360);
    outputColor.style.background = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
    outputCode.value = `background: linear-gradient(${angle}deg, ${colorOne}, ${colorTwo});`;
}

copyBtn.addEventListener("click", () => {
    outputCode.select();
});

copyBtn.addEventListener("click" , () => {
    audio.play()
})

generateBtn.addEventListener("click", generateGrad);
onload = generateGrad;

clearBtn.addEventListener("click" , ()=> {
    audio.play()
    outputColor.style.background = `linear-gradient(70deg , lightblue , lightgreen)`
})