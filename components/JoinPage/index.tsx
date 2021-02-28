import { ArrowLeft } from "react-feather";
import Button from "../elements/Button";

const JoinPage = () => {
  return (
    <main>
      <div className="container">
        <Button href="/" text="Back" Icon={ArrowLeft} />
      </div>
    </main>
  );
};

export default JoinPage;
