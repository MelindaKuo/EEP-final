
var novEvents = {
  
  Event1: ["Fundraiser","11/20","9am-3pm","House","Fundraiser","Optional"],
  Event2: ["Fundraiser","11/6","9am-12pm","House","Fundraiser","Optional"],
  // Event3: ["Event Title","Date","Time","Location","Description","Necessity"],
  
}

var decEvents = {
  
  Event1: ["Event Title","Date","Time","Location","Description","Necessity"],
  // Event2: ["Event Title","Date","Time","Location","Description","Necessity"],
  // Event3: ["Event Title","Date","Time","Location","Description","Necessity"],
  
}

var marEvents = {
  
  Event1: ["Event Title","Date","Time","Location","Description","Necessity"],
  // Event2: ["Event Title","Date","Time","Location","Description","Necessity"],
  // Event3: ["Event Title","Date","Time","Location","Description","Necessity"],
  
}

var aprEvents = {
  
  Event1: ["Event Title","Date","Time","Location","Description","Necessity"],
  // Event2: ["Event Title","Date","Time","Location","Description","Necessity"],
  // Event3: ["Event Title","Date","Time","Location","Description","Necessity"],
  
}


function displayEvents(monthEvents){
  $(".eventcard").html("");
  for (var event in monthEvents){
    $(".eventcard").append(`
    <div class = "card">
        <img src = "evntphoto.jpg" style ="width: 100%"> 
        <h2>`+monthEvents[event][0]+`</h2>
        <p>`+monthEvents[event][1]+`</p>
        <p>`+monthEvents[event][2]+`</p>
        <p>`+monthEvents[event][3]+`</p>
        <p>`+monthEvents[event][4]+`</p>
        <p><button class = "event">`+monthEvents[event][5]+`</button></p>
        </p>
    </div>`);
  }
}


$(".nov").click(function(){
  displayEvents(novEvents)
})

// $(".dec").click(function(){
//   displayEvents(decEvents)
// })

// $(".mar").click(function(){
//   displayEvents(marEvents)
// })

// $(".apr").click(function(){
//   displayEvents(aprEvents)
// })


function myFunction() {
  window.location.href = "Eventsfolder/fundrasierphotos.html";
}
function myFunction2() {
  window.location.href = "Eventsfolder/fundraiserphotos2.html";
}

function myFunction3() {
  window.location.href = "Eventsfolder/fundraiserphotos3.html";
}

function myFunction4() {
  window.location.href = "Eventsfolder/fundraiserphotos4.html";
}


