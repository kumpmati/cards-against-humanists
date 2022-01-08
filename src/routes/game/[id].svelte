<script context="module" lang="ts">
	import { API_URL } from '$lib/config';
	import type { Load } from '@sveltejs/kit';

	export const load: Load<{ pageParams: { id: string } }> = async ({ params, fetch }) => {
		const { id } = params;

		const res = await fetch(`${API_URL}/api/game/${id}`);

		if (!res.ok) {
			return {
				status: 404,
				error: (await res.json()).message
			};
		}

		return {
			props: {
				gameInfo: await res.json()
			}
		};
	};
</script>

<script lang="ts">
	import Hand from '$lib/components/Hand/Hand.svelte';
	import { game } from '$lib/stores/game';
	import { onMount } from 'svelte';
	import { userStore } from '$lib/stores/user';
	import type { GameSettings } from '$lib/types/game';

	type GameInfo = {
		id: string;
		players: number;
		settings: GameSettings;
	};

	export let gameInfo: GameInfo;

	// authenticate user on mount
	onMount(() => {
		$userStore.gameId = gameInfo.id;

		console.log('user store:', $userStore);

		game.join($userStore);
	});
</script>

<Hand />

<p>{JSON.stringify($game, null, ' ')}</p>
