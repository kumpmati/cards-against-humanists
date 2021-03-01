import { FC } from "react";
import { useForm } from "react-hook-form";
import CardSettings from "./CardSettings";
import GameSettings from "./GameSettings";
import RoomSettings from "./RoomSettings";
import styles from "./CreateGameForm.module.css";
import { CardPack, FormProps, GameFormData } from "./types";

const cardPacks: CardPack[] = [{ name: "Classic", value: "classic" }];

const CreateGameForm: FC<FormProps> = ({ onSubmit }) => {
  const form = useForm<GameFormData>();
  const { handleSubmit } = form;

  return (
    <form id={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <RoomSettings form={form} />
      <GameSettings form={form} />
      <CardSettings form={form} packs={cardPacks} />
      <fieldset id={styles.submitFieldset}>
        <input type="submit" value="Create" id={styles.submit} />
      </fieldset>
    </form>
  );
};

export default CreateGameForm;
