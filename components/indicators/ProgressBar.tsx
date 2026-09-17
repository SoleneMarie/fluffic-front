type ProgressBarProps = {
  value: number;
  size?: "small" | "medium";
  color?: "compatibility" | "tertiary" | "quaternary";
  className?: string;
};

const sizeConfig = {
  small: "h-3.25 rounded-sm",
  medium: "h-4.5 rounded-md",
};

const colorConfig = {
  compatibility: {
    fill: "bg-compatibility",
    track: "bg-compatibility/30",
  },
  tertiary: {
    fill: "bg-tertiary",
    track: "bg-tertiary/30",
  },
  quaternary: {
    fill: "bg-quaternary-shadow",
    track: "bg-quaternary-shadow/30",
  },
};

const ProgressBar = ({
  value,
  size = "medium",
  color = "compatibility",
  className,
}: ProgressBarProps) => {
  const normalizedValue = Math.min(100, Math.max(0, value));
  const colors = colorConfig[color];

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={normalizedValue}
      className={`w-full overflow-hidden ${sizeConfig[size]} ${colors.track} ${className || ""}`}
    >
      <div
        className={`h-full  ${colors.fill} ${sizeConfig[size]}`}
        style={{ width: `${normalizedValue}%` }}
      />
    </div>
  );
};

export default ProgressBar;
