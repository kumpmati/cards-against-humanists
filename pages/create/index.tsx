import axios from "axios";
import { API_URL } from "../../api/constants";
import CreatePage from "../../templates/CreatePage";

export default CreatePage;

export async function getStaticProps() {
  return {
    props: {
      cardPacks: (await axios.get(`${API_URL}/packs`)).data,
    },
  };
}
