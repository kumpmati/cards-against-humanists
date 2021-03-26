import { FC } from "react";
import { useForm } from "react-hook-form";
import formStyles from "../../../styles/Form.module.css";
import PasswordSection from "./Password";
import RoomSection from "./Room";

interface Props {
  onSubmit: (d: any) => void;
  showPassword: boolean;
  close: () => void;
}

export interface JoinFormData {
  roomCode: string;
  password: string;
}

const JoinGameForm: FC<Props> = ({ onSubmit, showPassword, close }) => {
  const form = useForm<JoinFormData>();
  const { handleSubmit } = form;

  return (
    <form
      autoComplete="off"
      id={formStyles.form}
      onSubmit={handleSubmit(onSubmit)}>
      <RoomSection form={form} />
      {showPassword && <PasswordSection close={close} form={form} />}

      <fieldset id={formStyles.submitFieldset}>
        <input type="submit" value="Join" id={formStyles.submit} />
      </fieldset>
    </form>
  );
};

export default JoinGameForm;
