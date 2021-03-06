(function () {
	window.addEventListener("tizenhwkey", function (ev) {
		var activePopup = null,
			page = null,
			pageId = "";

		if (ev.keyName === "back") {
			activePopup = document.querySelector(".ui-popup-active");
			page = document.getElementsByClassName("ui-page-active")[0];
			pageId = page ? page.id : "";

			if (pageId === "main" && !activePopup) {
				try {
					tizen.application.getCurrentApplication().exit();
				} catch (ignore) {
				}
			} else {
				window.history.back();
			}
		}
	});
}());

function startOrStopCountdown(){
    var countdownElement = document.getElementById("countdown");
    var countDownDate = new Date();
    countDownDate.setMinutes( countDownDate.getMinutes() + 1 );

 // Update the count down every 1 second
 var x = setInterval(function() {

   // Get today's date and time
   var now = new Date().getTime();

   // Find the distance between now and the count down date
   var distance = countDownDate - now;

   // Time calculations for days, hours, minutes and seconds
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   // Display the result in the element with id="demo"
   countdownElement.innerHTML = minutes + " : " + seconds;

   // If the count down is finished, write some text
   if (distance < 0) {
     clearInterval(x);
     countdownElement.innerHTML = "EXPIRED";
   }
 })
}