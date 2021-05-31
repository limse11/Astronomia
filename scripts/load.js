document.body.onload = function(){
  setTimeout(load, 1400);
}
function load(){
  document.querySelector('#loading-screen').style.height = "0vh";
  document.querySelector('#loading-img').style.display = "none";
}
