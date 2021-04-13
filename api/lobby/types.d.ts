export interface CreateMatchOptions {
  numPlayers: number;
  setupData?: any;
  unlisted?: boolean;
}

export interface GetMatchOptions {
  matchID: string;
}

export interface JoinMatchOptions {
  playerID: string;
  playerName: string;
  data?: any;
}

export interface LeaveMatchOptions {
  playerID: string;
  credentials: string;
}
