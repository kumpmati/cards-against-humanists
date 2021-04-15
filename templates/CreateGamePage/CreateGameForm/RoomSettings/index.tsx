import { FC } from "react";
import { UseFormMethods } from "react-hook-form";
import { GameFormData } from "../types";
import styles from "./RoomSettings.module.css";

interface Props {
  form: UseFormMethods<GameFormData>;
}

const RoomSettings: FC<Props> = ({ form }) => {
  const { register } = form;

  return (
    <fieldset>
      <h2>Room</h2>

      <section className={styles.section}>
        <div className={"textbox " + styles.numPlayers}>
          <label htmlFor="numPlayers">Number of players</label>
          <input
            ref={register({ required: true, valueAsNumber: true })}
            min={2}
            max={50}
            defaultValue={2}
            type="number"
            name="numPlayers"
            id="numPlayers"
          />
        </div>

        <div className="checkbox">
          <input ref={register} type="checkbox" name="private" id="private" />
          <label htmlFor="private">Private</label>
        </div>
      </section>
    </fieldset>
  );
};

export default RoomSettings;
