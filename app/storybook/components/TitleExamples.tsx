import MainTitle from "@/components/titles/MainTitle";
import SectionTitle from "@/components/titles/SectionTitle";
import HeartIcon from "@/components/icons/HeartIcon";
import FlufficTitle from "@/components/titles/FlufficTitle";

const TitleExamples = () => {
  return (
    <div className="flex flex-col justify-content gap-4">
      <MainTitle
        titleText="Titre principal avec sous-titre"
        subtitleText="Message à caractère informatif, c'est vraiment très intéressant"
      />
      <MainTitle
        titleText="Titre principal avec icône"
        subtitleText="Quel bel icone que voilà, le premier icône customisé de Fluffic"
        icon={<HeartIcon className="w-6 md:w-8" />}
      />
      <MainTitle titleText="Titre principal sans sous-titre" />
      <SectionTitle titleText="Titre de section" />
      <FlufficTitle />
      <FlufficTitle size="medium" />
      <FlufficTitle size="large" />
    </div>
  );
};

export default TitleExamples;
