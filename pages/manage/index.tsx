import ManagePage from "../../templates/ManagePage";

export default ManagePage;

export async function getStaticProps() {
  const cardPacks: any[] = [
    { name: "Cahum (Finnish)", value: "Cahum" },
    { name: "Community (Finnish)", value: "Community_fi" },
    { name: "Community (English)", value: "Community_en" },
  ];

  return {
    props: {
      cardPacks,
    },
  };
}
