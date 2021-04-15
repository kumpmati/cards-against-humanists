export interface FormProps {
  cardPacks: { name: string; value: string; editable: boolean }[];
  onSubmit: (d: any) => any;
}

export interface GameFormData {
  numPlayers: number;
  private: boolean;
  czarReveals: boolean;
  shuffleAnswers: boolean;
  packs: string[];
}
