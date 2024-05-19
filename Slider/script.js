const btnGoLeft = document.getElementById("BtnGoLeft");
const btnGoRight = document.getElementById("BtnGoRight");
const instantiateCourse = document.getElementById("InstantiateCourse");
let instantiateCourseLeft = 0;


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

btnGoRight.addEventListener("click", MoveRight);
btnGoLeft.addEventListener("click", MoveLeft);
