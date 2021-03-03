import { FC } from "react";
import { UseFormMethods } from "react-hook-form";
import { JoinFormData } from "..";

import styles from "./Password.module.css";
import formStyles from "../../../../../styles/Form.module.css";
import Button from "../../../../elements/Button";
import { X } from "react-feather";

interface Props {
  form: UseFormMethods<JoinFormData>;
  close: () => void;
}

const PasswordSection: FC<Props> = ({ form, close }) => {
  const { register } = form;

  return (
    <>
      <div id={styles.bg} onClick={close}></div>

      <fieldset id={styles.container}>
        <h2>Password</h2>

        <div>
          <section className="textbox">
            <input
              type="password"
              ref={register}
              name="password"
              id={styles.password}
            />
          </section>
        </div>
        <div>
          <input
            id={formStyles.submit}
            ref={register}
            type="submit"
            name="passwordSubmit"
            value="Confirm"
          />
        </div>
      </fieldset>
    </>
  );
};

export default PasswordSection;
