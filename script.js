
// let slideIndex = 0;
// showSlides();

// var myTimer = null;




// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 8000); 

// }

var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function plusSlides(n) {
  clearTimeout(timer);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n==undefined){n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  timer=setTimeout(showSlides, 8000); 
} 





// function plusSlides(n){
// clearInterval(myTimer);
//     if (n < 0){
//       showSlides(showSlides -= 1);
//     } else {
//      showSlides(showSlides += 1); 
//     }
// }




// $(window).scroll(function (event){
//   var height = $(document).scrollTop();
//   $(".months").show();
//   if (height<500){
//     $(".months").text("Sept")
//   } else if (height<1400){
//     $(".months").text("Oct")
//   } else if (height<2400){
//     $(".months").text("Nov")
//   } else if (height<3200){
//     $(".months").text("Dec")
//   } else if (height<3450){
//     $(".months").text("Jan")
//   } else if (height<3700){
//     $(".months").text("Feb")
//   } else if (height<4600){
//     $(".months").text("Mar")
//   } else if (height<4800){
//     $(".months").text("Apr")
//   };
//   clearTimeout($.data(this, 'scrollTimer'));
//     $.data(this, 'scrollTimer', setTimeout(function() {
//         $(".months").hide()
//     }, 3000);
// });