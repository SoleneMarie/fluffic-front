type SectionTitleProps = {
  titleText: string;
};

const SectionTitle = ({ titleText }: SectionTitleProps) => {
  return (
    <h2 className="text-secondary-very-dark text-base md:text-lg font-semibold">
      {titleText}
    </h2>
  );
};

export default SectionTitle;
