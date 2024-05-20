var container = document.getElementById("container");
const copyContainer = document.getElementById("copyContainer");
let textCopy = "";

function Generate(){
  container.style.border = `${document.getElementById("borderSize").value}px ${document.getElementById("borderColor").value} ${document.querySelector('input[name="borderStyle"]:checked').value }`
  container.style.borderRadius = `${document.getElementById("borderRadius").value}${document.getElementById("unidMedida").value}`;
}

function UnidMedida(){
  if(document.getElementById("unidMedida").value == "%"){
    document.getElementById("borderRadius").max = "100";
  }
  if(document.getElementById("unidMedida").value == "px" || document.getElementById("unidMedida").value == "rem"){
    document.getElementById("borderRadius").max = "100000";
  }
}
function CopyContainer(){
  textCopy = `.container{
    border: ${document.getElementById("borderSize").value}px ${document.getElementById("borderColor").value} ${document.querySelector('input[name="borderStyle"]:checked').value};
    border-radius: ${document.getElementById("borderRadius").value}${document.getElementById("unidMedida").value};
  }`
  copyContainer.value = textCopy ;
 }
 function Copy(){
  copyContainer.select();
  copyContainer.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(textCopy);
 }

document.getElementById("generate").addEventListener("click", Generate );
document.getElementById("unidMedida").addEventListener("mousedown", UnidMedida);
document.getElementById("generate").addEventListener("click", CopyContainer);
document.getElementById("copyButton").addEventListener("click", Copy) ;

