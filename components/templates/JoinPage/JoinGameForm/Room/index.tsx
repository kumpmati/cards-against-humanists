import { useRouter } from "next/router";
import { UseFormMethods } from "react-hook-form";
import { FC } from "react";

import styles from "./Room.module.css";

interface Props {
  form: UseFormMethods<Record<string, any>>;
}

export const RoomSection: FC<Props> = ({ form }) => {
  const { register } = form;
  const { query } = useRouter();

  const roomCode = query.code ? query.code : "";

  return (
    <fieldset>
      <h2>Room code</h2>
      <div>
        <section className="textbox" id={styles.roomCode}>
          <input
            autoFocus
            ref={register}
            type="text"
            name="roomCode"
            defaultValue={roomCode}
          />
        </section>
      </div>
    </fieldset>
  );
};

export default RoomSection;
