type DotButtonProps = {
  isActive: boolean;
  onClick: () => void;
  ariaLabel: string;
};

const DotButton = ({ isActive, onClick, ariaLabel }: DotButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-current={isActive ? "true" : undefined}
      className={`
        relative
        w-2.5 h-2.5
        rounded-full
        border-[0.3px] border-primary-contrast
        cursor-pointer
        after:absolute
        after:-inset-y-3
        after:-inset-x-1.5
        ${isActive ? "bg-primary-light" : "bg-secondary-very-light/70"}
      `}
    />
  );
};

export default DotButton;
