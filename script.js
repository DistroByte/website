// window.onbeforeunload = function () {
//   return "Two buttons will be below this message asking if the user wants to stay on this page or leave.";
// }

window.onload = function () {
  try {
    document.getElementById('contact-message').value = '';
    toggleDirFile();
  } catch (e) { }
}

var dirFileState = "block"

function toggleDirFile() {
  if (dirFileState === "none") {
    dirFileState = "block";
  } else {
    dirFileState = "none";
  }

  if (dirFileState === "block") {
    document.getElementById("dirs").style.display = "block";
    document.getElementById("files").style.display = "none";
  } else {
    document.getElementById("dirs").style.display = "none";
    document.getElementById("files").style.display = "block";
  }
}