import { FC } from "react";
import { UseFormMethods } from "react-hook-form";
import { GameFormData } from "../types";
import styles from "./CardSettings.module.css";

interface Props {
  form: UseFormMethods<GameFormData>;
  packs: any[];
}

const CardSettings: FC<Props> = ({ form, packs }) => {
  const { register } = form;

  return (
    <fieldset>
      <h2>Card packs</h2>
      <ul id={styles.cardPacks}>
        {packs &&
          packs.map((pack, i) => (
            <li key={i} className="checkbox">
              <input
                ref={register({
                  validate: (v) =>
                    !!v.length || "Select at least one card pack",
                })}
                type="checkbox"
                name="packs"
                value={pack.value}
                id={pack.value}
              />
              <label htmlFor={pack.value}>{pack.name}</label>
            </li>
          ))}
      </ul>
    </fieldset>
  );
};

export default CardSettings;
