import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../../api/constants";
import { CardPack } from "../../../game/types";

export const useCardBrowser = (initialCode: string) => {
  const [code, setCode] = useState<string>(initialCode);
  const [cardPack, setCardPack] = useState<CardPack>(null);

  useEffect(() => {
    if (!code) return setCardPack(null);

    const fetchCards = async () => {
      const res = (await axios.get(`${API_URL}/cards?packs=${code}`)).data;
      setCardPack(res.packs?.[0]);
    };

    fetchCards();
  }, [code]);

  return {
    pack: cardPack,
    setPack: setCode,
  };
};
