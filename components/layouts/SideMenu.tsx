import { usePathname } from "next/navigation";

import CloseButton from "../buttons/navButtons/CloseButton";
import ContactIcon from "../icons/ContactIcon";
import DocumentIcon from "../icons/DocumentIcon";
import HeartIcon from "../icons/HeartIcon";
import HouseIcon from "../icons/HouseIcon";
import LoginIcon from "../icons/LoginIcon";
import LogoutIcon from "../icons/LogoutIcon";
import PawIcon from "../icons/PawIcon";
import PrivacyIcon from "../icons/PrivacyIcon";
import SignUpIcon from "../icons/SignUpIcon";
import UserIcon from "../icons/UserIcon";
import SideMenuNavOption from "./SideMenuNavOption";

type SideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  userId?: string;
};

const optionTitleStyle =
  "font-medium text-tertiary/80 ml-1 mt-4 mb-2 text-sm sm:text-base md:text-lg";

const separatorStyle = "border-t border-separator my-2";

const SideMenu = ({ isOpen, onClose, userId }: SideMenuProps) => {
  const pathname = usePathname();

  if (!isOpen) {
    return null;
  }

  const isAnimalsActive = pathname.startsWith("/animals");
  const isSheltersActive = pathname.startsWith("/shelters");
  const isProfileActive = pathname.startsWith("/profile");
  const isFavoritesActive = pathname.startsWith("/favorites");
  const isContactActive = pathname === "/contact";
  const isLegalNoticeActive = pathname === "/legal-notice";
  const isPrivacyPolicyActive = pathname === "/privacy-policy";

  const isLoggedIn = Boolean(userId);

  const handleLogout = async () => {
    console.log("Déconnexion de l'utilisateur");
  };

  return (
    <div
      data-testid="side-menu-backdrop"
      className="bg-secondary-very-dark/90 fixed inset-0"
      onClick={onClose}
    >
      <div
        data-testid="side-menu-panel"
        className="w-60 sm:w-80 md:w-90 bg-background fixed top-0 right-0 h-full px-3"
        onClick={(event) => event.stopPropagation()}
      >
        <CloseButton onClose={onClose} />

        <nav aria-label="Navigation principale">
          <section>
            <h2 className={optionTitleStyle}>Découvrir</h2>

            <ul>
              <SideMenuNavOption
                label="Animaux"
                href="/animals"
                isActive={isAnimalsActive}
                icon={
                  <PawIcon
                    className="h-6 w-6 md:w-7 md:h-7 ml-0.5"
                    strokeWidth={6.5}
                  />
                }
              />

              <SideMenuNavOption
                label="Refuges et associations"
                href="/shelters"
                isActive={isSheltersActive}
                icon={
                  <HouseIcon
                    className="w-7 h-7 md:w-8 md:h-8"
                    strokeWidth={1.75}
                  />
                }
              />
            </ul>
          </section>

          <hr className={separatorStyle} />

          <section>
            <h2 className={optionTitleStyle}>Mon espace personnel</h2>

            <ul>
              <SideMenuNavOption
                label="Mon profil"
                href={isLoggedIn ? "/profile" : "/login?mode=login"}
                isActive={isProfileActive}
                icon={
                  <UserIcon
                    className="w-5.5 h-5.5 md:w-6.5 md:h-6.5 -translate-y-0.75 md:-translate-y-1"
                    strokeWidth={2.5}
                  />
                }
              />

              <SideMenuNavOption
                label="Mes coups de cœur"
                href="/favorites"
                isActive={isFavoritesActive}
                icon={
                  <HeartIcon
                    className="w-5 h-5 ml-1.5 md:w-6 md:h-6"
                    strokeWidth={2.5}
                  />
                }
              />
            </ul>
          </section>

          <hr className={separatorStyle} />

          <section>
            <h2 className={optionTitleStyle}>Session</h2>

            <ul>
              {!isLoggedIn ? (
                <>
                  <SideMenuNavOption
                    label="Me connecter"
                    href="/login?mode=login"
                    icon={
                      <LoginIcon
                        className="w-6 h-6 md:w-7 md:h-7 ml-0.5 -translate-y-px"
                        strokeWidth={2}
                      />
                    }
                  />

                  <SideMenuNavOption
                    label="Créer un compte"
                    href="/login?mode=signup"
                    icon={
                      <SignUpIcon
                        className="w-6 h-6 md:w-7 md:h-7 ml-0.5 -translate-y-px"
                        strokeWidth={2}
                      />
                    }
                  />
                </>
              ) : (
                <SideMenuNavOption
                  label="Me déconnecter"
                  isAlert
                  icon={
                    <LogoutIcon
                      className="w-6 h-6 md:w-7 md:h-7 ml-0.5 -translate-y-px"
                      strokeWidth={2}
                    />
                  }
                  onClick={handleLogout}
                />
              )}
            </ul>
          </section>

          <hr className={separatorStyle} />

          <section>
            <h2 className={optionTitleStyle}>Informations</h2>

            <ul>
              <SideMenuNavOption
                label="Contact"
                href="/contact"
                isActive={isContactActive}
                icon={
                  <ContactIcon
                    className="w-6 h-6 md:w-7 md:h-7 ml-0.5 translate-y-px"
                    strokeWidth={2}
                  />
                }
              />

              <SideMenuNavOption
                label="Mentions légales"
                href="/legal-notice"
                isActive={isLegalNoticeActive}
                icon={
                  <DocumentIcon
                    className="w-6 h-6 md:w-7 md:h-7"
                    strokeWidth={2}
                  />
                }
              />

              <SideMenuNavOption
                label="Politique de confidentialité"
                href="/privacy-policy"
                isActive={isPrivacyPolicyActive}
                icon={
                  <PrivacyIcon
                    className="w-5.5 h-5.5 md:w-6.5 md:h-6.5 ml-0.5"
                    strokeWidth={2}
                  />
                }
              />
            </ul>
          </section>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
