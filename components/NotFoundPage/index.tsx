import { ArrowLeft } from "react-feather";
import Button from "../elements/Button";
import styles from "./NotFound.module.css";

const NotFoundPage = () => {
  return (
    <main>
      <div className="container">
        <Button href="/" text="Back" Icon={ArrowLeft} />
        <div id={styles.content}>
          <h1>404</h1>
          <p>Page not found</p>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
