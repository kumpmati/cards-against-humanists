import axios from "axios";
import { API_URL } from "../../api/constants";
import CreateCardPage from "../../templates/CreateCardPage/CreateCardPage";

export default CreateCardPage;

export async function getStaticProps() {
  return {
    props: {
      cardPacks: (await axios.get(`${API_URL}/packs`)).data,
    },
    revalidate: 60,
  };
}
