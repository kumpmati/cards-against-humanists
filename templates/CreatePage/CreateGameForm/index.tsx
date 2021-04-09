import { FC } from "react";
import { useForm } from "react-hook-form";
import CardSettings from "./CardSettings";
import GameSettings from "./GameSettings";
import RoomSettings from "./RoomSettings";
import formStyles from "../../../styles/form.module.css";
import styles from "./style.module.css";
import { FormProps, GameFormData } from "./types";

const cardPacks: any[] = [{ name: "Cards Against Humanists", value: "Cahum" }];

const CreateGameForm: FC<FormProps> = ({ onSubmit }) => {
  const form = useForm<GameFormData>();
  const { handleSubmit } = form;

  return (
    <form
      className={styles.createForm}
      id={formStyles.form}
      onSubmit={handleSubmit(onSubmit)}>
      <RoomSettings form={form} />
      <div className={styles.gameSection}>
        <GameSettings form={form} />
        <CardSettings form={form} packs={cardPacks} />
      </div>
      <fieldset id={formStyles.submitFieldset}>
        <input type="submit" value="Create" id={formStyles.submit} />
      </fieldset>
    </form>
  );
};

export default CreateGameForm;
