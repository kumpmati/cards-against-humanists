export type Card = QuestionCard | AnswerCard;

export interface QuestionCard {
  text: string;
  required_cards: number;
  pack: string;
}

export interface AnswerCard {
  text: string;
  pack: string;
}

export interface CardPack {
  name: string;
  questions: QuestionCard[];
  answers: AnswerCard[];
}

type CahumG = {
  table: {
    question: QuestionCard;
    answers: AnswerCard[][];
  };
  hand: AnswerCard[];
  packs: string[];
};
