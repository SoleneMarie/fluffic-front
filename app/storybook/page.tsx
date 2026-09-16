import PageContainer from "@/components/containers/PageContainer";
import MainTitle from "@/components/titles/MainTitle";
import StorybookTabs from "./components/StorybookTabs";

const StorybookPage = () => {
  return (
    <PageContainer>
      <MainTitle
        titleText="Bibliothèque de composants 🐾"
        subtitleText="Tous les composants réutilisables de l'application Fluffic sont réunis ici."
      />
      <StorybookTabs />
    </PageContainer>
  );
};

export default StorybookPage;
