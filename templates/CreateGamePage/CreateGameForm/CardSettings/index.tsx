import { FC } from "react";
import { UseFormMethods } from "react-hook-form";
import { GameFormData } from "../types";
import styles from "./CardSettings.module.css";

const CardSettings: FC<Props> = ({ form, packs }) => {
  const { register } = form;

  return (
    <fieldset>
      <h2>Card packs</h2>
      <ul id={styles.cardPacks}>
        {packs &&
          packs.filter(hasCards).map((pack, i) => (
            <li key={i} className="checkbox">
              <input
                ref={register({
                  validate: (v) =>
                    !!v.length || "Select at least one card pack",
                })}
                type="checkbox"
                name="packs"
                value={pack.code}
                id={pack.code}
                disabled={pack.answers + pack.questions === 0}
              />
              <label htmlFor={pack.code}>{pack.name}</label>
            </li>
          ))}
      </ul>
    </fieldset>
  );
};

export default CardSettings;

const hasCards = (pack: any) => pack.answers + pack.questions > 0;

interface Props {
  form: UseFormMethods<GameFormData>;
  packs: any[];
}
