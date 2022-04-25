function toggleMenu(){
//  console.log("It worked!");
  document.getElementById("primaryNav").classList.toggle("open");  
}

const x=document.getElementById('hamburgerBtn');

x.onclick = toggleMenu;