export type Card = QuestionCard | AnswerCard;

export interface AnswerCard {
  id: string;
  owner?: string;
  text: string;
  pack: string;
  extra?: Record<string, any>;
}

export interface QuestionCard {
  id: string;
  text: string;
  required_cards: number;
  pack: string;
  extra?: Record<string, any>;
}

export interface CardPack {
  name: string;
  code: string;
  questions: QuestionCard[];
  answers: AnswerCard[];
  editable?: boolean;
}

export type CardPackNoCards = Omit<CardPack, "answers" | "questions">;

type CahumGServer = {
  table: {
    question: QuestionCard;
    answers: AnswerCard[][];
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
