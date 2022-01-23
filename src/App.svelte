<script>
	import  Clock  from './components/clock.svelte'
	import  Login  from './components/signup.svelte'
	import  Quest  from './components/questions.svelte'
	import  Table  from './components/table.svelte'
	import  SubmitTable  from './components/submitTable.svelte'
	import  Orders  from './components/orders.svelte'
</script>

<div id="app">
	<div class="grid-container">
		<div class="grid-item grid-item1">
			<Clock />
		</div>
		<div class="grid-item grid-item2">
			<Login />
		</div>
		<div class="grid-item grid-item3">
			<Quest />
		</div>
		<div class="grid-item grid-item4">
			<Table />
		</div>
		<div class="grid-item grid-item5">
			<SubmitTable />
		</div>
		<div class="grid-item grid-item6">
			<Orders />
		</div>
		<div class="grid-item grid-item7">f</div>
		<div class="grid-item grid-item8">f</div>
		<div class="grid-item grid-item9">f</div>
	</div>
</div>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		color: white;
		width: 98%;
		margin-left: auto;
		margin-right: auto;
	}
	.grid-container {
		position: relative;
		padding-top: 1.6rem;
		width: 95%;
		margin-left: auto;
		margin-right: auto;
	}
	.grid-item {
		position: relative;
		font-size: 1.6rem;
		padding-top: 3.1rem;
		background-color: #379ad6;
		color: #222;
		border: 0.1rem solid white;
		overflow: auto;
	}
	/* Main CSS */
	.grid-container {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(9, 20rem);
		grid-row-gap: 1.25rem;
	}
	/* Media queries */
	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {
		.grid-container {
			grid-template-columns: repeat(2, 1fr);
			grid-column-gap: 0.5rem;
		}
		/*.input-control {
			width: 80%;
		}*/
	}
	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: 992px) {
		.grid-container {
			grid-template-rows: repeat(9, 22rem);
		}
		/*.p-fontSize {
			font-size: medium;
		}*/
	}
	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1279px) {
		.grid-container {
			grid-template-rows: repeat(9, 25rem);
			grid-template-columns: repeat(3, 1fr);
		}
		/*.img-text {
			margin-top: -0.1rem;
		}
		.circle p {
			font-size: 16px;
		}*/
	}
</style>
