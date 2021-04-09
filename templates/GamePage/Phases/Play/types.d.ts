import { Ctx, Game } from "boardgame.io";
import { CahumG } from "../../../../game/types";

export interface PlayContextI {
  isCzar: boolean;
  stage: string;
  G: CahumG;
  ctx: Ctx;
  game: any;
}
