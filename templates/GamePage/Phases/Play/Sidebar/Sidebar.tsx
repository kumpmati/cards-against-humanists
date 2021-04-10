import { useContext, useState } from "react";
import { LogOut, Menu, WifiOff, X } from "react-feather";
import Button from "../../../../../components/Button";
import { PlayContext } from "../Play";
import InGamePlayerList from "../../../../../components/InGamePlayerList/InGamePlayerList";

import styles from "./style.module.css";
import { leaveCurrentMatch } from "../../../../../api/lobby";
import { useRouter } from "next/router";

export const Sidebar = () => {
  const { push } = useRouter();

  const [visible, setVisible] = useState(false);
  const { G } = useContext(PlayContext);
  const round = G.state.round;

  const containerClassNames = `${styles.sidebar} ${
    visible ? styles["sidebar--visible"] : ""
  }`;

  const contentClassName = `${styles.content} ${
    visible ? styles["content--visible"] : ""
  }`;

  const leaveMatch = async () => {
    if (!confirm("Are you sure?")) return;

    await leaveCurrentMatch();
    push("/");
  };

  return (
    <>
      <div
        title={visible ? "Hide sidebar" : "Show sidebar"}
        className={styles.hamburger}>
        <Button
          Icon={visible ? X : Menu}
          onClick={() => setVisible((v) => !v)}
        />
      </div>

      <div className={containerClassNames}>
        <div className={contentClassName}>
          <span title="Leave game" className={styles.leave}>
            <Button Icon={LogOut} onClick={leaveMatch} />
          </span>
          <div className={styles.content__info}>
            <p>
              Round <b>{round}</b>
            </p>
          </div>
          <h2>Players</h2>
          <InGamePlayerList />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
