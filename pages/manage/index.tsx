import axios from "axios";
import { API_URL } from "../../api/constants";
import { CardPack } from "../../game/types";
import ManagePage from "../../templates/ManagePage";

export default ManagePage;

export async function getStaticProps() {
  const disabledPacks = ["CAH_en"]; // do not allow adding cards to these packs

  const res = (await axios.get(`${API_URL}/packs`)).data;

  const cardPacks = res.filter(
    (pack: CardPack) => !disabledPacks.includes(pack.code)
  );

  return {
    props: {
      cardPacks,
    },
  };
}
