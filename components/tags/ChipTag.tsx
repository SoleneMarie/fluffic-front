import { ReactNode } from "react";

type ChipTagProps = {
  children: ReactNode;
  variant?: "trait" | "compatible" | "incompatible";
  size?: "medium" | "small";
  className?: string;
};

const variantConfig = {
  trait: "bg-tertiary/60",
  compatible: "bg-compatibility",
  incompatible: "bg-alert",
};

const sizeConfig = {
  medium: "py-0.75 px-3 text-[11px]",
  small: "py-0.25 px-2.5 text-[10px]",
};

const ChipTag = ({
  children,
  variant = "trait",
  size = "medium",
  className,
}: ChipTagProps) => {
  return (
    <span
      className={`
        rounded-3xl text-primary-contrast
        ${variantConfig[variant]}
        ${sizeConfig[size]}
        ${className ?? ""}
      `}
    >
      {children}
    </span>
  );
};

export default ChipTag;
