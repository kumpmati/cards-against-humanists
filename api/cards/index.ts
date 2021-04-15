import axios from "axios";
import { Card as CardType } from "../../game/types";
import { API_URL } from "../constants";

/**
 *
 * @param card
 */
export const createNewCard = async (card: CardType) => {
  const res = await axios.post(`${API_URL}/cards/new`, card);
  return res.data;
};
