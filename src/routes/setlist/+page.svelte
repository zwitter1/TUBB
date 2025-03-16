<script>
	const windowSize = window.innerWidth;
	let tableWidth = "520";
	if(windowSize < 520){
		tableWidth = "375";
	}
</script>
<div class="setListRoot">
	<h2>Tubb's Setlist</h2>
	<div id="frameContainer" class="frameRoot">
		<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSq6fT8wmkdZACT2jc-B14PHgWgK_ki2kphwR70omLd6l2zD5ECULs6NqiyfViH1rTyrcQWrLL2a16v/pubhtml?gid=0&amp;single=true&amp;range=a5:c43&amp;widget=false&amp;headers=false" style="border:solid 1px #777" width={tableWidth} height="600"></iframe>
	</div>
</div>

<style>

    .setListRoot{
        height: calc(100vh - 100px);
        position: absolute;
        bottom: 0;
        width: 100%;
        color: white;
    }

    .setListRoot h2 {
        text-align: center;
    }

    .frameRoot{
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
    }
</style>
