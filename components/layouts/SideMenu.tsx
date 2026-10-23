type SideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  console.log("Side menu");

  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <p>Side Menu</p>
    </div>
  );
};

export default SideMenu;
