let time = 5000,
    posAtual = 0,
    imagens = document.querySelectorAll(".imagens img")
    max = imagens.length;


function nextImage(){

    imagens[posAtual].classList.remove("selected");
    posAtual++; 

    if(posAtual >= max){
        posAtual = 0;
    }
    imagens[posAtual].classList.add("selected")

}

function start(){
    setInterval(()=>{
        nextImage();
    },time )
}

window.addEventListener("load",start)