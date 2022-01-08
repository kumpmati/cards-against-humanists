import { API_WS_URL } from '$lib/config';
import type { ClientGame } from '$lib/types/game';
import type { Readable } from 'svelte/store';
import { writable } from 'svelte/store';
import { io, Socket } from 'socket.io-client';
import type {
	Action,
	ActionEvent,
	ClientToServerEvents,
	ServerToClientEvents
} from '$lib/types/socket.io';
import type { User } from '$lib/types/user';

export interface GameStore extends Readable<ClientGame> {
	join: (credentials: User) => void;
	send: <E extends ActionEvent, T>(event: E, value: T) => Promise<void>;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createGameStore = (): GameStore => {
	const { subscribe, set } = writable<ClientGame>(null);

	let socket: Socket<ServerToClientEvents, ClientToServerEvents>;
	let user: User;

	const join = (credentials: User) => {
		user = credentials;

		// reconnect needed to pass new auth credentials to backend
		reconnect();
	};

	const connect = () => {
		if (socket) return;

		// pass in auth credentials when making initial connection
		socket = io(API_WS_URL, { auth: user });

		// update store on state change
		socket.on('stateChanged', (d) => set(d.body));

		socket.on('error', (d) => console.error('error:', d.error));
		socket.on('connect_error', (d) => console.error('error connecting:', d.message));
	};

	const reconnect = () => {
		if (socket) {
			socket.close();
			socket = undefined;
		}

		connect();
	};

	const send = async <E extends ActionEvent, Body>(event: E, value: Body) => {
		connect();

		const request: Action<E, Body> = {
			event,
			body: value
		};

		socket.emit('action', request);
	};

	return {
		join,
		subscribe,
		send
	};
};

export const game = createGameStore();
