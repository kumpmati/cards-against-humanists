import { CardPackNoCards } from "../../../game/types";

export interface FormProps {
  cardPacks: CardPackNoCards[];
  onSubmit: (d: any) => any;
}

export interface GameFormData {
  numPlayers: number;
  private: boolean;
  czarReveals: boolean;
  shuffleAnswers: boolean;
  packs: string[];
}
