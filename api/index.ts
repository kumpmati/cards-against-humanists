export const setMatchID = (id: string) =>
  localStorage.setItem("cahum-match-id", id);

export const getMatchID = () => localStorage.getItem("cahum-match-id");
