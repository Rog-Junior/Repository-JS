const Light = document.getElementById("Light");
const Hexagon = document.getElementById("AreaDetect");
const projectPosition = document.getElementById("ProjectContainer");
let projectNPosition = 0;
const project1 = document.getElementById("project1");
const project2 = document.getElementById("project2");
const project3 = document.getElementById("project3");
const project4 = document.getElementById("project4");

Hexagon.addEventListener("mousemove", function(e) {
    Light.style.left = `${e.clientX}px`;
    Light.style.top = `${e.clientY}px`;
});

const titleValue = document.getElementById("titleValue");
const imgValue = document.getElementById("imgValue");
const textValue = document.getElementById("textValue");
let Title; 
let Text;
let Img;

document.getElementById("close").addEventListener("click" , function () {
	document.getElementById("infoDisable").style.display = "none"
});

project1.addEventListener("click", () => {projectPosition.style.left = `${0 + "px"}`; projectNPosition = 0;});
project2.addEventListener("click", () => {projectPosition.style.left = `${-720 + "px"}` ; projectNPosition = 1; });
project3.addEventListener("click", () => {projectPosition.style.left = `${-1440 + "px"}`; projectNPosition = 2;});
project4.addEventListener("click", () => {projectPosition.style.left = `${-2160 + "px"}`; projectNPosition = 3;});
document.getElementById("javascript").addEventListener("click", function () {
document.getElementById("infoDisable").style.display = "block";

Title = "Javascript";
Text = "JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc.";
img = "./img/js.svg";

titleValue.innerHTML = Title;
textValue.innerHTML = Text;
imgValue.src = img;
});

function start() {

    setTimeout(function() {
        console.log('Hello My Infinite Loop Execution');
        if(projectNPosition == 0){
            projectPosition.style.left = `${-720 + "px"}` ;
            projectNPosition = 1;
        }else if(projectNPosition == 1){
            projectPosition.style.left = `${-1440 + "px"}` ;
            projectNPosition = 2;
        }else if(projectNPosition == 2){
            projectPosition.style.left = `${-2160 + "px"}` ;
            projectNPosition = 3;
        }else if(projectNPosition == 3){
            projectPosition.style.left = `${0 + "px"}` ;
            projectNPosition = 0;
        }
      // Again
      start();

      // Every 3 sec
    }, 3000);
}

// Begins
start();
  


