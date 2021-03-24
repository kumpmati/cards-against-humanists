export interface CardPack {
  name: string;
  value: string;
}

export interface FormProps {
  onSubmit: (d: any) => any;
}

export interface GameFormData {
  maxPlayers: number;
  password: string;
  czarReveals: boolean;
  shuffleAnswers: boolean;
  packs: CardPack[];
}
