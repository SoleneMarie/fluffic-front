import MenuIcon from "../../icons/MenuIcon";

type MenuButtonProps = {
  onClick: () => void;
  isOpen: boolean;
};

const MenuButton = ({ onClick, isOpen = false }: MenuButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="menu-button"
      aria-expanded={isOpen}
    >
      <div className="flex items-center gap-2">
        <MenuIcon
          className={`h-6 w-6 ${
            isOpen ? "text-primary" : "text-tertiary-dark"
          }`}
        />

        <span
          className={`hidden md:inline mt-1 ${
            isOpen
              ? "font-semibold text-primary"
              : "font-medium text-tertiary-dark"
          }`}
        >
          Menu
        </span>
      </div>
    </button>
  );
};

export default MenuButton;
