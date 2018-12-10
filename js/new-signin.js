(function(){
  var overlay=document.querySelector(".overlay");
  var overlayBtn=document.querySelector(".login");
    overlayBtn.addEventListener("click",function(){
   overlay.classList.add("overlay--visible");
    var closeBtn=overlay.querySelector(".btn--close");
    closeBtn.addEventListener("click",function(){
      overlay.classList.remove("overlay--visible");
    });
    
  });
 
  var overlayReg=document.querySelector(".overlay__reg");
  var overlayBtnReg=document.querySelector(".register");
    overlayBtnReg.addEventListener("click",function(){
   overlayReg.classList.add("overlay--visible");
    var closeBtnReg=overlayReg.querySelector(".btn--close");
    closeBtnReg.addEventListener("click",function(){
      overlayReg.classList.remove("overlay--visible");
    });
    
  });
  
})();

