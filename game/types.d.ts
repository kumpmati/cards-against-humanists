export type Card = QuestionCard | AnswerCard;

export interface QuestionCard {
  text: string;
  required_cards: number;
  pack: string;
}

export interface AnswerCard {
  id?: string;
  owner?: string;
  text: string;
  pack: string;
}

export interface CardPack {
  name: string;
  questions: QuestionCard[];
  answers: AnswerCard[];
}

type CahumGServer = {
  table: {
    question: QuestionCard;
    answers: AnswerCard[];
    revealed: AnswerCard[];
  };
  points: Record<string, number>;
  hands: Record<string, AnswerCard[]>;
  state: {
    round: number;
    stage: PlayStages;
  };
  settings: SetupData;
};

export interface CahumG extends Omit<CahumGServer, "hands"> {
  hand: AnswerCard[];
}
