import CloseIcon from "@/components/icons/CloseIcon";

type CloseButtonProps = {
  onClose: () => void;
};

const CloseButton = ({ onClose }: CloseButtonProps) => {
  return (
    <div className="w-full flex justify-end items-center">
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer le menu"
        className="relative text-secondary-dark pt-4 pr-2 after:content-[''] after:absolute after:-inset-2"
      >
        <CloseIcon className="w-5 h-5 md:w-7 md:h-7" />
      </button>
    </div>
  );
};

export default CloseButton;
