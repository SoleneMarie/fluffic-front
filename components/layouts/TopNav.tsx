import type { TUser } from "@/types/user";

import FavoritesButton from "../buttons/navButtons/FavoritesButton";
import MenuButton from "../buttons/navButtons/MenuButton";
import ProfileButton from "../buttons/navButtons/ProfileButton";
import FlufficTitle from "../titles/FlufficTitle";

type TopNavProps = {
  user?: TUser;
  onMenuClick: () => void;
  isMenuOpen: boolean;
};

const TopNav = ({ user, onMenuClick, isMenuOpen = false }: TopNavProps) => {
  const userId = user?.id;
  const username = user?.username;
  const avatarUrl = user?.avatarUrl;
  const favoritesCount =
    (user?.favorites.pets.length ?? 0) + (user?.favorites.shelters.length ?? 0);

  return (
    <div className="w-full flex justify-between items-center">
      <FlufficTitle link="/" />
      <nav className="flex gap-5 md:gap-8 items-center mt-2 md:mt-3">
        <ProfileButton
          userId={userId}
          username={username}
          avatarUrl={avatarUrl}
        />
        <FavoritesButton favoritesCount={favoritesCount} />
        <MenuButton onClick={onMenuClick} isOpen={isMenuOpen} />
      </nav>
    </div>
  );
};

export default TopNav;
