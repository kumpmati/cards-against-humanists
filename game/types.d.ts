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

export type CahumG = Omit<CahumGServer, "serverOnly">;

type CahumGServer = {
  table: {};
  hands: {};

  serverOnly: {
    cards: {
      answers: AnswerCard[];
      questions: QuestionCard[];
    };
  };
};
