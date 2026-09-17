import FlufficButton from "@/components/buttons/FlufficButton";
import SectionTitle from "@/components/titles/SectionTitle";
import PawIcon from "@/components/icons/PawIcon";
import ContactIcon from "@/components/icons/ContactIcon";
import FavoriteButton from "@/components/buttons/FavoriteButton";

const ButtonExamples = () => {
  return (
    <section className="flex flex-col gap-6">
      <SectionTitle>Boutons primaires</SectionTitle>
      <div className="flex flex-wrap gap-6 items-center">
        <FlufficButton>Créer mon profil</FlufficButton>
        <FlufficButton icon={<ContactIcon />}>Contacter</FlufficButton>
        <FlufficButton disabled>Créer mon profil</FlufficButton>
      </div>
      <SectionTitle>Boutons secondaires</SectionTitle>
      <div className="flex flex-wrap gap-6 items-baseline">
        <FlufficButton variant="secondary">Connexion</FlufficButton>
        <FlufficButton variant="secondary" disabled>
          Connexion
        </FlufficButton>
        <FlufficButton variant="secondary" size="small">
          Détails
        </FlufficButton>
      </div>
      <SectionTitle>Boutons tertiaires</SectionTitle>
      <div className="flex flex-wrap gap-6">
        <FlufficButton variant="tertiary">Mentions légales</FlufficButton>
        <FlufficButton variant="tertiary" disabled>
          Mentions légales
        </FlufficButton>
      </div>
      <SectionTitle>Boutons d&apos;alerte</SectionTitle>
      <div className="flex flex-wrap gap-6">
        <FlufficButton variant="alert">Supprimer le compte</FlufficButton>
        <FlufficButton variant="alert" disabled>
          Supprimer le compte
        </FlufficButton>
      </div>
      <SectionTitle>Boutons XL</SectionTitle>
      <div className="flex flex-wrap gap-6">
        <FlufficButton size="large">Répondre au questionnaire</FlufficButton>
        <FlufficButton size="large" variant="secondary">
          Espace professionnel
        </FlufficButton>
        <FlufficButton size="large" icon={<PawIcon />}>
          Rencontrer les animaux
        </FlufficButton>
      </div>
      <div>
        <SectionTitle className="mb-6">Boutons favoris</SectionTitle>
        <div className="bg-success h-20 w-50 flex flex-wrap gap-6 justify-center items-center rounded-xl">
          <FavoriteButton />
          <FavoriteButton selected />
        </div>
      </div>
    </section>
  );
};

export default ButtonExamples;
