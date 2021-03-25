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

      <section id={styles.section}>
        <div className="textbox">
          <label htmlFor="password">Max players</label>
          <input
            ref={register({ required: true, valueAsNumber: true })}
            min={2}
            max={50}
            defaultValue={4}
            type="number"
            name="maxPlayers"
            id="maxPlayers"
          />
        </div>

        <div className="textbox">
          <label htmlFor="password">Password (optional)</label>
          <input ref={register} type="password" name="password" id="password" />
        </div>
      </section>
    </fieldset>
  );
};

export default RoomSettings;
