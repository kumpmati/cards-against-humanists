import type { User } from '$lib/types/user';
import { writable } from 'svelte-local-storage-store';

export const userStore = writable<User>('user', {
	gameId: null,
	id: '',
	nickname: '',
	token: ''
});
