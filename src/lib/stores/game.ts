import { API_WS_URL } from '$lib/config';
import type { ClientGame } from '$lib/types/game';
import type { Readable } from 'svelte/store';
import { writable } from 'svelte/store';
import { io, Socket } from 'socket.io-client';
import type {
	ClientToServerEvents,
	InGameRequest,
	ServerToClientEvents
} from '$lib/types/socket.io';

type Auth = {
	gameId: string;
	token: string;
};

export interface GameStore extends Readable<ClientGame> {
	join: (credentials: Auth) => void;
	send: <E extends keyof ClientToServerEvents, T>(event: E, value: T) => Promise<void>;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createGameStore = (): GameStore => {
	const { subscribe, set } = writable<ClientGame>(null);

	let socket: Socket<ServerToClientEvents, ClientToServerEvents>;
	let auth: Auth;

	const join = (credentials: Auth) => {
		auth = credentials;

		// reconnect needed to pass new auth credentials to backend
		reconnect();
	};

	const connect = () => {
		if (socket) return;

		console.log('connecting with:', auth);

		// pass in auth credentials when making initial connection
		socket = io(API_WS_URL, { auth });

		// update store on state change
		socket.on('stateChanged', (d) => set(d.body));

		socket.on('connect_error', (d) => console.error('error connecting:', d.message));
	};

	const reconnect = () => {
		if (socket) {
			socket.close();
			socket = undefined;
		}

		connect();
	};

	const send = async <EventType extends keyof ClientToServerEvents, Body>(
		event: EventType,
		value: Body
	) => {
		connect();

		const request: InGameRequest<Body> = {
			gameId: auth.gameId,
			token: auth.token,
			body: value
		};

		socket.emit(event as any, request);
	};

	return {
		join,
		subscribe,
		send
	};
};

export const game = createGameStore();
