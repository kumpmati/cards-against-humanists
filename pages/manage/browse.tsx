import axios from "axios";
import { API_URL } from "../../api/constants";
import CardBrowser from "../../templates/CardBrowser/CardBrowser";

export default CardBrowser;

export async function getStaticProps() {
  return {
    props: {
      cardPacks: (await axios.get(`${API_URL}/packs`)).data,
    },
  };
}
