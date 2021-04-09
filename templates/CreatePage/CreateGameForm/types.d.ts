export interface FormProps {
  onSubmit: (d: any) => any;
}

export interface GameFormData {
  numPlayers: number;
  password: string;
  czarReveals: boolean;
  shuffleAnswers: boolean;
  packs: string[];
}
