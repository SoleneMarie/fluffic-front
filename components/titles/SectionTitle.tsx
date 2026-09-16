import { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
};

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="text-secondary-very-dark text-base md:text-xl font-semibold">
      {children}
    </h2>
  );
};

export default SectionTitle;
