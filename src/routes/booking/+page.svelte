<script>
	//<iframe src="https://calendar.google.com/calendar/embed?height=400&wkst=1&ctz=America%2FNew_York&showPrint=0&showTz=0&src=NjkyNDQ2NmM4NTY0NzAwZjhkYjEwOTY1Mzc1OTI2NTlmMzAxZGRmZDc3NjM2YmY2YTYzMzE3NDFlZjYyZDljOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23D50000" style="border-width:0" width="375" height="400" frameborder="0" scrolling="no"></iframe>
	const windowSize = window.innerWidth;
	let tableWidth = "520";
	if(windowSize < 520){
		tableWidth = "375";
	}
</script>

<div class="bookingRoot">
	<h2>Book TUBB for your event</h2>
	<div class="calendarContainer">
		<iframe
			src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&showCalendars=0&showTabs=0&title=Tubb%20Event%20Schedule&src=NjkyNDQ2NmM4NTY0NzAwZjhkYjEwOTY1Mzc1OTI2NTlmMzAxZGRmZDc3NjM2YmY2YTYzMzE3NDFlZjYyZDljOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23D50000" style="border:solid 1px #777" width={tableWidth} height="600" frameborder="0" scrolling="no"></iframe>
	</div>
	<div class="infoContainer">
		<h2>Rate: $400/night</h2>
		<a class="formLink" target="_blank" rel="noopener noreferrer" href="https://forms.gle/VdCUgP8xj3DEB9rm9" >Please fill out form to request booking</a>
	</div>
</div>

<style>

	.bookingRoot{
      height: calc(100vh - 100px);
      position: absolute;
      bottom: 0;
      width: 100%;
			color: white;
	}

	.bookingRoot h2 {
			text-align: center;
	}

	.calendarContainer{
			width: fit-content;
			margin-left: auto;
			margin-right: auto;
	}

	.infoContainer{
			text-align: center;
	}

	.infoContainer a {
			font-size: 24px;
			font-color: white;
	}
</style>
