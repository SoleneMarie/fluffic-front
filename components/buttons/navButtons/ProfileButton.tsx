import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import UserIcon from "../../icons/UserIcon";

type ProfileButtonProps = {
  userId?: string;
  username?: string;
  avatarUrl?: string;
};

const ProfileButton = ({ userId, username, avatarUrl }: ProfileButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = pathname.startsWith("/profile");
  const firstLetter = username?.charAt(0).toUpperCase() || "";

  const handleClick = () => {
    if (!userId) {
      router.push("/login");
      return;
    }

    router.push(`/profile/${userId}`);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="profile-button"
      aria-current={isActive ? "page" : undefined}
    >
      <div
        className={`flex items-center mb-0.5 ${isActive ? "gap-3" : "gap-2"}`}
      >
        {!userId ? (
          <UserIcon
            className="relative h-6 w-6 text-tertiary-dark"
            strokeWidth={2.5}
          />
        ) : avatarUrl ? (
          <Image
            src={avatarUrl}
            alt={`Avatar de ${username}`}
            width={40}
            height={40}
            className={`
              h-7 w-7 rounded-full object-cover
              ${
                isActive
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                  : "shadow-sm"
              }
            `}
          />
        ) : (
          <>
            <div
              className={`
            flex h-7 w-7 items-center justify-center rounded-full bg-tertiary-dark
            ${isActive ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}
          `}
            >
              <span className="mt-1.5 font-handwritten font-normal text-xl text-primary-contrast ">
                {firstLetter}
              </span>
            </div>
          </>
        )}
        <span
          className={`hidden md:inline mt-2  ${isActive ? "text-primary font-semibold" : "text-tertiary-dark font-medium"}`}
        >
          {!userId ? "Se connecter" : "Mon profil"}
        </span>
      </div>
    </button>
  );
};

export default ProfileButton;
