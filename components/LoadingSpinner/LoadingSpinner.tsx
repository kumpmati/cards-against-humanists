import { Loader } from "react-feather";

import styles from "./style.module.css";

const LoadingSpinner = () => {
  return (
    <div className={styles.loader}>
      <Loader />
    </div>
  );
};

export default LoadingSpinner;
