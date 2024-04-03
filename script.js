// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });



Shery.hoverWithMediaCircle(".hover-target" /* Element to target.*/, {
  images: ["", "image2.jpg", "image3.jpg"] /*OR*/,
  //videos: ["video1.mp4", "video2.mp4"],
});




var img=document.getElementById("allimages")
document.querySelector("#cover").addEventListener("mouseenter",function () {
   img.style.display="block"
  })
  document.querySelector("#cover").addEventListener("mouseleave",function () {
    img.style.display="none"
   })
   document.querySelectorAll(".elem").forEach(function(e){
    e.addEventListener("mouseenter",function(){
       var src= e.getAttribute("imgurl")
       console.log(src)
      img.style.backgroundImage="url("+src+")"
    })
   })

   document.querySelectorAll(".textword").forEach(function(e){
    e.addEventListener("click",function(){
     var all= document.getElementsByClassName("textword")
     var i;
     for(i=0;i<all.length;i++){
      all[i].style.color="#423c37"
      all[i].style.borderLeft="6px solid #423c37"
     }
      e.style.color="white"
     var src=e.getAttribute("imgurl")
      document.getElementById("fourright").style.backgroundImage=`url(${src})`
      e.style.borderLeft="6px solid red"
      var p=e.getAttribute("text")
      document.getElementById("swo").innerHTML=p
    })
   })



   var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  