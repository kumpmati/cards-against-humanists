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
  editable: boolean;
}

export type CardPackNoCards = Omit<CardPack, "answers" | "questions">;

export type CahumG = {
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
  deck: {
    answerDeckIndex: number;
    questionDeckIndex: number;
    seed: string;
  };
};

export interface CahumGClient extends Omit<CahumG, "hands" | "deck"> {
  hand: AnswerCard[];
}
