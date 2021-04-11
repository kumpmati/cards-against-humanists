import { FC } from "react";
import { useForm } from "react-hook-form";
import CardSettings from "./CardSettings";
import GameSettings from "./GameSettings";
import RoomSettings from "./RoomSettings";
import formStyles from "../../../styles/form.module.css";
import styles from "./style.module.css";
import { FormProps, GameFormData } from "./types";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

const formDefaultValues: GameFormData = {
  numPlayers: 2,
  private: false,
  czarReveals: false,
  shuffleAnswers: true,
  packs: ["Cahum"],
};

export const availableCardPacks: any[] = [
  { name: "Cahum (Finnish)", value: "Cahum" },
  { name: "Cards Against Humanity (English)", value: "CAH_en" },
  /*
  { name: "Community (Finnish)", value: "Community_fi" },
  { name: "Community (English)", value: "Community_en" },
  */
];

const CreateGameForm: FC<FormProps> = ({ onSubmit }) => {
  const form = useForm<GameFormData>({ defaultValues: formDefaultValues });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  return (
    <form
      className={styles.createForm}
      id={formStyles.form}
      onSubmit={handleSubmit(onSubmit)}>
      <RoomSettings form={form} />

      <div className={styles.gameSection}>
        <GameSettings form={form} />
        <CardSettings form={form} packs={availableCardPacks} />
      </div>

      <fieldset className={styles.submit} id={formStyles.submitFieldset}>
        <input
          type="submit"
          value="Create"
          id={formStyles.submit}
          disabled={isSubmitting}
        />
        {isSubmitting && (
          <div className={styles.submit__loader}>
            <LoadingSpinner />
          </div>
        )}
      </fieldset>
    </form>
  );
};

export default CreateGameForm;
