import { Ctx, Game } from "boardgame.io";
import { CahumGClient } from "../../../../game/types";

export interface PlayContextI {
  isCzar: boolean;
  stage: string;
  G: CahumGClient;
  ctx: Ctx;
  game: any;
}
