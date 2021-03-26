import { FC } from "react";
import { UseFormMethods } from "react-hook-form";
import { GameFormData } from "../types";

interface Props {
  form: UseFormMethods<GameFormData>;
}

const GameSettings: FC<Props> = ({ form }) => {
  const { register } = form;

  return (
    <fieldset>
      <h2>Game</h2>

      <section>
        <div className="checkbox">
          <input
            ref={register}
            type="checkbox"
            name="shuffleAnswers"
            id="shuffleAnswers"
          />
          <label htmlFor="shuffleAnswers">Shuffle answers</label>
        </div>
        <div className="checkbox">
          <input
            ref={register}
            type="checkbox"
            name="czarReveals"
            id="czarReveals"
          />
          <label htmlFor="czarReveals">Czar reveals cards</label>
        </div>
      </section>
    </fieldset>
  );
};

export default GameSettings;
