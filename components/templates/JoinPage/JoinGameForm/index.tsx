import { FC } from "react";
import { useForm } from "react-hook-form";
import formStyles from "../../../../styles/Form.module.css";
import RoomSection from "./Room";

interface Props {
  onSubmit: (d: any) => void;
}

const JoinGameForm: FC<Props> = ({ onSubmit }) => {
  const form = useForm();
  const { handleSubmit } = form;

  return (
    <form id={formStyles.form} onSubmit={handleSubmit(onSubmit)}>
      <RoomSection form={form} />
      <fieldset id={formStyles.submitFieldset}>
        <input type="submit" value="Join" id={formStyles.submit} />
      </fieldset>
    </form>
  );
};

export default JoinGameForm;
