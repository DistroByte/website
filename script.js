// window.onbeforeunload = function () {
//   return "Two buttons will be below this message asking if the user wants to stay on this page or leave.";
// }

window.onload = function () {
  try {
    document.getElementById('contact-message').value = '';
  } catch (e) { }
}

var dirFileState = "block"
var dateState = "none"
var sizeState = "none"
var bothState = "none"

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

function showDate() {
  console.log(dateState);
  if (dateState === "none") {
    dateState = "block";
  }

  if (dateState === "block" && dirFileState === "block") {
    document.getElementById("dirsDates").style.display = "block";
    document.getElementById("dirs").style.display = "none";
  } else {
    document.getElementById("dirsDates").style.display = "none";
    document.getElementById("dirs").style.display = "block";
  }
}

function showSize() {

}

function showBoth() {

}

function showNone() {
  dateState = "none";
  sizeState = "none";
  bothState = "none";
  if (dirFileState === "block") {
    document.getElementById("dirs").style.display = "block";
  } else {
    document.getElementById("files").style.display = "block";
  }
  document.getElementById("dirsDates").style.display = "none";
  document.getElementById("filesDates").style.display = "none";
  document.getElementById("filesSizes").style.display = "none";
  document.getElementById("filesDatesSizes").style.display = "none";
}