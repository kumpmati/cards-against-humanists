export const sleep = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const printCredits = () => {
  console.log(
    "%c@kumpmati on GitHub",
    "background-color: black; color: white; padding: .6em 1.25em; margin: .25em; font-size: 1.25em"
  );
};
