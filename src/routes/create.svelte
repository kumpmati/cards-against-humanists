<script lang="ts">
	import { API_URL } from '$lib/config';
	import { goto } from '$app/navigation';
	import type { GameSettings } from '$lib/types/game';
	import { userStore } from '$lib/stores/user';

	let nickname = '';

	const createGame = async () => {
		const settings: GameSettings = {
			host: {
				id: '',
				nickname,
				score: 0,
				token: '',
				status: 'connected'
			},
			maxPoints: 5,
			maxRounds: 5,
			cardPacks: [],
			name: '',
			numCardsInHand: 7,
			password: null
		};

		const res = await fetch(`${API_URL}/api/game/create`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(settings)
		});

		const data = await res.json();
		if (!data.game?.id) {
			console.error(data?.message);
			return;
		}

		const { game, player } = data;

		// update store
		$userStore = {
			gameId: game.id,
			id: player.id,
			nickname: player.nickname,
			token: player.token
		};

		await goto(`/game/${game.id}`);
	};
</script>

<h1>Create game</h1>

<input bind:value={nickname} type="text" />

<button on:click={createGame}>Create</button>
