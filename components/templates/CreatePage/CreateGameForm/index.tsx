import { FC } from "react";
import { useForm } from "react-hook-form";
import CardSettings from "./CardSettings";
import GameSettings from "./GameSettings";
import RoomSettings from "./RoomSettings";
import formStyles from "../../../../styles/Form.module.css";
import { CardPack, FormProps, GameFormData } from "./types";

const cardPacks: CardPack[] = [
  { name: "English", value: "english" },
  { name: "Finnish", value: "finnish" },
];

const CreateGameForm: FC<FormProps> = ({ onSubmit }) => {
  const form = useForm<GameFormData>();
  const { handleSubmit } = form;

  return (
    <form id={formStyles.form} onSubmit={handleSubmit(onSubmit)}>
      <RoomSettings form={form} />
      <GameSettings form={form} />
      <CardSettings form={form} packs={cardPacks} />
      <fieldset id={formStyles.submitFieldset}>
        <input type="submit" value="Create" id={formStyles.submit} />
      </fieldset>
    </form>
  );
};

export default CreateGameForm;
