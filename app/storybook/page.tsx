import MainTitle from "@/components/titles/MainTitle";

import StorybookTabs from "./components/StorybookTabs";

const StorybookPage = () => {
  return (
    <>
      <MainTitle subtitle="Tous les composants réutilisables de l'application Fluffic sont réunis ici.">
        Bibliothèque de composants 🐾
      </MainTitle>
      <StorybookTabs />
    </>
  );
};

export default StorybookPage;
