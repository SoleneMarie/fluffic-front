import ChipTag from "@/components/tags/ChipTag";

const TagsExamples = () => {
  return (
    <div className="flex flex-wrap gap-6 items-center">
      <ChipTag>dynamique</ChipTag>

      <ChipTag variant="compatible" size="small">
        chiens
      </ChipTag>

      <ChipTag variant="incompatible" size="small">
        chats
      </ChipTag>
    </div>
  );
};

export default TagsExamples;
