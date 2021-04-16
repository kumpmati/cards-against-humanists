import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../api/constants";
import { GameListing } from "../../game/types";

export const useGameList = () => {
  const [games, setGames] = useState<GameListing[]>([]);
  const [refresh, setRefresh] = useState({});

  useEffect(() => {
    const fetchGames = async () => {
      console.log("fetching games...");
      const res = await axios.get(`${API_URL}/games/cahum`);
      if (!res.data?.matches) return;
      setGames(res.data.matches);
    };
    fetchGames();
  }, [refresh]);

  return { games, refresh: () => setRefresh({}) };
};
