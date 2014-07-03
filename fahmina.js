window.onload = function() {

var cursor = document.getElementById('navCursor');
var originalCursorClass = cursor.className;

document.getElementById('navProjects').onmouseenter = function() {
  cursor.className = 'projects';
}

document.getElementById('navBio').onmouseenter = function() {
  cursor.className = 'bio';
}

document.getElementById('navResume').onmouseenter = function() {
  cursor.className = 'resume';
}

document.getElementById('nav').onmouseleave = function() {
  window.console.log("lol");
  cursor.className = originalCursorClass;
}

}

function openNewBackgroundTab(url){
    var a = document.createElement("a");
    a.href = url;
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
                                true, true, false, true, 0, null);
    a.dispatchEvent(evt);
}