var crsr = document.querySelector(".crsr")


document.addEventListener("mousemove", function(dets){
   crsr.style.left = dets.x+"px" 
   crsr.style.top = dets.y+"px" 
   blur.style.left = dets.x-250+"px" 
   blur.style.top = dets.y -250+"px" 
 })