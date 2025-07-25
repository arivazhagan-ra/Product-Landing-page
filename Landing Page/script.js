function revealFunction(){
  // console.log("revealFunction called");
  window.sr = ScrollReveal({duration:1350, distance:'250px',easing:'ease-out'});
  sr.reveal('.reveal-left',{origin:'left', reset:true});
  sr.reveal('.reveal-bottom',{origin:'bottom', reset:true});
  sr.reveal('.reveal-right',{origin:'right', reset:true});
}

window.addEventListener('load',()=>{
  revealFunction();
})
