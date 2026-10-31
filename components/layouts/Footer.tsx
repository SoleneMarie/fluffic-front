import FlufficLink from "../buttons/navButtons/FlufficLink";
import PawIcon from "../icons/PawIcon";

type TFooterNavItem = {
  label: string;
  redirection: string;
};

const Footer = () => {
  console.log("in footers");

  const footerNavItems: TFooterNavItem[] = [
    { label: "Mentions légales", redirection: "/legal-notice" },
    { label: "Politique de confidentialité", redirection: "/privacy-policy" },
    { label: "Contact", redirection: "/contact" },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center w-full justify-between gap-2 pt-4 mt-6 border-separator border-t">
      <div className="hidden sm:flex w-60 items-center text-primary font-semibold">
        <PawIcon
          strokeWidth={6}
          className="text-primary h-8 w-8 mr-2 -translate-y-0.5"
        />

        <p className=" text-[18px]">© {new Date().getFullYear()} Fluffic</p>
      </div>

      <nav
        aria-label="Navigation secondaire"
        className="flex w-full justify-evenly max-w-100"
      >
        {footerNavItems.map((item) => (
          <FlufficLink key={item.label} href={item.redirection}>
            {item.label}
          </FlufficLink>
        ))}
      </nav>
      <div className="flex items-center text-primary font-semibold sm:hidden">
        <PawIcon
          strokeWidth={3}
          className="text-primary h-7 w-7 -translate-y-0.5 mr-2"
        />

        <p className=" text-[14px]">© {new Date().getFullYear()} Fluffic</p>
      </div>
    </div>
  );
};

export default Footer;
