import { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
};

const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h2
      className={`text-secondary-very-dark text-base md:text-xl font-semibold ${className || ""}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
