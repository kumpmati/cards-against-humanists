import axios from "axios";
import { API_URL } from "../../api/constants";
import GameBrowser from "../../templates/GameBrowser/GameBrowser";

export default GameBrowser;

export async function getStaticProps() {
  return {
    props: {
      cardPacks: (await axios.get(`${API_URL}/packs`)).data,
    },
    revalidate: 60,
  };
}
