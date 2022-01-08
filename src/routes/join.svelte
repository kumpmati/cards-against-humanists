<script lang="ts">
	import { goto } from '$app/navigation';

	import { API_URL } from '$lib/config';
	import { userStore } from '$lib/stores/user';
	import type { User } from '$lib/types/user';

	let nickname = '';
	let gameId = '';

	const joinGame = async () => {
		// new user on join
		const user: User = {
			id: '',
			gameId: '',
			nickname,
			token: ''
		};

		const res = await fetch(`${API_URL}/api/game/${gameId}/join`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(user)
		});

		const data = await res.json();

		if (data.error) {
			console.error(data.message);
			return;
		}

		const { game, player } = data;

		// update stored user
		$userStore = {
			gameId: game.id,
			id: player.id,
			nickname: player.nickname,
			token: player.token
		};

		await goto(`/game/${game.id}`);
	};
</script>

<h1>Join game</h1>

<label>
	Game
	<input type="text" bind:value={gameId} />
</label>

<label>
	Nickname
	<input type="text" bind:value={nickname} />
</label>

<button on:click={joinGame}>Create</button>
