import MainTitle from "@/components/titles/MainTitle";
import SectionTitle from "@/components/titles/SectionTitle";
import HeartIcon from "@/components/icons/HeartIcon";
import FlufficTitle from "@/components/titles/FlufficTitle";

const TitleExamples = () => {
  return (
    <div className="flex flex-col justify-content gap-4">
      <SectionTitle>Titre de section</SectionTitle>
      <MainTitle subtitle="Message à caractère informatif, c'est vraiment très intéressant">
        Titre principal
      </MainTitle>
      <MainTitle
        subtitle="Message à caractère informatif, c'est vraiment très intéressant"
        icon={<HeartIcon className="w-6 md:w-8 text-primary" />}
      >
        Titre principal avec icône
      </MainTitle>
      <MainTitle>Titre principal sans sous-titre</MainTitle>

      <FlufficTitle />
      <FlufficTitle size="medium" />
      <FlufficTitle size="large" />
    </div>
  );
};

export default TitleExamples;
