export const sleep = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Prints GitHub handle to the console
 */
export const printCredits = () => {
  console.log(
    "%c@kumpmati on GitHub",
    "background-color: black; color: white; padding: .6em 1.25em; margin: .25em; font-size: 1.25em"
  );
};

/**
 * Returns a randomly generated player name
 */
export const randomPlayerName = () => `Teekkari-${~~(Math.random() * 1000)}`;
