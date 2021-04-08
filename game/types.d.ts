export type Card = QuestionCard | AnswerCard;

export interface QuestionCard {
  text: string;
  required_cards: number;
  pack: string;
}

export interface AnswerCard {
  id?: string;
  text: string;
  pack: string;
}

export interface CardPack {
  name: string;
  questions: QuestionCard[];
  answers: AnswerCard[];
}

type CahumG = {
  currentStage: PlayStages.submitAnswer | PlayStages.chooseWinner;
  table: {
    question: QuestionCard;
    answers: AnswerCard[];
    revealed: AnswerCard[];
  };
  hand: AnswerCard[];
  packs: string[];
};

export type CahumG = {
  table: {
    question: QuestionCard;
    answers: AnswerCard[];
    revealed: AnswerCard[];
  };
  hands: Record<string, AnswerCard[]>;
  settings: SetupData;
};
