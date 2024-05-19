const btnGoLeft = document.getElementById("BtnGoLeft");
const btnGoRight = document.getElementById("BtnGoRight");
const instantiateCourse = document.getElementById("InstantiateCourse");
let instantiateCourseLeft = 0;
const modulesValue = document.getElementById("ModulesValue");
const attModules = document.getElementById("AttModules")

console.log(modulesValue.value);

function MoveRight(){
	instantiateCourseLeft -= 1000;
	instantiateCourse.style.left = `${instantiateCourseLeft + "px"} `;
	console.log(instantiateCourse.style.left);
}
function MoveLeft(){
	if(instantiateCourseLeft < 0){
		instantiateCourseLeft += 1000;
		instantiateCourse.style.left = `${instantiateCourseLeft + "px"} `;
		console.log(instantiateCourse.style.left);
	}
}


function Module1(){
	instantiateCourse.innerHTML += `<div class="content">Aula 1</div>` ;
}
function Module2(){
	instantiateCourse.innerHTML += `<div class="content">Aula 2</div>`;
}
function Module3(){
	instantiateCourse.innerHTML += `<div class="content">Aula 3</div>`;
}
function Module4(){
	instantiateCourse.innerHTML += `<div class="content">Aula 4</div>`;
}
function Module5(){
	instantiateCourse.innerHTML += `<div class="content">Aula 5</div>`;
}
function Module6(){
	instantiateCourse.innerHTML += `<div class="content">Aula 6</div>`;
}
function Module7(){
	instantiateCourse.innerHTML += `<div class="content">Aula 7</div>`;
}
function Module8(){
	instantiateCourse.innerHTML += `<div class="content">Aula 8</div>`;
}
function Module9(){
	instantiateCourse.innerHTML += `<div class="content">Aula 9</div>`;
}
function Module10(){
	instantiateCourse.innerHTML += `<div class="content">Aula 10</div>`;
}

function ChangeModule(){
	
	
	instantiateCourse.innerHTML = "";
	switch (modulesValue.value){
		case "Módulo 01":
			Module1();
			break;
		case "Módulo 02":
			Module2();
			break;
		case "Módulo 03":
			Module3();
			break;
		case "Módulo 04":
			Module4();
			break;
		case "Módulo 05":
			Module5();
			break;
		case "Módulo 06":
			Module6();
			break;
		case "Módulo 07":
			Module7();
			break;
		case "Módulo 08":
			Module8();
			break;
		case "Módulo 09":
			Module9();
			break;
		case "Módulo 10":
			Module10();
			break;
	}

	modulesValue.value = "";
}

attModules.addEventListener("click", ChangeModule);
// modulesValue.addEventListener("click", () => {console.log(modulesValue.value)});
btnGoRight.addEventListener("click", MoveRight);
btnGoLeft.addEventListener("click", MoveLeft);
