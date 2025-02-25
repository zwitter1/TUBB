<script>
	import AnimatedSpeaker from '$lib/AnimatedSpeaker.svelte';
	import TuneSelector from '$lib/TuneSelector.svelte'
	// steel from this: https://codepen.io/tutsplus/pen/PqbPGZ
</script>
<div class="mainPageRoot">
	<div class="whatWeDo">

		<div class="mainAttraction">
			<div class="attractionSection centeredAttraction">
				<TuneSelector />
			</div>
		</div>

		<div class="logoContainer">
			<img class="logo" src="mainBackground/logo3.png" alt="">
		</div>

		<!-- spotlight 1 (right)-->
		<div class="stage_highlight"></div>
		<div class="spotlight_swivel">
			<div class="lamp"></div>
		</div>

		<!-- spotlight 2 (left)-->
		<div class="stage_highlight_2"></div>
		<div class="spotlight_swivel_2">
			<div class="lamp_2"></div>
		</div>

	</div>

	<div class="infoArea">
		<div class="infoPartition overviewText">
			<p>We are TUBB, The Ultimate Butt Rock Band ready to bring Rock and Roll from the 70's through 2000's to <span class="areaHighlight">Carteret</span>, <span class="areaHighlight">Craven</span>, and <span class="areaHighlight">Onslow</span> counties.</p>
		</div>
		<div class="infoPartition">
			<h2>Upcoming Gigs</h2>
			<span>June 3rd</span>
		</div>
	</div>

</div>

<style>


		.mainPageRoot {
				height: calc(100vh - 100px);
				position: absolute;
				bottom: 0;
				width: 100%;
		}

		.stageSetting{
				width: 100%;
				display: none;
		}

		.whatWeDo{
				position: absolute;
				bottom: 200px;
				height: calc(100% - 200px);
				width: 100%;
				max-width: 1050px;
				overflow: hidden;
				margin-inline: auto;
				left: 0;
				right: 0;
		}

		.logo{
				position: relative;
				width: 80%;
				max-width: 600px;
				display: block;
				margin-left: auto;
				margin-right: auto;
		}

		.infoArea{
				position: absolute;
				bottom: 0;
				width: 100%;
				height: 200px;
				text-align: center;
				background-color: black;
				color: white;
		}

		.infoPartition{
				width: calc(50% - 4px);
				display: inline-grid;
				top: 10%;
				position: relative;
				height: 80%;
		}

		.infoPartition:first-child{
			border-right: 2px solid white;
		}


		.infoPartition:first-child p{
        padding-left: 10px;
				padding-right: 10px;
    }

    @media (width <= 600px) {
				.infoPartition:first-child p{
            font-size: 3.5vw;
				}
    }

		.overviewText{
				font-size: 20px;
		}

		.areaHighlight{
				font-weight: bold;
				font-style: italic;
		}


    .stage_highlight {
        position: absolute;
        top: 0;
				right: -3vw;
        width: 50vh;
        height: 99%;
        overflow: hidden;
        background-image: radial-gradient(ellipse closest-side at 35% 92%, rgb(229,96,17,.7), rgba(229,96,17,0) 100%);
        animation: move_highlight 5s linear infinite;
				display:none;
    }
    .spotlight_swivel {
        animation: rotate_spotlight 5s linear infinite;
				display: none;
    }
    .lamp {
        position: absolute;
        width: 40vh;
        height: 400vh;
        background-image: radial-gradient(ellipse, rgba(220,96,17,0.3), rgba(220,96,17,0.15) 30%, rgba(220,96,17,0) 50%);
        top:-183vh;
        right:11vw;
        transform: perspective(23vh) rotateX(30deg);
				display: none;
    }

    .stage_highlight_2 {
        position: absolute;
        top: 0;
        left: 10vw;
        width: 50vh;
        height: 99%;
        overflow: hidden;
        background-image: radial-gradient(ellipse closest-side at 35% 92%, rgb(223,202,58,.7), rgba(223,202,58,0) 100%);
        animation: move_highlight_invert 5s linear infinite;
				display:none;
    }
    .spotlight_swivel_2 {
        animation: rotate_spotlight_invert 5s linear infinite;
				display: none;
    }
    .lamp_2 {
        position: absolute;
        width: 40vh;
        height: 400vh;
        background-image: radial-gradient(ellipse, rgba(223,202,58,0.3), rgba(223,202,58,0.15) 30%, rgba(223,202,58,0) 50%);
        top:-183vh;
        left:10vw;
        transform: perspective(23vh) rotateX(30deg);
				display:none;
    }

    @keyframes rotate_spotlight {
        0% {
            transform: rotate(0deg) scaleY(1) translateY(0);
        }
        25% {
            transform: rotate(-15deg) scaleY(1.1) translateY(-3vh);
        }
        50% {
            transform: rotate(0deg) scaleY(1) translateY(0);
        }
        75% {
            transform: rotate(15deg) scaleY(1.1) translateY(-3vh);
        }
    }

    @keyframes rotate_spotlight_invert {
        0% {
            transform: rotate(0deg) scaleY(1) translateY(0);
        }
        25% {
            transform: rotate(15deg) scaleY(1.1) translateY(-3vh);
        }
        50% {
            transform: rotate(0deg) scaleY(1) translateY(0);
        }
        75% {
            transform: rotate(-15deg) scaleY(1.1) translateY(-3vh);
        }
    }

    @keyframes move_highlight {
        0% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(10vh);
        }
        50% {
            transform: translateX(0);
        }
        75% {
            transform: translateX(-10vh);
        }
    }

    @keyframes move_highlight_invert {
        0% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(-10vh);
        }
        50% {
            transform: translateX(0);
        }
        75% {
            transform: translateX(10vh);
        }
    }


		.mainAttraction{
				width: 90%;
				max-width: 1000px;
				margin: auto;
				background-color: black;
		}

		.attractionSection{
				display:inline-block;
		}

		.centeredAttraction{
				width: 100%;
		}

		.speakersAttraction{
				width: 20%;
		}
</style>
