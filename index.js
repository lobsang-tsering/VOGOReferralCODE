function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.getElementById("cp_btn").addEventListener("click", copy_password);
document.getElementById("codeButton").addEventListener("click", copy_password);
document.getElementById("VOVOCODE").addEventListener("click", copy_password);
function copy_password() {
  var copyText = document.getElementById("pwd_spn");
  var textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
  alert("Coppied :) ");
}
