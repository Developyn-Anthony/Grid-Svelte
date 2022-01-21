<script>
	import { onMount, onDestroy } from 'svelte'

	let clock = new Date();
	$:hours = clock.getHours();
	$:minutes = clock.getMinutes();
	$:seconds = clock.getSeconds();

	onMount(() => {
		const interval = setInterval(() => {
			clock = new Date();
		}, 1000);
	});

	onDestroy(() => {
		clearInterval(interval);
	});

</script>

<h2 class="clock-container">
    <span class="clock-time">
		{hours <= 9 ? "0" + hours : hours}:
        {minutes <= 9 ? "0" + minutes : minutes}:
        {seconds <= 9 ? "0" + seconds : seconds}
	</span>
</h2>

<style>
	.clock-container {
		width: 100%;
		height: auto;
		margin: 0;
  		position: absolute;
  		top: 50%;
  		-ms-transform: translateY(-50%);
  		transform: translateY(-50%);
		text-align: center;
		color: #fff;
	}
</style>