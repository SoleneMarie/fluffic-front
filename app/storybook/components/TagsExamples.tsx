import ChipTag from "@/components/tags/ChipTag";
import SectionTitle from "@/components/titles/SectionTitle";

const TagsExamples = () => {
  return (
    <div className="flex flex-col justify-content gap-4">
      <SectionTitle>Badges pastilles </SectionTitle>
      <div className="flex flex-wrap gap-6 items-center">
        <ChipTag>dynamique</ChipTag>

        <ChipTag variant="compatible" size="small">
          chiens
        </ChipTag>

        <ChipTag variant="incompatible" size="small">
          chats
        </ChipTag>
      </div>
    </div>
  );
};

export default TagsExamples;
