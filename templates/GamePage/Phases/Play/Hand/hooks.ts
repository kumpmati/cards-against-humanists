import { useState } from "react";
import { AnswerCard } from "../../../../../game/types";

export const useCardSelect = (max: number) => {
  const [selected, setSelected] = useState<AnswerCard[]>([]);

  // toggle selection of a card
  const select = (card: AnswerCard) => {
    const isSelected = !!selected.find((c) => c.id === card.id);

    if (!isSelected && selected.length < max) {
      setSelected((s) => [...s, card]);
    } else {
      setSelected((s) => s.filter((c) => c.id !== card.id));
    }
  };

  // returns the index of the card
  const isSelected = (card: AnswerCard): number =>
    selected.findIndex((c) => c.id === card.id);

  // clear selections
  const reset = () => setSelected([]);

  return { selected, isSelected, select, reset };
};
