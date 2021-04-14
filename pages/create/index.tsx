import CreatePage from "../../templates/CreatePage";

export default CreatePage;

export async function getStaticProps() {
  const cardPacks: any[] = [
    { name: "Cahum (Finnish)", value: "Cahum" },
    { name: "Cards Against Humanity (English)", value: "CAH_en" },
  ];

  return {
    props: {
      cardPacks,
    },
  };
}
