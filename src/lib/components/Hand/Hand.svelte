<script lang="ts">
	import { game } from '$lib/stores/game';

	const submit = () => {
		game.send('submitAnswer', { cards: [] });
	};
</script>

<h1>Hand</h1>

<button on:click={submit}>Submit answer</button>
