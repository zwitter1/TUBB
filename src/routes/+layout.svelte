
<div class="rootBody">
	<div class="navContainer">
		<nav class="mainNav navSelections molle-regular-italic">
			<a href="/">Home</a>
			<a href="/booking">Booking</a>
			<a href="/setlist">Set List</a>
			<a href="/media">Media</a>
		</nav>
	</div>

	<div class="backgroundImage">
	</div>

	<slot></slot>

</div>


<style>

		@font-face{
				font-family: 'molle-regular-italic';
				src: url('Molle-Italic.ttf') format('truetype');
		}

	.rootBody{
			background-color: #FFFFFF;
			width: 100vw;
			height: 100vh;
			position: absolute;
			top: 0px;
			left: 0px;
	}

  .navContainer{
      margin-left: auto;
      margin-right: auto;
      width: 100%;
			position: absolute;
			z-index: 1;
  }

  .mainNav{
      text-align: center;
      display: inline-flex;
      justify-content: center;
			height: 80px;
			width: calc(100% - 80px);
			position: relative;
			left: 40px;
  }

  .mainNav a {
      display:flex;
      justify-content: center;
      margin-right: 20px;
      margin-left: 20px;
      color: white;
			font-size: 1.2em;
			width: calc(100% * .25);
			padding-top: 20px;
			text-decoration: none;
			font-family: 'molle-regular-italic';
  }

    .backgroundImage{
        position: absolute;
        background-color: black;
        width: 100%;
        height: 100%;
        top: 0;
        background-size: contain;
        background-repeat: round;
    }


</style>
