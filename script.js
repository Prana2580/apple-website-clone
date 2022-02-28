console.log('hello!');

function openBag() {
  document.getElementById('bagCont').style.display = 'flex';
}

 function hideBag() {
  document.getElementById('bagCont').style.display = 'none';
} 

function openMenu(){
  document.getElementById("mobileMenu").style.height="150vh";
  document.getElementById("mView").style.opacity="1";
  document.getElementById("mView").style.height="150px";
}

function hideMenu(){
  document.getElementById("mobileMenu").style.height="50px";
  document.getElementById("mView").style.opacity="0";
}



/* 
function openMenu(x) {
 x.classList.toggle("fa-thumbs-down")
} */
/* 
function openMenu(){
  document.getElementById("mobileMenu").style.transition= "0.5s"; 
} */


