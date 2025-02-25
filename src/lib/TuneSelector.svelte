<ul class="yearList">
	<li class="yearSelection" id="seventies">
		<div>
			<img src="70sFinal.png" alt="funky70sLogo">
		</div>
	</li>
	<li class="yearSelection" id="eighties">
		<div>
			<img src="80sFinal.png" alt="retro80sLogo">
		</div>
	</li>

	<li class="yearSelection" id="nineties">
		<div>
			<img src="90sFinal.png" alt="cool90sLogo">
		</div>
	</li>

	<li class="yearSelection" id="thousands">
		<div>
			<img src="00sFinal.png" alt="modern00sLogo">
		</div>
	</li>
</ul>
<div class="yearPickerContainer">
	<h3 class="instructions">Select the year to hear our demo from the era</h3>
</div>

<style>
	.yearList{
			list-style-type: none;
			display: inline-flex;
			width: 100%;
			padding-left: 0px;
	}

	.yearList div{
      border: 3px solid white;
      border-radius: 200px;
      padding: 15px;
			max-width: 75px;
			position: relative;
			margin-left: auto;
			margin-right: auto;
	}

	.yearSelection{
			display: inline-block;
			width: calc(100% * .25);
	}

	.yearSelection img{
			width: 100%;
			max-width: 80px;
			margin-left: auto;
			margin-right: auto;
			display: block;
	}

	.instructions{
			color: white;
			text-align: center;
	}
</style>
