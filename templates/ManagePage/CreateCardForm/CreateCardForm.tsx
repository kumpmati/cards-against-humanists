import { FC } from "react";
import { useForm } from "react-hook-form";
import { createNewCard } from "../../../api/cards";
import { Card, CardPack } from "../../../game/types";
import formStyles from "../../../styles/form.module.css";

import styles from "./styles.module.css";

const defaultValues: Partial<Card> = {
  text: "",
  required_cards: 1,
  pack: "Community_en",
};

const CreateCardForm: FC<Props> = ({ cardPacks }) => {
  const { handleSubmit, register, reset, watch } = useForm({ defaultValues });

  const isQuestion = watch("question");

  const submitCard = async (card: any) => {
    if (!confirm("Are you sure?")) return;

    if (Array.isArray(card.pack)) card.pack = card.pack[0]; // turn to string
    const { question, ...formatted } = card; // do not push question field to DB

    const id = await createNewCard(formatted);
    console.log(id);
    reset();
  };

  return (
    <form
      autoComplete="off"
      id={formStyles.form}
      onSubmit={handleSubmit(submitCard)}>
      <fieldset>
        <h2>Create a new card</h2>
        <div className="textbox">
          <label htmlFor="card-text">Text</label>
          <input
            id="card-text"
            ref={register({
              required: true,
              validate: (v) => v.length > 0 && v.length < 150,
            })}
            type="text"
            name="text"
            placeholder="Funny text here"
          />
        </div>

        <div className={styles.question}>
          <div className="checkbox">
            <input
              id="question"
              type="checkbox"
              ref={register}
              name="question"
            />
            <label htmlFor="question">Question card</label>
          </div>

          {isQuestion && (
            <div className="textbox">
              <input
                ref={register({ max: 3, min: 1, valueAsNumber: true })}
                type="number"
                name="required_cards"
              />
            </div>
          )}
        </div>
      </fieldset>

      <fieldset>
        <h2>Pack</h2>

        <div>
          {cardPacks.map((pack: CardPack) => (
            <div key={pack.code} className="checkbox">
              <input
                key={pack.code}
                type="radio"
                ref={register({ required: true })}
                name="pack"
                id={"pack-" + pack.code}
                value={pack.code}
              />
              <label htmlFor={"pack-" + pack.code}>{pack.name}</label>
            </div>
          ))}
        </div>
      </fieldset>

      <fieldset id={formStyles.submitFieldset}>
        <input id={formStyles.submit} type="submit" value="Create" />
      </fieldset>
    </form>
  );
};

export default CreateCardForm;

interface Props {
  cardPacks: { name: string; code: string }[];
}
