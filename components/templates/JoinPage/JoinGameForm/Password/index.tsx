import { FC } from "react";
import { UseFormMethods } from "react-hook-form";
import { JoinFormData } from "..";

interface Props {
  form: UseFormMethods<JoinFormData>;
}

const PasswordSection: FC<Props> = ({ form }) => {
  const { register } = form;

  return (
    <fieldset>
      <h2>Password</h2>

      <div>
        <section className="textbox">
          <input type="password" ref={register} name="password" />
        </section>
      </div>
    </fieldset>
  );
};

export default PasswordSection;
