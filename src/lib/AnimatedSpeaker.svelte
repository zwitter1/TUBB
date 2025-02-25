<script>
	export let speakerText = '';
</script>

<div class="speakerCab">
	<div class="speakerTextArea">{speakerText}</div>
	<ul class="speakerStack">
		<li>
			<img src="speaker.png" alt="speaker" class="speakerImage"/>
		</li>
		<li>
			<img src="speaker.png" alt="speaker" class="speakerImage"/>
		</li>
	</ul>
</div>

<style>
	.speakerImage{
			width: 100%;
	}

	.speakerCab{
			background-color: black;
			color: white;
			border-radius: 4px;
			box-shadow: 1px 2px 4px black;
	}

	.speakerTextArea{
			width: 100%;
			text-align: center;
			padding: 5px 0px;
	}

  .speakerStack{
      list-style-type: none;
      padding: 0;
  }

	.speakerTextArea{
			width: 100%;
			border-bottom: 1px solid white;
	}
</style>
