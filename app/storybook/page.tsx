import PageContainer from "@/components/containers/PageContainer";
import MainTitle from "@/components/titles/MainTitle";
import StorybookTabs from "./components/StorybookTabs";

const StorybookPage = () => {
  return (
    <PageContainer>
      <MainTitle subtitle="Tous les composants réutilisables de l'application Fluffic sont réunis ici.">
        Bibliothèque de composants 🐾
      </MainTitle>
      <StorybookTabs />
    </PageContainer>
  );
};

export default StorybookPage;
