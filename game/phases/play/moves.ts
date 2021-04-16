import { Ctx } from "boardgame.io";
import { AnswerCard, CahumGClient } from "../../types";

/**
 * Used to submit an answer of 1 or more cards.
 * Can be called once by each player per round.
 * @param G
 * @param ctx
 * @param args
 */
export const submitAnswer = (
  G: CahumGClient,
  ctx: Ctx,
  cards: AnswerCard[]
) => {};

/**
 * Reveals an answer card.
 * Only the current Czar can make this move.
 * @param G
 * @param ctx
 * @param id
 */
export const revealCard = (G: CahumGClient, ctx: Ctx, card: AnswerCard) => {};

/**
 * Chooses the winning player for the round.
 * Only the current Czar can make this move.
 * @param G
 * @param ctx
 * @param ownerID
 */
export const chooseWinner = (G: CahumGClient, ctx: Ctx, ownerID: string) => {};
