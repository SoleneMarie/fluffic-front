import { ReactNode } from "react";

type ChipTagProps = {
  children: ReactNode;
  variant?: "trait" | "compatible" | "incompatible";
  size?: "medium" | "small";
  className?: string;
};

const ChipTag = ({
  children,
  variant = "trait",
  size = "medium",
  className,
}: ChipTagProps) => {
  const bgColor =
    variant === "trait"
      ? "bg-tertiary/60"
      : variant === "compatible"
        ? "bg-compatibility"
        : "bg-alert";

  const chipSize =
    size === "medium"
      ? "py-0.75 px-3 text-[11px]"
      : "py-0.25 px-2.5 text-[10px]";

  return (
    <span
      className={`text-primary-contrast rounded-3xl ${bgColor} ${chipSize} ${className || ""}`}
    >
      {children}
    </span>
  );
};

export default ChipTag;
